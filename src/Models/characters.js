const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Outfit = require('./outfits');
const characterSchema = new Schema({

    name:{
        type: String,
        required: true,
        index: {unique: true}
    },
    face:{
        type: String,
        required: false
    },
    outfit:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Outfit', 
        required: false
    },
    userID:{
        type: String,
        required: true
    }

}, {timestamps: true});

const Character = mongoose.model('Character' , characterSchema);

module.exports = Character;