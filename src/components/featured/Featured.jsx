import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandchola-chennai/images/overview/overview-desktop/exterior-dusk.png"
            alt=""
            className="featuredImg"/>
            <div className="featuredTitle">
                <h1>Chennai</h1>
                <h2>123 properties</h2>
            </div>
        </div>
            

        <div className="featuredItem">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/25/3b/b4/d6/exterior.jpg"
            alt=""
            className="featuredImg"/>
            <div className="featuredTitle">
                <h1>Madurai</h1>
                <h2>65 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/4b/0b/58/finest-contemporary-business.jpg"
            alt=""
            className="featuredImg"/>
            <div className="featuredTitle">
                <h1>Coimbatore</h1>
                <h2>110 properties</h2>
            </div>
        </div>


            
            
        
    </div>
  )
}

export default Featured