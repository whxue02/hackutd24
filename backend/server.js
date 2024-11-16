const express = require("express")
const mongoose = require('mongoose');
const app = express()

app.get('/', (req,res) => {
    res.json({mssg: "welcome to hackutd"})
})

app.listen(4000, ()=> {
    console.log("listening on port 4000")
})