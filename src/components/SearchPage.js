import React from "react";
import { useLocation } from "react-router-dom";
// import { FavoriteBorderIcon } from "@mui/icons-material";

import SearchedHotel from "./SearchedHotel";
const SearchPage = ()=>{
    const location = useLocation();
    const FilHotelData = location.state.Fildata1
    console.log(typeof(FilHotelData))
    console.log(FilHotelData)
    return(
        <div className="SearchPage">
            {FilHotelData.length!=0?FilHotelData.map((hotel)=>{
                return(
                   <SearchedHotel hotel={hotel}/>
                )
            }):<h2>No Hotels Found on these dates :(</h2>}

        </div>
    )
}
export default SearchPage