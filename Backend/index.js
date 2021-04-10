const express = require("express");
const Link = require("./modules/Link");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const mysql = require("mysql");
require("dotenv").config();

// MiddleWares
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hey, this is first route")
})

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '#Main2019',
    database : 'dtucms'
  });

  connection.connect();

  app.post("/add/link", (req, res) => {
      console.log(req.body);
      const name = req.body.name;
      const url = req.body.link;
      const places = req.body.places;
      const color = req.body.color;
      places.map(place => {
        connection.query(`INSERT INTO link (Name, url, Place, Color) VALUES ("${name}", "${url}", "${place}", "${color}")`, function (error, results, fields) {
            if (error) throw error;
            console.log("results => ", results);
            console.log("fields => ", fields);
            console.log("Data added successfully");
          });
      })
  })

  connection.query(`SELECT * FROM link`, function (error, results, fields) {
    if (error) throw error;
    console.log("results => ", results);
    // console.log("fields => ", fields);
  });

app.get("/all", (req, res) => {
    connection.query(`INSERT INTO link (Name, url, Place, Color) VALUES ("${name}", "${url}", "${place}", "${color}")`, function (error, results, fields) {
        if (error) throw error;
        console.log("results => ", results);
        console.log("fields => ", fields);
        console.log("Data added successfully");
      });
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