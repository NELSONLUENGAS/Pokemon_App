const axios = require('axios');
const { Pokemon, Type, Ability } = require('../db');
const { Op } = require('sequelize');

async function getPokemons(){
    
    const pokemonReq = await axios('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
    const {results} = pokemonReq.data;
    const pokemonUrl = results.map( el => axios(el.url));
    const pokemonData = await axios.all(pokemonUrl);
    const pokemonRes = pokemonData.map( el => el.data);


    const Pokemons = pokemonRes.map(e =>{
        return {
            name: e.name,
            image: e.sprites.other.home.front_default,
            type: e.types.map(el => el.type.name),
            ability: e.abilities.map(el => el.ability.name),
            hp: e.stats.find(e => e.stat.name === 'hp').base_stat,
            attack: e.stats.find(e => e.stat.name === 'attack').base_stat,
            specialAttack: e.stats.find(e => e.stat.name === 'special-attack').base_stat,
            defense: e.stats.find(e => e.stat.name === 'defense').base_stat,
            specialDefense: e.stats.find(e => e.stat.name === 'special-defense').base_stat,
            speed: e.stats.find(e => e.stat.name === 'speed').base_stat,
            height: e.height,
            weight: e.weight,
        }
    })


    for(element of Pokemons){
        const { name, image, type, ability, hp, attack, specialAttack, defense, specialDefense, speed, height, weight} = element;
        
        const [newPokemon, created] = await Pokemon.findOrCreate({
            where:{
                name,
                image,
                hp, 
                attack, 
                specialAttack, 
                defense, 
                specialDefense, 
                speed, 
                height, 
                weight
            }
        })
        for(element of type){
            const res = await Type.findAll({
                where:{
                    name: element
                }
            })
            await newPokemon.addType(res);
        }

        for(element of ability){
            const res = await Ability.findAll({
                where:{
                    name: element
                }
            })
            await newPokemon.addAbility(res);
        }
    }
    const data = await Pokemon.findAll({
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


    return data ? {msg: 'Pokemons Loaded successfuly!!', data: data} : {msg: 'Sorry has been an error'};
}

async function postNewPokemon(name, image, type, ability, hp, attack, specialAttack, defense, specialDefense, speed, height, weight, created){
    
    if(name, image, type, ability, hp, attack, specialAttack, defense, specialDefense, speed, height, weight, created){

        const [newPokemon, creating] = await Pokemon.findOrCreate({
            where:{
                name,
                image,
                hp, 
                attack, 
                specialAttack, 
                defense, 
                specialDefense, 
                speed, 
                height, 
                weight,
                created
            },
        })

        for(element of type){
            const res = await Type.findAll({
                where:{
                    name: element
                }
            })
            await newPokemon.addType(res);
        }

        for(element of ability){
            const res = await Ability.findAll({
                where:{
                    name: element
                }
            })
            await newPokemon.addAbility(res);
        }

const data = await Pokemon.findOne({
    where:{name},
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

        return creating ? {msg: 'Pokemon create successfuly!!', data: data} : {msg: 'Pokemon existing'};
    }
    return {msg: 'Incorrect data'};
}

async function deletePokemon(id){
    let pokemon = await Pokemon.findOne({
        where:{
            [Op.and]:{
                id,
                created: true
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
    });
    return id && await Pokemon.count()
    ?
        pokemon
        ?
            await Pokemon.destroy({
                where:{
                    id
                }
            })
            && {msg: 'Pokemon delete successfuly', data: pokemon}
        :
            {msg: 'Pokemon id does not exist'}
    :
        {msg: 'Database is empty'}
}

async function updatePokemon(id, name, image, type, ability, hp, attack, specialAttack, defense, specialDefense, speed, height, weight){
    const [currPokemon] = await Pokemon.update({
        name, 
        image, 
        hp, 
        attack, 
        specialAttack, 
        defense, 
        specialDefense, 
        speed, 
        height, 
        weight
    },{
        where:{
            id
        }
    })
    
    const update = await Pokemon.findByPk(id);

    if(update){
        let elem1 = []
        let elem2 = []
            for(element of type){
                const el = await Type.findOne({
                    where:{
                        name: element.name
                    }
                })
                elem1.push(el.id)
            }
            await update.setTypes(elem1)

            for(element of ability){
                const el = await Ability.findOne({
                    where:{
                        name: element.name
                    }
                })
                elem2.push(el.id)
            }
            await update.setAbilities(elem2)

            const current = await Pokemon.findByPk(id, {
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
        return {msg: currPokemon, data: current}
    }
    return {msg: 'Sorry id does not exist'}
}
module.exports = {
    getPokemons,
    postNewPokemon,
    deletePokemon,
    updatePokemon,
}