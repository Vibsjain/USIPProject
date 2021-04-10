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
            console.log("Data added successfully");
          });
      })
  })

  app.get("/get/all", (req, res) => {
    connection.query(`SELECT * FROM link`, function (error, results, fields) {
        if (error) throw error;
        console.log("results => ", results);
        res.send(results);
      });
  })

app.get("/getlink/:linkId", (req, res) => {
    res.send("To be continued...");
})

app.listen(5000, () => {
    console.log("Running on port 5000")
})