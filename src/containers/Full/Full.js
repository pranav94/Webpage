import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import About from '../../views/About/'
import Skills from '../../views/Skills/'

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <div className="container-fluid">
              <Switch>
                <Route path="/about" name="About" component={About}/>
                <Route path="/skills" name="Skills" component={Skills}/>
                <Redirect from="/" to="/about"/>
              </Switch>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
