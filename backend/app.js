const express = require('express');
const app = express();
const mongoose = require('mongoose');

const shapesRoutes = require('./api/routes/shapes');
const heatRoutes = require('./api/routes/heat');
const homeRoute = require('./api/routes/home');
require("dotenv").config();

mongoose.connect(
    process.env.DATABASE,
    {
        dbName: "test",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

mongoose.connection.on("error", (err) => {
    console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
    console.log("MongoDB Connected");
});

app.use('/', express.static('./frontend/build'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELTE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/shapes', shapesRoutes);
app.use('/heat', heatRoutes);
app.use('/', homeRoute);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;