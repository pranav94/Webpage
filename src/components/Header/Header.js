import React, { Component } from 'react';
import dp from '../../dp.jpg'
class Header extends Component {

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  render() {
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler d-lg-none" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
          <a className = "navbar-brand" href = "#" > <div className="profile-header-container">
            <div className="profile-header-img">
              <img className="rounded-circle" src={dp}/>
            </div>
          </div> </a>
        <ul className="nav navbar-nav d-md-down-none mr-auto">
          <li className="nav-item">
            <button className="nav-link navbar-toggler sidebar-toggler" type="button" onClick={this.sidebarToggle}>&#9776;</button>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;
