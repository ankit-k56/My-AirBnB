import React from "react";
import classes from "./SearchTray.module.css"
import SearchIcon from '@mui/icons-material/Search';
const SearchTray = (props) =>{
    return(
        <>
        <div className={classes['Search-Tray']}>
            <button onClick={props.onClick} className={classes.catchers}>Anywhere</button>
            <button onClick={props.onClick} className={classes.catchers}>Any week</button>
        <button onClick={props.onClick} className={classes.catchers }><p> Add guests </p><SearchIcon fontSize="small" className={classes.searchIcon}/> </button>
        </div>
        </>
    )
}
export default SearchTray;