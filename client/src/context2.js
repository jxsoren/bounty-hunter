import React, { useState, useEffect } from 'react'
import axios from 'axios'
const BountyContext2 = React.createContext()

const BountyContextProvider2 = (props) => {
    const [ bountyData, setBountyData ] = useState({
        firstName: "",
        lastName: "",
        living: true,
        type: "",
        bountyAmount: 0, 
        faction: "",
        selectedOption: ''
    })
    const [ bounties, setBounties ] = useState([])
    
    useEffect(() => {
        axios.get("/bounties")
            .then(res => {
                setBounties(res.data)
            }) 
            .catch(res => console.log(res))
    }, [])
   
    const handleChange = (e) => {
        const {name, value} = e.target
        setBountyData(prev => {
            console.log(name, value)
            return{
                 ...prev,
                [name]: value
            }
        })
    }

    const handleSelect = (e) => {
        setBountyData(prev => {
            console.log(e.target.value)
            return{
                ...prev,
                faction: e.target.value
            }
        })
    }

    const getBounties = () => {
        axios.get("/bounties")
            .then(res => {
                setBounties([res.data])
            }, console.log(bounties))
            .catch(res => console.log(res))
    }

    const addBounties = (newBounty) => {
        console.log(newBounty)
        axios.post("/bounties", newBounty)
            .then(res => {
                setBounties(prev => [...prev, res.data])
                console.log(res.data)
                }
            )
            .catch(err => console.log(err))
    }

    const onChangeValue = (e) => {
        setBountyData(prev => {
            console.log(e.target.value)
            return{
                ...prev,
                selectedOption: e.target.value
            }
        })
    }

    const handleDelete = (_id) => {
        axios.delete(`/bounties/${_id}`)
            .then(res => {
                setBounties(prevBounties => 
                     prevBounties.filter(bounty => bounty._id !== _id))
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newBounty = {
            firstName: bountyData.firstName,
            lastName: bountyData.lastName,
            living: bountyData.living,
            faction: bountyData.faction,
            bountyAmount: bountyData.bountyAmount,
        }

        addBounties(newBounty)
        console.log(newBounty)
    }

    const handleEdit = (updates, _id) => {
        axios.put(`/bounties/${_id}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== _id ? bounty : res.data))
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return(
      <BountyContext2.Provider value={
          {
              bountyData,
              bounties,
              handleSubmit,
              handleChange,
              onChangeValue,
              handleSelect,
              handleDelete,
              getBounties,
              handleEdit,
              addBounties
          }   
        }>
          {props.children}
      </BountyContext2.Provider>  
    )
}

export {BountyContextProvider2, BountyContext2}