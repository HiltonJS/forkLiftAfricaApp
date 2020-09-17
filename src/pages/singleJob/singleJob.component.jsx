import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import { deleteJob, getJobs } from "../../redux/data/dataActions";
import Axios from "axios";
import "./singleJob.css";
import moment from "moment";

const SingleJob = ({ match }) => {
  const jobs = useSelector((state) => state.data.jobs);

  const user=useSelector(state=>state.user.user)
  const _id = match.params._id;
  const dispatch=useDispatch()
  const job = jobs.filter((job) => {
    return job._id === _id;
  });

  useEffect(() => {
     
    dispatch(getJobs());
   
    
  }, [dispatch, user]);

  console.log(user)  

 const handleDelete=(event)=>{
   event.preventDefault()
   const id={_id}
   dispatch(deleteJob(id))
  }
  return (
    <>{
      user.level==="admin"?
      <Fragment> {job.map((jb) => (
        <div class="container emp-profile">
          <form method="post">
            <div class="row">
              <div class="col-md-4">
                <div class="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  <div class="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="profile-head">
                  <h5>{jb.client}</h5>
                  <h6>{jb.phone}</h6>
                  <p class="proile-rating">
                    RANKINGS : <span>8/10</span>
                  </p>
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Description
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
              <Link to={`${match.url}/${jb._id}`} > <input
                  type="submit"
                  class="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Job"
                /></Link> 
              </div>
           
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="profile-work"></div>
              </div>
              <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Assigned</label>
                      </div>
                      <div class="col-md-6">
                        <p>{jb.assigned}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Status</label>
                      </div>
                      <div class="col-md-6">
                        <p>{jb.status}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label> Date</label>
                      </div>
                      <div class="col-md-6">
                        <p>{moment(jb.created_at).format("ll")}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Problem</label>
                      </div>
                      <div class="col-md-6">
                        <p>{jb.problem}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div class="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div class="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div class="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div class="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div class="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <button type="submit" onClick={handleDelete} class="btn btn-danger ">
             DELETE
          </button>
        </div>
      ))}</Fragment>: <Fragment> {job.map((jb) => (
        <div class="container emp-profile">
          <form method="post">
            <div class="row">
              <div class="col-md-2">
               
              </div>
              <div class="col-md-8">
                <div class="profile-head">
                  <h5>{jb.client}</h5>
                  <h6>{jb.phone}</h6>
                  <p class="proile-rating">
                    RANKINGS : <span>8/10</span>
                  </p>
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Description
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
              <Link to={`${match.url}/${jb._id}`} > <input
                  type="submit"
                  class="profile-edit-btn"
                  name="btnAddMore"
                  value="FullFill"
                /></Link> 
              </div>
           
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="profile-work"></div>
              </div>
              <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Assigned</label>
                      </div>
                      <div class="col-md-6">
                        <p>{jb.assigned}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Status</label>
                      </div>
                      <div class="col-md-6">
                        <p>{jb.status}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label> Date</label>
                      </div>
                      <div class="col-md-6">
                        <p>{moment(jb.created_at).format("ll")}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Problem</label>
                      </div>
                      <div class="col-md-6">
                        <p>{jb.problem}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div class="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div class="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div class="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div class="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div class="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      ))}</Fragment>}
    </>
  );
};
export default SingleJob;
