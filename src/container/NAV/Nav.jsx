 import React,{useState} from 'react';
 import { Images } from '../../assets';
 import { FaBars,FaTimes  } from "react-icons/fa";
 import {motion} from 'framer-motion';
 import {Button } from 'react-bootstrap';
 import {Home,About} from '../../container';
 import { Link } from 'react-router-dom';
 







 import './Nav.scss';
 
 const Nav = () => {
  const [Menu, setMenu] = useState(false);
  const [Active, setActive] = useState(null)
    
  const handleclick =(ComponentName) => {
    setActive(ComponentName)
  }

  
   return (
    <div className="Nav__start">
      <div className="Logo">
      <img  src={Images.Logo}alt='log'/>
      </div>
     <ul className="Nav__ul">
       {['Home','About','Service'].map((item)=>(
        <li key={'Link-${item}'}>
          <a href={`#${item}`}>{item}</a>
         
</li>
      ))}
       
     </ul>
     <div className="Nav__account">
      <Button>
      <Link to='/log in'>Log in </Link></Button>
          <Button><Link to='/Sign up'>Sign up</Link></Button>
          </div>
     <div className="Nav__Ismobile">
     <FaBars onClick={() => setMenu (true)}/>
    { Menu &&(
    <motion.div whileInView={{x:10}}
    className="Nav__Ismobile-menu">
      <FaTimes onClick={() =>setMenu(false)}/>
      <ul className="Nav__IsMobile-ul">
       {['Home','About','Service'].map((item)=>(
        <li key={item}>
          <a href={`#${item}`} onClick={()=>setMenu(false)}>{item}</a>
         
</li>
      ))}
       
     </ul>
     <div className="Nav__ismobile-button">
     <Button>
      <Link to='/log in'>Log in </Link></Button>
          <Button><Link to='/Sign up'>Sign up</Link></Button>
          </div>
    </motion.div>)
    }
     </div>
      
    </div>
   )
 }
 
 export default Nav;