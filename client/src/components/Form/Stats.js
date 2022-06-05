import React from 'react';
import '../../Scss/Form/Stats.scss';


export default function Stats({state, setState}){
    const { 
        hp, attack, specialAttack, defense, 
        specialDefense, height, weight, speed
    } = state;

    return(
        <div className='statsContainer'>
            <input 
                name='hp' 
                min={0}  
                type='number'  
                placeholder='Hp'  
                value={hp}  
                onChange={event => setState(event)}/>
            <input 
                name='attack' 
                min={0}  
                type='number'  
                placeholder='Attack'  
                value={attack}  
                onChange={event => setState(event)}/>
            <input 
                name='specialAttack' 
                min={0}  
                type='number'  
                placeholder='Special attack'  
                value={specialAttack}  
                onChange={event => setState(event)}/>
            <input 
                name='defense' 
                min={0}  
                type='number'  
                placeholder='Defense'  
                value={defense}  
                onChange={event => setState(event)}/>
            <input 
                name='specialDefense' 
                min={0}  
                type='number'  
                placeholder='Special defense'  
                value={specialDefense}  
                onChange={event => setState(event)}/>
            <input 
                name='height' 
                min={0}
                type='number'  
                placeholder='Height'  
                value={height}  
                onChange={event => setState(event)}/>
            <input 
                name='weight' 
                min={0}  
                type='number'  
                placeholder='Weight'  
                value={weight}  
                onChange={event => setState(event)}/>
            <input 
                name='speed' 
                min={0}  
                type='number'  
                placeholder='Speed'  
                value={speed}  
                onChange={event => setState(event)}/>
        </div>
    )
}