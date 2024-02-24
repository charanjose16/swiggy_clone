import React from 'react'
import "./Restaurant.css"
import Header2 from '../components/Header2'
import downsharp from "../assets/downSharp.png"
import darkStar from "../assets/darkStar.png"
import blueLoc from "../assets/blueLoc.png"
import timeDark from "../assets/timeDark.png"
import currency from "../assets/currency.png"
import citi from "../assets/citi.jpg"
const Restaurant = () => {
  return (
    <div>
        <Header2></Header2>

        <div className='top-mini'><h6>Home / </h6> <h6> Chennai / </h6> <h6 id='top-min-last'> Sangeetha veg restaurant</h6></div>

        <div style={{marginLeft:"380px",marginTop:"40px"}}><h2>Sangeetha Veg restaurant</h2></div>

        <div className='next-to-main'>
          <div className='next-to-mini'>
          <h3 style={{fontWeight:"600",marginBottom:"8px"}}>Sangeetha Veg restaurant</h3>
          <p style={{fontSize:"12px",opacity:"0.8"}}>North indian, South indian</p>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"5px"}}>
          <p style={{fontSize:"12px",opacity:"0.8"}}>Urapakkam, 11.6 km</p>
          <img src={downsharp} width="10" height="7"></img>
          </div>
         
          </div>

          <div className='mini-rating'>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"5px"}}><img src={darkStar} width="20" height="20"></img><h3 style={{fontWeight:"800",fontSize:"15px",color:"green",opacity:"0.8"}}>4.5</h3></div>
          <div style={{opacity:"0.1",paddingBottom:"10px",display:"flex",alignItems:"center",justifyContent:"center"}}><h5>________</h5></div>
          <div><h6 style={{opacity:"0.6"}}>10K+ Ratings</h6></div>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"row",gap:"10px",marginLeft:"380px"}}><img src={blueLoc} width="21" height="17"></img><h5 style={{fontWeight:"450",opacity:"0.7"}}>Very Far (11.6 kms) | Additional delivery fee will apply</h5></div>
        <hr className='dotted'></hr>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"8px",marginLeft:"380px",height:"30px"}}>
            <img src={timeDark} height="20" width="20"></img>
            <h3 style={{fontSize:"15px",fontWeight:"800",opacity:"0.8"}}>33 MINS</h3>
            <img src={currency} style={{marginLeft:"15px"}} height="20" width="20"></img>
            <h3 style={{fontSize:"15px",fontWeight:"800",opacity:"0.8"}}> ₹ 600</h3>
            <h4 style={{opacity:"0.8"}}>for two</h4>
        </div>
        {/* fontFamily: "'Proxima Nova Condensed Regular', sans-serif" */}
        <div className='offer-main-div'>
          <div className='offer-list-div'><div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}><img src='https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607' width="10" height="10"></img><h4 style={{fontFamily: "'Proxima Nova Condensed Regular', sans-serif",opacity:"0.6",fontSize:"15px",letterSpacing:"-1px",fontWeight:"750"}}>FLAT ₹100 OFF</h4></div><h5 style={{fontFamily: "'Proxima Nova Condensed Regular', sans-serif",opacity:"0.4",fontSize:"10px",fontWeight:"850",letterSpacing:"-1px"}}>NO CODE REQUIRED | ABOVE ₹550 </h5></div>
          <div className='offer-list-div'><div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}><img src='https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607' width="10" height="10"></img><h4 style={{fontFamily: "'Proxima Nova Condensed Regular', sans-serif",opacity:"0.6",fontSize:"15px",letterSpacing:"-1px",fontWeight:"750"}}>FLAT ₹50 OFF</h4></div><h5  style={{fontFamily: "'Proxima Nova Condensed Regular', sans-serif",opacity:"0.4",fontSize:"10px",fontWeight:"850",letterSpacing:"-1px"}}>NO CODE REQUIRED | ABOVE ₹500 </h5></div>
          <div className='offer-list-div'><div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}><img src={citi} width="12" height="12"></img><h4 style={{fontFamily: "'Proxima Nova Condensed Regular', sans-serif",opacity:"0.6",fontSize:"15px",letterSpacing:"-1px",fontWeight:"750"}}>15% OFF UPTO ₹300</h4></div><h5  style={{fontFamily: "'Proxima Nova Condensed Regular', sans-serif",opacity:"0.4",fontSize:"10px",fontWeight:"850",letterSpacing:"-1px"}}>NO CODE REQUIRED | ABOVE ₹1200 </h5></div>
        </div>

        <hr className='line'></hr>
        <h3 style={{fontSize:"18px",fontWeight:"700",opacity:"0.8",marginLeft:"380px",marginTop:"20px"}}>Recommended (5)</h3>
       

    </div>
  )
}

export default Restaurant