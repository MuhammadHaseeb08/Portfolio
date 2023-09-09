import React from 'react'
import Cubei from '../Cube/Cube'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade'; 
import { Typography } from "@mui/material";
import { motion } from 'framer-motion';
import "./Person.css"
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
// import Star from "./../../images/logo1.png"
export default function Persone() {
  let parent={
    
    visis:{
     
    rotate:360
    },
   
  }
  return (
    <div>
      {/* <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={3} >
        <Grid xs={6} style={{left:"20%"}} >
          <div><h1>sdf</h1></div>
        </Grid>
        <Grid xs={6} >
          <div><h1>sdf</h1></div>
        </Grid>
       
        
      </Grid>
    </Box> */}
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
            top: "25%",
            columnGap: "20rem",
            // fontFamily: "'La Belle Aurore', cursive"
            // overflow:"hidden"
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
                <Typography variant='h3' style={{color:"#ffd700", fontFamily: "'La Belle Aurore', cursive"}}>About me</Typography>
              </div>
              </Zoom>
              <Zoom top delay={1000} >
            <div>
            <p> I’m very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
            <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
            </p>
            <p> If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!</p>
            </div>
            </Zoom>
           
          </Box>
          <Box
            sx={{
            // backgroundImage:Star
            }}
          >
            <Rotate delay={1500}  bottom right>
            <motion.div
            className='bc'
              style={{ width: "10vw", height: "62vh",}}
              variants={parent} 
              transition={{ ease: "linear", duration: 3, repeat: Infinity }}
              
            >
              <Cubei/>
            </motion.div>
            </Rotate>
          </Box>
        </Box>
      </Box>
      </div>
    </div>
  )
}
