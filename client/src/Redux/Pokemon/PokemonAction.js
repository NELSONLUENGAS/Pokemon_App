import axios from 'axios';
export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const GET_POKEMONS_BY_NAME = 'GET_POKEMONS_BY_NAME';
export const GET_POKEMONS_BY_ID = 'GET_POKEMONS_BY_ID';
export const GET_ABILITIES = 'GET_ABILITIES';
export const DELETE_POKEMON = 'DELETE_POKEMON';
export const RELOAD_POKEMONS = 'RELOAD_POKEMONS';


export function getPokemons(){
    return async function(dispatch){
        const pokemons = await axios('https://app-pokemo.herokuapp.com/pokemons');
        const { data } = pokemons;
        return dispatch({
            type: 'GET_POKEMONS',
            payload: data
        })
    }
}

export function getPokemonByName(name){
    return async function(dispatch){
        const { data } = await axios(`https://app-pokemo.herokuapp.com/pokemons/name?name=${name}`);
        return dispatch({
            type: 'GET_POKEMONS_BY_NAME',
            payload: data
        })
    }
}

export function getPokemonByID(id){
    return async function(dispatch){
        const pokemon = await axios(`https://app-pokemo.herokuapp.com/pokemons/${id}`)
        const { data }= pokemon;
        return dispatch({
            type: GET_POKEMONS_BY_ID,
            payload: data
        })
    }
}

export function getTypes(){
    return async function(dispatch){
        const types = await axios('https://app-pokemo.herokuapp.com/types');
        const { data } = types;
        return dispatch({
            type: GET_TYPES,
            payload: data
        })
    }
}
export function getAbilities(){
    return async function(dispatch){
        const abilities = await axios('https://app-pokemo.herokuapp.com/abilities');
        const { data } = abilities;
        return dispatch({
            type: GET_ABILITIES,
            payload: data
        })
    }
}
export function deletePokemon(id){
    return async function(dispatch){
        const pokemon = await axios(`https://app-pokemo.herokuapp.com/pokemons/delete/${id}`);
        const { data } = pokemon;
        return dispatch({
            type: DELETE_POKEMON,
            payload: data
        })
    }
}

export function reloadPokemons(){
    return async function(dispatch){
        const { data } = await axios('https://app-pokemo.herokuapp.com/pokemons');
        return dispatch({
            type: RELOAD_POKEMONS,
            payload: data
        })
    }
}