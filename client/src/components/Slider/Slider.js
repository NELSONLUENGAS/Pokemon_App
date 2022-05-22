import React from 'react';
import '../../Scss/Slider/Slider.scss';

export default function Slider(){
    return(
        <div id='slider'>
            <input type='radio' name='slide' id='input1' defaultChecked/>
            <input type='radio' name='slide' id='input2'/>
            <input type='radio' name='slide' id='input3'/>
            <input type='radio' name='slide' id='input4'/>
            <input type='radio' name='slide' id='input5'/>
            <input type='radio' name='slide' id='input6'/>
            <input type='radio' name='slide' id='input7'/>
            <input type='radio' name='slide' id='input8'/>
            <input type='radio' name='slide' id='input9'/>

            <label htmlFor='input1' id='slide1'>
                <span>charmeleon</span>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png' alt='pokemon'/>
            </label>
            <label htmlFor='input3' id='slide3'>
                <span>beedrill</span>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png' alt='pokemon'/>
            </label>
            <label htmlFor='input5' id='slide5'>
                <span>kakuna</span>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png' alt='pokemon'/>
            </label>
            <label htmlFor='input7' id='slide7'>
                <span>charmander</span>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png' alt='pokemon'/>
            </label>
            <label htmlFor='input9' id='slide9'>
                <span>blastoise</span>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png' alt='pokemon'/>
            </label>

        </div>
    )
}