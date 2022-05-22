import { POST_NEW_POKEMON, UPDATE_POKEMON } from "./FormAction";
const initialState = {
    newPokemon:{},
    updatePokemon:{}
}
export const FormReducer = (state = initialState, {payload, type}) =>{
    switch(type){
        case POST_NEW_POKEMON:
            return {
                ...state,
                newPokemon: payload
            }
        case UPDATE_POKEMON:
            return {
                ...state,
                newPokemon: payload
            }
        default:
            return {...state}
    }
}