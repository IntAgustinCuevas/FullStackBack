const mongoose = require('mongoose');
const Character = require('../Models/characters');

const createCharacter = async (name) => {
    let existCharacter = await Character.findOne({name: name});

    if(existCharacter){
        console.log('El nombre de Character ya esta en uso.');
    }
    if(!existCharacter){
        const character = new Character({
            name: name
        });
        let charac = await character.save();
        console.log('Character creado correctamente.' , charac);
        return {charac};
    }else{
        return false;
    }
};

const getCharacters = async (limit,offset) => {
    const characters = await Character.find({}).limit(limit).skip(offset);
    
    return characters;
}

module.exports = { createCharacter , getCharacters }