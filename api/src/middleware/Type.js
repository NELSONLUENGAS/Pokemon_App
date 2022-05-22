const axios = require('axios');
const { Type } = require('../db');

async function getTypes(){
    const typesReq = await axios('https://pokeapi.co/api/v2/type')

    const {results} = typesReq.data;
    const typesRes = results.map( type => { return {name:type.name}});
    
    let data = await Type.count() ? await Type.findAll() : await Type.bulkCreate(typesRes);
    return {msg: 'Types Loaded successfuly!!', data: data};
}

module.exports = {
    getTypes,
}