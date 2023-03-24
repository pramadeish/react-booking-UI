import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/images/hotel/max1024x768/178/178140467.jpg" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">ITC Hotel</h1>
            <span className="siDistance">5km from central</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Luxury Hotel of TATA Groups</span>
            <span className="siFeatures">Cant be explained·Only Billionares</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later,So lock this great price!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">Rs:15000</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem