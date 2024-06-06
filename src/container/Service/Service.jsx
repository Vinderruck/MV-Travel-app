import React from 'react';
import {motion} from 'framer-motion';



import './Service.scss';

const Service = () => {
  return (
    <div className="Service__start">
        <motion.div whileInView={{x:2}}
        transition={{duration:0.8}} 
        className="Section__Header-div"><h1>OUR SERVICE</h1></motion.div>
        <p><li>Flight and transportation booking</li>
            <li>Weather updates</li>
            <li>Augmented reality (AR) features</li>
            <li>Community forum</li>
            <li>Packing lists and travel tips</li>
            <li>Emergency assistance</li>
            <li>In-app chat</li>
            <li>Reviews and recommendations</li>
            <li>Trip planning and booking</li>
            <li>Hotel Booking</li>
            
            </p>
    </div>
  )
}

export default Service;