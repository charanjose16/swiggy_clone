import React from 'react'
import "./Header2.css"
import swig from "../assets/swigOrange.png"
import down from "../assets/downOrange.png"
import search from "../assets/search.png"
import offer from "../assets/offer.png"
import help from "../assets/help.png"
import sign from "../assets/signin.png"
import cart from "../assets/cart.png"
const Header2 = () => {
  return (
    <div>
        <div className='header2-main'>
            <div className='head2-first'>
                <img src={swig} height="50" width="36"></img>
                <h5 className='head2-oth' style={{opacity:"0.75",textDecoration:"underline",marginLeft:"22px",}}>Other</h5>
                <img src={down} height="11" width="15"></img>
            </div>
            <div style={{fontFamily:"'Montserrat', sans-serif"}} className='head2-second'>
              <div className='head2-second-list-div'><img src={search} height="18" width="18"></img><h4 style={{fontSize:"15px"}}>Search</h4></div>
              <div className='head2-second-list-div'><img src={offer} height="19" width="20"></img><h4 style={{fontSize:"15px"}}>Offers</h4><h5 style={{fontSize:"9px",fontFamily:"urania,sans-serif",color:"orange",marginTop:"5px",position:"absolute",marginLeft:"80px"}}>NEW</h5></div>
              <div className='head2-second-list-div'><img src={help} height="19" width="19"></img><h4 style={{fontSize:"15px"}}>Help</h4></div>
              <div className='head2-second-list-div'><img src={sign} height="19" width="19"></img><h4 style={{fontSize:"15px"}}>Sign In</h4></div>
              <div className='head2-second-list-div'><img src={cart} height="21" width="24"></img><h4 style={{fontSize:"15px"}}>Cart</h4></div>

            </div>
        </div>
    </div>
  )
}

export default Header2