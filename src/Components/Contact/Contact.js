import React from 'react'
import { Typography } from '@mui/material'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
// import Box from '@mui/material';
import Map from '../Map/Map';
import Cubei from '../Cube/Cube'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade'; 
// import { Typography } from "@mui/material";
import { motion } from 'framer-motion';
// import "./Person.css"
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate'

export default function Contacte() {
  let form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u7tf1dv', 'template_xnaobzo', form.current, 'uKTfXglDs545jWdZr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  //   <div>
  //   <div className="text-zone">
  //   <div>
  //               <Typography variant='h3' style={{color:"#ffd700", fontFamily: "'La Belle Aurore', cursive"}}>About me</Typography>
  //             </div>
  //   <p>
  //     I am interested in freelance opportunities - especially on ambitious
  //     or large projects. However, if you have any other requests or
  //     questions, don't hesitate to contact me using below form either.
  //   </p>
  //   <div className="contact-form">
  //     <form ref={form} onSubmit={sendEmail}>
  //     {/* <form> */}
  //       <ul>
  //         <li className="half">
  //           <input placeholder="Name" type="text" name="name" required />
  //         </li>
  //         <li className="half">
  //           <input
  //             placeholder="Email"
  //             type="email"
  //             name="email"
  //             required
  //           />
  //         </li>
  //         <li>
  //           <input
  //             placeholder="Subject"
  //             type="text"
  //             name="subject"
  //             required
  //           />
  //         </li>
  //         <li>
  //           <textarea
  //             placeholder="Message"
  //             name="message"
  //             required
  //           ></textarea>
  //         </li>
  //         <li>
  //           <input type="submit" className="flat-button" value="SEND" />
  //         </li>
  //       </ul>
  //     </form>
  //   </div>
  // </div >
 
  // </div>
  <div>
 
<div  exit={{ scale:3,
opacity:0}} >
  <Box>
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexWrap: "wrap",
        left: "10%",
        position: "absolute",
        top: "15%",
        columnGap: "7rem",
        // marginTop:"5rem"
        
      }}
    >
      <Box
        sx={{
         
          
          width:"40%",
          color: "white",
          display:"flex",
          
          flexDirection:"column",
         flexWrap:"wrap"
        }}
      >
        
       
       {/* <h3>
          <div>About,me</div>
          </h3> */}
            <Zoom bottom delay={500} >
          <div>
            <Typography variant='h3' style={{color:"#ffd700", fontFamily: "'La Belle Aurore', cursive"}}>Contact me</Typography>
          </div>
          </Zoom>
          <Zoom top delay={1000} >
        <div>
        <p>  I am interested in freelance opportunities - especially on ambitious
       or large projects. However, if you have any other requests or
      questions, don't hesitate to contact me using below form either.</p>
       
        </div>
        </Zoom>
        <div>
            <form ref={form} onSubmit={sendEmail}>
       {/* <form> */}
        <ul>
          <div className='helf'>
           <li className="half">
          <input placeholder="Name" type="text" name="name" required />
          </li>
          <li className="half">
            <input
              placeholder="Email"
              type="email"
              name="email"
              required
            />
          </li>
          </div>
          <li>
            <input
              placeholder="Subject"
              type="text"
              name="subject"
              required
            />
          </li>
          <li>
            <textarea
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </li>
          <li>
            <input type="submit" className="flat-button" value="SEND" />
          </li>
        </ul>
      </form>
        </div>

       
      </Box>
      <Box
        sx={{
        // backgroundImage:Star
        }}
      >
        
        <div
        className='bc'
   
    style={{ width: "40vw", height: "70vh",background:"#035480",overflow:"hidden",}}
          
          
        >
          <img src='./images/map.jpg'/>
          {/* <Map/> */}
          {/* <Cubei/> */}
        </div>
        
      </Box>
    </Box>
  </Box>
  </div>
</div>
  
  )
}
