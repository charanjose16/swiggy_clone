import React, { useEffect, useState } from 'react'
import "./Header.css"
import locImg from "../assets/location.png"
import profile from "../assets/profile.png"
import swiggy from "../assets/swiggy.png"

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 50; // Adjust the threshold as needed

      if (offset > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="header-div">
           <div style={{fontFamily:"'Montserrat', sans-serif"}} className={`header-main-div ${scrolled ? 'scrolled' : ''}`}>
            <div style={{display:"flex",alignItems:"center",marginBottom:"8px",marginLeft:"180px",flexDirection:"row",gap:"10px"}}><img src={swiggy} width="130" height="38"></img><h2 style={{fontWeight:"2",color:"GrayText",opacity:"0.2"}}>|</h2></div>
            <div className='loc-img-div'><img src={locImg} width="25" height="25"></img><h3 style={{fontSize:"16px",color:"rgba(0, 0, 0, 0.733)"}}>Setup your precise location</h3><img src="https://www.superick.com/frontend/assets/img/icon/down-arrow.svg" width="10" height="10"></img></div>
            <div className='search-icon-div'><h3 style={{fontWeight:"400",color:"grey", marginLeft:"15px",fontSize:"17px",width:"450px"}}>Search for restaurant and food</h3><img src='https://icons.veryicon.com/png/o/miscellaneous/easemob-icon/search-934.png' width="25" height="25" style={{marginRight:"15px"}}></img></div>
            <div className='pro-icon-div'><img src={profile} width="55" height="50"></img></div>
        </div>
        
        
      
        
    </div>
  )
}

export default Header