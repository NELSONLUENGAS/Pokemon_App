import React from 'react';
import '../../Scss/Form/Form.scss';
import pikachu from '../../images/pikachu.png';
import Pikachu from '../../images/pokemon.png';


export default function Form(){
    return(
        <div className='form'>
            <div className='formSection1'>
                <div className='formPoligon1'>
                    <div className='formPoligon1Element1'>
                        <input type='text' placeholder='Pokemon Name' />
                        <input min={0} max={200} required type='number'  placeholder='Hp' />
                        <select >
                            <option  hidden>Type</option>
                            <option >Type1</option>
                            <option >Type2</option>
                        </select>
                        <select >
                            <option  hidden>Ability</option>
                            <option >Ability1</option>
                            <option >Ability2</option>
                        </select>
                    </div>
                    <div className='formPoligon1Element2'>
                        <img src={pikachu} alt='pikachu'/>
                        <button>
                            <a href='/home' style={{textDecoration: 'none', color: 'white'}}>Back to Home</a>
                        </button>
                    </div>
                    <div className='formPoligon1Element3'>
                        <input min={0} max={200} required type='number'  placeholder='Attack' />
                        <input min={0} max={200} required type='number'  placeholder='Defense' />
                        <input min={0} max={200} required type='number'  placeholder='Height' />
                        <input min={0} max={200} required type='number'  placeholder='Weight' />
                    </div>
                </div> 
            </div>
            <section className='formSection2'>
                <div className='formSection2El1' >
                    <div className='formSection2SubEl1'>
                        <span>Name</span>
                        <span>
                            Hp
                            <label>60</label>
                        </span>
                    </div>
                    <div className='formSection2SubEl2'>
                        <div className='formSection2Item1'>
                            <span>
                                attack
                                <label>60</label>
                            </span>
                            <span>
                                defense
                                <label>60</label>
                            </span>
                        </div>
                        <div className='formSection2Item2'>
                            <span>
                                Special attack
                                <label>60</label>
                            </span>
                            <span>
                                Special defense
                                <label>80</label>
                            </span>
                        </div>
                        <div className='formSection2Item3'>
                            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png' alt='Pokemon'/>
                        </div>
                    </div>
                </div>
            </section>
            <div className='formSection3'>
                <div className='formPoligon2'>
                    <div className='formPol2Element1'>
                        <input min={0} max={200} required type='number'  placeholder='Special attack' />
                    </div>
                    <div className='formPol2Element2'>
                        <img src={Pikachu} alt='pikachu'/>
                        <button>
                            Create New Pokemon
                        </button>
                    </div>
                    <div className='formPol2Element3'>
                        <input min={0} max={200} required type='number'  placeholder='Special defense' />
                    </div>
                </div>
            </div>
        </div>
    )
}