import React from 'react'
import logimg from '../images/loginimg.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import category from '../Data/category.json';
library.add(fab, fas, far)

export default function Sign({show,setShow}) {

  if(show){
    document.body.style.overflow="hidden"
  }
  else{
    document.body.style.overflow="auto"
  }

  return (
    <>
      <div className='fixed pl-[40px] pt-[30px] top-0 bottom-0 duration-500 w-[38%] bg-white z-[999999]' style={{right:(show) ? '0%' : '-100%'}}>
        <FontAwesomeIcon icon="fa-solid fa-xmark" className='text-[26px] font-thin' onClick={()=>setShow(false)}/>
        <div className='w-[65%]'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-[26px] font-medium mb-[10px]'>Login</h1>
                    <p className='text-[12px] relative before:content-[""] before:top-[200%] before:w-[30px] before:absolute before:h-[2px] before:bg-black'>or <span className='text-[#FC8019]'> create an account</span></p>
                </div>
                <div>
                    <img src={logimg} width={100} alt="" />
                </div>
            </div>
            <div>
                <input type="text" placeholder='Phone Number' className='w-full h-[70px] pl-[15px] border mt-[50px]'/>
                <button className='w-full h-[50px] text-white bg-[#FC8019] pl-[15px] border mt-[20px] uppercase font-semibold'>Login</button>
                <p className='text-[12px] mt-[5px] font-medium'>By clicking on Login , I accept the Terms & Conditions & Privacy Policy</p>
            </div>
        </div>
      </div>
      <div className='fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-[9999]' onClick={()=>setShow(false)} style={{display:(show) ? 'block' : 'none'}}>
      </div>
    </>
  )
}
