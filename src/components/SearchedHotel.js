import React from "react";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import "./SearchedHotel.css"
const SearchedHotel = (props)=>{
    return(
        <div className='searchResult'>
        <img src={props.hotel.image} alt="" />
        {/* <FavoriteBorderIcon className="searchResult__heart" /> */}

        <div className='searchReasult-info'>
            <div className="searchResult__infoTop">
                <h3>{props.hotel.location}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab aspernatur assumenda nulla cupiditate quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nam velit libero adipisci.</p>
                <p>____</p>
                <p>{props.hotel.info}</p>
            </div>

            <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                    <StarRateRoundedIcon className="searchResult__star" />
                    <span>
                        <strong>{props.hotel.stars}</strong>
                    </span>
                </div>
                <div className='searchResults__price'>
                    <h2>{props.hotel.price}</h2>
                    <span>night</span>
                </div>
            </div>
        </div>
    </div>
    )
}
export default SearchedHotel