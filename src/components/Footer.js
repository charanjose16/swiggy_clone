import React, { useEffect, useState } from 'react'
import "./Footer.css"
import gplay from "../assets/gplay.png";
import appstore from "../assets/appstore.png";
import sblack from "../assets/sblacklogo.png"
import downarrow from "../assets/downarrow2.png";
import {db} from "../firebase-config"
import { collection ,getDoc,doc} from 'firebase/firestore';
const Footer = () => {
  
const[data,setData]=useState([])
const ref = doc(db, "TopChennai", "3o5oNhuYiqBP1vgQKlL6");

useEffect(() => {
  const fetchData = async () => {
 
      const docSnap = await getDoc(ref);
      const prod = docSnap.data().products;
      setData(prod);
  
  };

  fetchData();
}, []);

data.map((data)=>{console.log(data.name);})


  return (
    <div>
    <div className='app-play-main-div'>
<div><h2 className='foot-start-text' style={{marginLeft:"220px"}}>For better experience,download the Swiggy app now</h2></div>
<div><img src={gplay} width="200" height="60"></img></div>
<div><img src={appstore} width="200" height="60"></img></div>
    </div>
    <div className='footer-part-2'>
        <div style={{marginLeft:"220px",marginTop:"40px"}}>

        <div><img src={sblack} width="140" height="45"></img></div>
        <div><p className='foot-bot-text'>© 2023 Bundl Technologies</p></div>
        <div className='foot-bot-text'>Pvt.Ltd</div>

        </div>

        <div className='sep-div-fot'><p className='foot-bot-text' style={{fontWeight:"600",color:"white",fontSize:"18px"}}>Company</p>
        <p className='foot-bot-text'>About</p>
        <p className='foot-bot-text'>Carriers</p>
        <p className='foot-bot-text'>Team</p>
        <p className='foot-bot-text'>Swiggy One</p>
        <p className='foot-bot-text'>Swiggy Instamart</p>
        <p className='foot-bot-text'>Swiggy Genie</p></div>

        <div className='sep-div-fot'><p style={{fontWeight:"600",color:"white",fontSize:"18px"}} className='foot-bot-text'>Contact Us</p>
        <p className='foot-bot-text'>Help & Support</p>
        <p className='foot-bot-text'>Partner with us</p>
        <p className='foot-bot-text'>Ride with us</p>
        <p className='foot-bot-text' style={{fontWeight:"600",color:"white",fontSize:"18px",marginTop:"20px"}}>Legal</p>
        <p className='foot-bot-text'>Terms and Condition</p>
        <p className='foot-bot-text'>Cookie Policy</p>
        <p className='foot-bot-text'>Privacy Policy</p></div>


        <div className='sep-div-fot'>
        <p className='foot-bot-text' style={{fontWeight:"600",color:"white",fontSize:"18px"}}>We deliver to</p>
        <p className='foot-bot-text'>Bangalore</p>
        <p className='foot-bot-text'>Gurgaon</p>
        <p className='foot-bot-text'>Hyderabad</p>
        <p className='foot-bot-text'>Delhi</p>
        <p className='foot-bot-text'>Mumbai</p>
        <p className='foot-bot-text'>Pune</p>
        <div className='cities589'><p className='foot-bot-text' style={{marginLeft:"10px"}}>589 cities</p><img style={{opacity:"0.6"}} src={downarrow} width="8" height="6"></img></div>
        </div>
    </div>
    </div>
  )
}

export default Footer