import React, { Fragment } from 'react';
import NavbarPage from '../../components/navbar/navbar.component';
import Button from '../../components/button/button.component';

import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react';
import {getJobs} from '../../redux/data/dataActions';



const SingleJob = ({match}) => {
  const jobs = useSelector((state) => state.data.jobs);
  const dispatch=useDispatch()
  const id = match.params._id;

  const job= jobs.filter((job)=>{
    return job._id===id
  })
  useEffect(()=>{
    dispatch(getJobs());
  },[dispatch])

  const singlejob=job[0]
  console.log(job[0])
  console.log(match.params)

 const  handleDelete=(id,e)=>{
   e.preventDefault();
   console.log(id)
  }
    return (
    <Fragment> 
       { job.map(jb=>(
     <div className="container pt-4">
     <form>
       <div class="form-row">
         <div class="form-group col-md-6">
           <label for="inputEmail4">Client</label>
           <h3>{jb.client}</h3>
         </div>
         <div class="form-group col-md-6">
           <label for="inputPassword4">Phone Number</label>
           <h3>{jb.phone}</h3>
         </div>
       </div>
       <div class="form-row">
         <div class="form-group col-md-6">
           <label for="inputEmail4">Assigned</label>
           <h3>{jb.assigned}</h3>
         </div>
         <div class="form-group col-md-6">
           <label for="inputCapacity">Assinged Email</label>
           <h3>{jb.assignedEmail}</h3>
         </div>
       </div>
       <div class="form-row">
         <div class="form-group col-md-6">
           <label for="inputEmail4">Status</label>
           <h3>{jb.status}</h3>
         </div>
       </div>
       <Button design={"danger"} value="i am " onClick={e=>handleDelete(jb._id,e)}>   Delete</Button>
       <Button design={"warning"}>Edit</Button>
     </form>
   </div>
       ))
 
}
    
      
</Fragment>
   );
};

export default SingleJob;