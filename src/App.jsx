import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Details from './Pages/Details'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Pages/:cityValue/:propertyValue/:priceValue/details' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
