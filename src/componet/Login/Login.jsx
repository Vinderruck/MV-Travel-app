import React,{useState} from 'react';
import { Images } from '../../assets';
import { IoEyeOffOutline,IoEyeOutline } from "react-icons/io5";
import {motion} from'framer-motion';
 
import './Login.scss';
 

const Login = () => {
  const [Username, setUsername] = useState('');
   const [Password, setPassword] = useState('');
   const [isLogging, setisLogging] = useState(false);
   const [Error, setError] = useState(null)
  const [Show, setShow] = useState(false);

   //function handlingchange
   const handleChange =(event) =>{
    const [name,value] = event.target;
    if(name === Username){
      setUsername(value);
    } else if(name === Password){
   setPassword(value);
    };
   }



   //creating a functuion that handle submit
   const handlesubmit = async(e) => {
    e.preventDefault();
    setisLogging(true);
    setError(null)


    try{
      const response = await fetch('/api/Loging',{
        method: 'POST',
        head:{'Content-Type':'application/json'},
        body: JSON.strigfy(Username,Password),
      });
      if(!response.ok){
        throw new Error('failure to reach the server ${response.status}')
      } 
      const data = response.JSON();
      console.log('Loging successfull',data)
    } catch(error){
      console.error('All failed',error)
    }
   }
    
   
   
  
  return (
<>

    <img src={Images.Logo} className='ImageLogo' />
    
    <div  className="Login__overrall">
    
    <div className="Log__start">
      
    <h1>Log in</h1>
      <div className="Log__form">
        <form >
          <div className="Login__label">
            <label>Email</label>
            <input type="email" id="Email" placeholder="Enter your Email" value={onchange} required/>
            </div>
          <div className="Login__label">
            <label>Password</label>
            <input type="password" id="Email" placeholder="Password"
 required  /><span><IoEyeOffOutline onClick={() => setShow(true)}/>
 {Show && (
  <IoEyeOutline onClick={() =>setShow(false)} />
 )}</span>
            </div>
          <div><button type="submit" className="submit">Submit</button></div>
       
        
         </form>
         <motion.div whileInView={{y:4}} className="Login__recomadation">
          <p className="Recomadation"> Travel Like a Local: Go beyond the tourist traps.  Our app connects you with local experiences, from authentic cultural events to unique dining spots frequented by the natives. 
          Immerse yourself in the true essence of your destination. </p>
        </motion.div>
      </div>
      
      </div>
      <img src={Images.View} alt="none" className='ImageView'/>
    </div>
    </>
  )
}

export default Login;