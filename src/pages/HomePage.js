import React, { useState } from 'react'
import Header from '../components/Header'
import "./HomePage.css"
import linebend from "../assets/linebend.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';
const HomePage = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = document.getElementById('horz-container');
    const itemWidth = 600; // Adjust the width of each item according to your design
  
    if (container) {
      const scrollAmount = direction === 'right' ? itemWidth : -itemWidth;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth', // Add smooth scrolling behavior
      });
    }
  };

  const handleWheel = (event) => {
    const container = document.getElementById('horz-container');
    if (container) {
      container.scrollLeft += event.deltaY;
      event.preventDefault();
    }
  };

  return (
    <div>
    <Header></Header>
    <div className='banner-div-home'>
    <div className='orderfood-linebend'><h1 style={{width:"280px",fontSize:"50px",fontWeight:'800',color:"black",opacity:"72%",lineHeight:"50px"}}>Order Food Online in Chennai</h1><img src={linebend} width="130" height="16" style={{marginTop:"-30px",mixBlendMode:"normal"}}></img></div>
    <div><img style={{marginTop:"30px"}} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png' width="500" height="290"></img></div>

    </div>
    <div className='whats-main-div'>
      <div>
      <h2 style={{fontWeight:"750",fontSize:"22px",fontFamily:"'basisGrosquesPro', sans-serif"}}>What's on your mind?</h2>
      </div>

      <div className='left-right-divs'>
      <div className='next-arrow-div'  onClick={() => handleScroll('left')}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></div>
      <div className='next-arrow-div'  onClick={() => handleScroll('right')}><FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon></div>
      
      </div>

    </div>
    <div className='horz-main-div'  id='horz-container' style={{ transform: `translateX(${scrollPosition}px)` }} onWheel={handleWheel}>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Appam.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Uttapam.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pongal.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png'></img></div>
      <div className='horz-items' ><img className='horz-item-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png'></img></div>

           
    </div>
    <hr style={{width:"75%",marginTop:"50px",opacity:"0.3"}}></hr>

    
    </div>
  )
}

export default HomePage