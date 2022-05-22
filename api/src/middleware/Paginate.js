const { Pokemon, Type, Ability } = require('../db');

async function getPaginate(currentPage){
    if(currentPage >= 0 ){
        const limit = 12;
        const endNumber = currentPage * limit;
        const offset = endNumber - limit;
        const pokemons = await Pokemon.findAll({
            limit,
            offset,
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
                },]
        })
        const count = await pokemons.length;
        return pokemons.length ? {msg: 'Paginate loaded sucesfully', count: count, data: pokemons} : {msg: 'No exist'}
    }else{
        return {msg: 'Current Page required'}
    }
}

module.exports = {
    getPaginate,
}