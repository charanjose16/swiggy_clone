import React from 'react'
import Header from '../components/Header'
import "./HomePage.css"
import linebend from "../assets/linebend.png"
const HomePage = () => {
  return (
    <div>
    <Header></Header>
    <div className='banner-div-home'>
    <div className='orderfood-linebend'><h1 style={{width:"280px",fontSize:"50px",fontWeight:'800',color:"black",opacity:"72%",lineHeight:"50px"}}>Order Food Online in Chennai</h1><img src={linebend} width="130" height="16" style={{marginTop:"-30px",mixBlendMode:"normal"}}></img></div>
    <div><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png' width="500" height="320"></img></div>

    </div>
    
    </div>
  )
}

export default HomePage