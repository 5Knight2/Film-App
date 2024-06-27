import React,{useState} from "react";
import List from '../MovieList/List'
import classes from './Home.module.css'
import Form from '../Form/MovieForm'
import {useParams,Route} from 'react-router-dom'


const Home=(props)=>{
   
    const params=useParams();

    console.log(params.id)
   

    return(
        
        <div className={classes.Container}>
            <Route path='/home/:id'>
                <p>{params.id}</p>
            </Route>
           <Form ></Form>
            <List ></List>
        </div>
    )
}
export default Home;