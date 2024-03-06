import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import RegisterStudent from './Components/RegisterStudent'
import RegisterTPO from './Components/RegisterTPO'
import RegisterCompany from './Components/RegisterCompany'

function App() {
 

  return (
    <>
<Login/>
<RegisterStudent/>
<RegisterTPO/>
<RegisterCompany/>
    </>
  )
}

export default App
