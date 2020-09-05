import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import React,{useEffect} from 'react';
import {getJobs} from '../../redux/data/dataActions';
import Axios from 'axios';
import NavbarPage from '../../components/navbar/navbar.component';

const Jobs = () => {
    const jobs = useSelector((state) => state.data.jobs);
    const dispatch=useDispatch()

    useEffect(() => {
        Axios.get("/users").then(users=>{
            console.log(users.data)
        })
        dispatch(getJobs());
        
      }, [dispatch]);

      console.log(jobs)
  return (
      <>
      <NavbarPage/>
    <div className="container">
      <h4 className="text-center  p-4 text-uppercase">Birth Certificates</h4>
      <table className="table table-hover shadow p-3 mb-5 bg-white rounded">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Client</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Assigned</th>
            <th scope="col">Assigned Email</th>
            <th scope="col">Status</th>
            <th scope="col"> View More</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length === 0 ? (
            <tr>
              <th></th>
              <th></th>
              <th>Nothing to show</th>
            </tr>
          ) : (
            jobs.map((job) => {
              return (
                <tr key={job.client}>
                  <th scope="row" >{job.client}</th>
                  <td>{job.phone}</td>
                  <td>{job.assigned}</td>
                  <td>{job.assignedEmail}</td>
                  <td>{job.status}</td>
               
                  <td>
                  <button className="btn btn-success btn-sm"><Link to={{pathname:"/singlejob",job:job}} > Click to view </Link></button>  
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
 </> );
};
export default Jobs;
