import React, { useEffect, useState } from 'react'
import Header from '../common/Header';
import Mind from '../pages/Mind';
import Restaurant from '../pages/Restaurant';
import Menu from '../pages/Menu';
import BestPlace from '../pages/BestPlace';
import BestCuisines from '../pages/BestCuisines';
import HomeFooter from '../common/HomeFooter';
import HomeFooter2 from '../common/HomeFooter2';
import FilterNavbar from '../pages/FilterNavbar';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

export default function Home() {

  let [scroll,setScroll] = useState(false)
  let heightScroll;
  setInterval(()=>{
    heightScroll = window.scrollY
    if(heightScroll >= 500){
      setScroll(true)
      // console.log('work')
    }
    else{
      setScroll(false)
    }
  },1000)

  return (
    <>
      <FilterNavbar scroll={scroll}/>
      <Header scrollHeader={scroll}/>
      <Mind/>
      <Restaurant/>
      <Menu/>
      <BestPlace/>
      <BestCuisines/>
      <HomeFooter/>
      <HomeFooter2/>
    </>
  )
}
