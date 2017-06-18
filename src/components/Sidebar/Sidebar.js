import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <NavLink to={'/about'} className="nav-link" activeClassName="active"><i className="fa fa-user"></i> About me</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/skills'} className="nav-link" activeClassName="active"><i className="fa fa-magic"></i>Skills</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/experience'} className="nav-link" activeClassName="active"><i className="fa fa-suitcase"></i> Work experience</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/achievements'} className="nav-link" activeClassName="active"><i className="fa fa-trophy"></i> Achievements</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/education'} className="nav-link" activeClassName="active"><i className="fa fa-graduation-cap"></i> Education</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/projects'} className="nav-link" activeClassName="active"><i className="fa fa-gears"></i> Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/contact'} className="nav-link" activeClassName="active"><i className="fa fa-phone"></i> Contact me</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
