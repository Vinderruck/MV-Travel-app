import React from 'react';
import {motion} from'framer-motion';
import { FaEnvelope ,FaCopyright,FaWhatsapp,FaPhone  } from "react-icons/fa";


import './About.scss';

const About = () => {
  return (
    <div className="About__start">
      <motion.div
      whileInView={{scale:1.1, x:-20,y:3}}
    trasition={{duration:5}} className="About__header">
      <h1>ADVENTURE IS PART OF LIFE</h1>
      
    </motion.div>
    <div className="About__text">
    <p className="p__Text">MV-Travel Your Gateway to Adventure. Travel Discover,Explore,Transform: All in MV-Travel</p>
   </div>
    <motion.div className="About__mission">
     <span><h2>Mission :</h2><span>
      <p>We believe that adventure travel is more than just a vacation; 
        it's a transformative experience. <br/>
        Our app is designed to empower you to discover the world's hidden gems, 
        push your limits, <br/>and create memories that will last a lifetime.

</p></span></span> 
<span><h2>MV-Travel:</h2><p> Founded by a group of travel enthusiasts who craved unique experiences beyond the tourist traps,<br/> 
  we built this app to bridge the gap between dreaming of adventure and actually making it happen.</p></span>

  <span><h2>Why Us:</h2><span> <ul className="About__why">
  <li>Curated itineraries for adventure seekers of all levels: from white-water rafting to cultural immersion.</li>
    
  <li>Discover hidden gems: We go beyond the typical tourist destinations to find unique and authentic experiences.</li>
  <li>Connect with your tribe: Our app allows you to connect with other adventure travelers and share your experiences.</li></ul></span></span>
    <h3>JOIN US TODAY!! YOU WILL LOVE IT❤️❤️❤️</h3>
    </motion.div>
    <div className="contact">
<motion.div whileInView={{x:2,y:2}}
whileHover={{scale:1.1}}
transition={{duration:0.9}} className="About__Icons">
      <p><span><FaEnvelope /> </span><span><a href='mail to:MVTravel@gmail.Travellers'>MV-Travel@gmail.Travellers </a></span></p>
      </motion.div>
      <p><span><FaWhatsapp /> </span><span>+2345-5666-455</span></p>
      <p><span><FaPhone /> </span><span> +256-789-030-259/+259-700-310-500</span></p>
    </div>
    <motion.div  whileInView={{x:7}}
    transition={{duration:0.9}}className="copy"><FaCopyright/>-2024 All right reserved by MV-Travel</motion.div>
    </div>
  )
}

export default About;