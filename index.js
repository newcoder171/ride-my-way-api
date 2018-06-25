const express = require('express');
//import express from 'express';
//import bodyParser from 'body-parser'
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())

require('./route/rides.routes.js')(app);

// Create a Server
const port = 8081;
app.listen(port, () => {
    console.log(`App listening at ${port}`)

})
