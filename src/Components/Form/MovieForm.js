import React, { useContext, useRef, useState } from "react";
import { Button, Container, FormLabel,Form, FormText, FormControl } from "react-bootstrap";
import classes from './MovieForm.module.css'
import FilmContext from "../../Store/FilmContext";


const MovieForm =(props)=>{
    const url='https://react-http-7ffef-default-rtdb.firebaseio.com/movies.json'
    
    const [formValues,setFormValues]=useState({title:'',openingText:'',releaseDate:''});
   const [formErrors,setformErrors]=useState({title:'',openingText:'',releaseDate:''})
    const ctx=useContext(FilmContext)

    const changeHandler=(e)=>{
        setFormValues((curr)=>{ return {...curr,[e.target.name]:e.target.value}})
    }


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
            else{
                setFormValues({title:'',openingText:'',releaseDate:''})

                
                const data=await response.json();
                movie.id=data.name;
                ctx.addMovie(movie);
                console.log(movie)
            }
            

           
        }catch(err){
            console.log(err.message)
        }

    }

const checkError=()=>{
    let err=false;
    const error={title:'',openingText:'',releaseDate:''}
    if(formValues.title==''){error.title='Please enter title'
    err=true;
}
    else error.title=''

    if(formValues.openingText==''){error.openingText='Please enter openinng text'
    err=true;
}
    else error.openingText=''

    if(formValues.releaseDate==''){error.releaseDate='Please enter release date'
err=true;
}
    else error.releaseDate=''
    setformErrors(error)
    return err;
}

const submitForm=(e)=>{
    if(!checkError())
addMovieHandler(formValues);
}
    return(
        <Container className={classes.container} fluid>
            <Form className={classes.form}>
                <FormLabel>Title :</FormLabel>
                <FormControl type="text" className={classes.ip} name='title' onChange={changeHandler} value={formValues.title}></FormControl>
                <p className={classes.error}>{formErrors.title}</p>
                <FormLabel>Opening Text :</FormLabel>
                <FormControl type="text" className={classes.ip+" "+classes.large} onChange={changeHandler} name='openingText' value={formValues.openingText}></FormControl>
                <p className={classes.error}>{formErrors.openingText}</p>
                <FormLabel>Release Date :</FormLabel>
                <FormControl type="date" className={classes.ip} name='releaseDate' onChange={changeHandler} value={formValues.releaseDate}></FormControl>
                <p className={classes.error}>{formErrors.releaseDate}</p>
                <Button className={classes.btn} onClick={submitForm}>Submit</Button>
            </Form>
                
          
       </Container>
    )
}

export default MovieForm;