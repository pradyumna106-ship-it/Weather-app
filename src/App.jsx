import React,{ useState } from 'react'
import Forcast from './components/Forcast'

function App() {

  return (
    <div className="w-screen min-h-screen flex justify-center items-start p-4 bg-gray-900  items-center">
    <Forcast className="justify-items-center-safe"/>
    </div>
  )
}

export default App
