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
             <img src="" alt="" />
               
             <ul className='flex justify-evenly  gap-[20px] w-[60%] border-2'> 
              <li><Link to="./">home</Link></li>
              <li><Link to="/About">about</Link></li>
              <li><Link to="/Tecno">Tecno</Link></li>
              
             </ul>
         
   <h1>salom</h1>
               
            <button className=''></button>
  
  





<Routes>
  <Route path='./' element={<Home/>}></Route>
  <Route path='/About' element={<About/>}></Route>
   <Route path='/Tecno' element={<Tecno/>}></Route>
   



</Routes>

   </div>

    </BrowserRouter>
  )
}

export default App 
