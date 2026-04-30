import React from 'react'
 import { BrowserRouter , Link, Route , Routes } from 'react-router-dom'
import Home from './companents/Home'
import Tecno from './companents/Tecno'
import City from './companents/City'
import Contact from './companents/Contact'
import About from './companents/About'
const App = () => {
  return (
    <BrowserRouter>
   <div className='h-auto border-2 flex gap-[20px]+
   
   мjustify-around items-center'>
      
               <p>
                <span>99999999999</span>
   <br /> 
                <span>88888888888</span>
               </p>
             <ul className='flex justify-evenly  gap-[20px]'> 
              <li><Link to="./"></Link>home</li>
              <li><Link to="/About"></Link>About</li>
              <li><Link to="/Tecno"></Link>Tecno</li>
              <li><Link to="/City"></Link>City</li>
              <li><Link to="/Contact"></Link>Contact</li>
             </ul>
                <p>
                  <span>777777777</span> <br />
                  <span>55555555</span>
                </p>
            <button className=''></button>
  






<Routes>
  <Route path='./' element={<Home/>}></Route>
  <Route path='/About' element={<About/>}></Route>
   <Route path='/Tecno' element={<Tecno/>}></Route>
   <Route path='/City' element={<City/>}></Route>
   <Route path='/Contact' element={<Contact/>}></Route>



</Routes>

   </div>

    </BrowserRouter>
  )
}

export default App 
