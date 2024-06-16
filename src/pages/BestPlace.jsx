import React from 'react'

export default function BestPlace() {

  let restaurantApi = [
    {
        restaurant1 : 'Best Restaurant in Banglore'
    },
    {
        restaurant1 : 'Best Restaurant Indore'
    },
    {
        restaurant1 : 'Best Restaurant in Calcutta'
    },
    {
        restaurant1 : 'Best Restaurant in Punjab'
    },
    {
        restaurant1 : 'Best Restaurant in Haryana'
    },
    {
        restaurant1 : 'Best Restaurant in Bihar'
    },
    {
        restaurant1 : 'Best Restaurant in Jammu'
    },
    {
        restaurant1 : 'Best Restaurant in Kerala'
    },
    {
        restaurant1 : 'Best Restaurant in Himachal'
    },
    {
        restaurant1 : 'Best Restaurant in Uttar Pradesh'
    },
    {
        restaurant1 : 'Best Restaurant in Uttarakhand'
    },
    {
        restaurant1 : 'Best Restaurant in Bombay'
    },
  ]

  let resData = restaurantApi.map((v,i)=>{
    return(
        <UlBox key={i} resItem={v}/>
    )
  })

  return (
    <section className='py-[50px]'>
      <div className='max-w-[1320px] mx-auto'>
        <h2 className='font-bold text-[24px]'>Best Places To Eat Across Cities</h2>
        <div className='grid grid-cols-4 gap-[20px] mt-[30px]'>
            {resData}
        </div>
      </div>
    </section>
  )
}

function UlBox({resItem}){
    return(
        <div>
            <div className='border-[#E5E6E6] text-center rounded-lg border-2 p-[10px]'>
                {resItem.restaurant1}
            </div>
        </div>
    )
}
