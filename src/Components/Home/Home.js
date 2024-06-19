import React,{useState} from "react";
import List from '../MovieList/List'
import classes from './Home.module.css'
import Form from '../Form/MovieForm'


const Home=(props)=>{
    const [dummy,setDummy]=useState(true)

    const addItem=()=>{
        setDummy((curr)=>{return !curr})
    }

    return(
        
        <div className={classes.Container}>
           <Form itemAdd={addItem}></Form>
            <List dummy={dummy}></List>
        </div>
    )
}
export default Home;