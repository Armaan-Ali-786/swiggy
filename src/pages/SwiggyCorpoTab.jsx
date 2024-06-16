import React, { useState } from 'react'
import dboy from '../images/dboy.png'

export default function SwiggyCorpoTab() {
    let [opentab,setOpentab] = useState(0)
    let tab = [
        {
            title : "Mission"
        },
        {
            title : "Vision"
        },
        {
            title : "Value"
        },
        {
            title : "Walkthrough"
        }
    ]

  return (
    <div className='py-[100px] max-w-[1200px] mx-auto'>
        <div className='grid grid-cols-4 gap-[20px] font-semibold'>
            {
                tab.map((v,i)=>{
                    return(
                        <Tab item={v} key={i} index={i} ot={opentab} sot={setOpentab}/>
                    )
                })
            }
        </div>
        <div className='mt-[40px]'>
            <div className='items-center justify-between' style={{display:(opentab == 0) ? 'flex' : 'none'}}>
                <div className='basis-[50%]'>
                    <img src={dboy}/>
                </div>
                <div className='basis-[50%]'>
                    <h3 className='text-[30px] font-semibold'>Mission</h3>
                    <p className='mt-[10px] leading-8 text-[19px]'>
                    Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience.<br/> Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.”
                    </p>
                </div>
            </div>
            <div style={{display:(opentab == 1) ? 'block' : 'none'}}>
                <iframe width="100%" height="478" src="https://www.youtube.com/embed/fLz2fgU_x1Q" title="Swiggy Vision" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='grid-cols-2 gap-[20px]' style={{display:(opentab == 2) ? 'grid' : 'none'}}>
                <div>
                    <h3 className='text-[20px] font-semibold'>Values</h3>
                    <p className='mb-[20px] text-[18px] leading-8'>
                        Our actions are strongly defined by the Swiggy values. Through ups, downs, and everything in between; Swiggsters put these values into practice in their everyday ways of working. Read on to get a taste of how Swiggsters live and breathe these values and how it forms the backbone of our culture.
                    </p>
                    <button className='text-white bg-[#FE5005] rounded-[10px] p-[10px]'>Know More</button>
                </div>
                <div>
                    <iframe width="100%" height="355" src="https://www.youtube.com/embed/TjEK0MbJUz4" title="Swiggy Values Unboxed - 2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className='items-center justify-between gap-[20px]' style={{display:(opentab == 3) ? 'flex' : 'none'}}>
                <div className='basis-[35%]'>
                    <h3 className='text-[32px] font-semibold'>Walkthrough</h3>
                    <p className='mt-[20px] text-[20px] leading-8'>
                        Old love with young love feels. Watch the story of two empty nesters, Shailja and Pradeep, as they navigate through love, life, food, and a badminton court
                    </p>
                </div>
                <div className='basis-[60%]'>
                    <iframe width="100%" height="355" src="https://www.youtube.com/embed/TjEK0MbJUz4" title="Swiggy Values Unboxed - 2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}


function Tab({item,index,ot,sot}){
    // bg-[#FE5005]
    return(
        <div className={`${(index == ot) ? 'bg-[#FE5005] text-white border-0' : 'text-[#909294] border-[#BBBABB] border bg-white'} flex items-center justify-center  rounded-[30px] text-[16px] select-none  py-[12px]`} onClick={()=>sot(index)}>
            {item.title}
        </div>
    )
}