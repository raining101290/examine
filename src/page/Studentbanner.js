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

function Studentbanner() {
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
        <div className='homebanner'>

          <div className='itsmattertitle' /* style={{ display: 'flex', justifyContent: 'center' }} */
          >

                <h1 className='itsmatter'>Start Practing   </h1>
                <h1 className='howcanask'>with Examamine. </h1>
                <div className="MCQHome">
                    <div className='mcq'>{textmcq}</div>
                </div>
          </div>

          <h3 className='assesment'>
          Free tools to teach and learn anything, on any device, in‑person or remotely.</h3>
          <div style={{
            textAlign: 'center', display: 'flex', justifyContent: 'center',
            alignItems: 'center', marginTop: 20
          }}>
            <Row>
              <Col sm={6}>
                <Link to="/Continuewithstudent"
                  className='purple-button'>
                  <div className="button-subtext">Student</div>
                  <div className='teacherbuttonhome'>
                    <div className='teacherbuttonhomesignup'>Sign Up for free</div>
                    {/*  <FontAwesomeIcon icon="faManatSign" className='teacherbuttonhomeicon'></FontAwesomeIcon> */}
                    <img src="/images/62fa6419161d3ac288681cdc_Purple_Arrow_Button.svg"
                      loading="lazy" style={{ textAlign: 'right', marginLeft: 20, width: 12 }} alt="Purple Right Arrow"
                      className='teacherbuttonhomeicon'></img>
                  </div>
                </Link>
              </Col>
              <Col sm={6}>

              </Col>
            </Row>


          </div>

          
          {/*   <div style={{ textAlign: 'center', padding: 20 }}>Already have an account? Log in</div> */}
        </div>
    )
}

export default Studentbanner