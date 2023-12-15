import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as base from "../global";
import { Redirect } from 'react-router';
import axios from 'axios';
import Header from '../Header'
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'swiper/css';
import '../homepage.css';
import Typography from '@mui/material/Typography';
import Parser from 'html-react-parser'; // render HTML 

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

const Coursedetailspage = (props) => {
  const { t } = useTranslation();
  const [dataid, setDataid] = useState(props.match.params.id)
  const [packagedata, setPackagedata] = useState([])
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [banglaversion, setBanglaversion] = useState(props.match.params.id)
  const [classname, setClassname] = useState(props.match.params.ids)
  const [groupname, setGroupname] = useState(props.match.params.groupname)

  //const employees = [...jsonData];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let employees = require('./data.json');

  const filtered = employees.filter(employee => {
    // let bangla = props.match.params.id 
    if (props.match.params.version === 'Bangla-version') {
      let bangla = "Bangla Version";
      return employee.classname === props.match.params.singleclass && employee.versionname === bangla &&  employee.groupname === props.match.params.groupname;
    }
    if (props.match.params.version === 'English-version') {
      let bangla = "English Version";
      return employee.classname === props.match.params.singleclass && employee.versionname === bangla &&  employee.groupname === props.match.params.groupname;
    }

  });


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
                <h3 style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>{props.match.params.version}</h3>
                <h3 style={{ padding: 0, fontSize: 16, fontWeight: 'bold' }}>Class {props.match.params.singleclass} এ ফুল সিলেবাস কোর্সে যা যা থাকছে</h3>
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

              <div style={{ padding: 10, marginTop: 40 }}>
                <h3 style={{ textAlign: 'left' }}>কোর্স সিলেবাস</h3>
                <div style={{ textAlign: 'left', borderWidth: 1, borderColor: '#f2f2f2' }}>


                  {
                    filtered ?
                      filtered.map(employee => {
                        const datap = employee.subject;
                        return (
                          <div key={employee.id}>
                            {
                              datap.map((d) => {
                                return <Accordion expanded={expanded === d.subjectname} onChange={handleChange(d.subjectname)}>
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                  >
                                    <Typography className={classes.heading}>{d.subjectname}</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Typography>
                                      {Parser(d.description)}
                                    </Typography>
                                  </AccordionDetails>
                                </Accordion>

                              })
                            }

                          </div>
                        );
                      })
                      :
                      'NOt Found'
                  }

                </div>
              </div>


            </Col>
            <Col style={{ textAlign: 'center' }} sm={4}>
              <Form className="bookingform">
                {
                  filtered.map(employee => {
                    const datap = employee.package;
                    return (
                      <div key={employee.id}>
                        {
                          //https://timetoprogram.com/encrypt-and-decrypt-text-react/
                          datap.map((d) => {
                            return <Link className='packagebutton' to={"/Viewcart/" + props.match.params.version + '/' + props.match.params.classnames + '/' + props.match.params.singleclass + '/' + d.packageid}>
                              <p> {d.description}</p> <p>৳ {d.amount}</p>
                            </Link>
                          })
                        }

                      </div>
                    );
                  })
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

export default Coursedetailspage