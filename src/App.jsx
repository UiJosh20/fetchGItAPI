import { useState } from 'react'
import './App.css'
import Fetch from './Components/fetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fetch/>
    </>
  )
}

export default App
