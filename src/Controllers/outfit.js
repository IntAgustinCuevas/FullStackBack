const mongoose = require('mongoose');
const Outfit = require('../Models/outfits');
const Jacket = require('../Models/jackets');

//Obtener outfits-------------------
const getOutfits = async (limit,offset) => {
    const outfits = await Outfit.find({}).limit(limit).skip(offset);
    
    return outfits;
}

//Crear outfit
const createOutfit = async (jacket) => {
    const outfit = new Outfit(
        {
            jacket: jacket
        }
    );

    try{
        let outf = await outfit.save();
        console.log(outf);
        console.log('outfit creado correctamente.' , outf);
        return { outf };
    }catch(error){
        console.error('Error' , error);
        throw error;
    }
} 


//Obtener Partes de arriba 
const getJackets = async (limit,offset) => {
    const jackets = await Jacket.find({}).limit(limit).skip(offset);
    
    return jackets;
}

module.exports = { getOutfits , createOutfit , getJackets }