import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'
<<<<<<< HEAD
import MapPage from './components/MapPage' 

const App = () => {
  
=======
import MapPage from './components/MapPage' // Import Leaflet Map page

const App = () => {
>>>>>>> d6ececb12d2c9a1beed2d4342117b300af72dbec
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
<<<<<<< HEAD
        <Route path="/map" element={<MapPage />} />  
=======
        <Route path='/map' element={<MapPage />} /> {/* Add Leaflet Map route */}
>>>>>>> d6ececb12d2c9a1beed2d4342117b300af72dbec
      </Routes>
      <Footer />
    </div>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> d6ececb12d2c9a1beed2d4342117b300af72dbec
