import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import React,{Fragment, useEffect} from 'react';
import {getJobs} from '../../redux/data/dataActions';
import Axios from 'axios';
import NavbarPage from '../../components/navbar/navbar.component';
import MaterialTableDemo from '../editJob/editTable';

const Jobs = ({match}) => {
  console.log(match.url)
    const jobs = useSelector((state) => state.data.jobs);
    const user=useSelector((state)=>state.user.user)
    const dispatch=useDispatch()

    useEffect(() => {
     
        dispatch(getJobs());
        console.log(user)
        
      }, [dispatch, user]);
console.log(jobs)
      const userJobs=jobs.filter(job=>{
        return job.assigned===user.name
      })
console.log(userJobs)
    
  return (
      <>
   {
   user.level==="admin"?
   <Fragment>
<h4 className="text-center  p-4 text-uppercase">All Jobs</h4>
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
                <tr key={job._id}>
                  <th scope="row" >{job.client}</th>
                  <td>{job.phone}</td>
                  <td>{job.assigned}</td>
                  <td>{job.assignedEmail}</td>
                  <td>{job.status}</td>
               
                  <td>
                  <button className="btn btn-success btn-sm"><Link to={`${match.url}/${job._id}`} jobs={jobs}> Click to view </Link></button>  
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
   </Fragment>
    :<Fragment><h4 className="text-center  p-4 ">{user.name} Jobs</h4>
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
       {userJobs.length === 0 ? (
         <tr>
           <th></th>
           <th></th>
           <th>Nothing to show</th>
         </tr>
       ) : (
         userJobs.map((job) => {
           return (
             <tr key={job._id}>
               <th scope="row" >{job.client}</th>
               <td>{job.phone}</td>
               <td>{job.assigned}</td>
               <td>{job.assignedEmail}</td>
               <td>{job.status}</td>
            
               <td>
               <button className="btn btn-success btn-sm"><Link to={`${match.url}/${job._id}`} jobs={jobs}> Click to view </Link></button>  
               </td>
             </tr>
           );
         })
       )}
     </tbody>
   </table></Fragment> }
    
 </> );
};
export default Jobs;
