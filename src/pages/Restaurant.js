import React, { useEffect, useState } from 'react'
import "./Restaurant.css"
import Header2 from '../components/Header2'
import downsharp from "../assets/downSharp.png"
import darkStar from "../assets/darkStar.png"
import blueLoc from "../assets/blueLoc.png"
import timeDark from "../assets/timeDark.png"
import currency from "../assets/currency.png"
import citi from "../assets/citi.jpg"
import nonVeg from "../assets/nonVeg.png"
import { useLocation } from 'react-router-dom'
import { db } from '../firebase-config'
import { getDoc ,doc} from 'firebase/firestore'


const Restaurant = () => {

  const location=useLocation();
  const  {RestoData} = location.state || {};


  const[data,setData]=useState([])
const ref = doc(db, "TopChennai","3o5oNhuYiqBP1vgQKlL6");

useEffect(() => {
  const fetchData = async () => {
 
      const docSnap = await getDoc(ref);
      const prod = docSnap.data().dishes;
      setData(prod);
  
  };

  fetchData();
}, []);
  
  return (
    <div className='res-div-main'>
    <div style={{position:"fixed",zIndex:"1000",top:"0",width:"100%",backgroundColor:"white"}}>
        <Header2></Header2></div>

        <div className='top-mini'><h6>Home / </h6> <h6> Chennai / </h6> <h6 id='top-min-last'>{RestoData.name}</h6></div>

        <div style={{marginLeft:"380px",marginTop:"40px"}}><h2>{RestoData.name}</h2></div>

        <div className='next-to-main'>
          <div className='next-to-mini'>
          <h3 style={{fontWeight:"600",marginBottom:"8px"}}>{RestoData.name}</h3>
          <p style={{fontSize:"12px",opacity:"0.8"}}>{RestoData.food}</p>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"5px"}}>
          <p style={{fontSize:"12px",opacity:"0.8"}}>{RestoData.location}, {Math.round(RestoData.time/3)} km</p>
          <img src={downsharp} width="10" height="7"></img>
          </div>
         
          </div>

          <div className='mini-rating'>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"5px"}}><img src={darkStar} width="20" height="20"></img><h3 style={{fontWeight:"800",fontSize:"15px",color:"green",opacity:"0.8"}}>{RestoData.rating}</h3></div>
          <div style={{opacity:"0.1",paddingBottom:"10px",display:"flex",alignItems:"center",justifyContent:"center"}}><h5>________</h5></div>
          <div><h6 style={{opacity:"0.6"}}>10K+ Ratings</h6></div>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"row",gap:"10px",marginLeft:"380px"}}><img src={blueLoc} width="21" height="17"></img><h5 style={{fontWeight:"450",opacity:"0.7"}}>Very Far ({Math.round(RestoData.time/3)} kms) | Additional delivery fee will apply</h5></div>
        <hr className='dotted'></hr>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"8px",marginLeft:"380px",height:"30px"}}>
            <img src={timeDark} height="20" width="20"></img>
            <h3 style={{fontSize:"15px",fontWeight:"800",opacity:"0.8"}}>{RestoData.time} MINS</h3>
            <img src={currency} style={{marginLeft:"15px"}} height="20" width="20"></img>
            <h3 style={{fontSize:"15px",fontWeight:"800",opacity:"0.8"}}> ₹ 600</h3>
            <h4 style={{opacity:"0.8"}}>for two</h4>
        </div>
        {/* fontFamily: "'Proxima Nova Condensed Regular', sans-serif" */}
        <div className='offer-main-div'>
          <div className='offer-list-div'><div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}><img src='https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607' width="10" height="10"></img><h4 style={{fontFamily: "'Proxima Nova Condensed Regular', sans-serif",opacity:"0.6",fontSize:"15px",letterSpacing:"-1px",fontWeight:"750"}}>FLAT &nbsp;₹100 OFF</h4></div><h5 style={{fontFamily: "'Proxima Nova Condensed Regular', sans-serif",opacity:"0.4",fontSize:"10px",fontWeight:"850",letterSpacing:"-1px"}}>NO CODE REQUIRED | ABOVE ₹550 </h5></div>
          <div className='offer-list-div'><div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}><img src='https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607' width="10" height="10"></img><h4 style={{fontFamily: "'Proxima Nova Condensed Regular', sans-serif",opacity:"0.6",fontSize:"15px",letterSpacing:"-1px",fontWeight:"750"}}>FLAT &nbsp;₹50 OFF</h4></div><h5  style={{fontFamily: "'Proxima Nova Condensed Regular', sans-serif",opacity:"0.4",fontSize:"10px",fontWeight:"850",letterSpacing:"-1px"}}>NO CODE REQUIRED | ABOVE ₹500 </h5></div>
          <div className='offer-list-div'><div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}><img src={citi} width="12" height="12"></img><h4 style={{fontFamily: "'Proxima Nova Condensed Regular', sans-serif",opacity:"0.6",fontSize:"15px",letterSpacing:"-1px",fontWeight:"750"}}>15% OFF UPTO &nbsp;₹300</h4></div><h5  style={{fontFamily: "'Proxima Nova Condensed Regular', sans-serif",opacity:"0.4",fontSize:"10px",fontWeight:"850",letterSpacing:"-1px"}}>NO CODE REQUIRED | ABOVE ₹1200 </h5></div>
        </div>

        <hr className='line'></hr>
        <h3 style={{fontSize:"18px",fontWeight:"700",opacity:"0.8",marginLeft:"380px",marginTop:"20px"}}>Recommended (5)</h3>



        {data.map((data)=>(
        <div>
        

        <div className='dish-main-div'>
        <div className='dish-list-div left'><img src={nonVeg} width="15" height="15"></img><h3 style={{fontWeight:"500",fontSize:"17px",opacity:"0.8",marginTop:"5px"}}>{data.name}</h3><h3 style={{fontWeight:"400",fontSize:"16px"}}>₹{data.price}</h3></div>
        <div className='dish-list-div'><img width="120" height="90" className='dish-img' src={data.image}></img><div className='dish-add'><h5>ADD</h5></div></div>
        
        </div>
        <div>
        <hr className='line'></hr>
        </div>
      

        </div>
        ))}
       

    </div>
  )
}

export default Restaurant