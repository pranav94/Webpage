import React, {Component} from 'react';
import {
  Doughnut,
  Pie
} from 'react-chartjs-2';
import { BeatLoader } from 'react-spinners';


const doughnut = {
  labels: [
    'ReactJS', 'Python', 'Flask', 'Django', 'NodeJS', 'NoSQL - MongoDB'
  ],
  datasets: [
    {
      data: [
        50, 20, 10, 10, 5, 5
      ],
      backgroundColor: [
        '#FF6384', '#36A2EB', '#CDDC39', '#2ECC71', '#1abc9c', '#FFCE56'
      ],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#CDDC39', '#2ECC71', '#1abc9c', '#FFCE56']
    }
  ]
};

const pie = {
  labels: [
    'Coding', 'Web development', 'Game development', 'Travelling', 'Adventure Sports', 'Football', 'Playing the Guitar'
  ],
  datasets: [
    {
      data: [
        20, 25, 5, 15, 10, 20, 5
      ],
      backgroundColor: [
        '#FF6384', '#36A2EB', '#CDDC39', '#2ECC71', '#1abc9c', '#FFCE56', '#9E9E9E'
      ],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#CDDC39', '#2ECC71', '#1abc9c', '#FFCE56', '#9E9E9E']
    }
  ]
};

const pieOptions = {
  tooltips: {
    callbacks: {
      label: function(tooltipItems, data) {
        return data.labels[tooltipItems.index] + ': ' + data.datasets[0].data[tooltipItems.index] + '%';
      }
    }

  }
};

class About extends Component {

  constructor() {
    super();
    this.state = {
      loadingGithub: true
    };
  }

  handleGithubLoaded(event) {
    this.setState({"loadingGithub": false});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="card-columns cols-2">
          <div className="card card-inverse card-success">
            <div className="card-header">
              About me
              <div className="card-actions">
                <a href="https://www.linkedin.com/in/pudupa94/">
                  <i style={{color: "white"}} className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="card-text">
              Hi. Welcome to my webpage! I&nbsp;
              <i className="fa fa-heart"></i>&nbsp;Javascript & Python and building full stack web tools using them. This was built using Node+React! If you like what you see, feel free to drop a mail!
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Skill distribution
              <div className="card-actions">
                <a href="#/skills">
                <i className="fa fa-link"></i>
                </a>
              </div>
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
                <Doughnut data={doughnut}/>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Interests
              <div className="card-actions">
                <a href="https://www.facebook.com/pranav.udupa.1">
                <i className="fa fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
                <Pie data={pie} options={pieOptions}/>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Github activity
              <div className="card-actions">
                <a href="https://github.com/pranav94">
                  <i className="fa fa-github-alt"></i>
                </a>
              </div>
            </div>
            <div className="card-block">
              <div className="chart-wrapper" style={{textAlign: 'center'}}>
                <BeatLoader color="#5adec3" loading={this.state.loadingGithub}/>
                <img onLoad={this.handleGithubLoaded.bind(this)} style={{width: "100%"}} src="http://ghchart.rshah.org/pranav94" alt="Github chart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
