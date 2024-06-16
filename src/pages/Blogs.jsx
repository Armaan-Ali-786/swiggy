import React, { useState } from 'react'
import mask from '../images/Mask-group.png'
import {data1} from '../Data/Blogdata'

export default function Blogs() {
  let [active,setActive] = useState(0)
  let arr = ['Life at Swiggy','Updates','Snackbles']
  console.log(data1)
  let data = data1[active].map((v,i)=>{
    return(
      <Card item={v} key={i} index={i}/>
    )
  })

  return (
    <div className='max-w-[1120px] mx-auto mt-[50px] mb-[30px]'>
      <h1 className='text-[30px] font-semibold'>Blogs</h1>
      <ul className='flex gap-[20px] mt-[20px]'>
        {
          arr.map((v,i)=>{
            return(
              <li className={`${(i == active) ? "bg-[#FE5005] text-white" : "border border-black text-[#929496]"} py-[12px] px-[15px] rounded-[40px]`} onClick={()=>setActive(i)}>
                {v}
              </li>
            )
          })
        }
      </ul>
      <div className='grid grid-cols-3 gap-[30px] my-[40px]'>
        {data}
      </div>
      <button className='bg-[#FE5005] text-white rounded-[10px] px-[20px] py-[10px]  mt-[80px] mx-auto block'>See More</button>
    </div>
  )
}

function Card({item}){
  return(
    <div className='shadow-lg rounded-[26px] pb-[15px] group overflow-hidden'>
      <img src={item.image} alt="" className='h-[200px] group-hover:scale-[1.1] duration-300'/>
      <div className='px-[15px] py-[20px]'>
        <p className='text-[#97999B] font-semibold'>April 1,2024</p>
        <h3 className='text-[18px] font-semibold leading-6 mt-[15px] mb-[30px]'>
          Passion matched with purpose : A Senior Manager 's fulfilling Joyride at Swiggy
        </h3>
        <button className='bg-[#F15700] text-white rounded-[10px] py-[10px] px-[15px]'>Read More</button>
      </div>
    </div>
  )
}