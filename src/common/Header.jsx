import React, { useState } from 'react';
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Link, useSearchParams } from 'react-router-dom';
import Sign from '../MainPage/Sign';
library.add(fab, fas, far)

export default function Header(props) {
    let data = [
        {
            icon:<FontAwesomeIcon icon="fa-solid fa-bag-shopping" />,
            text:"Swiggy Corporate",
            sup:'',
            link:'/about-us'
        },
        {
            icon:<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />,
            text:"Search",
            sup:'',
            link:'/about'
        },
        {
            icon:<FontAwesomeIcon icon="fa-solid fa-ferry" />,
            text:"Offers",
            sup:'New',
            link:'/offers'
        },
        {
            icon:<FontAwesomeIcon icon="fa-solid fa-shop" />,
            text:"Help",
            sup:'',
            link:'/help'
        },
        {
            icon:<FontAwesomeIcon icon="fa-regular fa-user" />,
            text:"Sign In",
            sup:'',
            link:''
        },
        {
            icon:<FontAwesomeIcon icon="fa-brands fa-shopify" />,
            text:"Cart",
            sup:'',
            link:'/cart'
        },
    ]

    let [show,setShow] = useState(false)
  return (
    <>
    <Sign show={show} setShow={setShow}/>
    <section className='shadow-lg sticky top-0 left-0 duration-500 bg-white z-[999]' style={{top:(props.nav) ? '-100%' : '0%',display:(props.scrollHeader) ? 'none' : 'block'}}>
        <div className='max-w-[1320px] mx-auto'>
            <div className='flex justify-between items-center py-[10px]'>
                <div>
                    <div className='flex gap-[20px] items-center'>
                        <div>
                            <img src={logo} width={90}/>
                        </div>
                        <div className='flex items-center gap-[20px] hover:text-[#fc8019]'>
                            <p className='text-[14px] font-bold relative after:content-[""] after:w-[100%] after:h-[2px] after:bg-[black] after:absolute after:bottom-[-10%]    after:left-[0%] hover:after:bg-[#fc8019]'>Other</p>
                            <FontAwesomeIcon icon="fa-solid fa-angle-down" className='text-[#fc8019]'/>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className='flex items-center gap-[40px]'>
                        {
                            data.map((val,item)=>{
                                return(
                                    <>
                                        <Link to={val.link} onClick={()=>(val.link == '') ? setShow((show) ? false : true) : false}>
                                            <li className='flex items-center font-medium gap-[10px] hover:text-[#fc8019]'>
                                                {val.icon} 
                                                {val.text}<sup className='font-bold text-[#fc8019]'>{val.sup}</sup>
                                            </li>
                                        </Link>
                                    </>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div> 
    </section>
    </>
  )
}
