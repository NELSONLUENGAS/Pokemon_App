const axios = require('axios');
const { Pokemon, Type, Ability } = require('../db');
const { Op } = require('sequelize');


async function getPokemonsName(name){
    if(name){
        const names = await Pokemon.findAll({
            where:{
                name:{
                    [Op.iLike]: `%${name}%`
                }
            },
            include:[
                {
                    model: Ability,
                    attributes: ['name'],
                    through:{
                    attributes: []
                    }
                },
                {
                    model: Type,
                    attributes: ['name'],
                    through:{
                        attributes: []
                    }
                },
            ]
        })
        return names.length ? {msg: 'names encountered successfuly', data: names} : {msg: 'Sorry, name does not exist'};
    }
    return {msg: 'Name it is required'}
}

async function getPokemonById(id){
    if(id){
        const pokemon = await Pokemon.findByPk(id,{
            include:[
                {
                    model: Ability,
                    attributes: ['name'],
                    through:{
                    attributes: []
                    }
                },
                {
                    model: Type,
                    attributes: ['name'],
                    through:{
                        attributes: []
                    }
                },
            ]
        })
        return pokemon ? {msg: 'Pokemon encountred successfuly!!', data: pokemon} : {msg: 'Sorry, Id does not exist'};
    }
    return {msg: 'Id it is riquired'}
}

module.exports = {
    getPokemonsName,
    getPokemonById,
}