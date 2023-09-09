import React from 'react'
import Cube from 'react-3d-cube';
import "./Cube.css"
import { motion } from 'framer-motion';
export default function Cubei() {
  return (
    <div>
   

  
    <div
      style={{
        width: 300,
        height: 300,
        // backgroundImage:""
        
      }}
      
    >
      <Cube size={300} index="front" >
        <div className='fasce'><img src='./images/logo1.png'  width="50%"/></div>
        <div className='fasce'><img src='./images/logo2.png' width="100%"/></div>
        <div className='fasce'><img src='./images/logo3.png' width="100%"/></div>
        <div className='fasce'><img src='./images/logo4.png' width="100%"/></div>
        <div className='fasce'><img src='./logo192.png' width="100%"/></div>
        <div className='fasce'><img src='./images/mui.png' width="100%"/></div>
      </Cube>
    </div>
  </div>
  )
}
