import React, { useRef } from "react";
import { Button, Container, FormLabel,Form} from "react-bootstrap";
import classes from './ContactUs.module.css'

const ContactUs=(props)=>{
    const url='https://react-http-7ffef-default-rtdb.firebaseio.com/contactus.json'
    const titleRef=useRef()
    const openingTextRef=useRef()
    const releaseDateRef=useRef()


    const submitHandler=async(contactus)=>{
        try{
            const response=await fetch(url,{
                method:'POST',
                body:JSON.stringify(contactus),
                headers:{
                    'Content-Type':'application/json'
                }

            })
            if(!response.ok)throw new Error('something went wrong')
            else{
                titleRef.current.value='';
                releaseDateRef.current.value=''
                openingTextRef.current.value=''

            }
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
submitHandler(data);
}
    return(
        <Container className={classes.container} fluid>
            <Form className={classes.form}>
                <FormLabel>Name :</FormLabel>
                <Form.Control type="text" className={classes.ip} ref={titleRef}></Form.Control>
                <FormLabel>Email Id :</FormLabel>
                <Form.Control type='email' className={classes.ip} ref={openingTextRef}></Form.Control>
                <FormLabel>Mobile number :</FormLabel>
                <Form.Control type="Number" maxLength={10} className={classes.ip} ref={releaseDateRef}></Form.Control>
                <Button className={classes.btn} onClick={submitForm}>Submit</Button>
            </Form>
                
          
       </Container>
    )

}

export default ContactUs