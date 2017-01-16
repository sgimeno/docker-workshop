const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
    name: { type: String }
});

module.exports = mongoose.model('Beer', beerSchema);
