import React, { useEffect, useState } from 'react'
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

function Engageevery() {

    return (
        <div style={{ backgroundColor: '#ffffff', padding: 50, marginBottom: 50 }}>
        <Row style={{ marginBottom: 100 }}>
          <Col sm={6}>
            <h3 className='sticky-headings'>
              <span className="quickly-span">Include and engage </span>
              <span className="create-span">every student</span>
            </h3>
            <p className="sticky-paragraph">Flexibly engage students at their own pace, from any device.</p>
            <div className="points-contain">
              <div className="points-wrapper" style={{ display: 'flex' }}>
                <img src="https://quizizz.com/wf/assets/62fa6419161d3a923a681c85_Purple_Glasses.svg" loading="eager" alt="Books Icon" className="sticky-icons" />
                <div className="points-heading">
                  <div className="sticky-point-heading">Inclusive, accessible design</div>
                  <p className="point-paragraph">Enable Read Aloud for elementary and ELL students</p>
                </div>
              </div>
            </div>

            <div className="points-wrapper" style={{ marginTop: 18 }}>
              <img src="https://quizizz.com/wf/assets/62fa6419161d3a49ed681cec_Gamepad.svg" loading="eager" alt="Pen to square Icon" className="sticky-icons" />
              <div className="points-heading">
                <div className="sticky-point-heading">Gamification for good</div>
                <p className="point-paragraph">A leaderboard, themes, music, and more to motivate students</p>
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

export default Engageevery