const axios = require('axios');
const { Ability } = require('../db');

async function getAbilities(){
    const abilityReq = await axios('https://pokeapi.co/api/v2/ability?offset=0&limit=100')

    const {results} = abilityReq.data;
    const abilityRes = results.map( type => { return {name:type.name}});
    
    let data = await Ability.count() ? await Ability.findAll() : await Ability.bulkCreate(abilityRes);
    return {msg: 'Abilities Loaded successfuly!!', data: data};
}

module.exports = {
    getAbilities,
}