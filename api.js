const express = require("express");
const app = express();
const db = require("./test/fakeDb");  // replace with real db
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/api/students", function(req,res){
    res.json( {"students": db.find()} );
});

app.post("/api/students", function(req,res){
    var student = req.body;
    var savedStudent = db.save(student);
    res.status(201).json( {"student": savedStudent} );
});

app.listen(3000, function(){
    db.reset();
    console.log("Started on PORT 3000...");
});

module.exports = app;