import { combineReducers } from "redux";
import { PokemonReducer } from "./Pokemon/PokemonReducer";
import { FormReducer } from "./Form/FormReducer";
import { SearchReducer } from "./SearchBar/SearchReducer";

export const rootReducer = combineReducers({
    PokemonReducer, 
    FormReducer,
    SearchReducer,
})