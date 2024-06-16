import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import filter from '../Data/filter.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { context } from '../Global/MainContext';
import filtertabdata from '../Data/filtertabdata.json'
library.add(fab, fas, far)

export default function FilterNavbar(props) {
    
    let { filtercount, setFiltercount } = useContext(context)
    let [show, setShow] = useState(false)
    let [open, setOpen] = useState(false)
    let [showfiltercount,setShowfiltercount] = useState(false)

    // console.log(show)

    return (
        <>
            <Popup pop={open} closePop={setOpen} setfcount={setShowfiltercount} fcount={showfiltercount}/>
            <div className='fixed top-0 left-0 right-0 bottom-0 opacity-[0.5] bg-black z-[999]' style={{ display: (open) ? 'block' : 'none' }} onClick={() => setOpen(false)}>

            </div>
            <div className='select-none bg-white shadow-lg py-[10px] sticky z-[99] top-0 left-0 right-0' style={{ display: (props.scroll) ? 'block' : 'none' }}>
                <div className='max-w-[1360px] mx-auto flex items-center'>
                    <ul className='flex items-center basis-[78%] gap-[8px] text-[14px]'>
                        <li className='border-2 py-[5px] px-[10px] rounded-2xl cursor-pointer flex items-center justify-center gap-[5px]' onClick={() => (open) ? setOpen(false) : setOpen(true)}>
                            <span className='h-[20px] w-[20px] text-[12px] rounded-full flex items-center justify-center bg-[#f60] text-white' style={{display:(showfiltercount) ? 'flex' : 'none'}}>{filtercount}</span>Filter <FontAwesomeIcon icon="fa-solid fa-filter" />
                        </li>
                        <li className='border-2 py-[5px] px-[10px] cursor-pointer relative rounded-2xl'>
                            <div onClick={() => setShow((show) ? false : true)}>
                                Sort By
                            </div>
                            <div>

                                <div className='absolute border-[#F7771C] border-2 leading shadow-2xl rounded-xl w-[180px] z-[999] py-[10px] top-0 left-0 bg-white' style={{ display: (show) ? 'block' : 'none' }}>
                                    <div className='h-[20px] w-[20px] flex items-center justify-center border-2 border-black rounded-full mx-auto'>
                                        <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={() => setShow(false)} />
                                    </div>
                                    <div className='border-b-2 py-[10px] px-[15px]'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[15px] font-medium'>Relevance<br />(Default)</p>
                                            <div>
                                                <input type="radio" name='radiobtn' id='sort' value={'relevance'} />
                                                <label htmlFor="sort"></label>
                                            </div>
                                        </div>
                                        <div className='mt-[15px] flex items-center justify-between'>
                                            <p className='text-[15px]'>Delivery Time</p>
                                            <div>
                                                <input type="radio" name='radiobtn' id='sort' value={'relevance'} />
                                                <label htmlFor="sort"></label>
                                            </div>
                                        </div>
                                        <div className='mt-[15px] flex items-center justify-between'>
                                            <p className='text-[15px]'>Rating</p>
                                            <div>
                                                <input type="radio" name='radiobtn' id='sort' value={'relevance'} />
                                                <label htmlFor="sort"></label>
                                            </div>
                                        </div>
                                        <div className='mt-[15px] flex items-center justify-between'>
                                            <p className='text-[15px]'>Cost:Low to High</p>
                                            <div>
                                                <input type="radio" name='radiobtn' id='sort' value={'relevance'} />
                                                <label htmlFor="sort"></label>
                                            </div>
                                        </div>
                                        <div className='mt-[15px] flex items-center justify-between'>
                                            <p className='text-[15px]'>Cost:High to Low</p>
                                            <div>
                                                <input type="radio" name='radiobtn' id='sort' value={'relevance'} />
                                                <label htmlFor="sort"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pt-[10px] text-[#F7771C] pl-[10px] font-semibold'>
                                        Apply
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='border-2 py-[5px] px-[10px] rounded-2xl'>Fast Delivery</li>
                        <li className='border-2 py-[5px] px-[10px] rounded-2xl'>New on Swiggy</li>
                        <li className='border-2 py-[5px] px-[10px] rounded-2xl'>Rating 4.0+</li>
                        <li className='border-2 py-[5px] px-[10px] rounded-2xl'>Pure Veg</li>
                        <li className='border-2 py-[5px] px-[10px] rounded-2xl'>Offers</li>
                        <li className='border-2 py-[5px] px-[10px] rounded-2xl'>Rs.300-Rs.600</li>
                        <li className='border-2 py-[5px] px-[10px] rounded-2xl'>Less than Rs.300</li>
                        <div>
                        </div>
                    </ul>
                    <div className='bg-[#DFE0E5] gap-[5px] flex items-center basis-[21%] p-[10px] py-[15px] rounded-xl'>
                        <input type="text" className='bg-[#DFE0E5] text-[14px] outline-0 border-none basis-[90%]' placeholder='Search for restaurant and food' />
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='text-white' />
                    </div>
                </div>
            </div>
        </>
    )
}


function Popup({ pop, closePop ,setfcount,fcount}) {

    let { filtercount, setFiltercount,datachange, setDatachange } = useContext(context)
    let [ftabcount,setFtabcount] = useState(0)

    // console.log(filter)
    let menulist;

    menulist = filter.map((v, i) => {
        return (
            <MenuList mitem={v} mnum={i} key={i}/>
        )
    })

    let ftab = filtertabdata.map((v, i) => {
        // console.log(datachange,i)
        return (        
            <MenuItem menutab={v} menuinner={v.data} vkey={v.id} key={i} ftab={ftabcount} setftab={setFtabcount}/>
        )
    })
    // console.log(fcount)

    return (
        <div className='fixed z-[9999] translate-x-[-50%] translate-y-[-50%] bg-white shadow-lg rounded-[10px] h-[400px] w-[850px] overflow-hidden mx-auto top-[50%] left-[50%]' style={{ display: (pop) ? 'block' : 'none' }}>
            <div className='flex justify-between items-center p-[10px] border-b-2'>
                <h3 className='text-[24px] font-semibold'>Filter</h3>
                <div className='h-[30px] w-[30px] flex items-center justify-center border-2 rounded-full' onClick={() => {
                    closePop(false)
                }}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                </div>
            </div>
            <div className='flex' style={{height:(filtercount != 0) ? '300px' : '85%'}}>
                <div className='basis-[30%] relative border-r-2 h-full'>
                    <ul className='font-medium cursor-pointer text-[18px] h-full py-[20px]' style={{overflow:(filtercount != 0) ? 'scroll' : 'none'}}>
                        {menulist}
                    </ul>
                </div>
                <div className='pt-[10px] pl-[30px] overflow-y-scroll basis-[70%]'>
                    {ftab}
                </div>

            </div>
            <div className='absolute bg-white bottom-0 left-0 right-0 border-t-2 flex justify-end items-center gap-[20px] p-[10px] cursor-pointer' style={{bottom:(filtercount > 0) ? '0' : '-100%'}}>
                    <p className='text-[#f60] font-semibold text-[18px]' style={{color:(filtercount == 0) ? 'grey' : '#f60'}} onClick={()=>
                       {
                         setFiltercount(0)
                        //  setFtabcount(0)
                       }
                        }>Clear Filters</p>
                    <button className='bg-[#f60] text-white px-[60px] rounded-lg py-[10px] font-semibold' onClick={()=>{
                        setfcount(true)
                        closePop(false)                       
                    }}>Apply</button>
                </div>
        </div>
    )
}


function MenuList({ mitem, mnum, change }) {

    let { filtercount, setFiltercount,setDatachange,datachange} = useContext(context)
    let [top, setTop] = useState(0)


    return (
        <li className='h-[50px] flex items-center relative pl-[20px]' onClick={()=>{
            // setFiltercount(mnum)
            setDatachange(mnum)
        }}>
            <div className='absolute bg-[#f60] h-[60px] w-[6px] left-0 rounded-[0px_8px_8px_0px] duration-1000 top-0' style={{ display: (mnum == datachange) ? 'block' : 'none', top: `${top}%` }} onClick={() => setTop(100)}></div>
            {mitem.heading}
        </li>
    )
}

function MenuItem({menutab,menuinner,vkey,ftab,setftab}) {
    let {filtercount,setFiltercount,datachange} = useContext(context)
    let [choose,setChoose] = useState('');

    console.log(filtercount)

    useEffect(()=>{
        if(choose == 1){
            setFiltercount(filtercount+1)
            // console.log('w1',choose,filtercount)
        }
        else if(choose == 0 && filtercount != 0){
            setFiltercount(filtercount-1)
            // console.log(filtercount)
        }
        else{

        }
    },[choose])

    useEffect(()=>{
        setChoose(0)
    },[vkey])

    

    return (
            (menutab.status == "radio")
            ?
            <form className='leading-8' style={{display:(datachange == vkey) ? 'block' : 'none'}}>   
                 <p className='uppercase mb-[15px] font-semibold'>{menutab.head}</p>          
                {
                    menuinner.map((v,i)=>{
                        return(
                            <>

                                <div className='flex items-center gap-[5px]'>
                                    <input name='raido' type="radio" id='radiobtn' onClick={(e)=>{(e.target.checked) ? setChoose(choose+1) : setChoose(choose-1)
                                    // console.log(e.target.checked)
                                    }}/>
                                    <label htmlFor="radiobtn"></label>
                                    <div>{v.child1}</div>
                                </div>
                            </>
                        )
                    })
                }
            </form>
            :
            <form style={{display:(datachange == vkey) ? 'block' : 'none'}}>
                <p className='uppercase mb-[15px] font-semibold'>{menutab.head}</p>
                {
                    (menuinner.map((v,i)=>{
                        // console.log(v.cid)
                        return(
                            <>
                                <div className='flex items-center gap-[5px]'> 
                                    <input type="checkbox" id='check' onClick={(e)=>{(e.target.checked) ? setChoose(choose+1) : setChoose(choose-1)
                                    // console.log(e.target.checked)
                                    }}/>
                                    <label htmlFor="check"></label>
                                    <h3>{v.child1}</h3>
                                </div>
                            </>
                        )
                    }))
                }
            </form>
        
    )
}
