import React from 'react'
// import './index.css';
import { Link } from 'react-router-dom';
export default function Navbar() {


  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fw-semibold" to="/">Milk Farm</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav fs-5 fw-semibold">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link active dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Customers
                </Link>
                <ul className="dropdown-menu ">
                  <li><Link className="dropdown-item" to="/addmember">Add New Member</Link></li>
                  <li><Link className="dropdown-item" to="/listofmembers">Show Current List of Members</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/addtodays">Add Today's Milk</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/payments">Payments</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}








