import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../homepage.css';
import Box from '@mui/material/Box';
import Card from 'react-bootstrap/Card';
import './course.css'



import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import languagesconfigureation from '../languages/languagesconfigureation';
import { Carousel } from '@trendyol-js/react-carousel';

import '../navbar/index.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SimpleImageSlider from "react-simple-image-slider";


const Courseversion = (props) => {
 const { t } = useTranslation();
 const [dataid, setDataid] = useState(props.match.params.id)

 useEffect(() => {
  window.scrollTo(0, 0);
 })

 return (
  <div>
   <Header />
   <div style={{ marginTop: 100 }}>
    <Row className="justify-content-md-center " style={{ padding: 10 }}>
     <Col className="col-md-4 col-6 padding" xs lg="2">
      <Link to={"/Coursedetails/" + props.match.params.id + '/Bangla-version'}>
         <Card style={{ marginBottom: 5 }}>
         <Card.Img variant="top" src="/version/bangla-version.png" />
        
         </Card>
     
      </Link>
     </Col>
     <Col className="col-md-4 col-6 padding " xs lg="2">
      <Link to={"/Coursedetails/" + props.match.params.id + '/English-version'}>
      <Card style={{ marginBottom: 5 }}>
         <Card.Img variant="top" src="/version/english-version.png" />
        
         </Card>
      </Link>
     </Col>
     {/*  <Col style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }} sm={12}>
      <Link to={"/Coursedetails/" + props.match.params.id + '/Bangla-version'} style={{ padding: 20 }}>
       <div className='banglaversion'>

       </div>
      </Link>
  
      <Link to={"/Coursedetails/" + props.match.params.id + '/English-version'} style={{ padding: 20 }}>
       <div className='englishversion'>

       </div>
      </Link>
     </Col> */}
    </Row>
   </div>
   <Footer />
  </div>
 )
}

export default Courseversion