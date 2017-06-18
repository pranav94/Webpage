import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import {
  Bar,
  Doughnut,
  Line,
  Pie,
  Polar,
  Radar
} from 'react-chartjs-2';
import classnames from 'classnames';
import {Carousel} from 'react-bootstrap';
import nm from '../../img/nm.jpg';
import manali from '../../img/manali.jpg';
import nm2 from '../../img/nm2.jpg';
import vattai from '../../img/vattai.jpg';

const line = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        65,
        59,
        80,
        81,
        56,
        55,
        40
      ]
    }
  ]
};

const bar = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [
        65,
        59,
        80,
        81,
        56,
        55,
        40
      ]
    }
  ]
};

const doughnut = {
  labels: [
    'Red', 'Green', 'Yellow'
  ],
  datasets: [
    {
      data: [
        300, 50, 100
      ],
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56'
      ],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

const radar = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [
        65,
        59,
        90,
        81,
        56,
        55,
        40
      ]
    }, {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [
        28,
        48,
        40,
        19,
        96,
        27,
        100
      ]
    }
  ]
};

const pie = {
  labels: [
    'Coding', 'Web development', 'Game development', 'Travelling', 'Adventure Sports', 'Football', 'Guitar'
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

const polar = {
  datasets: [
    {
      data: [
        11, 16, 7, 3, 14
      ],
      backgroundColor: [
        '#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'
      ],
      label: 'My dataset' // for legend
    }
  ],
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
};

class About extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card-columns cols-2">
          <div className="card card-inverse card-success">
            <div className="card-header">
              About me
              <div className="card-actions">
                <a href="http://www.chartjs.org">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </div>
            <div className="card-block">
              Hi. Welcome to my webpage! I&nbsp;
              <i className="fa fa-heart"></i>&nbsp; javascript and building full stack web tools using it. This was built using Node+React! If you like what you see, feel free to drop a mail!
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Travel Gallery 
            </div>
            <ControlledCarousel></ControlledCarousel>
          </div>
          <div className="card">
            <div className="card-header">
              Doughnut Chart
              <div className="card-actions">
                <a href="http://www.chartjs.org">
                  <small className="text-muted">docs</small>
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
                <a href="http://www.chartjs.org">
                  <small className="text-muted">docs</small>
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
              Radar Chart
              <div className="card-actions">
                <a href="http://www.chartjs.org">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
                <Radar data={radar}/>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Line Chart
              <div className="card-actions">
                <a href="http://www.chartjs.org">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
                <Line data={line} options={{
                  maintainAspectRatio: false
                }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const ControlledCarousel = React.createClass({
  getInitialState() {
    return {index: 0, direction: null};
  },

  handleSelect(selectedIndex, e) {
    this.setState({index: selectedIndex, direction: e.direction});
  },

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={nm}/>
          <Carousel.Caption>
            <h3>Nishani Motte</h3>
            <p>A monsoon trek.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={manali}/>
          <Carousel.Caption>
            <h3>Manali</h3>
            <p>Mt.Kshithidhar at 17,500 feet altitude</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={nm2}/>
          <Carousel.Caption>
            <h3>Nishani Motte</h3>
            <p>A monsoon trek.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={vattai}/>
          <Carousel.Caption>
            <h3>Vattaikanal</h3>
            <p>One of the most serene places around!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
});

export default About;
