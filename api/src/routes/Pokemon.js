const router  = require('express').Router();
const { Pokemon, Ability, Type } = require('../db');
const { getPokemons,  
        postNewPokemon, 
        deletePokemon,
        updatePokemon,
} = require('../middleware/Pokemon');

const { getTypes } = require('../middleware/Type');
const { getAbilities } = require('../middleware/Ability');
const { FilterPokemonsBy } = require('../middleware/Filters');

const {
    getPokemonsName, 
    getPokemonById,
    getPokemonsType,
    getPokemonsAbilities,
    getPokemonsState,
    orderPokemonsBy,
    filterPokemonsByStats
} = require('../middleware/SearchFilterAndOrder');

router.get('/pokemons', async (req, res, next)=>{
    try{
        await getTypes();
        await getAbilities();
        let data;
        if(!await Pokemon.count()){
            res.send(await getPokemons())
        }else{
            data = await Pokemon.findAll({
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
            }) ;
            res.send({msg: 'Database loaded',data: data})
        }
    }catch(err){
        next(err)
    }
})

router.get('/pokemons/name', async(req, res, next)=>{
    const { name } = req.query;
    try{
        const names = name && await getPokemonsName(name);
        res.send(names)
    }catch(err){
        next(err);
    }
})

router.get('/pokemons/:id', async(req, res, next)=>{
    const { id } = req.params;
    try{
        const pokemon = id && await getPokemonById(id);
        res.send(pokemon)
    }catch(err){
        next(err)
    }
})

router.post('/pokemons/create', async(req, res, next)=>{
    const {name, image, type, ability, hp, attack, specialAttack, defense, specialDefense, speed, height, weight, created} = req.body;
    try{
        const newPokemon = await postNewPokemon(name, image, type, ability, hp, attack, specialAttack, defense, specialDefense, speed, height, weight, created);
        res.send(newPokemon);
    }catch(err){
        next(err)
    }
})

router.delete('/pokemons/delete/:id', async(req, res, next)=>{
    const { id } = req.params;
    try{
        const data = id && await deletePokemon(id);
        res.send(data);
    }catch(err){
        next(err);
    }
})

router.put('/pokemons/update/:id', async(req, res, next)=>{
    const { id } = req.params;
    try{
        const { name, image, type, ability, hp, attack, specialAttack, defense, specialDefense, speed, height, weight } = req.body;
        const data = await updatePokemon( id, name, image, type, ability, hp, attack, specialAttack, defense, specialDefense, speed, height, weight);

        res.send(data);
    }catch(err){
        next(err);
    }
})

router.get('/pokemons/filter/by', async (req, res, next)=>{
    const { stat, number1, number2, type, ability, state, order } = req.query;
    console.log(stat, number1, number2, type, ability, state, order)
    try{
        const data = await FilterPokemonsBy(stat, number1, number2, type, ability, state, order);
        res.send(data);
    }catch(err){
        next(err);
    }
})


module.exports = router;
