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

function Quicklyfinder() {
    const [textmcq, setTextmcq] = useState('MCQ');

    useEffect(() => {
        const timer = setTimeout(() => {
            setTextmcq('Math')
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

      useEffect(() => {
        const timer = setTimeout(() => {
            setTextmcq('Writting')
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
    
    return (
        <div style={{ backgroundColor: '#f2f2f2', padding: 50, marginBottom: 50 }}>
        <Row style={{ marginBottom: 100 }}>
          <Col sm={6}>
            <h3 className='sticky-headings'>
              <span className="quickly-span">Quickly find or </span>
              <span className="create-span">create  anything in your curriculum</span>
            </h3>
            <p className="sticky-paragraph">Prepare high-quality, interactive content in as little as two minutes.</p>
            <div className="points-contain">
              <div className="points-wrapper" style={{ display: 'flex' }}>
                <img src="https://quizizz.com/wf/assets/62fa641a161d3a0e3d681d08_Books_Icon.svg" loading="eager" alt="Books Icon" className="sticky-icons" />
                <div className="points-heading">
                  <div className="sticky-point-heading">Customizable content library</div>
                  <p className="point-paragraph">30M+ teacher-created activities spanning all grade levels and subjects</p>
                </div>
              </div>
            </div>

            <div className="points-wrapper" style={{ marginTop: 18 }}>
              <img src="https://quizizz.com/wf/assets/62fa6419161d3a0c96681c94_Pen_to_square_Icon.svg" loading="eager" alt="Pen to square Icon" className="sticky-icons" />
              <div className="points-heading">
                <div className="sticky-point-heading">Create, copy, or edit</div>
                <p className="point-paragraph">Build from scratch, copy entire activities, or mix and match to meet students’ needs</p>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <img src="/quicklyfind/mcq.png" style={{ width: '100%', marginTop: 60 }} />
          </Col>

        </Row>

      </div>
    )
}

export default Quicklyfinder