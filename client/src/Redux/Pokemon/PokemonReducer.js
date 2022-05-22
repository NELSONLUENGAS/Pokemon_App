import { GET_ABILITIES,RELOAD_POKEMONS, GET_POKEMONS, GET_TYPES, DELETE_POKEMON,GET_POKEMONS_BY_NAME,GET_POKEMONS_BY_ID,  } from "./PokemonAction";

const initialState = {
    pokemons: [],
    types: [],
    ByName: [],
    abilities: [],
    deletePokemon: {},
    PokemonDetail: {},
}
export const PokemonReducer = (state = initialState, {payload, type}) =>{
    switch(type){
        case GET_POKEMONS_BY_NAME:
            return {
                ...state,
                ByName: [payload]
            }
        case GET_POKEMONS_BY_ID:
            return {
                ...state,
                PokemonDetail: payload
            }
        case GET_TYPES:
            return {
                ...state,
                types: [payload]
            }
        case GET_ABILITIES:
            return {
                ...state,
                abilities: [payload]
            }
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: [payload]
            }
        case DELETE_POKEMON:
            return {
                ...state,
                deletePokemon: payload
            }
        case RELOAD_POKEMONS:
            return {
                ...state,
                pokemons: [payload],
                ByName: []
            }
        default:
            return {
                ...state
            }
    }
}