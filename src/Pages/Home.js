import React,{useState} from "react";
import Filter from "../components/Flter";
import Card2 from "../components/Card3";
// import Data from "./Data";
import Data from "../Data";
const Home = ()=>{
    const [isActive, setIsActive] = useState("Amazing views")
    const FilteredHotel = Data.filter(hotel => {
        return isActive === hotel.hotelType;
      })
    const fliterClickHandler = (hotelType) =>{
        setIsActive(hotelType);
        console.log(hotelType)
      }
    return(
        <>
            <Filter Active={isActive} activeHotelType={fliterClickHandler}/>
            <Card2 data={FilteredHotel}/>
        </>
    )
}
export default Home
