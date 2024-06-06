import React ,{ useState} from 'react';
import {motion} from 'framer-motion';
import {Images} from'../../assets';
import { FaMoon,FaBell } from "react-icons/fa";
import './Navbar.scss';


const Navbar = () => {
   
  return (
    <motion.div whileInview={{x:5}}
    className="Navbar__start">
      <div className="Navbar__Image">
      <input type='file' accept="image/*"  className="Nav__upload"/>
      <FaMoon/> 
      <img src={Images.Logo}/>
      </div>
      <div className="Navbar__notification">
      <FaBell />
      <label  for="search">Search</label><input type="text" placeholder="Hotels,flight destination" id="search"className="search"/>
      <button type="submit">LOG OUT</button>
      </div>
     
    </motion.div>
  )
}

export default Navbar;