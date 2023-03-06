import React,{useState} from "react";
import Arb_logo from "../assests/Arb_logo.png"
import  classes from'./Header.module.css';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchTray from "./SearchTray";


const Header = (props)=>{   

    return(
        <div className={classes.ff}>
            <div className={classes.header}>
            <img  className={classes['header--logo']} src={Arb_logo} alt="" />
            <SearchTray onClick={props.onClick} className={classes['header-Search']} />
           
            <div>
                <a href="#">Airbnb your home</a>
                <button>< LanguageIcon /></button>
                <button> <MenuIcon/><AccountCircleIcon/></button>
            </div>
            
            </div>
        </div>
    )
}

export default Header;