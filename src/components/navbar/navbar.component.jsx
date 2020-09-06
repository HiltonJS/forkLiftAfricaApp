import React from "react";
import {Link} from "react-router-dom"



const NavbarPage =(props)=> {
  return (
    <div class="wrapper">
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>Bootstrap Slider</h3>
      </div>
      <ul class="lisst-unstyled components">
        <p>The Providers</p>
        <li>
          <Link to="/">Home</Link>
        </li>
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
              <Link to="#">View All Jobs </Link>
            </li>
            <li>
              <Link href="/createJob">Create Jobs</Link>
            </li>
            <li>
              <Link href="#">Delete Jobs</Link>
            </li> 
            <li>
              <Link href="#">Update Jobs</Link>
            </li>
          </ul>
        </li>
       
        <li>
          <Link
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            >Machines</Link
          >
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li>
              <Link href="#">View Machines</Link>
            </li>
            <li>
              <Link href="createBirth">Create Machine</Link>
            </li> <li>
              <Link href="#">Edit Mchine</Link>
            </li>
            <li>
              <Link href="#">Delete Machine</Link>
            </li>     
          </ul>
        </li>

        <li>
          <Link href="#">Policy</Link>
        </li>

        <li>
          <Link href="#">LogOut</Link>
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