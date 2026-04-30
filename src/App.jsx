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
              <li><Link to="./">home</Link></li>
              <li><Link to="/About">about</Link></li>
              <li><Link to="/Tecno">Tecno</Link></li>
              <li><Link to="/City">city</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
             </ul>
                <p>
                  <span>777777777</span> <br />
                  <span>55555555</span>
                </p>

                <a href=""></a>
                youtubega kirish
            <button className=''></button>
  
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo necessitatibus facere nobis enim magni, dicta consectetur. Beatae rerum quos delectus eaque! Voluptatum natus veniam labore nihil facilis officia qui quaerat?</p>





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
