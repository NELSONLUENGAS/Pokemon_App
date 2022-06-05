import React,{ useState, useEffect } from 'react';
import Nav from '../NavBar/Nav';
import Paginate from '../Paginate/Paginate';
import '../../Scss/Home/Home.scss';
import Pokemons from '../Pokemon/Pokemons';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, getAbilities, getTypes } from '../../Redux/Pokemon/PokemonAction';
import Filters from '../Filters/Filters';



export default function Home(){
    const dispatch = useDispatch();
    let [page, setPage] = useState(1);
    const limit = 8;
    const endNumber = page * limit;
    const startNumber = endNumber - limit;
    const pokemons = useSelector(state => state.PokemonReducer.pokemons);
    const pokemonsByName = useSelector(state => state.PokemonReducer.ByName);
    const filterPokemonsBy = useSelector(state => state.SearchReducer.filterPokemons);
    console.log(filterPokemonsBy,'soy filterby')
    const { data } = pokemons?.length && pokemons[0];
    const pokemonsSearch = pokemonsByName?.length && pokemonsByName[0].data;
    const pokemonsFilter = filterPokemonsBy?.length && filterPokemonsBy[0].data;
    console.log(pokemonsFilter, 'soy ultimo filtado')
    const pokemonsSearchMsg = pokemonsByName?.length ? pokemonsByName[0].msg : filterPokemonsBy?.length && filterPokemonsBy[0].msg;
    
    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getAbilities());
        dispatch(getTypes());
        // console.log('soy useEffect')
    },[dispatch])

    const pokemonsPaginateByName = pokemonsSearch?.length && pokemonsSearch.slice(startNumber, endNumber);
    const pokemonsPaginate = data?.length && data.slice(startNumber, endNumber);
    const pokemonsFilterBy = pokemonsFilter?.length && pokemonsFilter.slice(startNumber, endNumber);

    function paginate(number){
        setPage(number)
    }

    const [pages, setPages] = useState({
        start1: 1,
        start2: 2,
        start3: 3,
        center1: 4,
        center2: 5,
        end1: 6,
        end2: 7,
        end3: 8,
    })
    function updatePages(pages){
        setPages(pages);
    }
    const [filter, setFilter] = useState(false);
    function expandFilter(event){
        event.preventDefault();
        setFilter(!filter)
    }
    function closeFilter(event){
        event.preventDefault();
        setFilter(false);
    }
    return(
        <div className='home'>
            <div className='homeElement1'>
                <Nav 
                    paginate={paginate}
                    updatePages={updatePages}
                    expandFilter={expandFilter}
                />
                <div className='homeElement1Filters'>
                    {filter && <Filters 
                        closeFilter={closeFilter} 
                        paginate={paginate}
                        updatePages={updatePages}
                    />}
                </div>
            </div>
            <div className='homeElement2'>
                <Pokemons
                    message={pokemonsSearchMsg}
                    data={pokemonsFilterBy?.length ? pokemonsFilterBy : pokemonsPaginateByName?.length ? pokemonsPaginateByName  : pokemonsPaginate }
                />
            </div>
            <div className='homeElement3'>
                <Paginate
                    page={page}
                    paginate={paginate}
                    size={pokemonsSearchMsg === 'Sorry, name does not exist' 
                    ? 
                        null 
                    : 
                        pokemonsFilter?.length 
                        ? 
                            pokemonsFilter?.length 
                        : 
                            pokemonsSearch?.length 
                            ? 
                                pokemonsSearch.length 
                            : 
                                data?.length}
                    limit={limit}
                    updatePages={updatePages}
                    pages={pages}
                />
            </div>
            
        </div>
    )
}

// import React from 'react'
// import React from 'react';

// const Home = () => {
//     return (
//         <div className='home'>
//                 <div className='homeElement1'>
//                     <Nav 
//                     // paginate={paginate}
//                     />
//                 </div>
//                 <div className='homeElement2'>
//                     <Pokemons
//                     // message={pokemonsSearchMsg}
//                     // data={pokemonsPaginateByName?.length ? pokemonsPaginateByName  : pokemonsPaginate }
//                 />
//             </div>
//             <div className='homeElement3'>
//                 <Paginate
//                     // page={page}
//                     // paginate={paginate}
//                     // size={pokemonsSearchMsg === 'Sorry, name does not exist' ? null : pokemonsSearch?.length ? pokemonsSearch.length : data?.length}
//                     // limit={limit}
//                 />
//             </div>
            
//         </div>
//     );
// }

// export default Home;
