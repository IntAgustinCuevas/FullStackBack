const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const outfitSchema = new Schema({
    
    jacket:{
        type: String,
        required: true
    },

    pants:{
        type: String,
        required: false
    },

    shoes:{
        type: String,
        required: false
    },
});

const Outfit = mongoose.model('Outfit' , outfitSchema ,);

module.exports = Outfit;