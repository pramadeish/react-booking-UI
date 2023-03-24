import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>225 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://aland.com.au/wp-content/uploads/2021/08/190Croatia_View1_B_McFarlaneRd_R6_Twilight_R2-930x620.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartment</h1>
                <h2>122 apartment</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/03/04111335/amandari-indonesia-suite-exterior-and-pool_original_11588-2-1401x900.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>55 resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/02/27121904/featured-compressed-67.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villa</h1>
                <h2>85 villas</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList