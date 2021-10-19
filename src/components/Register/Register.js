import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification } from "firebase/auth";

import './Register.css'
import { Link } from 'react-router-dom';
import {Form,Row,Col} from 'react-bootstrap'

const Register = () => {
    
    const auth = getAuth();
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");
const [isLogin, setIsLogin] = useState(false);

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }

    const handleRegistration=(e)=>{
        e.preventDefault();
console.log(email,password);
if(password.length < 6 ){
    setError("Password must be at list 6 carecter")
    return;
}

signInWithEmailAndPassword(auth, email, password)
.then(result=>{
    const user=result.user;
    console.log(user)
    setError(""); 
})
.catch(error=>{
    setError(error.message) 
})

createUserWithEmailAndPassword(auth, email, password)
.then(result=>{
    const user=result.user;
    console.log(user)
    setError("");
    verifyEmail();
})
.catch(error=>{
    setError(error.message) 
})

const verifyEmail=()=>{

    sendEmailVerification(auth.currentUser)
  .then(result => {
     console.log(result)
     setError("");
  })
  .catch(error=>{
    setError(error.message) 
})
}


    }
    return (

        <div className="text-center my-4">
        <h2>Please Sign Up</h2>
        <p className=" mt-2">Sign Up with Email & Password</p>
        <h1 className="text-danger text-center">{error}</h1>
        <div className="w-50 mx-auto">



        <Form onSubmit={handleRegistration}>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter Your Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Enter Password" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Re-Password
    </Form.Label>
    <Col sm="10">
      <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Enter Re-Password" />
    </Col>
  </Form.Group>
 
  <button type="submit" className="btn btn-info">Register</button>
        
        
        <div className="container signin">
          <p>Already have an account? <Link to="login">Login</Link></p>
        </div>



</Form>


            </div>
            </div>







       
      
    );
};

export default Register;