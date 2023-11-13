const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const characterSchema = new Schema({
    
    userId:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required: true,
        index: {unique:true}
    },
    personaje:{
        type: String,
        required: true
    },
    parteSuperior:{
        type: String,
        required: true
    },
    pantalon:{
        type: String,
        required: true
    },
    calzado:{
        type: String,
        required: true
    }

}, {timestamps: true});

const Character = mongoose.model('Character' , characterSchema);

module.exports = Character;