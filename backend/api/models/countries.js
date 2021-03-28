const mongoose = require('mongoose');

const country = require('./country').schema;

const countriesSchema = mongoose.Schema({
    countries: [{ type: country }]
});

module.exports = mongoose.model('Countries', countriesSchema);