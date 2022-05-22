import React from 'react';
import '../../Scss/Paginate/Paginate.scss';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Paginate({page, paginate, size, limit, pages, updatePages}){
  let number = size && Math.ceil(size  / limit)
  let { start1, start2, start3, center1,center2, end1, end2, end3 } = pages;
  // console.log(start1, start2, start3, center1,center2, end1, end2, end3)

  function Previous(e){
    console.log(page,'soy previous')
    e.preventDefault();
    if( page > 3 && page < number - 4){
      paginate(parseInt(page) - 1)
      updatePages({
        start1: start1,
        start2: start2 - 1,
        start3: start3 - 1,
        center1: center1 - 1,
        center2: center2 - 1,
        end1: end1 - 1,
        end2: end2 - 1,
        end3: end3,
      })
    }
    if(page > 1 && page <= number){
      console.log(page, 'previous')
      paginate(parseInt(page) - 1)
    }
  }

  function Next(e){
    e.preventDefault();
      if(page > 2 && page < number - 5){
        paginate(parseInt(page) + 1);
        updatePages({
          start1: start1,
          start2: start2 + 1,
          start3: start3 + 1,
          center1: center1 + 1,
          center2: center2 + 1,
          end1: end1 + 1,
          end2: end2 + 1,
          end3: end3,
        })
      }
      if(page > 0 && page < number){
        paginate(parseInt(page) + 1)
      }
  }


    return(
        <div className='paginate'>
            <div className='paginatePoligon1'>
                <div className='paginateLanding'>
                    <button>
                      <BsFillArrowLeftCircleFill/>
                    </button>
                    <span>
                      <a href='/' style={{textDecoration: 'none' ,color: 'white'}}>Back to Landing</a>
                    </span>
                </div>
                <div className='paginateNumber'>
                  { page === start1 ?
                    null
                  : 
                    <button onClick={Previous}>
                    <IoIosArrowBack/>
                    </button>
                  }
                  <div className='paginateButtons'>
                    {size && number > 0 && <button  className={page === start1 ? 'paginateButtonSelect' : null} value={start1}>{start1}</button>}
                    {size && number > 1 && <button  className={page === start2 ? 'paginateButtonSelect' : null} value={start2}>{start2 === start1 + 1 ? start2 : '...' }</button>}
                    {size && number > 2 && <button  className={page === start3 ? 'paginateButtonSelect' : null} value={start3}>{start3}</button>}
                    {size && number > 3 && <button  className={page === center1 ? 'paginateButtonSelect' : null} value={center1}>{center1}</button>}
                    {size && number > 4 && <button  className={page === center2 ? 'paginateButtonSelect' : null} value={center2}>{center2}</button>}
                    {size && number > 5 && <button  className={page === end1 ? 'paginateButtonSelect' : null} value={end1}>{end1}</button>}
                    {size && number > 6 && <button  className={page === end2 ? 'paginateButtonSelect' : null} value={end2}>{number === 7 ? number : end2 === number - 1 ? end2 : '...' }</button>}
                    {size && number > 7 && <button  className={page === number ? 'paginateButtonSelect' : null} value={number}>{number}</button>}                  
                    </div>
                  {page === number ? 
                    null 
                  : 
                    <button onClick={Next}>
                    <IoIosArrowForward/>
                  </button>}
                </div>
                <div className='paginateCreate'>
                    <span>
                        <a href='/create/pokemon' style={{textDecoration: 'none' ,color: 'white'}}>Create Pokemon</a>
                    </span>
                    <button>
                        <BsFillArrowRightCircleFill/>
                    </button>
                </div>
            </div>
        </div>
    )
}
