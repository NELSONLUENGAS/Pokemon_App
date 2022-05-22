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
async function getPokemonsType(type, order){
    if(type && order){
        if(order === 'ASC'){
            const pokemons = await Pokemon.findAll({
                order:[['name', 'ASC']],
                include:[
                    {
                        model: Type,
                        attributes: ['name'],
                        through:{
                        attributes: []
                        },
                        where:{
                            name:{
                                [Op.iLike]: `%${type}%`
                            }
                        }
                    },
                    {
                        model: Ability,
                        attributes: ['name'],
                        through:{
                        attributes: []
                        }
                    }
                ]
            })
            return pokemons.length ? {msg: 'types encountered successfuly', data: pokemons} : {msg: 'Sorry, type does not exist'};
        }else{
            const pokemons = await Pokemon.findAll({
                order:[['name', 'DESC']],
                include:[
                    {
                        model: Type,
                        attributes: ['name'],
                        through:{
                        attributes: []
                        },
                        where:{
                            name:{
                                [Op.iLike]: `%${type}%`
                            }
                        }
                    },
                    {
                        model: Ability,
                        attributes: ['name'],
                        through:{
                        attributes: []
                        }
                    }
                ]
            })
            return pokemons.length ? {msg: 'types encountered successfuly', data: pokemons} : {msg: 'Sorry, type does not exist'};
        }
    }
    if(type){
        const types = await Pokemon.findAll({
            include:[
                {
                    model: Type,
                    attributes: ['name'],
                    through:{
                    attributes: []
                    },
                    where:{
                        name:{
                            [Op.iLike]: `%${type}%`
                        }
                    },
                },
                {
                    model: Ability,
                    attributes: ['name'],
                    through:{
                    attributes: []
                    }
                },
            ]
        })
        return types.length ? {msg: 'types encountered successfuly', data: types} : {msg: 'Sorry, type does not exist'};
    }
    return {msg: 'type it is required'}
}
async function getPokemonsAbilities(ability, order){
    if(ability && order){
        if(order === 'ASC'){
            const pokemons = await Pokemon.findAll({
                order:[['name', 'ASC']],
                include:[
                    {
                        model: Ability,
                        attributes: ['name'],
                        through:{
                        attributes: []
                        },
                        where:{
                            name:{
                                [Op.iLike]: `%${ability}%`
                            }
                        }
                    },
                    {
                        model: Type,
                        attributes: ['name'],
                        through:{
                        attributes: []
                        }
                    }
                ]
            })
            return pokemons.length ? {msg: 'Abilities encountered successfuly', data: pokemons} : {msg: 'Sorry, ability does not exist'};
        }else{
            const pokemons = await Pokemon.findAll({
                order:[['name', 'DESC']],
                include:[
                    {
                        model: Ability,
                        attributes: ['name'],
                        through:{
                        attributes: []
                        },
                        where:{
                            name:{
                                [Op.iLike]: `%${ability}%`
                            }
                        }
                    },
                    {
                        model: Type,
                        attributes: ['name'],
                        through:{
                        attributes: []
                        }
                    }
                ]
            })
            return pokemons.length ? {msg: 'Ability encountered successfuly', data: pokemons} : {msg: 'Sorry, avility does not exist'};
        }
    }
    if(ability){
        const abilities = await Pokemon.findAll({
            include:[
                {
                    model: Ability,
                    attributes: ['name'],
                    through:{
                    attributes: []
                    },
                    where:{
                        name:{
                            [Op.iLike]: `%${ability}%`
                        }
                    },
                },
                {
                    model: Type,
                    attributes: ['name'],
                    through:{
                    attributes: []
                    }
                }
            ]
        })
        return abilities.length ? {msg: 'abilities encountered successfuly', data: abilities} : {msg: 'Sorry, ability does not exist'};
    }
    return {msg: 'Ability it is required'}
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

async function getPokemonsState(state){

    if(state === 'created'){
        const pokemons = await Pokemon.findAll({
            where:{
                created: true
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
        return pokemons.length ? {msg: 'Created pokemons loaded successfuly!!', data: pokemons} : {msg: 'Not exist pokemons created'};
    }else{
        const pokemons = await Pokemon.findAll({
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
        return pokemons.length && {msg: 'All pokemons loaded successfuly!!', data: pokemons};
    }
}

async function filterPokemonsByStats(stat, number1, number2){
    if(stat && number1 && number2){
        const pokemons = await Pokemon.findAll({
            where:{
                [stat]:{
                    [Op.and]:{
                        [Op.lte]:  number1 < number2 ? number1 : number2,
                        [Op.gte]: number1 < number2 ? number2 : number1
                    }
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
        return pokemons.length ? {msg: 'Filter stats successfuly', data: pokemons} : {msg: 'Not exist Pokemons with these stats'}
    }
    if(stat && number1 ){
        const pokemons = await Pokemon.findAll({
            where:{
                [stat]:{
                    [Op.lt]:  number1,
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
        return pokemons.length ? {msg: 'Filter less-than successfuly', data: pokemons} : {msg: 'Not exist Pokemons with these stats'}
    }
    if(stat && number2 ){
        const pokemons = await Pokemon.findAll({
            where:{
                [stat]:{
                    [Op.gt]:  number2,
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
        return pokemons.length ? {msg: 'Filter gretaer-than successfuly', data: pokemons} : {msg: 'Not exist Pokemons with these stats'}
    }else{
        return {msg: 'Stats required'}
    }
}

async function orderPokemonsBy(order){
    if(order){
        if(order == 'A-Z'){
            const orderPokemons = await Pokemon.findAll({
                order: [['name', 'ASC']],
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
            return orderPokemons.length ? {msg: 'Pokemons ordered A-Z successfuly', data: orderPokemons} : {msg: 'Not exist Pokemons'}
        }else{
            const orderPokemons = await Pokemon.findAll({
                order: [['name', 'DESC']],
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
            return orderPokemons.length ? {msg: 'Pokemons ordered Z-A successfuly', data: orderPokemons} : {msg: 'Not exist Pokemons'}
        }
    }else{
        return {msg: 'Type order is required'}
    }
}

module.exports = {
    getPokemonsName,
    getPokemonById,
    getPokemonsAbilities,
    getPokemonsType,
    getPokemonsState,
    filterPokemonsByStats,
    orderPokemonsBy,
}