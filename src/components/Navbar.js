import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const {repositories, handleOnChange}=this.props;
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mediaQuery">
        <div className="container px-5">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-NavLink" exact to="/portfolio" activeClassName="selected">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink" exact to="/about" activeClassName="selected">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink " exact to="/projects" activeClassName="selected">
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>

    );
  }
}
