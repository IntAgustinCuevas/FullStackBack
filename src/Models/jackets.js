const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jacketSchema = new Schema({
    jacketURL:{
        type: String,
        required: true
    }
    })

const Jacket = mongoose.model('Jacket', jacketSchema ,);

module.exports = Jacket;