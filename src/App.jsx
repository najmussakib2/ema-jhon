import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Shop from './components/shop/shop'


function App() {
  

  return (
    <div className="App">
     <Header />
     <Shop />
    </div>
  )
}

export default App
