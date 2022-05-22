import { 
    FILTER_POKEMONS_BY_TYPE, // TYPE - ABILITY
    FILTER_POKEMONS_BY_ABILITY, // TYPE - ABILITY
    FILTER_POKEMONS_BY_STATS, // hp-attack-speed-defense-
    ORDER_POKEMONS_BY, // ASC - DESC
    FILTER_POKEMONS_BY_STATE
} from './SearchAction';

const initialState = {
    filterPokemons: [],
}
export const SearchReducer = (state = initialState, {payload, type}) =>{
    switch(type){
        case FILTER_POKEMONS_BY_ABILITY://ability-Type
            return {
                ...state,
                filterPokemons: payload
            }
        case FILTER_POKEMONS_BY_TYPE://-Type
            return {
                ...state,
                filterPokemons: payload
            }
        case ORDER_POKEMONS_BY://asc-desc
            return {
                ...state,
                filterPokemons: payload
            }
        case FILTER_POKEMONS_BY_STATS: 
            return {
                ...state,
                filterPokemons: payload
            }
        case FILTER_POKEMONS_BY_STATE: 
            return {
                ...state,
                filterPokemons: payload
            }
        default:
            return {...state}
    }
}