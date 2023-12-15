import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { Redirect } from 'react-router';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export class sliderpage extends Component {
  constructor() {
    super();
    let loggdin = false;
    this.state = {
    }
  }
  componentDidMount() {

  }


  render() {
/*     if (this.state.loggdin) {
      return <Redirect to="/Dashboard" />
    } */
    return (
      <Carousel>

      <div style={{ height: 600 }}>
        <Link to="/">
          <div className="shows-img">
            <img src="images/movie-banner/1.jpg" className="w-100" alt />
{/*             <div className="shows-content">
              <h4 className="text-white mb-1">Open Dead Shot</h4>
              <div className="movie-time d-flex align-items-center">
                <div className="badge badge-secondary p-1 mr-2">13+</div>
                <span className="text-white">2h 20m</span>
              </div>
            </div> */}
          </div>
        </Link>
      </div>
      <div style={{ height: 600 }}>
      <Link to="/">
          <div className="shows-img">
            <img src="images/movie-banner/2.jpg" className="w-100" alt />
{/*             <div className="shows-content">
              <h4 className="text-white mb-1">Jumbo Queen</h4>
              <div className="movie-time d-flex align-items-center">
                <div className="badge badge-secondary p-1 mr-2">9+</div>
                <span className="text-white">2h 40m</span>
              </div>
            </div> */}
          </div>
        </Link>
      </div>
      <div style={{ height: 600 }}>
      <Link to="/">
          <div className="shows-img">
            <img src="images/movie-banner/3.jpg" className="w-100" alt />
{/*             <div className="shows-content">
              <h4 className="text-white mb-1">Jumbo Queen</h4>
              <div className="movie-time d-flex align-items-center">
                <div className="badge badge-secondary p-1 mr-2">9+</div>
                <span className="text-white">2h 40m</span>
              </div>
            </div> */}
          </div>
        </Link>
      </div>
  
  
    </Carousel>
    )
  }
}

export default sliderpage