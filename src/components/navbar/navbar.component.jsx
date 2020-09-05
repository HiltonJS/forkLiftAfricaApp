import React from "react";
import {Link} from "react-router-dom"



const NavbarPage =()=> {

  return (
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="#">ForkLift Africa</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/createBirth">Create Birth Certificate</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/createJob">Create Jobs</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/jobs">View Jobs</Link>
      </li>
    
    
    </ul>
   
  </div>
</nav>
   
    );
  }


export default NavbarPage;