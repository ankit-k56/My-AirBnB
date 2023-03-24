import React,{useState} from "react";
import Arb_logo from "../assests/Arb_logo.png"
import  './Header.css';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchTray from "./SearchTray";
import LaterSearch from "./LatesrSearch";
import { Outlet } from "react-router-dom";
import MobileHeader from "./MobileView/MobileHeader";


const Header = (props)=>{  
    const [showDatepicker, setShowDatePicker] = useState(false);
    const searchClickHandler = ()=>{
        setShowDatePicker(!showDatepicker);
    } 
    const closeDatePicker = ()=>{
        setShowDatePicker(false);
    }

    return(
        <div>
            <div className='ff'>
                <div className='header'>
                    <img  className='header--logo' src={Arb_logo} alt="" />
                    <SearchTray onClick={searchClickHandler} className='header-Search' />
                
                    <div className="signup-div">
                        <a href="#">Airbnb your home</a>
                        <button className="icon">< LanguageIcon fontSize="small" /></button>
                        <button className="icon signupicon"> <MenuIcon/><AccountCircleIcon/></button>
                    </div>
                
                </div>
                <MobileHeader className="mobile-header"/>
            </div>
            {showDatepicker && <LaterSearch onClose={closeDatePicker}  />}
            <Outlet/>
        </div>
    )
}

export default Header;