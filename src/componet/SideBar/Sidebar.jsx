import React from 'react';
import './Sidebar.scss'

const Sidebar = () => {
  const safariurl = `https://africasafaritrips.com/`;
  const MapUrl = `https://www.google.co.ke/maps`
  return (
     <div className="Side__bar-overal">
      <h1><em>  MV Travel Dashboard</em></h1>
      <ul className="Side__first">
        <li><a href={safariurl } target="_blank">Visit AFRICA</a></li>
        <li><a href={'#'}>Best place to visit</a></li>
        <li><a href={'#'}>Book Transport</a></li>
        <li><a href={safariurl}>Book Hotel</a></li>
        <li><a href={safariurl}>Trip Planning</a></li>
        <li> <a href={'#'}>Weather Update</a></li>
        <li><a href={MapUrl}>Map</a></li>
        <li><a href={'#'}>Calender</a></li>
        <li><a href={'#'}>Lets Chat</a></li>
        <li><a href={safariurl}>Emergency</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;