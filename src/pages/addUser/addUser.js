import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { signUp } from "../../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import ModalPage from "../../components/modal/modal.component";
import "./addUser.css";

const AddUser = () => {
  const successMessage = useSelector((state) => state.user.successMessage);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const [zip, setZip] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name,
      level,
      email,
      password,
      surname,
      address,
      city,
      states,
      zip,
      company,
      phoneNumber,
    };
    dispatch(signUp(userData));
  };
  return (
    <>
      <div class="container">
        <h1 class="well">Registration Form</h1>
        <div class="col-lg-12 well">
          <div class="row">
            <form>
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-6 form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Enter First Name Here.."
                      class="form-control"
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>

                  <div class="col-sm-6 form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter Last Name Here.."
                      class="form-control"
                      onChange={(event) => setSurname(event.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label>Email Address</label>
                  <input
                    type="text"
                    placeholder="Enter Email Address Here.."
                    class="form-control"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password Address Here.."
                    class="form-control"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label>Address</label>
                  <textarea
                    placeholder="Enter Address Here.."
                    rows="3"
                    class="form-control"
                    onChange={(event) => setAddress(event.target.value)}
                  ></textarea>
                </div>
                <div class="row">
                  <div class="col-sm-4 form-group">
                    <label>City</label>
                    <input
                      type="text"
                      placeholder="Enter City Name Here.."
                      class="form-control"
                      onChange={(event) => setCity(event.target.value)}
                    />
                  </div>
                  <div class="col-sm-4 form-group">
                    <label>State</label>
                    <input
                      type="text"
                      placeholder="Enter State Name Here.."
                      class="form-control"
                      onChange={(event) => setStates(event.target.value)}
                    />
                  </div>
                  <div class="col-sm-4 form-group">
                    <label>Zip</label>
                    <input
                      type="text"
                      placeholder="Enter Zip Code Here.."
                      class="form-control"
                      onChange={(event) => setZip(event.target.value)}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 form-group">
                    <label>Level</label>
                    <select
                      class="form-control"
                      onChange={(event) => setLevel(event.target.value)}
                      id="exampleFormControlSelect1"
                    >
                      {" "}
                      <option value="none">Choose your level</option>
                      <option value="technician">Technician</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div class="col-sm-6 form-group">
                    <label>Company</label>
                    <input
                      type="text"
                      placeholder="Enter Company Name Here.."
                      class="form-control"
                      onChange={(event) => setCompany(event.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number Here.."
                    class="form-control"
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  class="btn btn-lg btn-info"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
