import React,{ useState } from 'react';
import '../../Scss/Filters/Filters.scss';
import { filterAndOrderPokemonsBy } from '../../Redux/SearchBar/SearchAction';
import { useSelector, useDispatch } from 'react-redux';


export default function Filters({closeFilter, paginate, updatePages}){
    const dispatch = useDispatch();
    let types = useSelector(state => state.PokemonReducer.types.length && state.PokemonReducer.types[0].data)
    let abilities = useSelector(state => state.PokemonReducer.abilities.length && state.PokemonReducer.abilities[0].data);
    types.sort((a, b) => a.name.localeCompare(b.name));
    abilities.sort((a, b) => a.name.localeCompare(b.name));

    const [ filter , setFilter] = useState({
        ability: '', 
        type: '', 
        order : '', 
        stat: '', 
        greaterThan: '', 
        lessThan: '', 
        state: ''
    })
    let stats = ['hp', 'attack', 'defense', 'speed', 'weight', 'height', 'specialAttack', 'specialDefense']
    stats.sort((a, b) => a.localeCompare(b));
    function handleFilter(event){
        event.preventDefault();
        closeFilter(event);
        dispatch(filterAndOrderPokemonsBy(filter));
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
    function handleOnChange(event){
        const { name, value} = event.target;
        console.log(name, value)
        setFilter({
            ...filter,
            [name]: value
        })
    }


    return(
        <div className='filterContainerAnimation'>
            <div className='filterElement1'>
                <select name='stat' onChange={handleOnChange}>
                    <option defaultChecked hidden>Stats</option>
                    {stats.map((stat, i) => 
                        <option className="optionFilter" value={stat} key={i} >{stat}</option>
                    )}
                </select>
            </div>
            <div className='filterElement1'>
                <input placeholder='greaterThan 20' type="number" min={0} max={2000} name='greaterThan' onChange={handleOnChange}/>
                <input placeholder='lessThan 80' type="number" min={0} max={2000} name='lessThan' onChange={handleOnChange}/>
            </div>
            <div className='filterElement2'>
                <select name='type' onChange={handleOnChange} >
                    <option defaultChecked hidden>Types</option>
                    {types.length && types.map(type => 
                        <option className="optionFilter" value={type.name} key={type.id} >{type.name}</option>
                    )}
                </select>
                <select name='ability' onChange={handleOnChange}>
                    <option defaultChecked hidden>Abilities</option>
                    {abilities.length && abilities.map(ability => 
                        <option className="optionFilter" value={ability.name} key={ability.id} >{ability.name}</option>
                    )}
                </select>
            </div>
            <div className='filterElement3'>
                <select name='state' onChange={handleOnChange}>
                    <option defaultChecked hidden>State</option>
                    <option className="optionFilter" value="all">ALL</option>
                    <option className="optionFilter" value="created">CREATED</option>
                </select>
                <select name='order' onChange={handleOnChange}>
                    <option defaultChecked hidden>Order</option>
                    <option className="optionFilter" value="A-Z">A-Z</option>
                    <option className="optionFilter" value="Z-A">Z-A</option>
                </select>
            </div>
            <div className='filterElement4'>
                <button onClick={handleFilter}>
                    Filter
                </button>
            </div>
        </div>
    )
}