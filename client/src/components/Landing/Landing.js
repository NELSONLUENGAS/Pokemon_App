import React from 'react';
import '../../Scss/Landing/Landing.scss';
import Slider from '../Slider/Slider';

export default function Landing(){
    return(
        <div className='landing'>
            <div className='landingSection1'>
                <div className='landingPoligon1'>
                    <div className='landingPoligon1Element1'>
                        
                    </div>
                    <div className='landingPoligon1Element2'>
                        <button>
                            <a href='/home' style={{textDecoration: 'none', color: 'white'}}>Welcome to Pokemon App</a>
                        </button>
                    </div>
                    <div className='landingPoligon1Element3'>
                        
                    </div>
                </div> 
            </div>
            <section className='landingSection2'>
                <Slider/>
            </section>
            <div className='landingSection3'>
                <div className='landingPoligon2'>
                    
                </div>
            </div>
        </div>
    )
}