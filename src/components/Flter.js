import React from "react"
import FilterIcon from "./FilterIcon"
import "./Filter.css"
const Filter = props =>{
    return(
        <div className="sticky-icon">
            <div className="Icon-container">
            {FilterIcon.map((icon,i)=>{
                return (
                    <div key={i} className={`${icon.title===props.Active && "active"}`}
                     onClick={()=> 
                        props.activeHotelType(icon.title)                  
                    }>  
                        <img src={icon.img} />
                        <p>{icon.title}</p>
                    </div>
                )
            })}
            </div>
        </div>       
    )
}
export default Filter