const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({

    email:{
		type: String,
		required: true,
		index: {unique: true, dropDups: true}
	},

    name:{
        type: String,
        required: true,
    },

    token:{
        type: String,
        required: true,
        index: {unique: true, dropDups: true}
    },

    password:{
        type: String,
        required: true,
    }
}, { timestamps: true } ).set('toJSON',{
    
    transform: (document, object) => {
        object.id = document.id;
        delete object._id;
        delete object.password;
    }
});

const User = mongoose.model('User' , UserSchema);

module.exports = User;
