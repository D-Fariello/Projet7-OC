import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Error from './pages/Error'
import Logement from './pages/Logement'
import './style/SASS/main.scss'; // Import the main SCSS file
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return(
    <div className="app-div">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Apropos" element={<Apropos/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/Logement/:id" element={<Logement/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
  
}

export default App
