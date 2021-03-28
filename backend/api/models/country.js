const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, Required: true },
    image: { data: Buffer, contentType: String, Required: true }
});

module.exports = mongoose.model('Country', countrySchema);