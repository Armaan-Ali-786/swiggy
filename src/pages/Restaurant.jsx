import React, { useEffect } from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios';
library.add(fab, fas, far)

export default function Restaurant() {

    let [loop,setLoop] = useState([])
    let [origin,setOrigin] = useState(0)

    let rest=()=>{
        axios.get('http://localhost:5000/top-restaurant-chains')
        .then((res)=>res.data)
        .then((final)=>setLoop(final))
    }
    useEffect(()=>{
        rest()
    },[])
  return (
    <>
      <section className='py-[30px] select-none'>
        <div className='max-w-[1120px] mx-auto border-b'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-[22px]'>Top restaurant chains in chandigarh</h1>
                <div className='flex items-center gap-[15px]'>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" className='p-[10px] bg-[#DFE0E5] rounded-full' onClick={()=>(origin >= 0) ? '' : setOrigin(origin+2)}/>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='p-[10px] bg-[#DFE0E5] rounded-full' onClick={()=>(origin <= -7) ? '' : setOrigin(origin-2)}/>
                </div>
            </div>
            <div className='flex items-center gap-[50px] py-[30px] overflow-hidden'>
                {
                    loop.map((v,i)=>{
                        return(
                            <div style={{transform:`translateX(${origin*100}%`}} className='duration-700'>
                                <div className='w-[300px] h-[200px] shadow-[inset_0px_-25px_15px_0px_black] bg-no-repeat bg-cover rounded-[10px] relative' style={{backgroundImage:`url(http://localhost:5000/images/${v.image})`}}>
                                    <h3 className='absolute bottom-[5px] left-[10px] text-white text-[20px] font-bold uppercase'>{v.offer}</h3>
                                </div>
                                <div className='px-[15px] py-[10px]'>     
                                    <h2 className='font-semibold text-[18px]'>{v.title}</h2>
                                    <div className='font-semibold text-[16px] flex gap-[5px] items-center'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                                        <div>
                                            {v.rating} . {v.minTime}-{v.maxTime} mins
                                        </div>
                                    </div>
                                    <p className='text-[#8F9293]'>{v.name}</p>
                                    <p className='text-[#8F9293]'>{v.place}</p>
                                </div>
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
