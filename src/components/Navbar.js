import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import logo from '../assets/images/topsecret.png';

export default class Navbar extends Component {
  render() {
    const {repositories, handleOnChange}=this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          {/* <Link className="navbar-brand" exact to="/" activeClassName="selected">
            <img src={logo} alt="" width="170" />
          </Link> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <select 
            className="form-select"
            aria-label="Default select example"
            onChange={handleOnChange}
          >
            {repositories.map((repo) => (
              <option 
                key={repo.id}
                value={repo.name}>
                  {repo.name}
              </option>              
            ))}
          </select> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-NavLink" exact to="/" activeClassName="selected">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink" to="/about" activeClassName="selected">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink " to="/portfolio" activeClassName="selected">
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
