const express = require("express");
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')

bountyRouter.route("/")
    // read all (get)
    .get((req, res, next) => {
        Bounty.find((err, data) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(data)
        })
    }) 
    // create one (post)
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
        })
    })

bountyRouter.route("/:bountiesId")
    .get((req, res, next) => {
        Bounty.findOne({ _id: req.params.bountiesId}, (err, data) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(data)
        })
    })

    .delete((req, res, next) => {
        Bounty.findOneAndDelete({ _id: req.params.bountiesId}, (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Succcessfully Deleted ${deletedItem.firstName} ${deletedItem.lastName} from the database`)
        })
    })

    .put((req, res, next) => {
        Bounty.findOneAndUpdate(
            { _id: req.params.bountiesId }, // find this one to update
            req.body, // update the object with this data
            { new: true }, // send back the updated version
            (err, updatedBounty) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBounty)
            }
        )
    })

module.exports = bountyRouter