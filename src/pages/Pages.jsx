import React from 'react'
import Home from './Home'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Cuisine from './Cuisine'

const Pages = () => {
  return (
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cuisine/:id' element={<Cuisine/>}/>

    </Routes>
    
  )
}

export default Pages