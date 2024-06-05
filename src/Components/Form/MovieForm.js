import React, { useRef } from "react";
import { Button, Container, FormLabel,Form, FormText, FormControl } from "react-bootstrap";
import classes from './MovieForm.module.css'


const MovieForm =()=>{
    const titleRef=useRef()
    const openingTextRef=useRef()
    const releaseDateRef=useRef()
const submitForm=(e)=>{
    let data={title:titleRef.current.value,
    openingText:openingTextRef.current.value,
    releaseDate:releaseDateRef.current.value}
console.log(data)
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