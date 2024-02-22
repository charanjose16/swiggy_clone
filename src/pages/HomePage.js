import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import "./HomePage.css"
import linebend from "../assets/linebend.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import rating from "../assets/rating.png"
import { db } from '../firebase-config';
import { collection ,getDocs} from 'firebase/firestore';
import filter from "../assets/filter.png"
import downarrow from "../assets/downarrow.png"
import "../fonts/urania/fonts.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../components/Footer"



const HomePage = () => {

  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);

  const[chennai,setChennai]=useState([]);

  const handleScroll = (direction, containerId) => {
    const container = document.getElementById(containerId);
    const itemWidth = 600; // Adjust the width of each item according to your design

    if (container) {
      const scrollAmount = direction === 'right' ? itemWidth : -itemWidth;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(()=>{
    console.log("usestate in");
      const getChennaiData = async()=>{
        const res=await getDocs(collection(db,"TopChennai"));
       setChennai(res.docs.map((doc)=>({...doc.data(),name:doc.data().name,image:doc.data().image,rating:doc.data().rating,time:doc.data().time,food:doc.data().food,location:doc.data().location})));
      }
      getChennaiData();
      console.log("usestate out");
  },[])

  const handleWheel = (event, containerId) => {
    const container = document.getElementById(containerId);
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
      <h2 style={{fontWeight:"750",fontSize:"24px",fontFamily:"'urania', sans-serif"}}>What's on your mind?</h2>
      </div>

      <div className='left-right-divs'>
      <div className='next-arrow-div'  onClick={() => handleScroll('left','horz-container-1')}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></div>
      <div className='next-arrow-div'  onClick={() => handleScroll('right','horz-container-1')}><FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon></div>
      
      </div>

    </div>
    <div className='horz-main-div'  id='horz-container-1' style={{ transform: `translateX(${scrollPosition1}px)` }} onWheel={(event) => handleWheel(event, 'horz-container-1')}>
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




    <div className='whats-main-div'>
      <div>
      <h2 style={{fontWeight:"750",fontSize:"24px",fontFamily:"'urania', sans-serif"}}>Top resaurant chains in Chennai</h2>
      </div>

      <div className='left-right-divs'>
      <div className='next-arrow-div'  onClick={() => handleScroll('left','horz-container-2')}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></div>
      <div className='next-arrow-div'  onClick={() => handleScroll('right','horz-container-2')}><FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon></div>
      
      </div>

    </div>

    
    <div className='horz-main-div food'  id='horz-container-2' style={{ transform: `translateX(${scrollPosition2}px)` }} onWheel={(event) => handleWheel(event, 'horz-container-2')}>
    {chennai.map((chennai)=>(
    <div className='horz-food-items' >
    
      <div><img className='horz-food-img' src={chennai.image}></img></div>
      <div className='hot-name-rev'>
      <h4>{chennai.name}</h4>
      <div style={{display:"flex",flexDirection:"row",gap:"6px"}}><img style={{marginTop:"3px"}} src={rating} height="18" width="19"></img><h4>{chennai.rating}</h4><h4 style={{fontSize:"14.5px"}}>• {chennai.time} mins</h4></div>
      <p>{chennai.food}</p>
      <p>{chennai.location}</p>
      </div>
      
   
    </div>
  ))}
    

      

           
    </div>
    <hr style={{width:"75%",marginTop:"50px",opacity:"0.3"}}></hr>
    <h2 style={{fontWeight:"750",fontSize:"24px",fontFamily:'urania, sans-serif',marginLeft:"215px",marginTop:"40px"}}>Restaurants with online food delivery in chennai</h2>
    <div className='edits-filter-div'> 
      <div className='edit-fonts-div filter'><h3 className='edit-fonts-h3'>Filter</h3><img src={filter} style={{marginTop:"3px",marginRight:"10px"}} width="16" height="13"></img></div>
      <div className='edit-fonts-div'><h3 className='edit-fonts-h3'>Sort By</h3><img src={downarrow} style={{marginTop:"4px",marginRight:"10px"}} width="14" height="12"></img></div>
      <div className='edit-fonts-div'><h3 className='edit-fonts-h3'>Fast Delivery</h3></div>
      <div className='edit-fonts-div'><h3 className='edit-fonts-h3'>New on Swiggy</h3></div>
      <div className='edit-fonts-div'><h3 className='edit-fonts-h3'>Rating 4.0+</h3></div>
      <div className='edit-fonts-div'><h3 className='edit-fonts-h3'>Pure Veg</h3></div>
      <div className='edit-fonts-div'><h3 className='edit-fonts-h3'>Offers</h3></div>
      <div className='edit-fonts-div'><h3 className='edit-fonts-h3'>Rs.300-Rs.600</h3></div>
      <div className='edit-fonts-div'><h3 className='edit-fonts-h3'>Less than Rs.300</h3></div>
    </div>


    <div className='chennai-f-grid-main' style={{fontFamily:"montserrat,sans-serif"}}>
    {chennai.map((chennai)=>(
    <div className='ch-f-grid-item'><div className='c-f-img-div'><img className='c-f-img' src={chennai.image}></img></div><div className='hot-name-rev'>
      <h4>{chennai.name}</h4>
      <div style={{display:"flex",flexDirection:"row",gap:"6px"}}><img style={{marginTop:"3px"}} src={rating} height="18" width="19"></img><h4>{chennai.rating}</h4><h4 style={{fontSize:"14.5px"}}>• {chennai.time} mins</h4></div>
      <p>{chennai.food}</p>
      <p >{chennai.location}</p>
      </div></div>
      ))}

    </div>

    <div className='hme-sm'><h3 style={{fontWeight:"500",fontSize:"16px",color:"rgba(0, 0, 0, 0.733)"}}>Show more</h3><img  src={downarrow} style={{marginTop:"4px",marginRight:"10px"}} width="14" height="12"></img></div>
    <hr style={{width:"85%",marginTop:"50px",opacity:"0.3"}}></hr>
    

    <h2 style={{fontWeight:"750",fontSize:"24px",fontFamily:'urania, sans-serif',marginLeft:"115px",marginTop:"70px"}}>Food culture in Chennai</h2>


   <div className='why-order-div'>
   <h1 className='why-order-text' style={{fontWeight:"640",fontSize:"28px",marginTop:"40px"}}>Why Order Food Online in Chennai with Swiggy?</h1>
   <p className='why-order-text'>Do you feel too exhausted to cook? Are you anticipating visitors? When you are too tired to cook, have unexpected guests, or are working late, ordering food online is the wisest step. Swiggy comes to your rescue to calm your hunger pangs in less than an hour. All you have to do is download the app and order food online from your favourite restaurant in Chennai. Just select whether you want to pay online or cash on delivery, relax on a comfortable sofa, and wait for some delectable dishes to reach your doorstep within 45 minutes...</p>
   </div>

   <h2 style={{fontWeight:"750",fontSize:"24px",fontFamily:'urania, sans-serif',marginLeft:"115px",marginTop:"70px"}}>Explore localities in and around Chennai</h2>

  <div className='locali-grid-main'>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Pulikundram</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Perumbakkam</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Karikalavakkam</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Narasingapuram</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Majankarani</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Vadattur</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Aranvoyal</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Karlambakkam</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Perattur</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Illupur</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Kilacheri</h4></div>
    <div className='locali-list-div showmor'><h4 style={{fontWeight:"650",opacity:"0.75",opacity:"0.70"}}>Show more</h4><img style={{marginLeft:"4px"}} height="12" width="13" src={downarrow}></img></div>

  </div>

  <h2 style={{fontWeight:"750",fontSize:"24px",fontFamily:'urania, sans-serif',marginLeft:"115px",marginTop:"90px"}}>What's Chennai eating! People ordering in Chennai</h2>

  <div className='locali-grid-main'>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>American Restaurants</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Andhra Restaurants</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Arabian Restaurants</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Asian Restaurants</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Bakery Restaurants</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Bakery Products Restaurants</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Barbecue Restaurants</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Bengali Restaurants</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Beverages Restaurants</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Briyani Restaurants</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Burgers Restaurants</h4></div>
    <div className='locali-list-div showmor'><h4 style={{fontWeight:"650",opacity:"0.75",opacity:"0.70"}}>Show more</h4><img style={{marginLeft:"4px"}} height="12" width="13" src={downarrow}></img></div>

  </div>

  <h2 style={{fontWeight:"750",fontSize:"24px",fontFamily:'urania, sans-serif',marginLeft:"115px",marginTop:"90px"}}>Restaurant Chains in Chennai</h2>

  <div className='locali-grid-main'>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Faruuzi Multicuisine</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Sree Akshayam</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Theka Coffee</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Arambam Sweet House</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Arabian Nights</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Shree Mithai</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Lassi Nation</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>MEETING POINT</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Potful - Claypot Briyani</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>EAT MORE FRIED CHICKEN</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Aaladipatiyan Halwa Kadai</h4></div>
    <div className='locali-list-div showmor'><h4 style={{fontWeight:"650",opacity:"0.75",opacity:"0.70"}}>Show more</h4><img style={{marginLeft:"4px"}} height="12" width="13" src={downarrow}></img></div>

  </div>


  <h2 style={{fontWeight:"750",fontSize:"24px",fontFamily:'urania, sans-serif',marginLeft:"115px",marginTop:"90px"}}>Popular Dishes in Chennai</h2>

  <div className='locali-grid-main'>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Samosa</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Kaju Katli</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Kulcha</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Egg Fried Rice</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Mutton Rogan Josh</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Paneer Tikka Masala</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Blueberry Cheescake</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Chicken Soup</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Dosa</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Fries</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Lasagna</h4></div>
    <div className='locali-list-div showmor'><h4 style={{fontWeight:"650",opacity:"0.75",opacity:"0.70"}}>Show more</h4><img style={{marginLeft:"4px"}} height="12" width="13" src={downarrow}></img></div>

  </div>


  <h2 style={{fontWeight:"750",fontSize:"24px",fontFamily:'urania, sans-serif',marginLeft:"115px",marginTop:"90px"}}>More Food Options Near Me</h2>

  <div className='locali-grid-main'>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>American food near me</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Andhra food near me</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Arabian food near me</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Asian food near me</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Bakery food near me</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Bakery Products food near me</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Barbecue food near me</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Bengali food near me</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Beverages food near me</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Briyani food near me</h4></div>
    <div className='locali-list-div'><h4 style={{fontWeight:"500",opacity:"0.75"}}>Burgers food near me</h4></div>
    <div className='locali-list-div showmor'><h4 style={{fontWeight:"650",opacity:"0.75",opacity:"0.70"}}>Show more</h4><img style={{marginLeft:"4px"}} height="12" width="13" src={downarrow}></img></div>

  </div>
<Footer></Footer>
    </div>
  )
}

export default HomePage