import React, { Component, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import * as base from "../global";
import { Redirect } from 'react-router';
import axios from 'axios';
import Header from '../Header'
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faFlag, faManatSign } from '@fortawesome/free-solid-svg-icons'
import Parser from 'html-react-parser'; // render HTML 

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../homepage.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import languagesconfigureation from '../languages/languagesconfigureation';
import { Carousel } from '@trendyol-js/react-carousel';

import '../navbar/index.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SimpleImageSlider from "react-simple-image-slider";

import Form from 'react-bootstrap/Form';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Registration from './Registration'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
//import jsonData from './data.json'

const Viewcart = (props) => {
  const { t } = useTranslation();
  const [dataid, setDataid] = useState(props.match.params.id)
  const [packagedata, setPackagedata] = useState([])
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [banglaversion, setBanglaversion] = useState(props.match.params.id)
  const [classname, setClassname] = useState(props.match.params.ids)
  const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  const history = useHistory();
  //const employees = [...jsonData];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let employees = require('./data.json');

  const filtered = employees.filter(employee => {
    // let bangla = props.match.params.id  
    if (props.match.params.version === 'Bangla-version') {
      let bangla = "Bangla Version";
      return employee.classname === props.match.params.singleclass && employee.versionname === bangla;
    }
    if (props.match.params.version === 'English-version') {
      let bangla = "English Version";
      return employee.classname === props.match.params.singleclass && employee.versionname === bangla;
    }

  });
  const submitpayment =()=>{
    if(studentid)
    {
    // alert(studentid)
    history.push('/Studentdashboard');
    }
    else
    {
     history.push('/Continuewithstudent');

     //alert('Student ID not found')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])

  return (
    <div>
      <Header />
      <div className='containerpage'>
        <div className='coursedetails'>
        <Row style={{ marginTop: 67 }}>
            <Col sm={12}>
              <Link to={"/Coursedetails/" + props.match.params.classnames + '/' + props.match.params.version} style={{ padding: 20 }}>Back</Link>
            </Col>
        </Row>  
          <Row className='coursedetailspar'>
            <Col style={{ textAlign: 'center' }} sm={8}>

              <div style={{ textAlign: 'left' }}>
             
                <div className={classes.root}>
                  {
                    filtered.map(employee => {
                      return (
                        <div key={employee.id}>
                          {Parser(employee.coursedetails)}

                        </div>
                      )
                    })
                  }
                </div>

                {/*  */}
              </div>
            </Col>
            <Col style={{ textAlign: 'center' }} sm={4}>
              <Form className="bookingform">
                {
                  filtered.map(employee => {
                    const datap = employee.package;

                    const filterpackagedata = datap.filter(packagedata => {
                       return packagedata.packageid === props.match.params.packageid;
                   });

                    return (
                      <div key={employee.id}>
                        {
                          filterpackagedata.map((d) => {
                            return <div>
                            
                             <Link className='packagebutton'>
                             <p> {d.description}</p> <p>৳ {d.amount}</p>
                            </Link>
                            </div>
                          })
                        }

                      </div>
                    );
                  })
                }
                {
                  studentid ?
                  <Button onClick={submitpayment}>Confirm Payment</Button>
                  :
                  <Registration />
                }
              
              

              </Form>
            </Col>
          </Row>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Viewcart