import React, { Fragment } from 'react';
import NavbarPage from '../../components/navbar/navbar.component';
import Button from '../../components/button/button.component';

import { Link } from 'react-router-dom';


const SingleFork = (props) => {
   
    return (
    <Fragment> 
      {!props.location.fork?<div className="m-4"><Link to="/">....Opps Somwthing went wrong Click here</Link></div>:(  
      <div className="container pt-4">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Make</label>
              <h3>{props.location.fork.make}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Model</label>
              <h3>{props.location.fork.model}</h3>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Serial</label>
              <h3>{props.location.fork.serial}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputCapacity">Capacity</label>
              <h3>{props.location.fork.capacity}</h3>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Lift Size</label>
              <h3>{props.location.fork.liftSize}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Folk Length</label>
              <h3>{props.location.fork.folkLength}</h3>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Mast Type</label>
              <h3>{props.location.fork.mastType}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Attachments</label>
              <h3>{props.location.fork.attachments}</h3>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Side Shift</label>
              <h3>{props.location.fork.sideShift}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Tilt Type</label>
              <h3>{props.location.fork.tiltType}</h3>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Engine Number:</label>
              <h3>{props.location.fork.engineNumber}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Type of Fuel</label>
              <h3>{props.location.fork.typeOfFuel}</h3>
            </div>
          </div>

          <div class="form-group">
            <label for="inputAddress">Engine Name</label>
            <h3>{props.location.fork.engineName}</h3>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Front Tyre Size</label>
              <h3>{props.location.fork.frontTyreSize}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Rear Tyre Size</label>
              <h3>{props.location.fork.rearTyreSize}</h3>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Engine Oil Filter</label>
              <h3>{props.location.fork.engineOilFilter}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Transmission Oil Filter</label>
              <h3>{props.location.fork.transmissionOilFilter}</h3>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Hydralic Oil Filter</label>
              <h3>{props.location.fork.hydralicOilFilter}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Fuel Filter</label>
              <h3>{props.location.fork.fuelFilter}</h3>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Air inner filter</label>
              <h3>{props.location.fork.airInnerFilter}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Air Outer Filter</label>
              <h3>{props.location.fork.airOuterFilter}</h3>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Electric Charge Type</label>
              <h3>{props.location.fork.electricChargeType}</h3>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Capacity</label>
              <h3>{props.location.fork.engineCapacity}</h3>
            </div>
          </div>
       
          <Button design={"danger"}>   Delete</Button>
        </form>
      </div>
      )}
</Fragment>
   );
};

export default SingleFork;