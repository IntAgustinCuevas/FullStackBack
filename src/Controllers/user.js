const mongoose = require('mongoose');
const User = require('../Models/users');
const crypto = require('crypto');

const createUser = async (name, email, password) => {
    let existUser = await User.findOne({ email: email });
    
    if (existUser) {
        console.log('User already exist');
    }
    if (!existUser) {
        const tokenPass = crypto.randomBytes(16).toString('hex');
        const cryptoPass = crypto.createHash('sha256').update(password + tokenPass, 'utf-8').digest('hex');

        const usr = new User(
            {
                name: name,
                email: email,
                password: cryptoPass,
                token: tokenPass
            }
        );
        
        let user = await usr.save();
        console.log('New User add' , user);

        return {user};

    } else {
        return false;
    }
}

const getAllUsers = async (limit, offset) => { 
    const users = await User.find({}).limit(limit).skip(offset);

    return users;
};

const getUser = async (id) => {
    const user = await User.findById(id);

    return user;
}

const loginUser = async(email,password) => {
    let loginUser = await User.findOne({ email: email });
    //console.log({loginUser});
    if (loginUser) {
        const passwordCheck = crypto.createHash('sha256').update(password + loginUser.token).digest('hex');
        //console.log(passwordCheck);
        if (loginUser.password === passwordCheck) {
            console.log('Correct Password');
            return {loginUser};
        } else {
            throw new Error('Wrong password');
        }
    } else {
        throw new Error('User not exist');
    }
};



module.exports = { createUser , getAllUsers , getUser, loginUser}