import React from 'react'
import Header2 from '../pages/Header2'
import SwiggyCorpoAbout from '../pages/SwiggyCorpoAbout'
import SwiggyCorpoTab from '../pages/SwiggyCorpoTab'
import SwiggyCorpoIndustry from '../pages/SwiggyCorpoIndustry'
import SwiggyCorpoCount from '../pages/SwiggyCorpoCount'
import SwiggyCorpoJourney from '../pages/SwiggyCorpoJourney'
import SwiggyCorpoBanner from '../pages/SwiggyCorpoBanner'
import Team from '../pages/Team'
import Blogs from '../pages/Blogs'
import Scan from '../pages/Scan'
import SwiggyCorpoFooter from '../pages/SwiggyCorpoFooter'

export default function SwigyCorporate() {
  return (
    <div>
      <Header2/>
      <SwiggyCorpoAbout/>
      <SwiggyCorpoTab/>
      <SwiggyCorpoIndustry/>
      <SwiggyCorpoCount/>
      <SwiggyCorpoJourney/>
      <SwiggyCorpoBanner/>
      <Team/>
      <Blogs/>
      <Scan/>
      <SwiggyCorpoFooter/>
    </div>
  )
}
