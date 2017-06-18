import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card card-inverse card-success">
              <div className="card-header">
                React
              </div>
              <div className="card-block">
              I <i className="fa fa-heart"></i> React! I have built numerous tools using React! I usually go with React+Flask/Node.js as my primary stack.
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Skills;
