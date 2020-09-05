import React,{useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {signUp} from '../../redux/user/userActions';
import {useDispatch} from 'react-redux' 
const SignUp = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const [level,setLevel]=useState('')

  const dispatch=useDispatch();

   const submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    const userData={
      name,
      level,
      email,
      password
    }
    dispatch(signUp(userData))

  };
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="4"/>
    <MDBCol md="6">
      <form className="needs-validation"
          onSubmit={submitHandler}
          noValidate>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right"  onChange={(event)=>{setName(event.target.value)}} required  />
             <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
              <MDBInput label="Your level" icon="user" group type="text" validate error="wrong"
            success="right"  onChange={(event)=>{setLevel(event.target.value)}} required  />
             <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
  
        <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right"  onChange={(event)=>{setEmail(event.target.value)}} required/>
         
          <MDBInput label="Your password" onChange={(event)=>{setPassword(event.target.value)}} icon="lock" group type="password" validate required />
        </div>
        <div className="text-center">
          <MDBBtn color="primary" type="submit">Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default SignUp;