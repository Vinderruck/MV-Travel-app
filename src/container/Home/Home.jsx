import React from 'react';
import {Images} from'../../assets';
 import {NavigationDots} from'../../componet';


import './Home.scss';

const Home = () => {
  return (
    <div className="Home__start" id="home">

      <h1>TRAVEL WITH LOVE FOR YOUR LOVED ONES AND SEE THE NEW WORLD</h1>
      <img src={Images.Plane} alt="plane"/>
    </div>
  )
}

export default Home ;