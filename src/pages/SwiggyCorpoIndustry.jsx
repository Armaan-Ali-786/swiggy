import React from 'react'
import rocketboy from '../images/rocketboy.png'

export default function SwiggyCorpoIndustry() {
  return (
    <div>
      <div className='max-w-[1120px] mx-auto'>
        <div className='grid grid-cols-2 gap-[30px]'>
            <div>
                <h3 className='text-[22px] mb-[20px] font-semibold'>
                    Industry pioneer
                </h3>
                <p className='text-[20px] text-[#8D8F91] leading-10'>
                    Being among the first few entrants, Swiggy has successfully pioneered the hyperlocal commerce industry in India, launching Food Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering status of Swiggy, it is well-recognised as a leader in innovation in hyperlocal commerce and as a brand synonymous with the categories it is present in.
                </p>
            </div>
            <div>
                <img src={rocketboy} className='h-[396px]' />
            </div>
        </div>
      </div>
    </div>
  )
}
