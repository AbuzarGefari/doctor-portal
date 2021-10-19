import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link,useLocation,useHistory  } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle}=useAuth()
    const location =useLocation();
    const history =useHistory();
    const redirect_uri=Location.state?.form || "/home"
   

const handleGoogleLogin=()=>{
   signInUsingGoogle()
   .then(result=>{
  history.push(redirect_uri);
});
}


    return (
 <div>
   <div className="text-center my-4">
        <h2>Please Log In</h2>
       
        <div className="w-50 mx-auto">
<Form onSubmit="">
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
    <Form.Control type="email" placeholder="Enter Your Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Enter Your Password" />
    </Col>
  </Form.Group>
  <Button variant="success">Login</Button>
</Form>
<p>New To MediPath <Link to="/register">Create accocucnt

</Link></p>
<hr />
<hr />
<hr />
<div>---Login Anathor Way---</div>
<button onClick={handleGoogleLogin} className="btn btn-info mb-5 mt-5">Login Using Google</button>
 </div>


 </div>
            </div>



    );
};

export default Login;