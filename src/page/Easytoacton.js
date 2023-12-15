import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

export class Easytoacton extends Component {
  constructor() {
    super();

  }


  render() {
    
    return (
        <div style={{ backgroundColor: '#ffffff', padding: 50, marginBottom: 50 }}>
        <Row style={{ marginBottom: 100 }}>
          <Col sm={6}>
          <h3 className='sticky-headings'>
          <span className="quickly-span">Get data that’s  </span>
          <span className="create-span">easy to act on</span>
          </h3>
          <p className="sticky-paragraph">The exact insights you need to make data-driven instruction a reality.</p>
          <div className="points-contain">
              <div className="points-wrapper" style={{ display: 'flex' }}>
                  <img src="https://quizizz.com/wf/assets/62fa6419161d3a1159681cb8_User_Clock.svg" loading="eager" alt="Books Icon" className="sticky-icons" />
                  <div className="points-heading">
                  <div className="sticky-point-heading">Real-time insights</div>
                  <p className="point-paragraph">Identify student’s needs and immediately adapt</p>
                  </div>
              </div>
          </div>

          <div className="points-wrapper" style={{ marginTop: 18 }}>
            <img src="https://quizizz.com/wf/assets/62fa641a161d3a3310681d0d_Green_Chart.svg" loading="eager" alt="Pen to square Icon" className="sticky-icons" />
            <div className="points-heading">
              <div className="sticky-point-heading">Snapshot reports</div>
              <p className="point-paragraph">See overall class performance, 
              the toughest question or topic, and individual progress</p>
            </div>
          </div>




          </Col>
          <Col sm={6}>
          <img src="/quicklyfind/mcq2.png" style={{ width: '100%', marginTop: 60 }} />
          </Col>
        
        </Row>

        </div>
    )
  }
}

export default Easytoacton