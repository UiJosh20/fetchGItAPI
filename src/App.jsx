import { useState } from 'react'
import Nav from './Components/Nav'
import Fetch from './Components/Fetch'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/fetch' element={<Fetch/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
