import { FILTER_AND_ORDER_POKEMONS_BY, RELOAD_POKEMON, GET_POKEMONS_BY_NAME_FILTER } from './SearchAction';

const initialState = {
    filterPokemons: [],
    filterCache: []
}
export const SearchReducer = (state = initialState, {payload, type}) =>{
    switch(type){
        case FILTER_AND_ORDER_POKEMONS_BY:
            return {
                ...state,
                filterPokemons: [payload],
                filterCache: [payload]
            }
        case GET_POKEMONS_BY_NAME_FILTER:
            if(payload){
                const pokemonsFilter = state.filterCache[0]?.data.filter(pokemon => pokemon.name.includes(payload))
                console.log(payload)
                console.log([{data: [pokemonsFilter]}],'soy reducer')
            return {
                ...state,
                filterPokemons: pokemonsFilter.length ? [{msg: 'Search succesfuly', data: pokemonsFilter}] : [{msg: 'Sorry, name does not exist', data: pokemonsFilter}]
            }
        }else{
            return {
                ...state,
                filterPokemons: state.filterCache
            }
        }
        case RELOAD_POKEMON:
            return {
                ...state,
                filterPokemons: payload
            }
        default:
            return {...state}
    }
}