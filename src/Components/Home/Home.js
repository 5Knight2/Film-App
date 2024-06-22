import React,{useState} from "react";
import List from '../MovieList/List'
import classes from './Home.module.css'
import Form from '../Form/MovieForm'
import {useParams,Route} from 'react-router-dom'


const Home=(props)=>{
    const [dummy,setDummy]=useState(true)
    const params=useParams();

    console.log(params.id)
    const addItem=()=>{
        setDummy((curr)=>{return !curr})
    }

    return(
        
        <div className={classes.Container}>
            <Route path='/home/:id'>
                <p>OOOOOOOOO{params.id}</p>
            </Route>
           <Form itemAdd={addItem}></Form>
            <List dummy={dummy}></List>
        </div>
    )
}
export default Home;