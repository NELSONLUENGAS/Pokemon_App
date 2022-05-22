import React, { useState, useEffect } from 'react';
import '../../Scss/NavBar/Nav.scss';
import pokeball from '../../images/pokeball.png';
import { IoSearchCircle } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, getPokemonByName, getAbilities, getTypes, reloadPokemons  } from '../../Redux/Pokemon/PokemonAction';


export default function Nav({paginate, updatePages, expandFilter}){
    const pokemons = useSelector(state => state.PokemonReducer.pokemons)
    const dispatch = useDispatch();
    const [ reload, setReload ] = useState(false)
    function handleOnClick(e){
        e.preventDefault();
        dispatch(reloadPokemons());
        paginate(1);
        setReload(true)
        setTimeout(()=>{
            setReload(false)
        },800)
        updatePages({
            start1: 1,
            start2: 2,
            start3: 3,
            center1: 4,
            center2: 5,
            end1: 6,
            end2: 7,
            end3: 8,
        })
    }

    function handleOnSubmit(e){
        e.preventDefault();
        const { value } =  e.target;
        dispatch(getPokemonByName(value));
        paginate(1);
        updatePages({
            start1: 1,
            start2: 2,
            start3: 3,
            center1: 4,
            center2: 5,
            end1: 6,
            end2: 7,
            end3: 8,
        })
    }


    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getAbilities());
        dispatch(getTypes());
    },[dispatch])

    return(
        <div className='navContainer'>
            <div className='navPoligon1'>
                <div className='navPoligon1Element1'>
                    <button onClick={event => expandFilter(event)}>
                        Filter Pokemons By
                    </button>
                </div>
                <div className='navPoligon1Element2'>
                    <div >
                        <label onClick={handleOnClick} 
                            className={reload ? 'navReload' : pokemons.length? '' : 'navReload'} 
                        >
                            <img src={pokeball} alt='pokeball'/>
                        </label>
                        <button >
                            Reload Pokemons
                        </button>
                    </div>
                </div>
                <div className='navPoligon1Element3'>
                    <div className='search'>
                        <input placeholder='Search...' type='search' onChange={handleOnSubmit}/>
                        <div>
                            <button>
                                <IoSearchCircle/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 