const express = require('express');
const users = require('./db.json');
const app = express();

const port = process.env.PORT || 3000;

app.get('/api/users', (req, res) => {
    res.json(users);
 });
 app.get('/api/users/:id', (req, res) => {

    res.json(users.find(user => user.id === Number(req.params.id)))
 
 })

app.get("/", (req, res) => { 
    res.send("Hello!!!");});

app.get("/Nuree", (req, res) => { 
    res.send("My name is Nuree");});

app.listen(port, () => {
    console.log("Starting node.js at http://127.0.0.1:"+ port);
    console.log("Starting node.js at http://127.0.0.1:"+ port + '/Nuree');
    console.log("Starting node.js at http://127.0.0.1:"+ port + '/api/users');


});
console.log('Server running at http://127.0.0.1:');