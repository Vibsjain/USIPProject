const express = require("express");
const Link = require("./modules/Link");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

// MiddleWares
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())


mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Mongo Connected!!!')
}).catch(err => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.send("Hey, this is first route")
})

app.get("/all", (req, res) => {
    Link.find({}, function(err, links){
        var linkMap = {}
        if(err){
            res.send({
                error: "Cannot fetch links"
            })
        }else{
            links.forEach(link => {
                linkMap[link._id] = link
            })
            res.send(linkMap);
        }
    })
})

app.get("/getlink/:linkId", (req, res) => {
    res.send("To be continued...");
})

app.post("/add/link", (req, res) => {
    Link.create(
        {
            link: req.body.link,
            name: req.body.name,
            color: req.body.color,
            places: req.body.color
        },
        function(err, newLink){
            if(err){
                res.send("Unable to create Link");
            }else{
                res.send("New Link created");
            }
        }
    )
})

app.listen(5000, () => {
    console.log("Running on port 5000")
})