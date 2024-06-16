import React from 'react'

export default function SwiggyCorpoCount() {

    let count = [
        {
            counting : '3bn+',
            order:'orders',
            border:true
        },
        {
            counting : '200K+',
            order:'restaurant parteners',
            border:true
        },
        {
            counting : '380K+',
            order:'delivery parteners',
            border:true
        },
        {
            counting : '650+',
            order:'cities in india',
            border:false
        }
    ]

  return (
    <div>
      <div className='max-w-[1120px] mx-auto my-[80px]'>
        <div className='grid grid-cols-4'>
            {
                count.map((v,i)=>{
                    return(
                        <div className='text-center py-[20px]' style={{borderRight:(v.border) ? '1px solid #8d8f91' : ''}}>
                            <h2 className='text-[#1BA672] text-[38px] font-bold'>{v.counting}</h2>
                            <p className='text-[#8D8F91]'>{v.order}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}
