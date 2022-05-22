import React from 'react';
import '../../Scss/Filters/Filters.scss';


export default function Filters({closeFilter}){
    function handleFilter(event){
        event.preventDefault();
        closeFilter(event)
    }
    return(
        <div className='filterContainerAnimation'>
            <div className='filterElement1'>
                <select>
                    <option value="" key="">Stats</option>
                    <option value="" key=""></option>
                    <option value="" key=""></option>
                </select>
                <input placeholder='number1' type="number" min={0} max={2000}/>
                <input placeholder='number2' type="number" min={0} max={2000}/>
            </div>
            <div className='filterElement2'>
                <select>
                    <option value="" key="">Type</option>
                </select>
                <select>
                    <option value="" key="">Ability</option>
                </select>
                <select>
                    <option value="" key="">Order</option>
                </select>
            </div>
            <div className='filterElement3'>
                <select>
                    <option value="" key="">state</option>
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