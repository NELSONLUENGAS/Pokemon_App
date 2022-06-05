import React, { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import '../../Scss/Form/Data.scss';
import { getTypes, getAbilities } from '../../Redux/Pokemon/PokemonAction';


export default function Data({state, setState}){
    const { name, imageUrl, } = state
    console.log(name)
    const dispatch = useDispatch();
    const Types = useSelector( state => state.PokemonReducer.types[0]?.data);
    const Abilities = useSelector( state => state.PokemonReducer.abilities[0]?.data);
    
    useEffect(()=>{
        dispatch(getTypes());
        dispatch(getAbilities());
    },[dispatch])

    
    return(
        <div className='dataContainer'>
            <select name='type' onChange={event => setState(event)}>
                <option hidden value=''>Type</option>
                {
                    Types?.length && Types.sort((a,b)=> a.name.localeCompare(b.name)) && Types.map(type =>
                        <option value={type.name} key={type.id}>{type.name}</option>
                        )
                    }
            </select>
            <select name='ability' onChange={event => setState(event)}>
                <option hidden value=''>Ability</option>
                {
                    Abilities?.length && Abilities.sort((a,b)=> a.name.localeCompare(b.name)) && Abilities.map(ability =>
                        <option value={ability.name} key={ability.id}>{ability.name}</option>
                    )
                }
            </select>
            <input type='text' placeholder='Pokemon Name' name='name' value={name} onChange={event => setState(event)}/>
            <input type="url" placeholder='Url Image' name='imageUrl' value={imageUrl} onChange={event => setState(event)}/>
            <input type="file"  />
        </div>
    )
}