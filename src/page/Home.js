import React, { Component, useEffect } from 'react'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faFlag, faManatSign } from '@fortawesome/free-solid-svg-icons'
import Engageevery from './Engageevery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './homepage.css';
import './homepage_mobile.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* import Slider from "react-slick"; */

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import languagesconfigureation from './languages/languagesconfigureation';
//import { Carousel } from '@trendyol-js/react-carousel';
import '../../src/page/navbar/index.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from 'infinite-react-carousel';
import './Slider_home/slider.css'

import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "/images/slider1.png" },
  { url: "/images/slider1.png" },
  { url: "/images/slider1.png" },
  { url: "/images/slider1.png" }
];

const practiesimages = [
  { url: "/images/practies/p1.png" },
  { url: "/images/practies/p2.png" },
  { url: "/images/practies/p3.png" }
];
const myStyle = {
  backgroundImage:
    "url('/images/practies/p1.png')",
  fontSize: '50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
const myStyle1 = {
  backgroundImage:
    "url('/images/practies/p3.png')",
  fontSize: '50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
const myStyle2 = {
  backgroundImage:
    "url('/images/practies/p3.png')",
  fontSize: '50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
const Home = () => {
  const { t } = useTranslation();


  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div>
      <Header />
      <div style={{ marginTop: 80 }}>
        <Carousel autoPlay showArrows={true} /* onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} */
        >
          <div>
            <img src="/slider/slider1.png" style={{ width: '100%' }} />
            <a href="https://play.google.com/store/apps/details?id=com.manirul.examaminestudentplatformapps" target='_blank'>

              <div className="playstore">
                <div className='playstorealldiv'>
                  <img src="/slider/play-solid.svg" className='playicon' />
                  <div className="playstore_div" style={{ marginTop: 10 }}>অংশগ্রহণ করতে </div>
                </div>
              </div>
            </a>

          </div>
          <div>
            <img src="/slider/slider2.png" style={{ width: '100%' }} />
            <a href="https://play.google.com/store/apps/details?id=com.manirul.examaminestudentplatformapps" target='_blank'>

              <div className="playstore">
                <div className='playstorealldiv'>
                  <img src="/slider/play-solid.svg" className='playicon' />
                  <div className="playstore_div" style={{ marginTop: 10 }}>অংশগ্রহণ করতে </div>
                </div>
              </div>
            </a>

          </div>
          <div>
            <img src="/slider/slider3.png" style={{ width: '100%' }} />
            <a href="https://play.google.com/store/apps/details?id=com.manirul.examaminestudentplatformapps" target='_blank'>
              <div className="playstore">
                <div className='playstorealldiv'>
                  <img src="/slider/play-solid.svg" className='playicon' />
                  <div className="playstore_div" style={{ marginTop: 10 }}>অংশগ্রহণ করতে </div>
                </div>
              </div>
            </a>
          </div>
        </Carousel>
      </div>


      {/*   
   npm i infinite-react-carousel
   import Slider from 'infinite-react-carousel';
   <Slider autoplay="true" >
        <div style={{ marginTop: 77 }}>
            <h3 className='slider1'>1</h3> 
          <img src='/slider/slider1.png' style={{ width: '100%',marginTop: 77 }} />
        </div>
        <div style={{ marginTop: 77 }}>          
        <img src='/slider/slider2.png' style={{ width: '100%',marginTop: 77 }} />
        </div>
        <div style={{ marginTop: 77 }}>         
         <img src='/slider/slider3.png' style={{ width: '100%',marginTop: 77 }} />
        </div>

      </Slider>  
      
    */}

      {/*    <SimpleImageSlider
        width={'100%'}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
      /> */}

      <div className='Homepagethousandofteacher'>

        <h2 className="Homepagethousandofteacherheading">
          {t('addone')}
        </h2>
        <h3 className='Homepagethousandofteacherheading2'>
          {t('addtwo')}
          {/*  <span className="schools-span"> thousand of teacher</span> */}
        </h3>
        <img src="/images/template-2.png" className='trustedbyimage' style={{ width: '100%', marginTop: 60 }} />
        <Row style={{ marginTop: 100, padding: 100 }} className='justify-content-md-center'>
          <Col className="col-md-3 col-6 align-items-center text-center "> {/* sm={3}  */}

            <Link to="/Courseversion/onetofive" className='oneclasse'> {/* sx={{ minWidth: 275, minHeight: 200 }}  */}
              {t('onetofive')}
            </Link>
          </Col>
          <Col className="col-md-3 col-6 align-items-center text-center ">
            <Link to="/Courseversion/sixtoeight" className='secondclasse'>
              {t('eight')}
            </Link>

          </Col>
          <Col className="col-md-3 col-6  align-items-center text-center ">
            <Link to="/Courseversion/ninetoten" className='thirdclasse'>
              {t('ninetoten')}
            </Link>
          </Col>
          <Col className="col-md-3 col-6  align-items-center text-center">
            <Link to="/Courseversion/eleventotwelve" className='fourclasse'>
              {t('eleventotwelve')}
            </Link>
          </Col>
        </Row>
      </div>
      <div className='examamineplatform'>
        <h3 style={{ textAlign: 'center', marginTop: 80 }}>{t('examamineplatform_h3')} </h3>
        <p style={{ textAlign: 'center', marginBottom: 80, fontSize: 23 }}>{t('examamineplatform_h4')} </p>
        <Row>
          <Col className="col-md-6 col-12"> {/* sm={6} */}
            <div className='buttoninfo'>
              {t('examamineplatform_mcq')}
            </div>
            <div className='buttoninfo'>
              {t('examamineplatform_creativecomposition')}
            </div>
            <div className='buttoninfo'>
              {t('examamineplatform_creativemathematics')}
            </div>
            <div className='buttoninfo'>
              {t('examamineplatform_englishmatching')}
            </div>
            <div className='buttoninfo'>
              {t('examamineplatform_englishfeelintheblanks')}
            </div>
            <div className='buttoninfo'>
              {t('examamineplatform_onlineresultsheet')}
            </div>

          </Col>
          <Col className='col-md-6 col-12 center'>
            <Slider dots>
              <div>
                {/*  <h3 className='slider1'>1</h3> */}
                <img src='/practices/fill-the-gap.png' style={{ width: '100%' }} />
              </div>
              <div>
                <img src='/practices/matching.png' style={{ width: '100%' }} />
              </div>
              <div>
                <img src='/practices/mcq.png' style={{ width: '100%' }} />
              </div>
              <div>
                <img src='/practices/writting.png' style={{ width: '100%' }} />
              </div>

            </Slider>
            {/*    <div className='divright'>
              <img src="/book/mcq.png" style={{
                width: '84%', height: '66%'
              }} />

            </div> */}
          </Col>
        </Row>
      </div>


      <div className='examamineplatform_advantages'>

        <Row style={{ marginBottom: 0 }}>
          <Col sm={6}>
            <h3 style={{ textAlign: 'left', color: '#ffffff', marginTop: 50 }}>
              {t('examamineplatform_advantages_headline')}
            </h3>

            <div className='examamineplatform_advantagesparts'>
              <ul>
                <li> <img src='/assets/icone.png' /> {t('examamineplatform_advantages_part1')}</li>
                <li> <img src='/assets/icone.png' /> {t('examamineplatform_advantages_part2')}</li>
                <li> <img src='/assets/icone.png' /> {t('examamineplatform_advantages_part3')}</li>
                <li> <img src='/assets/icone.png' /> {t('examamineplatform_advantages_part4')}</li>

              </ul>
            </div>


          </Col>
          <Col sm={6}>
            <div style={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
              <div style={{ padding: 10 }}>
                <div className="advantageimage1">

                </div>
              </div>
              <div style={{ padding: 10 }}>
                <div className="advantageimage2">

                </div>
              </div>


            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
              <div style={{ padding: 10 }}>
                <div className="advantageimage3">

                </div>
              </div>
              <div style={{ padding: 10 }}>
                <div className="advantageimage4">

                </div>
              </div>


            </div>
          </Col>
        </Row>
      </div>


      <div className='practices'>

        <Row>
          <Col sm={6}>
            <div className='part1'>
              <h2 style={{ marignTop: 100 }}>{t('practices_name')}</h2>
            </div>
            <div className='part1'>
              <ul>
                <li>{t('practices_part1')}</li>
                <li> {t('practices_part2')}</li>
                <li> {t('practices_part3')}</li>
                <li> {t('practices_part4')}</li>
                <li> {t('practices_part5')}</li>
              </ul>
            </div>
            {/*  <div className='part1'>
              
            </div>
            <div className='part1'>
             
            </div>
            <div className='part1'>
              {t('practices_part3')}
            </div>
            <div className='part1'>
              {t('practices_part4')}
            </div>
            <div className='part1'>
              {t('practices_part5')}
            </div> 
           
            */}
          </Col>
          <Col sm={6}>
            <div className='examamineplatform_advantages_divright'>
              <div style={{
                borderWidth: 2,
                borderColor: '#000', height: '100%', 
                width: '100%', textAlign: 'right'
              }}>
                <img
                  src="/images/practies/p1.png"
                  style={{ backgroundPosition: '50%', resize: 'cover', height: 300,
                marginRight: 10 }}
                />
                  <img
                  src="/images/practies/p2.png"
                  style={{ backgroundPosition: '50%', resize: 'cover', height: 300,
                  marginRight: 10 }}
                />
                  <img
                  src="/images/practies/p3.png"
                  style={{ backgroundPosition: '50%', resize: 'cover', height: 300,
                  marginRight: 10 }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  )
}

export default Home