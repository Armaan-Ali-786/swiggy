import React from 'react'

export default function BestCuisines() {

  let restaurantApi = [
    {
        restaurant1 : 'Punjabi Restaurant near me'
    },
    {
        restaurant1 : 'Delhi Restaurant near me'
    },
    {
        restaurant1 : 'Pune Restaurant near me'
    },
    {
        restaurant1 : 'Rajasthan Restaurant near me'
    },
    {
        restaurant1 : 'Himachal Restaurant near me'
    },
    {
        restaurant1 : 'Kerala Restaurant near me'
    },
    {
        restaurant1 : 'Kashmir Restaurant near me'
    },
    {
        restaurant1 : 'Punjabi Restaurant near me'
    },
    {
        restaurant1 : 'Calcutta Restaurant near me'
    },
    {
        restaurant1 : 'Banglore Restaurant near me'
    },
    {
        restaurant1 : 'Chennai Restaurant near me'
    },
    {
        restaurant1 : 'Bombay Restaurant near me'
    }
    
  ]

  let resData = restaurantApi.map((v,i)=>{
    return(
        <UlBox key={i} resItem={v}/>
    )
  })

  return (
    <section className='pb-[50px]'>
      <div className='max-w-[1320px] mx-auto'>
        <div>
            <h2 className='font-bold text-[24px]'>Best Places To Eat Across Cities</h2>
            <div className='grid grid-cols-4 gap-[20px] mt-[30px]'>
                {resData}
            </div>
        </div>
        <div className='pt-[50px]'>
            <h3 className='font-bold text-[24px]'>Explore Every Restaurants Near Me</h3>
            <div className='grid grid-cols-2 gap-[20px] py-[30px]'>
                <div className='border-[#E5E6E6] text-center rounded-lg border-2 p-[10px]'>Explore Restaurant near me</div>
                <div className='border-[#E5E6E6] text-center rounded-lg border-2 p-[10px]'>Explore Top Rated Restaurant near me</div>
            </div>
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
