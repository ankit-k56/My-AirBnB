import React from "react";
import InfoCard from "./InfoCard";

const CardContainer = (props)=>{
    return(
        
        props.data.map((hotel)=>{
            return  <InfoCard
            key={hotel.id}
            image={hotel.image}
            location={hotel.location}
            stars= {hotel.stars}
            info= {hotel.info}
            checkInDate ={hotel.checkInDate}
            checkOutDate ={hotel.checkOutDate}
            price= {hotel.price}
            time = {hotel.time}
            />
            
        })

    )
}

export default CardContainer;