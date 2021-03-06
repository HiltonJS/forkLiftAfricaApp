import React from "react";
import {Link} from "react-router-dom"

import {useSelector,useDispatch} from 'react-redux'
import {  logout  } from "../../redux/user/userActions";




const NavbarPage =(props)=> {

  const dispatch=useDispatch();

  const handleLogOut=()=>{
      dispatch(logout())
  }

  const user=props.user;


  return (
    <div class="wrapper">
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>ForkLift Africa</h3>
    
      </div>
      <ul class="lisst-unstyled components">
        <p>The Providers</p>
        <li>
          <Link to="/">Home</Link>
          {
            user.level==="techinician"?( <Link to="/Fulfiljobs">Open Jobs</Link>):(<></>)

          }
         
        </li>
        <li>
              <Link to="/jobs">View All Jobs </Link>
            </li>
            {props.user.level==="admin"?(
 <li>
 <Link to="/createJob">Create Jobs</Link>
</li>):<></>
            }
           
        <li class="active">
          <Link
            to="#homeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            >Jobs</Link
          >
          <ul class="collapse list-unstyled" id="homeSubmenu">
            <li>
              <Link to="">View All Jobs </Link>
            </li>
            <li>
              <Link to="/createJob">Create Jobs</Link>
            </li>
            <li>
              <Link to="#">Delete Jobs</Link>
            </li> 
            <li>
              <Link to="#">Update Jobs</Link>
            </li>
          </ul>
        </li>
       
        <li>
          <Link
            to="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            >Machines</Link
          >
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li>
              <Link to="#">View Machines</Link>
            </li>
            <li>
              <Link to="createBirth">Create Machine</Link>
            </li> <li>
              <Link to="#">Edit Mchine</Link>
            </li>
            <li>
              <Link to="#">Delete Machine</Link>
            </li>     
          </ul>
        </li>

        <li>
          <Link to="/addUser">Add User</Link>
        </li>

        <li onClick={handleLogOut}>
          <Link to="#" >LogOut</Link>
        </li>
      </ul>
    </nav>

    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button type="button" id="sidebarCollapse" class="btn btn-info">
            <i class="fas fa-align-left"></i>
            <span></span>
          </button>
        </div>
      </nav>
{
  props.children
}
   
    </div>
  </div>

   
    );
  }

export default NavbarPage