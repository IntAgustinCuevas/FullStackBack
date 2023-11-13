const mongoose = require('mongoose');
const Character = require('../Models/characters');

const createCharacter = async (userId,name,personaje,parteSuperior,pantalon,calzado) => {
    let existCharacter = await Character.findOne({name: name});

    if(existCharacter){
        console.log('El nombre de Character ya esta en uso.');
    }
    if(!existCharacter){
        //console.log('Comienzo a crear personaje');
        const cha = new Character(
            {
                userId: userId,
                name: name,
                personaje: personaje,
                parteSuperior: parteSuperior,
                pantalon: pantalon,
                calzado: calzado
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

const getUserCharacters = async (userId) => {
    const characters = await Character.find({userId}).limit(5).sort({createdAt: -1});
    
    return characters;
}

const getOneCharacter = async (name) => {
    const character = await Character.find({name});
    return character;
}

module.exports = { createCharacter , getUserCharacters , getOneCharacter }