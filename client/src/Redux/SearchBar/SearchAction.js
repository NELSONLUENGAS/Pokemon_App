import axios from 'axios';
export const FILTER_AND_ORDER_POKEMONS_BY = 'FILTER_AND_ORDER_POKEMONS_BY'
export const RELOAD_POKEMON = 'RELOAD_POKEMON';
export const GET_POKEMONS_BY_NAME_FILTER = 'GET_POKEMONS_BY_NAME_FILTER';


export function filterAndOrderPokemonsBy(props){
    const { ability, type, order, stat, greaterThan, lessThan, state} = props;
    return async function(dispatch){
        const { data } = await axios(`https://app-pokemo.herokuapp.com/pokemons/filter/by?ability=${ability}&type=${type}&order=${order}&stat=${stat}&number1=${greaterThan}&number2=${lessThan}&state=${state}`);
        console.log(data)
        return dispatch({
            type: FILTER_AND_ORDER_POKEMONS_BY,
            payload: data
        })
    }
}

export function getPokemonsByNameFilter(name){
    return function (dispatch){
        return dispatch({
            type: GET_POKEMONS_BY_NAME_FILTER,
            payload: name
        })
    }
}

export function reloadPokemon(){
    return function(dispatch){
        return dispatch({
            type: RELOAD_POKEMON,
            payload: []
        })
    }
}