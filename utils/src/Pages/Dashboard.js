import React from 'react'

import { Header } from '../components/Header'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'

import { Header2 } from '../components/Header2'

// import Practice from './components/Practice'
import image from "./1.jpg"
import image2 from "./3.jpg"; 
import image3 from "./2.jpg"; 

const Dashboard = () => {
    const mystyle={
        width:'100%',
        height:'120vh',
        backgroundImage:`url(${image})`,
        backgroundRepeat:"no-repeat",
        
      }
      const mystyle2={
        width:'100%',
        height:'200vh',
        backgroundImage:`url(${image2})`,
        backgroundRepeat:"no-repeat",
        
      }
      const mystyle3={
        width:'100%',
        height:'100vh',
        backgroundImage:`url(${image3})`,
        backgroundRepeat:"no-repeat",
        
      }
  return (
    <>
   
    <div className="container bg-cover bg-center h-screen" style={mystyle}>
    <Navbar/>
    <Header/>
    </div>
    <div className="container bg-cover bg-center h-screen" style={mystyle}>
    <Header2  />
    </div>
    <div className="container bg-cover bg-center h-screen" style={mystyle}>
    <Pricing/>
    
    {/* <Statistic/> */}
    </div>
   
     <div className="container bg-cover bg-center h-screen "style={mystyle2} >
    </div>
    
    
    </>
  )
}

export default Dashboard
