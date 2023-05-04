import './Navbarcss.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
      <a className="navbar-brand" href="/"><img alt ='' src='https://www.workindia.in/employers/_next-images/?url=%2Fimages%2Ficons%2Fworkindia-full.png&w=256&q=100'></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink1"
                role="button"
                data-toggle="dropdown" 
                aria-haspopup="true"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Candidate
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink1"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Install Job Search App
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Find Jobs by Category
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Interview Tips
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Login">
                    Log in
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink2"
                role="button"
                data-toggle="dropdown" 
                aria-haspopup="true"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Employer
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink2"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Start hiring for free
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Install Recruiter App
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Refund Polacy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    FAQ's
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink3"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink3"
              >
                <li>
                  <a className="dropdown-item" href="/about">
                    About 
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Culture
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/contact">
                    Contact 
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Privacy Polacy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Terms and conditions
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-primary me-2" type="button">
              Find a job
            </button>
            <button className="btn btn-outline-secondary" type="button">
              Hire Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
