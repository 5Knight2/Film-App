import React from "react";
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";


const Header =()=>{


    return(
        <div className={classes.header}>
            <NavLink activeClassName={classes.active} to='/home'>Home</NavLink>
            
            <NavLink activeClassName={classes.active} to='/contactus'>Contact Us</NavLink>
           
        </div>
    )
}

export default Header;