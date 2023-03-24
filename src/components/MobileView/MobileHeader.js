import React,{useState} from "react";
import  './MobileHeader.css';
import LaterSearch from "../LatesrSearch";



const MobileHeader = (props)=>{  
    const [showDatepicker, setShowDatePicker] = useState(false);
    const searchClickHandler = ()=>{
        setShowDatePicker(!showDatepicker);
    } 
    const closeDatePicker = ()=>{
        setShowDatePicker(false);
    }

    return(
        <div>
            <div className="ff">
                <div className="mobile-header" onClick={searchClickHandler}>
                    <h4>Anywhere</h4>
                    <p>Any Week. Any guest</p>
                </div>
            </div>
            {showDatepicker && <LaterSearch onClose={closeDatePicker} onSearch={props.onSearch} />}
        </div>
    )
}

export default MobileHeader;