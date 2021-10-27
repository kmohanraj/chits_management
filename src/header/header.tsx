import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Header extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-info p-2">
        <NavLink className="navbar-brand" to="#">Chits</NavLink>
        <NavLink className="nav-link" exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" exact activeClassName="active" to="/">
          Customers
        </NavLink>
        
      </nav>
    )
  }
}

export default Header;