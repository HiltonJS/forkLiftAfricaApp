import React, { Fragment, useState } from "react";

import NavbarPage from "../../components/navbar/navbar.component";
import {useDispatch,useSelector} from 'react-redux';
import {postInventoryData} from '../../redux/data/dataActions'
import  ErrorHandler from '../../components/errorHandler/errorHandler.component'
import ModalPage from "../../components/modal/modal.component";




const ValidationMessage =(props)=>{
  if(!props.valid){
  return(<div className="error-msg"> {props.message}</div>)
  }
  return null;
}

const CreateBirthPage = () => {

  const validateForm=()=>{
    setformValid( makeValid&&
      modelValid&&
      capacityValid&&
      serialValid&&
      liftSizeValid&&
      forkLengthValid&&
      mastTypeValid&&
      attachmentsValid&&
      sideShiftValid&&
      tiltTypeValid&&
      engineNumberValid&&
      typeOfFuelValid&&
      frontTyreSizeValid&&
      engineOilFilterValid&&
      rearTyreSizeValid&&
      engineNameValid&&
      transmissionOilFilterValid&&
      fuelFilterValid&&
      hydralicOilFilterValid&&
      airInnerFilterValid&&
      airOuterFilterValid&&
      eletricChargeTypeValid&&
      engineCapacityValid)
  }

  const dispatch= useDispatch()


  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [capacity, setCapacity] = useState("");
  const [serial, setSerial] = useState("");
  const [liftSize, setLiftSize] = useState("");
  const [forkLength, setForklength] = useState("");
  const [mastType, setMastType] = useState("");
  const [attachments, setAttachments] = useState("");
  const [sideShift, setSideShift] = useState("");
  const [tiltType, setTiltType] = useState("");
  const [engineNumber, setEngineNumber] = useState("");
  const [typeOfFuel,setTypeOfFuel]=useState('')
  const [frontTyreSize, setFrontTyreSize] = useState("");
  const [engineOilFilter, setEngineOilFilter] = useState("");
  const [rearTyreSize, setRearTyreSize] = useState("");
  const [engineName,setEngineName]=useState("")
  const [transmissionOilFilter, setTransmissionOilFilter] = useState("");
  const [fuelFilter, setFuelFilter] = useState("");
  const [hydralicOilFilter, setHydralicOilFilter] = useState("");
  const [airInnerFilter, setAirInnerFilter] = useState("");
  const [airOuterFilter, setAirOuterFilter] = useState("");
  const [eletricChargeType, setMakeEletricChargeType] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");

  const [makeValid, setMakeValid] = useState(false);
  const [modelValid, setModelValid] = useState(false);
  const [capacityValid, setCapacityValid] = useState(false);
  const [serialValid, setSerialValid] = useState(false);
  const [liftSizeValid, setLiftSizeValid] = useState(false);
  const [forkLengthValid, setForklengthValid] = useState(false);
  const [mastTypeValid, setMastTypeValid] = useState(false);
  const [attachmentsValid, setAttachmentsValid] = useState(false);
  const [sideShiftValid, setSideShiftValid] = useState(false);
  const [tiltTypeValid, setTiltTypeValid] = useState(false);
  const [engineNumberValid, setEngineNumberValid] = useState(false);
  const [typeOfFuelValid,setTypeOfFuelValid]=useState(false)
  const [frontTyreSizeValid, setFrontTyreSizeValid] = useState(false);
  const [engineOilFilterValid, setEngineOilFilterValid] = useState(false);
  const [rearTyreSizeValid, setRearTyreSizeValid] = useState(false);
  const [engineNameValid,setEngineNameValid]=useState(false)
  const [transmissionOilFilterValid, setTransmissionOilFilterValid] = useState(false);
  const [fuelFilterValid, setFuelFilterValid] = useState(false);
  const [hydralicOilFilterValid, setHydralicOilFilterValid] = useState(false);
  const [airInnerFilterValid, setAirInnerFilterValid] = useState(false);
  const [airOuterFilterValid, setAirOuterFilterValid] = useState(false);
  const [eletricChargeTypeValid, setMakeEletricChargeTypeValid] = useState(false);
  const [engineCapacityValid, setEngineCapacityValid] = useState(false);
  const [formValid,setformValid]= useState(false);
  const [errorMsg,setErrorMsg]=useState(false);



 
  const handleSubmit = (event) => {
    event.preventDefault();
    const record={
      make,
      model,
      capacity,
      serial,
      liftSize,
      forkLength,
      mastType,
      attachments,
      sideShift,
      tiltType,
      engineNumber,
      typeOfFuel,
      frontTyreSize,
      engineOilFilter,
      rearTyreSize,
      engineName,
      transmissionOilFilter,
      fuelFilter,
      hydralicOilFilter,
      airInnerFilter,
      airOuterFilter,
      eletricChargeType,
      engineCapacity
    }

    dispatch(postInventoryData(record))
    console.log(record);
  };
  const successMessage= useSelector(state=>state.data.successMessage)
  return (
    <Fragment>
         <ErrorHandler />
      <NavbarPage />
      <ModalPage>
        {successMessage}
      </ModalPage>
      <div className="container pt-4">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Make</label>
              <input
                type="text"
                name="make"
                onChange={(event)=>setMake(event.target.value)}
                class="form-control"
                id="inputMake"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Model</label>
              <input
                type="text"
                name="model"
                class="form-control"
                id="inputModel"
                onChange={event=>setModel(event.target.value)}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Serial</label>
              <input
                type="text"
                name="serial"
                class="form-control"
                id="inputSerial"
                onChange={event=>setSerial(event.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputCapacity">Capacity</label>
              <input
                type="text"
                name="capacity"
                class="form-control"
                id="inputCapacity"
                onChange={event=>setCapacity(event.target.value)}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Lift Size</label>
              <input
                type="text"
                name="liftSize"
                vclass="form-control"
                id="inputLiftSize"
                onChange={event=>setLiftSize(event.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Folk Length</label>
              <input
                type="text"
                name="forkLength"
                class="form-control"
                id="inputFolkLength"
                onChange={event=>setForklength(event.target.value)}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Mast Type</label>
              <input
                type="text"
                name="mastType"
                class="form-control"
                id="inputMastType"
                onChange={event=>setMastType(event.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Attachments</label>
              <input
                type="text"
                name="attachments"
                class="form-control"
                id="inputAttachments"
                onChange={event=>setAttachments(event.target.value)}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Side Shift</label>
              <input
                type="text"
                name="sideShift"
                class="form-control"
                id="inputEmail4"
                onChange={event=>setSideShift(event.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Tilt Type</label>
              <input
                type="text"
                name="tiltType"
                class="form-control"
                id="inputPassword4"
                onChange={event=>setTiltType(event.target.value)}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Engine Number:</label>
              <input
                type="text"
                name="engineNumber"
                class="form-control"
                id="inputEngineNumber"
                onChange={event=>setEngineNumber(event.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Type of Fuel</label>
              <input
                type="text"
                name="typeOfFuel"
                class="form-control"
                id="inputTtypeOfFuel"
                onChange={event=>setTypeOfFuel(event.target.value)}
              />
            </div>
          </div>

          <div class="form-group">
            <label for="inputAddress">Engine Name</label>
            <input
              type="text"
              name="engineName"
              class="form-control"
              id="inputEngineName"
              onChange={event=>setEngineName(event.target.value)}
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Front Tyre Size</label>
              <input
                type="text"
                name="frontTyreSize"
                class="form-control"
                id="inputFrontTypeSize"
                onChange={event=>setFrontTyreSize(event.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Rear Tyre Size</label>
              <input
                type="text"
                name="rearTyreSize"
                class="form-control"
                id="inputRearTyreSize"
                onChange={event=>setRearTyreSize(event.target.value)}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Engine Oil Filter</label>
              <input
                type="text"
                name="engineOilFilter"
                class="form-control"
                id="inputEngineOilFilter"
                onChange={event=>setEngineOilFilter(event.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Transmission Oil Filter</label>
              <input
                type="text"
                name="transmissionOilFilter"
                class="form-control"
                id="inputTransmssion"
                onChange={event=>setTransmissionOilFilter(event.target.value)}
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Hydralic Oil Filter</label>
              <input
                type="text"
                name="hydralicOilFilter"
                class="form-control"
                id="inputHydralicOilFilter"
                onChange={event=>setHydralicOilFilter(event.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Fuel Filter</label>
              <input
                type="text"
                name="fuelFilter"
                class="form-control"
                id="inputFuelFilter"
                onChange={event=>setFuelFilter(event.target.value)}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Air inner filter</label>
              <input
                type="text"
                name="airInnerFilter"
                class="form-control"
                id="inputAirInnerFilter"
                onChange={event=>setAirInnerFilter(event.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Air Outer Filter</label>
              <input
                type="text"
                name="airOuterFilter"
                class="form-control"
                id="inputAirOuterFilter"
                onChange={event=>setAirOuterFilter(event.target.value)}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Eletrcic Charge Type</label>
              <input
                type="text"
                name="EletricChargeType"
                class="form-control"
                id="inputEletricChargeType"
                onChange={event=>setMakeEletricChargeType(event.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Capacity</label>
              <input
                type="text"
                name="capacity"
                class="form-control"
                id="inputCapacity"
                onChange={event=>setEngineCapacity(event.target.value)}
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

export default CreateBirthPage;
