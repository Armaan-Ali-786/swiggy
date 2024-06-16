import React, {  useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import { context } from '../Global/MainContext';
library.add(fab, fas, far)

export default function Helpsupport({nav,setNav}) {

    let [height,setHeight] = useState(false)

    window.addEventListener('scroll',checkHeight)

    function checkHeight(){
        if(window.scrollY <= 180){
            console.log('less')
            setHeight(false)
            setNav(false)
        }
        else if(window.scrollY >= 220){
            console.log('more')
            setHeight(true)
            setNav(true)
        }
        else{
            
        }
    }
    
    let data = [
        {
            id : 0,
            title :  'Partner Onbroading',
            des : "hi partner Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reprehenderit eius officia facilis accusantium deleniti voluptatum, ipsum libero necessitatibus porro earum, modi ea quis veritatis commodi minus sed consectetur praesentium"
        },
        {
            id : 1,
            title : 'Legal',
            des : 'legal is a certificate'
        },
        {
            id : 2,
            title : "FAQ 'S",
            des : 'you can ask questions here'
        }
    ]

    let faqdata = [
        {
            id:0,
            title:'I WANT TO BE A PARTNER OF SWIGGY COMPANY',
            para : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt quisquam molestiae, magnam enim eius quibusdam id, commodi nisi natus, illo perferendis maiores placeat deleniti soluta ab accusamus eum? Voluptatum?'
        },
        {
            id:1,
            title:'HOW CAN I CONTACT WITH THE SWIGGY CUSTOMER CARE',
            para : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt quisquam molestiae, magnam enim eius quibusdam id, commodi nisi natus, illo perferendis maiores placeat deleniti soluta ab accusamus eum? Voluptatum?'
        },
        {
            id:2,
            title:'WHAT IS THE BEST FOOD SERVE BY THE SWIGGY THAT IS MOST POPULAR IN THE WORLD',
            para : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt quisquam molestiae, magnam enim eius quibusdam id, commodi nisi natus, illo perferendis maiores placeat deleniti soluta ab accusamus eum? Voluptatum?'
        },
        {
            id:3,
            title:'HOW CAN SWIGGY ABLE TO FIND THE LOCATION OF THE PASSENGER',
            para : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt quisquam molestiae, magnam enim eius quibusdam id, commodi nisi natus, illo perferendis maiores placeat deleniti soluta ab accusamus eum? Voluptatum?'
        },
        {
            id:4,
            title:'AFTER I SUBMITTED MY DOCUMENT HOW MANY TIME IT TAKE TO PROCESS THE WHOLE PROCESS',
            para : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt quisquam molestiae, magnam enim eius quibusdam id, commodi nisi natus, illo perferendis maiores placeat deleniti soluta ab accusamus eum? Voluptatum?'
        },
        {
            id:5,
            title:'IN HOW MANY STATES SWIGGY WORK PROPERLY',
            para : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt quisquam molestiae, magnam enim eius quibusdam id, commodi nisi natus, illo perferendis maiores placeat deleniti soluta ab accusamus eum? Voluptatum?'
        },
        {
            id:6,
            title:'WHAT IS THE RECIPY FOR MAKING A BIG PULAO',
            para : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt quisquam molestiae, magnam enim eius quibusdam id, commodi nisi natus, illo perferendis maiores placeat deleniti soluta ab accusamus eum? Voluptatum?'
        },
        {
            id:7,
            title:'WHAT ARE THE MANDATORY DOCUMENT TO WORK ON MY PROJECT',
            para : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deserunt quisquam molestiae, magnam enim eius quibusdam id, commodi nisi natus, illo perferendis maiores placeat deleniti soluta ab accusamus eum? Voluptatum?'
        },
    ]

    let [open,setOpen] = useState(0)
    let fdata = faqdata.map((v,i)=>{
        return(
            <Faq key={i} num={i} title={v} open={open} sopen={setOpen}/>
        )
    })

    let [show,setShow] = useState(0)

  return (
    <section className='relative bg-[#37718D] duration-700 pt-[30px]' style={{background:(height == true) ? 'white' : '#37718D'}}>
        <div className='text-white pl-[40px] py-[20px] z-[9999] duration-500 right-0 left-0' style={{background:(nav) ? '#37718D' : '',position:(nav) ? 'sticky' : 'static',top:(nav) ? '0' : '-20%'}}>
            <div className='max-w-[1320px] mx-auto'>        
                <h2 className='font-semibold text-[28px]' style={{fontSize:(nav) ? '22px' : '28px'}}>Help & Support</h2>
                <p style={{fontSize:(nav) ? '12px' : '14px'}}>Let 's take a step ahead and help you better</p>
            </div>
        </div>
        <div className='max-w-[1320px] mx-auto'>

            <div className='bg-white p-[50px] border-r-2 mb-[20px]'>
                <div>
                <div className='flex gap-[30px]'>
                    <ul className='basis-[23%] text-[15px] font-medium text-[#848795] bg-[#EDF1F7] pt-[40px] pl-[30px]'>
                        {
                            data.map((v,i)=>{
                                return(
                                    <li onClick={()=>setShow(i)} style={{backgroundColor:(show == i) ? 'white' : '',color:(show == i) ? 'black' : '#848795'}} className='hover:text-black  py-[25px] pl-[20px]'>{v.title}</li>
                                )
                            })
                        }
                    </ul>
                    <div className='basis-[75%]'>
                    {
                        data.map((v,i)=>{
                            return(
                                <div className='pt-[20px]'>
                                    <h2 style={{display:(v.id == show) ? 'block' : 'none'}} className='font-semibold text-[20px] mb-[20px]'>{v.title}</h2>
                                    {
                                        (v.id == show)
                                        ?
                                        fdata
                                        :
                                        ''
                                    }
                                </div>
                            )
                        })
                    }
                    </div>
                </div>

                </div>
            </div>
        </div>

    </section>
  )
}

function Faq(props){
    return(
        <div className='border-b px-[15px]' style={{paddingBottom:(props.open == props.num) ? '20px' : '0px'}}>
            <div className='group flex items-center justify-between py-[30px]' onClick={()=>props.sopen(props.num)}>
                <h4 className='group-hover:text-[#FC8019]'>{props.title.title}</h4>
                <FontAwesomeIcon icon="fa-solid fa-angle-down" className='text-[24px] duration-200' style={{rotate:(props.open == props.num) ? '180deg' : '0deg'}}/>
            </div>
            <div className='text-[#848795] text-[14px] leading-6' style={{height:(props.open == props.num) ? 'auto' : '0px',display:(props.open == props.num) ? 'block' : 'none'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, similique animi? Maxime quas expedita illo. Commodi voluptatem pariatur molestiae voluptatibus, facere laborum accusantium mollitia, ullam totam doloribus veniam adipisci quas?
            </div>
        </div>
    )
}