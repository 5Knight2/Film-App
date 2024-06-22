import React, { useRef,useState } from "react";
import { Button, Container, FormLabel,Form} from "react-bootstrap";
import classes from './ContactUs.module.css'

const ContactUs=(props)=>{
    const url='https://react-http-7ffef-default-rtdb.firebaseio.com/contactus.json'
    const [formValues,setFormValues]=useState({name:"",email:'',number:''})
    const [formErrors,setformErrors]=useState({name:"",email:'',number:''})
    const titleRef=useRef()
    const openingTextRef=useRef()
    const releaseDateRef=useRef()

    const changeHandler=(e)=>{
        console.log(e.target)
        const {name,value}=e.target
        setFormValues(curr=>{
            return {...curr,[name]:value}
        })
    }

const errorCheck=()=>{
    const error={name:'',email:'',number:''}
    let err=false;
    if(formValues.name.length==0){error.name='Please Enter name';
    err=true;}
    else error.name='';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(formValues.email.length==0){error.email='Please Enter email';  err=true;}
    else
    if(!emailRegex.test(formValues.email)){error.email='Please Enter valid email';  err=true;}
    else error.email=''
    

     
    if(formValues.number.length==0){error.number='Please Enter number';  err=true;}
    else if(formValues.number.length!=10){error.number='Please Enter valid number(10 digits)'
    err=true;}
    else error.number=''
    
setformErrors(error);
return err;
}

    const submitHandler=async(contactus)=>{
        try{
            if (!errorCheck()){
            const response=await fetch(url,{
                method:'POST',
                body:JSON.stringify(contactus),
                headers:{
                    'Content-Type':'application/json'
                }

            })
            if(!response.ok)throw new Error('something went wrong')
            else{
                setFormValues({name:"",email:'',number:''})

            }
            const data=await response.json();

           console.log(data)
        }
    }catch(err){
            console.log(err.message)
        }
    
    }

const submitForm=(e)=>{
    let data=formValues
submitHandler(data);
}
    return(
        <Container className={classes.container} fluid>
            <Form className={classes.form}>
                <FormLabel>Name :</FormLabel>
                <Form.Control type="text" name='name' className={classes.ip} value={formValues.name} onChange={changeHandler}></Form.Control>
                <p className={classes.error}>{formErrors.name}</p>
                <FormLabel>Email Id :</FormLabel>
                <Form.Control type='email' name='email' className={classes.ip} value={formValues.email} ref={openingTextRef} onChange={changeHandler}></Form.Control>
                <p className={classes.error}>{formErrors.email}</p>
                <FormLabel>Mobile number :</FormLabel>
                <Form.Control type="Number" name='number' maxLength={10} value={formValues.number} className={classes.ip} ref={releaseDateRef} onChange={changeHandler}></Form.Control>
                <p className={classes.error}>{formErrors.number}</p>
                <Button className={classes.btn} onClick={submitForm}>Submit</Button>
            </Form>
                
          
       </Container>
    )

}

export default ContactUs