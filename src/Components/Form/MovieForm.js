import React, { useRef } from "react";
import { Button, Container, FormLabel,Form, FormText, FormControl } from "react-bootstrap";
import classes from './MovieForm.module.css'


const MovieForm =()=>{
    const url='https://react-http-7ffef-default-rtdb.firebaseio.com/movies.json'
    const titleRef=useRef()
    const openingTextRef=useRef()
    const releaseDateRef=useRef()


    const addMovieHandler=async(movie)=>{
        try{
            const response=await fetch(url,{
                method:'POST',
                body:JSON.stringify(movie),
                headers:{
                    'Content-Type':'application/json'
                }

            })
            if(!response.ok)throw new Error('something went wrong')
            const data=await response.json();

           console.log(data)
        }catch(err){
            console.log(err.message)
        }

    }

const submitForm=(e)=>{
    let data={title:titleRef.current.value,
    openingText:openingTextRef.current.value,
    releaseDate:releaseDateRef.current.value}
addMovieHandler(data);
}
    return(
        <Container className={classes.container} fluid>
            <Form className={classes.form}>
                <FormLabel>Title :</FormLabel>
                <FormControl type="text" className={classes.ip} ref={titleRef}></FormControl>
                <FormLabel>Opening Text :</FormLabel>
                <FormControl type="text" className={classes.ip+" "+classes.large} ref={openingTextRef}></FormControl>
                <FormLabel>Release Date :</FormLabel>
                <FormControl type="date" className={classes.ip} ref={releaseDateRef}></FormControl>
                <Button className={classes.btn} onClick={submitForm}>Submit</Button>
            </Form>
                
          
       </Container>
    )
}

export default MovieForm;