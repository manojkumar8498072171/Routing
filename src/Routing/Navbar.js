import React from 'react'
import {Link} from'react-router-dom'
const Navbar = () => {
  return (
    <React.Fragment>
     <nav className="navbar navbar-expand-sm bg-dark nav-pills ">
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#on">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className='collapse navbar-collapse 'id='on'>
  <ul className="navbar-nav ">
    <li className="nav-item ">
      <Link className="nav-link text-white" to="/SignUp">SignUp</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-white" to="/SignIn">SignIn</Link>
    </li>
    <li className="nav-item ">
      <Link className="nav-link text-white" to="/Home">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-white" to="/Onclick">Account</Link>
    </li>   
  </ul>
  </div>
</nav>
    </React.Fragment>
  )
};

export default Navbar;
