import React from 'react'
import Header from '../common/Header'
import { useState } from 'react'
import Helpsupport from '../pages/Helpsupport'
import { useActionData } from 'react-router-dom'

export default function Help() {

  let [nav,setNav] = useState(false)

  return (
    <div>
      <Header nav={nav} setNav={setNav}/>
      <Helpsupport nav={nav} setNav={setNav}/>
    </div>
  )
}
