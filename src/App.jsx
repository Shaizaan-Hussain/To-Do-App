import React, { useRef } from 'react'
import ToDo from './components/ToDo'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='bg-gradient-to-r from-white-500 to-blue-300 py-4 min-h-screen grid'>
      <ToDo>
      </ToDo>
      <Footer/>
    </div>
  )
}



export default App