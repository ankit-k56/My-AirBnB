import React from "react";
import "./InfoCard.css"
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const InfoCard = (props)=>{

    const checkInMonth = props.checkInDate.toLocaleString('default', { month: 'short' })
    const checkOutMonth = props.checkInDate.toLocaleString('default', { month: 'short' })
    const availDate = checkInMonth===checkOutMonth?`${props.checkInDate.getDate()}-${props.checkOutDate.getDate()} ${checkOutMonth}`:`${props.checkInDate.getDate()} ${checkInMonth} - ${props.checkOutDate.getDate()} ${checkOutMonth}`
    return(
        <div className="hotelCard">
            <Swiper
                className="card-box"
                spaceBetween={0}
                slidesPerView={1}
                mousewheel={true}
                cssMode={true}
                loop={true}
                pagination
                modules={[Pagination, Navigation]}
                >
                <SwiperSlide ><img src={ `${props.image}`}  alt="" /></SwiperSlide>
                <SwiperSlide ><img src={ `${props.image}`}  alt="" /></SwiperSlide>
                <SwiperSlide ><img src={ `${props.image}`}  alt="" /></SwiperSlide>
                <SwiperSlide ><img src={ `${props.image}`}  alt="" /></SwiperSlide>
                
            </Swiper>
            {/* <img src={ `${props.image}`}  alt="" /> */}
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