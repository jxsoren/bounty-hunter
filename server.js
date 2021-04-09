const express = require('express')
const morgan = require('morgan')
const mongoose = require("mongoose")
const app = express()

// middleware
app.use(express.json())
app.use(morgan('dev'))

// connect to DB
mongoose.connect('mongodb://localhost:27017/bounties_db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to bounties_db database")
)

// routes
app.use("/bounties", require("./routes/bountyRoutes"))

// server listen
app.listen(9002, () => {
    console.log('working')
})
