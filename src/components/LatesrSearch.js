import React,{useState} from "react";
import Modal from "./Modal/DateModal";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange} from 'react-date-range';

import "./LaterSearch.css"

const LaterSearch = (props)=>{
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const SelectionRange ={
        startDate: startDate,
        endDate: endDate,
        key:"selection",
    };
    const handleSelect = ranges => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);              
    }
    return(
        <Modal onClose={props.onClose}>
            <DateRange className="date-picker" 
            ranges={[SelectionRange]} 
            onChange={handleSelect} 
            months={2} 
            minDate= {new Date()}
            direction="horizontal"
            rangeColors={["#FF385C"]}/>
           
        </Modal>
    )  
}
export default LaterSearch