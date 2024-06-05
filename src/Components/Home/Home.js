import React from "react";
import List from '../MovieList/List'
import classes from './Home.module.css'
import Form from '../Form/MovieForm'

const Home=(props)=>{


    return(
        <div className={classes.Container}>
           <Form></Form>
            <List></List>
        </div>
    )
}
export default Home;