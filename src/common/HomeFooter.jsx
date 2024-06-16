import React from 'react'
import gplay from '../images/play_store.avif'
import appstore from '../images/app_store.avif'

export default function HomeFooter() {
  return (
    <section className='bg-[#F0F0F5] py-[20px]'>
      <div className='max-w-[1320px] mx-auto flex justify-center gap-[100px]'>
        <h3 className='text-[24px] text-[#3D4046] font-bold'>For better experience,download<br/> the swiggy app now</h3>
        <div className='flex gap-[20px]'>
            <div className='w-[200px]'>
                <img src={gplay} className='w-full' alt="" />
            </div>
            <div className='w-[200px]'>
                <img src={appstore} className='w-full' alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}
