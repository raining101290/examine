import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as base from "./global";
import { Redirect } from 'react-router';
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Signupwithaccount extends Component {
  constructor() {
    super();
    let loggdin = false;
    this.state = {
      email: '',
      Password: '',
      isLoading: false,
      fields: {},
      errors: {},
      datauserprofile: [],
      image: 'maleavter.png'
    }
  }
  componentDidMount() {
    const formdata = {
      pagetype: "Homepage"
    }
    axios.post(base.BASE_URL + "/visitor", formdata, {
    }).then(res => {
      console.log('data..file..' + res.data);
    })

  }

  render() {
    return (
      <div>
        <Container>
         <Header />

          <div style={{ padding: 100, flexDirection: 'row', textAlign: 'center' }}>
                  
                   
                <Row>
                <Col sm={6}>
                <Link to="/Continuewithteacher"
                className='purple-button'>
                <div className="button-subtext">teachers</div>
                <div className='teacherbuttonhome'>
                  <div className='teacherbuttonhomesignup'>Sign Up for Free</div>
                {/*  <FontAwesomeIcon icon="faManatSign" className='teacherbuttonhomeicon'></FontAwesomeIcon> */}
                 <img src="/images/62fa6419161d3ac288681cdc_Purple_Arrow_Button.svg"
                    loading="lazy" style={{ textAlign: 'right', marginLeft: 20, width: 12 }} alt="Purple Right Arrow"
                    className='teacherbuttonhomeicon'></img>
                </div>
              </Link>
                </Col>
                <Col sm={6}>
                <Link
                to="/Continuewithstudent"
                className='grey-button'>
                <div class="button-subtext">Student</div>
                <div className='teacherbuttonhome'>
                <div className='teacherbuttonhomesignup'> Sign Up </div>
                <img src="/images/62fa6419161d3ac288681cdc_Purple_Arrow_Button.svg"
                    loading="lazy" style={{ textAlign: 'right', marginLeft: 20, width: 12 }} alt="Purple Right Arrow"
                    className='teacherbuttonhomeicon'></img>
                </div>
              </Link>
                </Col>
              </Row>      
        
        
        
          </div>


        </Container>
        <Footer />
      </div>
    )
  }
}

export default Signupwithaccount