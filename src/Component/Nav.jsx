import React from 'react';
import './main.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes,
    Link,
    Form} from "react-router-dom";
import logo from '../Component/Assets/Images/logo.jpg';

import About from './Pages/About'
import Shedule from './Pages/Shedule';
import Announcers from './Pages/Announcers';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
function Nav() {
  const [toggle, setToggle]=useState(false)
  return (
   
   
   <div>
<div className='site-id'>
    <img src={logo} alt='logo'/>
</div>

<nav className='navbar'>
    <ul className='navlinks'>
      <li><Link to="/">Home</Link> </li>
      <li><Link to="/About">About</Link> </li>
      <li><Link to="/Shedule">Shedule</Link> </li>
      <li><Link to="/Announcers">Announcers</Link> </li>
      <li><Link to="/Contact">Contact</Link> </li>
      
    </ul>
</nav>
<Routes>
  <Route path='/' element={<Home/>}/>
<Route exact path='/About' element={<About/>}/>
<Route path='/Shedule' element={<Shedule/>}/>
<Route path='/Announcers' element={<Announcers/>}/>
<Route path='/Contact' element={<Contact/>}/>
</Routes>





    </div>
  )
}

export default Nav