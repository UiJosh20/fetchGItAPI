import Fetch from './Components/Fetch'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Layout from './Components/Layout'
import ContactDetails from './Components/ContactDetails'

function App() {

  return (
    <>

    <Routes>
     <Route path='/' element={<Layout/>}>
     <Route path='/home' element={<Home/>}/>
        <Route path='/fetch/details/:id' element={<ContactDetails/>}></Route>
      <Route path='/fetch' element={<Fetch/>} />
  
     </Route>
     
    </Routes>
      
    </>
  )
}

export default App
