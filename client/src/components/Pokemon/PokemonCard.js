import React from 'react';
import '../../Scss/Pokemon/PokemonCard.scss';
import { GiHeartTower, GiBodyHeight, GiWeight } from "react-icons/gi";

export default function PokemonCard({name, hp, height, weight, image}){
    
    return(
        <div className='pokemonCard'>
            <div className='pokemonCardContainer'>
                <div className='pokemonCardEl1'>
                    <div className='pokemonName'>
                        <span>{name}</span>
                    </div>
                    <div className='pokemonHp'>
                        <div>
                            <button><GiHeartTower/></button>
                            <span>Hp</span>
                        </div>
                        <span>{hp}</span>
                    </div>
                </div>
                <div className='pokemonCardEl2'>
                    <img src={image} alt='pokemon' />
                </div>
                <div className='pokemonCardEl3'>
                    <div className='pokemonHeight'>
                        <div>
                            <button><GiBodyHeight/></button>
                            <span>Height</span>
                        </div>
                        <span>{height}</span>
                    </div>
                    <div className='pokemonWeight'>
                        <div>
                            <button><GiWeight/></button>
                            <span>Weight</span>
                        </div>
                        <span>{weight}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}