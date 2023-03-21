import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import { Price } from './components/Price'
import Map from './components/Map'
import Form from './components/Form'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element = {<Dashboard/>} / >
      <Route path='/price' element = {<Price/>} / >
      <Route path='/map' element = {<Map/>} / >
      <Route path='/form' element = {<Form/>} / >
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
