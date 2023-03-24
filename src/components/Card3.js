import React from "react";
import CardContainer from "./CardContainer";
import "./CardContainer.css"
const Card2 = props =>{
    return(
        <div className="card--container">
            {props.data.length!=0 ? <CardContainer data={props.data} /> : <h1 >No Hotels Found :(</h1>}
        </div>
    )
}
export default Card2