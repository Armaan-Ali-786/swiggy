import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import category from '../Data/category.json';
library.add(fab, fas, far)

export default function SearchItem() {

  return (
    <>
      <div className='max-w-[900px] mx-auto'>
        <div className='flex items-center gap-[15px] max-w-[900px] mx-auto my-[40px] rounded-md border-2 border-[#dfe0e39c]'>
            <div className='basis-[96%]'>
                <input type="text" className='w-full text-[16px] h-[45px] rounded-md outline-0  pl-[15px]' placeholder='Search for restaurants and food'/>
            </div>
            <div className='basis-[3%]'>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </div>
        </div>
        <div className='pl-[15px]'>
            <h3 className='font-bold text-[20px]'>Popular Cuisines</h3>
            <div className='flex items-center overflow-hidden mt-[20px] gap-[10px]'>
                {
                    category.map((val,item)=>{
                        return(
                            <div className='w-[80px] shrink-0 duration-700'>
                                <img src={`http://localhost:5000/images/${val.image}`}/>
                             </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </>
  )
}
