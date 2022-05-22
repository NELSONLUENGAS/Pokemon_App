import axios from 'axios';

export const FILTER_POKEMONS_BY_TYPE = 'FILTER_POKEMOS_BY_TYPE';
export const FILTER_POKEMONS_BY_ABILITY = 'FILTER_POKEMOS_BY_ABILITY';
export const ORDER_POKEMONS_BY = 'ORDER_POKEMOS_BY';
export const FILTER_POKEMONS_BY_STATS = 'FILTER_POKEMONS_BY_STATS';
export const FILTER_POKEMONS_BY_STATE = 'FILTER_POKEMONS_BY_STATE';



export function filterPokemonsByType(type, order){
    return async function(dispatch){
        const pokemons = await axios(`https://app-pokemo.herokuapp.com/type/filter?type=${type}&order=${order}`);
        const { data } = pokemons;
        return dispatch({
            type: FILTER_POKEMONS_BY_TYPE,
            payload: data
        })
    }
}

export function filterPokemonsByAbility(ability, order){
    return async function(dispatch){
        const pokemons = await axios(`https://app-pokemo.herokuapp.com/ability/filter?ability=${ability}&order=${order}`);
        const { data } = pokemons;
        return dispatch({
            type: FILTER_POKEMONS_BY_ABILITY,
            payload: data
        })
    }
}

export function orderPokemonsBy(order){
    return async function(dispatch){
        const pokemons = await axios(`https://app-pokemo.herokuapp.com/pokemons/generate/order?order=${order}`);
        const { data } = pokemons;
        return dispatch({
            type: ORDER_POKEMONS_BY,
            payload: data
        })
    }
}

export function filterPokemonsByStats(stat, number1, number2){
    return async function(dispatch){
        const pokemons = await axios(`https://app-pokemo.herokuapp.com/pokemons/filter/stats?stat=${stat}&number1=${number1}&number2=${number2}`);
        const { data } = pokemons;
        return dispatch({
            type: FILTER_POKEMONS_BY_STATS,
            payload: data
        })
    }
}

export function filterPokemonsByState(state){
    return async function(dispatch){
        const pokemons = await axios(`https://app-pokemo.herokuapp.com//pokemons/filter/state?state=${state}`)
        const { data } = pokemons;
        return dispatch({
            type: FILTER_POKEMONS_BY_STATE,
            payload: data
        })
    }
}