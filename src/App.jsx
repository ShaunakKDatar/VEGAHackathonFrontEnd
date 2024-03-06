import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar/Navbar'
import Calendar from './Components/Calender/Calender'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Calendar/>
    </>
  )
}

export default App
