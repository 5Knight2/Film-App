import React, { useState,useRef, useEffect, useCallback } from "react";
import { Button, Container } from "react-bootstrap";
import classes from './List.module.css'
import Items from './Items'

const List=(props)=>{

    const url='https://react-http-7ffef-default-rtdb.firebaseio.com/movies.json'
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
        console.log('retry cancelled')
    }
    
    
    
    const startRetry=()=>{
        setRetry("Retrying")
   getData();
       
    }
    
    const getData=useCallback( async()=>{
        try{
            console.log('fetching')
            setIsLoading(true);
        let p=await fetch(url);
        if(!p.ok)throw new Error('Something went wrong!!')
        setError(false)
        let data=await p.json();

        const movies=[]
        for(let key in data){
            movies.push(
            {id:key,
            title:data[key].title,
            openingText:data[key].openingText,
            releaseDate:data[key].releaseDate
            }
            )
        }
        console.log(movies)

      
        
        setMovies(movies)
        setIsLoading(false)
       
    }
    catch(err){
        setError(err.message);
        setIsLoading(false);
       retryTimeoutRef.current=setTimeout((a)=>{
    startRetry()}
    ,5000)
    
    }
    
    },[1])
    
    useEffect(()=>{getData();
        return () => {
            if (retryTimeoutRef.current) {
              clearTimeout(retryTimeoutRef.current);
            }
          }},[props.dummy])



          const deleteItem=useCallback(async(id)=>{
            try{
            const response=await fetch('https://react-http-7ffef-default-rtdb.firebaseio.com/movies/'+id+'.json',{method:'DELETE'})
           if(response.ok){
            const element=document.getElementById(id)
            element.remove();
           }
           else{throw new Error('Something went wrong!!during deletion')}
        }
        catch(err){
            console.log(err)
        }
        })
          

        console.log('dummy'+props.dummy);

    return(
        <React.Fragment>
            <Container className={classes.container} fluid>
               
            <Button onClick={startRetry} variant="secondary" >Get Data</Button>
  {}
  {error!=false?<p>{error+ retry} <Button onClick={cancelRetry} variant="danger">X</Button></p> :isLoading==true?<p>loading...</p>:<p className={classes.item}><Items movies={movies} delete={deleteItem}></Items></p>}
  
                        </Container>
        </React.Fragment>
    )
}
  

export default List;