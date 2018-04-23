import React, { Component } from 'react';
import dp from '../../img/dp.jpg'
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
        <button className="navbar-toggler" type="button" onClick={this.sidebarToggle}>&#9776;</button>
        <a className = "navbar-brand" href = "/" >
          <div className="profile-header-container">
            <div className="profile-header-img">
              <img className="rounded-circle" src={dp} alt="Profile"/>
            </div>
          </div>
        </a>
      </header>
    )
  }
}

export default Header;
