const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const characterSchema = new Schema({

    name:{
        type: String,
        required: true,
        index: {unique:true}
    },

    face:{
        type: String,
        required: false,
        index: {unique: true}
    },

    upperPart:{
        type: String,
        required: false,
        index: {unique:false}
    },

    bottom:{
        type: String,
        required: false,
        index: {unique:false}
    },

    shoes:{
        type: String,
        required: false,
        index: {unique:false}
    }

}, {timestamps: true});

const Character = mongoose.model('Character' , characterSchema);

module.exports = Character;