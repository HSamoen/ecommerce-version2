import React from 'react'
import './Contact.css'
import { useState,useEffect } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';


const Contact = () => {
    const initialValues = { fullname: "", email: "", comment: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        console.log(e.target)
        const {name,value} = e.target
        setFormValues({...formValues, [name]:value})
        console.log(formValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors]);
    const validate =(values) => {
        const errors = {}
        const regName= /^[a-zA-Z]+ [a-zA-Z]+$/
        const regEmail= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fullname) {
            errors.fullname = "Name is required!"
        } 
        else if (!regName.test(values.fullname)) {
            errors.fullname = "Please enter your full name!"
        }

        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!regEmail.test(values.email)) {
            errors.email = "Please enter a valid email!"
        }

        if (!values.comment) {
            errors.comment = "Please add a comment!"
        } 
        
        return errors;
    }

    return (
        <div class="contact-container">
        
        <div class="form">
            <h2>Have any questions?</h2>
            <p>Please fill out the contact form below and we'll get back to you.</p>
            <form className="form-input" name="myForm" onSubmit={handleSubmit}>
                <input 
                onChange={handleChange}
                value={ formValues.fullname}
                type="text" 
                name="fullname" 
                placeholder="Full name" 
                /> 
                <p>{formErrors.fullname}</p>

                <input 
                onChange={handleChange}
                value={ formValues.email}
                type="text" 
                name="email" 
                placeholder="Your email address" /> 
                <p>{formErrors.email}</p>

                <textarea 
                onChange={handleChange}
                value={ formValues.comment}
                name="comment" 
                placeholder="Add a comment" /> 
                <p>{formErrors.comment}</p>
                
                <MDBBtn style={{backgroundColor:"rgb(30, 30, 30)"}} >Submit</MDBBtn>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="submitted">Submitted!</div>
             ) 
             : (
                <pre></pre>
             )}
            </form>
       
           
        </div>
        <div class="connect">
            <h2>Connect with us:</h2>
            <p>For support or any questions: email us at Heban12@r2hstudent.org</p>
           <div class="location">
                <h2>Our Locations</h2>
                <p>1101 Red Ventures Dr, Fort Mill, SC 29707</p>
                <div class="map-responsive">
                <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13072.088703435642!2d-80.846034!3d35.00615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd566135231a2a0b!2sRed%20Ventures!5e0!3m2!1sen!2sus!4v1673854186481!5m2!1sen!2sus" width="400" height="300" style={{border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
           </div>
        </div>
    </div>
     
    )
}

export default Contact;