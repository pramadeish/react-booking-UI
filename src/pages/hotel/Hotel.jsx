import { faArrowCircleLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"


const Hotel = () => {
  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false);
  const photos=[
    {src:"https://www.kayak.co.in/rimg/himg/2a/bc/aa/leonardo-1266994-maalc-suite-0524-hor-clsc_O-202857.jpg?width=720&height=576&crop=true"},
  {src:"https://cache.marriott.com/content/dam/marriott-renditions/MAALC/maalc-suite-0523-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"},
{src:"https://marvel-b1-cdn.bc0a.com/f00000000240088/www.smallwood-us.com/assets/itc_grand_chola_chennai_architecture_by_srss_2_h_oVz23PmYN.jpg"},
{src:"https://cf.bstatic.com/images/hotel/max1024x768/178/178140791.jpg"},
{src:"https://cache.marriott.com/content/dam/marriott-renditions/MAALC/maalc-restaurant-3904-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1846px:*"},
{src:"https://pix10.agoda.net/hotelImages/160/1602888/1602888_17062909410054142915.jpg?ca=6&ce=1&s=1024x768"}];

const handleOpen=(i)=>{
  setSlideNumber(i);
  setOpen(true);
}
const handleMove=(direction)=>{
  let newSlideNumber;
  if(direction==="l")
  {
    newSlideNumber=slideNumber===0?newSlideNumber=5: slideNumber-1;
  }
  else{
    newSlideNumber=slideNumber===5?newSlideNumber=0: slideNumber+1;
  }
  setSlideNumber(newSlideNumber)
}
  return (
    <div>
        <Navbar />
        <Header type="list"/>
        <div className="hotelContainer">
      {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>{setOpen(false)}}/>
        <FontAwesomeIcon icon={faArrowCircleLeft} className="arrow" onClick={()=>{handleMove("l")}}/>
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>{handleMove("r")}}/>
      </div>}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">ITC hotel</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>63 Guindy Chennai-32</span>
            </div>
            <span className="hotelDistance">
              Excellent location - 5km from Central
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over Rs:20,000 at this property and get free Dinner
            </span>
            <div className="hotelImages">
              {photos.map((photo,i)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Grand Chola</h1>
                <p className="hotelDesc">
                  Located 20min from the central,High luxurious stay with numerous
                  facilities.... such as free wifi with 1Gbps all rooms are equiped
                  with 65-inch Oled TVs with a PlayStation and centralized Air 
                  Conditioning System with a rich hygiene restaurant...
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 5-night stay!</h1>
                <span>Located in the main area with a excellent 
                  location score of 9.8!
                </span>
                <h2>
                  <b>Rs:50,000</b>(5 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Hotel