const { Pokemon, Type, Ability } = require('../db');
const { Op } = require('sequelize');

async function FilterPokemonsBy(stat, number1, number2, type, ability, state, order){
    /**---------------------------------State && type---------------------------------------------- */
    if(state && type){
        if(state === 'created' && type){
            const filterPokemons = await Pokemon.findAll({
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
                        },
                        where: {
                            name: {
                                [Op.iLike]: `%${type}%`
                            }
                        }
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
        else if(state === 'all' && type){
            const filterPokemons = await Pokemon.findAll({
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
                        },
                        where: {
                            name: {
                                [Op.iLike]: `%${type}%`
                            }
                        }
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
    }
    /**----------------------------------state && stats--------------------------------- */
    if(state && stat){
        if(state === 'created' && stat && number1 && number2){
            const filterPokemons = await Pokemon.findAll({
                where:{
                    [Op.and]:{
                        created: true,
                        [stat]:{
                            [Op.between]:[
                                number1 < number2 ? number1 : number2,
                                number1 < number2 ? number2 : number1
                            ]
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
                        },
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
        else if(state === 'created' && stat && number1 ){
            const filterPokemons = await Pokemon.findAll({
                where:{
                    [Op.and]:{
                        created: true,
                        [stat]:{
                            [Op.gt]:  number1,
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
                        },
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
        else if(state === 'created' && stat && number2 ){
            const filterPokemons = await Pokemon.findAll({
                where:{
                    [Op.and]:{
                        created: true,
                        [stat]:{
                            [Op.lt]:  number2,
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
                        },
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
        if(state === 'all' && stat && number1 && number2){
            const filterPokemons = await Pokemon.findAll({
                where:{
                    [Op.and]:{
                        created: false,
                        [stat]:{
                            [Op.between]:[
                                number1 < number2 ? number1 : number2,
                                number1 < number2 ? number2 : number1
                            ]
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
                        },
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
        else if(state === 'all' && stat && number1 ){
            const filterPokemons = await Pokemon.findAll({
                where:{
                    [Op.and]:{
                        created: false,
                        [stat]:{
                            [Op.gt]:  number1,
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
                        },
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
        else if(state === 'all' && stat && number2 ){
            const filterPokemons = await Pokemon.findAll({
                where:{
                    [Op.and]:{
                        created: false,
                        [stat]:{
                            [Op.lt]:  number2,
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
                        },
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
        
    }
    /**--------------------------------------state && order ---------------------------------- */
    if(state && order){
        if(state === 'created' && order === 'A-Z'){
            const filterPokemons = await Pokemon.findAll({
                where:{
                    created: true
                },
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
                        },
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
        if(state === 'created' && order === 'Z-A'){
            const filterPokemons = await Pokemon.findAll({
                where:{
                    created: true
                },
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
                        },
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
        else if(state === 'all' && order === 'A-Z'){
            const filterPokemons = await Pokemon.findAll({
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
                        },
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
        else if(state === 'all' && order === 'Z-A'){
            const filterPokemons = await Pokemon.findAll({
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
                        },
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
    }
    /**--------------------------State && Ability-------------------------------------- */
    if(state && ability){
        if(state === 'created' && ability){
            const filterPokemons = await Pokemon.findAll({
                where:{
                    created: true
                },
                include:[
                    {
                        model: Ability,
                        attributes: ['name'],
                        through:{
                        attributes: []
                        },
                        where: {
                            name: {
                                [Op.iLike]: `%${ability}%`
                            }
                        }
                    },
                    {
                        model: Type,
                        attributes: ['name'],
                        through:{
                            attributes: []
                        },
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
        else if(state === 'all' && ability){
            const filterPokemons = await Pokemon.findAll({
                include:[
                    {
                        model: Ability,
                        attributes: ['name'],
                        through:{
                        attributes: []
                        },
                        where: {
                            name: {
                                [Op.iLike]: `%${ability}%`
                            }
                        }
                    },
                    {
                        model: Type,
                        attributes: ['name'],
                        through:{
                            attributes: []
                        },
                        
                    },
                ]
            })
            return filterPokemons.length ? {msg: 'Pokemons filtered successfuly', data: filterPokemons} : {msg: 'Not exist Pokemons'}
        }
    }
    /**------------------------------------------------------------------ */
    /**----------------------------Order-------------------------------------- */
    if(order){
        if(order === 'A-Z'){
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
    }
    /**------------------------------------------------------------------------------------ */
    /**-------------------------------------Stats----------------------------------------------- */
    if(stat && number1 && number2){
        const pokemons = await Pokemon.findAll({
            where:{
                [stat]:{
                    [Op.between]:[
                        number1 < number2 ? number1 : number2,
                        number1 < number2 ? number2 : number1
                    ]
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
                    [Op.gt]:  number1,
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
                    [Op.lt]:  number2,
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
    }
    /**----------------------------------------------------------------------------------------------- */
    /**----------------------------------------State------------------------------------------------------- */
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
    }else if(state === 'all' ){
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
    
    /**--------------------------------Types-------------------------------------- */
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

    /**------------------------------Abilityes----------------------------------- */
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
        return abilities.length ? {msg: 'Pokemons filtered successfuly', data: abilities} : {msg: 'Sorry, ability does not exist'};
    }
}

module.exports = {
    FilterPokemonsBy,
}