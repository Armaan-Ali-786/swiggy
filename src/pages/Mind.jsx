import React, { useEffect } from 'react';
import pizza from '../images/Pizza.avif'
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far)

export default function Mind() {

    let [pizza,setPizza] = useState([]);
    let [cross,setCross] = useState(0)

    let category = () => {
        axios.get("http://localhost:5000/categories")
        .then((res)=>res.data)
        .then((final)=>setPizza(final))
    }
    useEffect(()=>{
        category()
    },[])
    console.log(cross)

    let next=()=>{
        if(cross <= -15){
            console.log(
                'work'
            )
        }
        else{
            setCross(cross-3)
        }
    }
  return (
    <>
      <section className='select-none'>
        <div className='max-w-[1120px] mx-auto py-[20px] border-b'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-[22px]'>What 's on your mind?</h1>
                <div className='flex items-center gap-[15px]'>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" className='p-[10px] bg-[#DFE0E5] rounded-full' onClick={()=>(cross >= 0) ? "" : setCross(cross+3)}/>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='p-[10px] bg-[#DFE0E5] rounded-full' onClick={next}/>
                </div>
            </div>
            <div className='flex py-[30px] gap-[20px] overflow-hidden px-[10px]'>
                {
                    pizza.map((val,item)=>{
                        return(
                            <div className='w-[150px] shrink-0 duration-700' style={{transform:`translateX(${cross*100}%)`}}>
                                <img src={`http://localhost:5000/images/${val.image}`}/>
                             </div>
                        )
                    })
                }

            </div>
        </div>
      </section>
    </>
  )
}
