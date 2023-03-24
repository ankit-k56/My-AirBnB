import React,{useState} from "react";
import Modal from "./Modal/DateModal";
import Data from "../Data";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { DateRange} from 'react-date-range';
import "./LaterSearch.css"
import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { SubscriptionsOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const LaterSearch = (props)=>{
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const navigate= useNavigate()
    
    const SelectionRange ={
        startDate: startDate,
        endDate: endDate,
        key:"selection",
    };
    const handleSelect = ranges => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);             
    }
    let Fildata1=[];
    const SearchPageData = ()=>{ 
        const FilData =Data.filter((hotel)=>{
            return(
                hotel.checkInDate.toString()===startDate.toString() && hotel.checkOutDate.toString() === endDate.toString()                
                )
            })
            Fildata1 = FilData;
            props.onClose();
            navigate("/search", {state: {Fildata1 :Fildata1}})
            // console.log(Fildata1)
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

            <DateRange className="date-picker-mobile" 
            ranges={[SelectionRange]} 
            onChange={handleSelect} 
            months={1} 
            minDate= {new Date()}
            direction="horizontal"
            rangeColors={["#FF385C"]}/>
            <Button variant="outlined" className="button1" onClick={SearchPageData} color="success">Search</Button>
           
        </Modal>
    )  
}
export default LaterSearch