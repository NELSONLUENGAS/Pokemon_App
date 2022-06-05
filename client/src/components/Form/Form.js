import React, { useState } from 'react';
import '../../Scss/Form/Form.scss';
import Data from './Data';
import Stats from './Stats';
import pikachu from '../../images/pikachu.png';
import Pikachu from '../../images/pokemon.png';
import { GiShieldEchoes, GiAssassinPocket, GiHeartTower, GiBodyHeight, GiWeight, GiRunningNinja, GiPointySword, GiShieldBounces, GiWrench, GiArrowScope } from "react-icons/gi";


export default function Form(){
    const [state, setState] = useState({
        data: false,
        stats: false,
        name: '',
        type: [],
        ability: [],
        imageUrl: '',
        hp: '',
        attack: '',
        specialAttack: '',
        defense: '',
        specialDefense: '',
        height: '',
        weight: '',
        speed: ''
    })
    const {
        name,type,ability,imageUrl,hp,
        attack,specialAttack,defense,
        specialDefense,height,weight,speed
    } = state;
    function handleExpand(event){
        event.preventDefault();
        const { name} = event.target;
        setState({
            ...state,
            [name]: !state[name]
        })
    }
    function handleCreate(event){
        event.preventDefault();
        setState({
            data: false,
            stats: false
        })
    }
    function handleSetState(event){
        event.preventDefault();
        const { name, value} = event.target;
        if(name === 'type' || name === 'ability'){
            setState({
                ...state,
                [name]: [...state[name], value]
            })
        }else{
            setState({
                ...state,
                [name]: value
            })
        }
    }
    function handleOnDelete(event){
        event.preventDefault();
        const { name, id } = event.target;
        console.log(name, id)
        setState({
            ...state,
            [id]:state[id].filter(type => type !== name)
        })
    }


    return(
        <div className='form'>
            <div className='formSection1'>
                <div className='formPoligon1'>
                    <div className='formPoligon1Element1'>
                        <button name='data' onClick={handleExpand}>
                            Pokemon Data
                        </button>
                    </div>
                    <div className='formPoligon1Element2'>
                        <img src={pikachu} alt='pikachu'/>
                        <button>
                            <a href='/home' style={{textDecoration: 'none', color: 'white'}}>Back to Home</a>
                        </button>
                    </div>
                    <div className='formPoligon1Element3'>
                        <button name='stats' onClick={handleExpand}>
                            Pokemon Stats
                        </button>
                    </div>
                </div> 
                <div>
                    {state.data &&
                        <div>
                            <Data
                                state={state}
                                setState={handleSetState}
                            />
                        </div>
                    }
                    {state.stats &&
                        <div>
                            <Stats
                                state={state}
                                setState={handleSetState}
                            />
                        </div>
                    }
                </div>
            </div>
            <section className='formSection2'>
                <div className='formSection2El1' >
                    {imageUrl && <img src={imageUrl} alt='Pokemon'/>}
                </div>
                <div className='formSection2El2' >
                    {
                        name &&
                        <div className='formCard'>
                        <div className="formCardItem1">
                            <span>
                                <p>{name}</p>
                            </span>
                        </div>
                        <div className="formCardItem2">
                            {hp && <span>
                                <div>
                                    <button>< GiHeartTower/></button>
                                    HP
                                </div>
                                <p>{hp}</p>
                            </span>}
                        </div>
                        <div className="formCardItem3">
                            {attack && <span>
                                <div>
                                    <button><GiPointySword/></button>
                                    ATTACK
                                </div>
                                <p>{attack}</p>
                            </span>}
                        </div>
                        <div className="formCardItem4">
                            {defense && <span>
                                <div>
                                    <button><GiShieldBounces/></button>
                                    DEFENSE
                                </div>
                                <p>{defense}</p>
                            </span>}
                        </div>
                        <div className="formCardItem9">
                            {weight && <span>
                                <div>
                                    <button><GiWeight/></button>
                                    WEIGHT
                                </div>
                                <p>{weight}</p>
                            </span>}
                        </div>
                        <div className="formCardItem0">
                            {height && <span>
                                <div>
                                    <button><GiBodyHeight/></button>
                                    HEIGHT
                                </div>
                                <p>{height}</p>
                            </span>}
                        </div>
                        <div className="formCardItem0">
                            {speed && <span>
                                <div>
                                    <button><GiRunningNinja/></button>
                                    SPEED
                                </div>
                                <p>{speed}</p>
                            </span>}
                        </div>
                        <div className="formCardItem7">
                            {specialAttack && <span>
                                <div>
                                    <button><GiAssassinPocket/></button>
                                    SPECIAL ATTACK
                                </div>
                                <p>{specialAttack}</p>
                            </span>}
                        </div>
                        <div className="formCardItem8">
                            {specialDefense && <span>
                                <div>
                                    <button><GiShieldEchoes/></button>
                                    SPECIAL DEFENSE
                                </div>
                                <p>{specialDefense}</p>
                            </span>}
                        </div>
                        <div className="formCardItem5">
                            {type.length ? <span>
                                <div>
                                    <button><GiWrench/></button>
                                    TYPE
                                </div>
                                {type.map((element, index) =>  
                                    <span key={index}  >
                                        {element}
                                        <button name={element} onClick={handleOnDelete} id='type'>x</button>
                                    </span>)}
                            </span> : null}
                        </div>
                        <div className="formCardItem6">
                            {ability.length ? <span>
                                <div>
                                    <button><GiArrowScope/></button>
                                    ABILITY
                                </div>
                                {ability.map((element, index) =>  
                                    <span key={index} >
                                        {element}
                                        <button name={element} onClick={handleOnDelete} id='ability'>x</button>
                                    </span>)}
                            </span> : null}
                        </div>
                    </div>}
                </div>
            </section>
            <div className='formSection3'>
                <div className='formPoligon2'>
                    <div className='formPol2Element1'>
                        
                    </div>
                    <div className='formPol2Element2'>
                        <img src={Pikachu} alt='pikachu'/>
                        <button onClick={handleCreate}>
                            Create New Pokemon
                        </button>
                    </div>
                    <div className='formPol2Element3'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}