import React, { useRef } from 'react'
import Input from '../components/Form/Input';
import MainNavigation from '../components/MainNavigation';
import classes from './ContactUs.module.css'

const ContactUs = () => {
    const userName = useRef();
    const emailId = useRef();
    const phoneNumber = useRef()

    const submitHandler = async(event)=>{
        event.preventDefault()
        const userDetail = {
            userName:userName.current.value,
            emailId:emailId.current.value,
            phoneNumber:phoneNumber.current.value,
        }
        console.log(userDetail)
        const response = await fetch('https://adddetails-c080a-default-rtdb.firebaseio.com/userDetail.json',{
            method:'POST',
            body:JSON.stringify(userDetail),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json()
    }

  return (
    <>
    <MainNavigation/>
    <form onSubmit={submitHandler} className={classes.form} >
        <label>Username</label>
     <input type='text' ref = {userName} />
     <label>E-Mail</label>
    <input type='email' ref = {emailId}/>
    <label>Phone</label>
     <input type='number' ref = {phoneNumber}/>
     <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default ContactUs