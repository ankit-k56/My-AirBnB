import React from "react";
import CardContainer from "./CardContainer";
import "./CardContainer.css"
const Card2 = props =>{
    return(
        <div className="card--container">
            <CardContainer data={props.data} />
        </div>
    )
}
export default Card2