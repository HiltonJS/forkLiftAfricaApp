import React, { Fragment, useState } from "react";

import NavbarPage from "../../components/navbar/navbar.component";
import {useDispatch} from 'react-redux';
import {postInventoryData} from '../../redux/data/dataActions'
import    ErrorHandler from '../../components/errorHandler/errorHandler.component'




// const ValidationMessage =(props)=>{
//   if(!props.valid){
//   return(<div className="error-msg"> {props.message}</div>)
//   }
//   return null;
// }

const CreateJob = () => {

//   const validateForm=()=>{
//     setformValid( clientValid&&
//       phoneValid&&
//       problemValid&&
//       assignedValid&&
//       assignedEmailValid&&
//       statusValid&&
//       mastTypeValid&&
//       attachmentsValid&&
//       sideShiftValid&&
//     )
//   }

  const dispatch= useDispatch()


  const [client, setclient] = useState("");
  const [phone, setphone] = useState("");
  const [problem, setproblem] = useState("");
  const [assigned, setassigned] = useState("");
  const [assignedEmail, setassignedEmail] = useState("");
  const [status, setstatus] = useState("");
 


//   const [clientValid, setclientValid] = useState(false);
//   const [phoneValid, setphoneValid] = useState(false);
//   const [problemValid, setproblemValid] = useState(false);
//   const [assignedValid, setassignedValid] = useState(false);
//   const [assignedEmailValid, setassignedEmailValid] = useState(false);
//   const [statusValid, setstatusValid] = useState(false);
//   const [mastTypeValid, setMastTypeValid] = useState(false);
//   const [attachmentsValid, setAttachmentsValid] = useState(false);
//   const [sideShiftValid, setSideShiftValid] = useState(false);
 



 
  const handleSubmit = (event) => {
    event.preventDefault();
    const record={
      client,
      phone,
      problem,
      assigned,
      assignedEmail,
      status,
  
    }

    dispatch(postInventoryData(record))
    console.log(record);
  };

  return (
    <Fragment>
         <ErrorHandler />
      <NavbarPage />
      <div className="container pt-4">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">client</label>
              <input
                type="text"
                name="client"
                onChange={(event)=>setclient(event.target.value)}
                class="form-control"
                id="inputclient"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">phone</label>
              <input
                type="text"
                name="phone"
                class="form-control"
                id="inputphone"
                onChange={event=>setphone(event.target.value)}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">assigned</label>
              <input
                type="text"
                name="assigned"
                class="form-control"
                id="inputassigned"
                onChange={event=>setassigned(event.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputproblem">problem</label>
              <input
                type="text"
                name="problem"
                class="form-control"
                id="inputproblem"
                onChange={event=>setproblem(event.target.value)}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Lift Size</label>
              <input
                type="text"
                name="assignedEmail"
                vclass="form-control"
                id="inputassignedEmail"
                onChange={event=>setassignedEmail(event.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Folk Length</label>
              <input
                type="text"
                name="status"
                class="form-control"
                id="inputstatus"
                onChange={event=>setstatus(event.target.value)}
              />
            </div>
          </div>
          <button type="submit" onClick={handleSubmit} class="btn btn-success ">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateJob;
