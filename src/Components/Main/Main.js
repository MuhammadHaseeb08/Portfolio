import React from "react";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade'; 

import { Typography } from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";
// import Fade from 'react-reveal/Fade';

export default function Main() {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  let parent={
    
    visis:{
      scale:[0,1],
    opacity:[0,1],
    rotate:360
    },
    transition:{
      duration:1,
      // delay:1
    }
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
<motion.div  exit={{ scale:3,
    opacity:0}} >
      <Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexWrap: "wrap",
            left: "13%",
            position: "absolute",
            top: "25%",
            columnGap: "27rem",
            // overflow:"hidden"
            
          }}
        >
          <Box
            sx={{
              // paddingRight: "300px",
              // color: "rgb(0, 132, 255)",
              // fontFamily: "'La Belle Aurore', cursive",
              // fontFamily:""
              color: "white",
            }}
          >
            {/* <div> </div> taglikhna */}
            <Flip left cascade>
            <Typography variant="h3" style={{color:"#ffd700", fontFamily: "'La Belle Aurore', cursive"}}>
              <div>Salam</div>
              <div >
                I'm ,{" "}
                <span >
                  Haseeb
                </span>
              </div>
              <div>web.developer</div>
            </Typography>
            </Flip>
          </Box>
          <Box
            sx={{
              // width: "50vw",
              // height: "100vh",
              // border: "2px solid blue",
              borderRadius: "10px",
              // textAlign: "center",
              // boxShadow:
              //   "0 2px 4px rgb(0 0 0 / 20%), 0 10px 20px rgb(0 0 0 / 20%)",
              // background: "white",
              // overflow:"hidden"
            }}
          >
            <motion.div
              style={{ width: "10vw", height: "62vh" }}
              variants={parent} animate="visis"
              transition={{ ease: "linear", duration: 3, repeat: Infinity }}
            >
              <img src="./images/logo-s.png" height="100%" />
            </motion.div>
          </Box>
        </Box>
      </Box>
      </motion.div>
    </div>
  );
}
