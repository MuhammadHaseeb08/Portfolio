// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
// import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import WorkIcon from "@mui/icons-material/Work";
import ContactsIcon from "@mui/icons-material/Contacts";
import { motion } from "framer-motion";
import "animate.css"

export default function Sidebar() {
  let[home,sethome] = useState(false);

  return (
    <div className="navBar">
      <Link className="logo" to="/">
        <img src="./images/logo-s.png" width="30px" />
      </Link>
      <nav className="navitem">
          <Link  to="/">
        <motion.div whileHover={{color:"#ffd700" }} className="animate__animated animate__bounce">
            <HomeIcon />
        </motion.div>
          </Link>
          <Link  to="/person">
          <motion.div whileHover={{color:"#ffd700" }} className="animate__animated animate__bounce">
            <PersonIcon />
        </motion.div>
          </Link>
          <Link activeclassname="active" to="/work">
          <motion.div whileHover={{color:"#ffd700" }} className="animate__animated animate__bounce">
            <WorkIcon />
        </motion.div>
          </Link>
          <Link activeclassname="active" to="/contact">
          <motion.div whileHover={{color:"#ffd700" }} className="animate__animated animate__bounce">
            <ContactsIcon />
        </motion.div>
          </Link>
      </nav>
    </div>
  );
}
