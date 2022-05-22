import axios from "axios";
export const POST_NEW_POKEMON = 'POST_NEW_POKEMON';
export const UPDATE_POKEMON = 'UPDATE_POKEMON';

export function postNewPokemon(payload){
    return async function(dispatch){
        const newPokemon = await axios.post('https://app-pokemo.herokuapp.com/pokemons/create', payload);
        const { data } = newPokemon;
        return dispatch({
            type: POST_NEW_POKEMON,
            payload: data
        })
    }
}
export function updatePokemon(id, payload){
    return async function(dispatch){
        const updatePokemon = await axios.put(`https://app-pokemo.herokuapp.com/pokemons/update/${id}`, payload);
        const { data } = updatePokemon;
        return dispatch({
            type: UPDATE_POKEMON,
            payload: data
        })
    }
}