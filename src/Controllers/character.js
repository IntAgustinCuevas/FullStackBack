const mongoose = require('mongoose');
const Character = require('../Models/characters');

const createCharacter = async (name) => {
    let existCharacter = await Character.findOne({name: name});

    if(existCharacter){
        console.log('El nombre de Character ya esta en uso.');
    }
    if(!existCharacter){
        console.log('Comienzo a crear personaje');
        const cha = new Character(
            {
                name: name
            }
        );
        try{
            let charac = await cha.save();
            console.log(charac);
            console.log('Character creado correctamente.' , charac);
            return { charac };
        }catch(error){
            console.error('Error' , error);
            throw error;
        }
    }
};

const getCharacters = async (limit,offset) => {
    const characters = await Character.find({}).limit(limit).skip(offset);
    
    return characters;
}

module.exports = { createCharacter , getCharacters }