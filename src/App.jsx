import { useState } from 'react'

import Navbar from './Components/Navbar/Navbar'

import './App.css'
import Login from './Components/Login'
import RegisterStudent from './Components/RegisterStudent'
import RegisterTPO from './Components/RegisterTPO'
import RegisterCompany from './Components/RegisterCompany'
import MyCalendar from './Components/Calender-Zoher/Calender-Zoher'

import Profile from './Components/Profile'

function App() {
 

  return (
    <>
{/* <Navbar />
<Login/>
<RegisterStudent/>
<RegisterTPO/>
<RegisterCompany/>
<MyCalendar/> */}
<Profile/>
    </>
  )
}

export default App
