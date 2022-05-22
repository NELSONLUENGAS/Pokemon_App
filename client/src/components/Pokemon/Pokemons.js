import React from 'react';
import PokemonCard from './PokemonCard';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import '../../Scss/Pokemon/Pokemons.scss';
import loading from '../../images/Pikachuu.png'



export default function Pokemons({data, message}){

    console.log(data, 'soy pokemons')
    return(
        <div className='pokemonsContainer'>
            {data?.length
            ?
                message === 'Sorry, name does not exist' 
                ?
                    <h1>{message}</h1>
                :
                    data?.map((pokemon, index) =>
                        <Link to={`/pokemons/detail/${pokemon.id}`} key={index} style={{textDecoration: 'none', color: 'white'}}>
                            <PokemonCard
                                name={pokemon.name}
                                hp={pokemon.hp}
                                image={pokemon.image}
                                height={pokemon.height}
                                weight={pokemon.weight}
                            />
                        </Link>
                    )
            :
                <div className='pokemonsLoading'>
                    <img src={loading} alt='loading'/>
                    <h1>Loading...</h1>
                </div>
            }
        </div>
    )
}