import React, { useState,useRef, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import classes from './List.module.css'
import Items from './Items'

const List=()=>{

    const url='https://swapi.dev/api/films/'
    const [movies,setMovies]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(false);
    const [retry,setRetry]=useState(true);
    const retryTimeoutRef=useRef();




    const cancelRetry=()=>{
        setRetry("Stopped")
        if (retryTimeoutRef.current) {
            clearTimeout(retryTimeoutRef.current);
          }
        console.log('retry cancelled',retry)
    }
    
    
    
    const startRetry=()=>{
        setRetry("Retrying")
   getData();
       
    }
    
    const getData=async()=>{
    
        
        try{
            console.log('fetching')
            setIsLoading(true);
        let p=await fetch(url);
        if(!p.ok)throw new Error('Something went wrong!!')
        setError(false)
        p=await p.json();
        p=p.results.map((c)=>{return c.title})
        console.log(p)
        
        setMovies(p)
        setIsLoading(false)
       
    }
    catch(err){
        setError(err.message);
        setIsLoading(false);
       retryTimeoutRef.current=setTimeout((a)=>{
    startRetry()}
    ,5000)
    
    }
    
    }
    
    useEffect(()=>{getData();
        return () => {
            if (retryTimeoutRef.current) {
              clearTimeout(retryTimeoutRef.current);
            }
          }},[])


    return(
        <React.Fragment>
            <Container className={classes.container} fluid>
               
            <Button onClick={startRetry} >Get Data</Button>
  {}
  {error!=false?<p>{error+ retry} <Button onClick={cancelRetry}>X</Button></p> :isLoading==true?<p>loading...</p>:<p><Items movies={movies}></Items></p>}
  
                        </Container>
        </React.Fragment>
    )
}
  

export default List;