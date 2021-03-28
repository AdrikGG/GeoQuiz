const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Country = require('../models/country');
const Countries = require('../models/countries');

router.get('/', (req, res, next) => {
    Country.find()
    .select("name image")
    .then(doc => {
        const response = {
            countries: doc
        }
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/country', checkAuth, (req, res, next) => {
    const country = new Country({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        image: req.body.image
    });
    country.save().then(() => {
        res.status(201).json({
            message: "Country added"
        });
    });
    // Countries.
});

module.exports = router;