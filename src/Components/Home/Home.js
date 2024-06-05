import React from "react";
import List from '../MovieList/List'
import classes from './Home.module.css'

const Home=(props)=>{


    return(
        <div className={classes.Container}>
           
            <List></List>
        </div>
    )
}
export default Home;