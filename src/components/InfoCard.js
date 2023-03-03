import React from "react";
import "./InfoCard.css"
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const InfoCard = (props)=>{

    const availDate = `${props.checkInDate.getDate()} ${props.checkInDate.getMonth()} - ${props.checkOutDate.getDate()} ${props.checkOutDate.getMonth()} `
    return(
        <div className="hotelCard">
            <img src={ `${props.image}`}  alt="" />
            <div className="location--info">
                <p className="location">{props.location}</p>
                <div className="star"><StarRateRoundedIcon fontSize="small" />{props.stars}</div>
            </div>
            <p className="light">{props.info}</p>
            <p className="light">{availDate}</p>
            <p className="price">{props.price}$ <span className="time">{props.time}</span></p>
            
        </div>
    )
}
export default InfoCard;