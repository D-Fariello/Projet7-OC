import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Error from './pages/Error'
import Logement from './pages/Logement'

function App() {
  const [count, setCount] = useState(0)

  return(
    <div>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Apropos" element={<Apropos/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/Logement/:id" element={<Logement/>} />
    </Routes>

    </BrowserRouter>
    </div>
  )
  
}

export default App
