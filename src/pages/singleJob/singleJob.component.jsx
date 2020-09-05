import React, { Fragment } from 'react';
import NavbarPage from '../../components/navbar/navbar.component';
import Button from '../../components/button/button.component';

import { Link } from 'react-router-dom';


const SingleJob = (props) => {
   
    return (
    <Fragment>
     <NavbarPage/>
    
      {!props.location.fork?<div className="m-4"><Link to="/">....Opps Somwthing went wrong Click here</Link></div>:(  
      <div className="container pt-4">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Client</label>
              <h3>{props.location.job.client}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Phone Number</label>
              <h3>{props.location.job.phone}</h3>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Assigned</label>
              <h3>{props.location.job.assigned}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputCapacity">Assinged Email</label>
              <h3>{props.location.job.assignedEmail}</h3>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Status</label>
              <h3>{props.location.job.status}</h3>
            </div>
           
          </div>
       
          <Button design={"danger"}>   Delete</Button>
        </form>
      </div>
    
    
      )}
</Fragment>
   );
};

export default SingleJob;