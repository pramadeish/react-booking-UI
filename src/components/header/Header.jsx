import { faBed, faCalendarDays, faCar, faHotel, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { DateRange } from 'react-date-range';
import "./header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
const Header = () => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
    return (
      <div className="header">
        <div className="headerContainer">
            
            
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faHotel} />
                    <span>stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractin</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Taxi</span>
                </div>
            </div>


            <h1 className="headerTitle">This Is Great!!</h1>
            <p className="headerDesc">Get more out of it using a free Smpbooking account</p>
            <button className="headerBtn">Sign in / Register</button>
            
            
            <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faHotel} className="headerIcon" />
                <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
            </div>

            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                <span className="headerSearchText">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                <span className="headerSearchText">2 adults 2 childrens 1 room</span>
            </div>
            <div className="headerSearchItem">
               <button className="headerBtn">Search</button>
            </div>
            </div>
            
        
        </div>    
    </div>
  )
}

export default Header