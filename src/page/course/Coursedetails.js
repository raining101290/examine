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
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import languagesconfigureation from '../languages/languagesconfigureation';
import { Carousel } from '@trendyol-js/react-carousel';
import Card from 'react-bootstrap/Card'

import '../navbar/index.css'
import './course.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SimpleImageSlider from "react-simple-image-slider";


const Coursedetailspage = (props) => {
     const { t } = useTranslation();
     const [dataid, setDataid] = useState(props.match.params.id)
     const [banglaversion, setBanglaversion] = useState(props.match.params.ids)

     useEffect(() => {
          window.scrollTo(0, 0);
     })
     const activeStyle = {
          backgroundColor: '#8854c0',
          color: '#fff'
        }

     return (
          <div>
               <Header />
               <div className='Coursedetailspage' style={{ marginTop: 83 }}>

                    <Row className='Coursedetailspagepar' style={{ backgroundColor: '#f3f2ec' }}>
                         <div className='classmenu'>
                              <ul>
                              <li> <Link to="/Courseversion/onetofive" style={dataid === 'onetofive' ? activeStyle : {}}> {t('onetofive')}</Link></li>
                              <li> <Link to="/Courseversion/sixtoeight" style={dataid === 'sixtoeight' ? activeStyle : {}}>   {t('eight')}</Link></li>
                              <li> <Link to="/Courseversion/ninetoten" style={dataid === 'ninetoten' ? activeStyle : {}}>   {t('ninetoten')}</Link></li>
                              <li> <Link to="/Courseversion/eleventotwelve" style={dataid === 'eleventotwelve' ? activeStyle : {}}>   {t('eleventotwelve')}</Link></li>
                              </ul>
                         </div>

                       
                       {/*   <Col style={{ textAlign: 'center' }} sm={3}>
                              <Link to="/Courseversion/onetofive">  {t('onetofive')}</Link>
                         </Col>
                         <Col style={{ textAlign: 'center' }} sm={3}>
                              <Link to="/Courseversion/sixtoeight">   {t('eight')}</Link>
                         </Col>
                         <Col style={{ textAlign: 'center' }} sm={3}>
                              <Link to="/Courseversion/ninetoten">   {t('ninetoten')}</Link>
                         </Col>
                         <Col style={{ textAlign: 'center' }} sm={3}>
                              <Link to="/Courseversion/eleventotwelve">   {t('eleventotwelve')}</Link>
                         </Col> */}
                    </Row>
                    {
                         dataid == 'onetofive' &&  banglaversion == 'Bangla-version' ?
                              <Row className='classshow'>
                                   <Col style={{ textAlign: 'center' }} sm={3} xs={6}>
                                        <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/One/General'}>

                                        <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/bangla-version-class/class/class1.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : One, bangla Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>

                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}  b={2}>
                                        <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Two/General'}>
                                        <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/bangla-version-class/class/class2.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Two, bangla Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>

                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3} xs={6}>
                                        <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Three/General'}>
                                        <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/bangla-version-class/class/class3.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Three, Bangla Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3} xs={6}>
                                        <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Four/General'}>
                                        <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/bangla-version-class/class/class4.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Four, Bangla Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3} xs={6}>
                                        <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Five/General'}>
                                        <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/bangla-version-class/class/class5.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Five, Bangla Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                              </Row>
                              :
                              ''
                    }
                                        {
                         dataid == 'onetofive' &&  banglaversion == 'English-version' ?
                              <Row className='classshow'>
                                   <Col style={{ textAlign: 'center' }} sm={3} xs={6}>
                                        <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/One/General'}>

                                        <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class1.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : One, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>

                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}  b={2}>
                                        <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Two/General'}>
                                        <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class2.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Two, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>

                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3} xs={6}>
                                        <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Three/General'}>
                                        <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class3.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Three, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3} xs={6}>
                                        <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Four/General'}>
                                        <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class4.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Four, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3} xs={6}>
                                        <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Five/General'}>
                                        <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class5.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Five, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                              </Row>
                              :
                              ''
                    }
                    {
                         dataid == 'sixtoeight' &&  banglaversion == 'Bangla-version' ?
                              <Row className='classshow'>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                        <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Six/General'}>
                                        <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/bangla-version-class/class/class6.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Six, Bangla Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Seven/General'}>
                                   <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/bangla-version-class/class/class7.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Seven, Bangla Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Eight/General'}>
                                   <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/bangla-version-class/class/class8.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Eight, Bangla Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                              </Row>
                              :
                              ''
                    }

{
                         dataid == 'sixtoeight' &&  banglaversion == 'English-version' ?
                              <Row className='classshow'>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                        <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Six/General'}>
                                        <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class6.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Six, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Seven/General'}>
                                   <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class7.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Seven, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Eight/General'}>
                                   <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class8.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Eight, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                              </Row>
                              :
                              ''
                    }

                    {
                        
                         dataid == 'ninetoten' &&  banglaversion == 'English-version' ?
                              <Row className='classshow'>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Nine/Commerce'}>
                                   <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class9science.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Nine, Science, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Nine/Science'}>
                                   <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class9arts.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Nine, Arts, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Nine/Arts'}>
                                   <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class9business.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Nine, Commerce, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Ten/Science'}>
                                   <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class10science.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Ten, Science, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>

                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Ten/Arts'}>
                                   <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class10arts.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Ten, Arts, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Ten/Commerce'}>
                                   <Card style={{ marginBottom: 5 }}>
                                        <Card.Img variant="top" src="/english-version-class/class/class10business.png" />
                                        <Card.Body>
                                        <Card.Text>
                                        Class : Ten, Commerce, English Version
                                        </Card.Text>
                                        </Card.Body>
                                        </Card>
                                        </Link>
                                   </Col>

                              </Row>
                              :
                              ''
                    }
                    {
                        
                        dataid == 'ninetoten' &&  banglaversion == 'Bangla-version' ?
                             <Row className='classshow'>
                                  <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                  <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Nine/Commerce'}>
                                  <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/bangla-version-class/class/class9science.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Nine, Science, Bangla Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                       </Link>
                                  </Col>
                                  <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                  <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Nine/Science'}>
                                  <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Nine, Arts, bangla Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                       </Link>
                                  </Col>
                                  <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                  <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Nine/Arts'}>
                                  <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/bangla-version-class/class/class9accounting.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Nine, Commerce, Bangla Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                       </Link>
                                  </Col>
                                  <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                  <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Ten/Science'}>
                                  <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/bangla-version-class/class/class10science.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Ten, Science, Bangla Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>

                                       </Link>
                                  </Col>
                                  <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                  <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Ten/Arts'}>
                                  <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/bangla-version-class/class/class10arts.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Ten, Arts, Bangla Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                       </Link>
                                  </Col>
                                  <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                  <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Ten/Commerce'}>
                                  <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/bangla-version-class/class/class10bebsay.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Ten, Commerce, Bangla Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                       </Link>
                                  </Col>

                             </Row>
                             :
                             ''
                   }

                    {
                         dataid == 'eleventotwelve' &&  banglaversion == 'Bangla-version' ?
                              <Row className='classshow'>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Eleven/Commerce'}>
                                   <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/bangla-version-class/class/class11bebsay.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Eleven, Commerce, Bangla Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>

                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Eleven/Science'}>
                                   <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/bangla-version-class/class/class11biggan.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Eleven, Science, Bangla Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>

                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Eleven/Arts'}>
                                   <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/bangla-version-class/class/class11manobik.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Eleven, Arts, Bangla Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                        </Link>
                                   </Col>

                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Twelve/Science'}>
                                   <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/bangla-version-class/class/class12biggan.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Twelve, Science, Bangla Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                        </Link>
                                   </Col>
                                   

                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Twelve/Arts'}>
                                   <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/bangla-version-class/class/class12manobik.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Twelve, Arts, Bangla Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Twelve/Commerce'}>
                                   <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/bangla-version-class/class/class12hisabbigggan.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Twelve, Commerce, Bangla Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                        </Link>
                                   </Col>
                              </Row>
                              :
                              ''
                    }
                     {
                         dataid == 'eleventotwelve' &&  banglaversion == 'English-version' ?
                              <Row className='classshow'>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Eleven/Commerce'}>
                                   <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/english-version-class/class/class11business.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Eleven, Commerce, English Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>

                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Eleven/Science'}>
                                   <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/english-version-class/class/class11science.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Eleven, Science, English Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>

                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Eleven/Arts'}>
                                   <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/english-version-class/class/class11arts.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Eleven, Arts, English Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                        </Link>
                                   </Col>

                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Twelve/Science'}>
                                   <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/english-version-class/class/class12science.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Twelve, Science, English Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                        </Link>
                                   </Col>
                                   

                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Twelve/Arts'}>
                                   <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/english-version-class/class/class12arts.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Twelve, Arts, English Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                        </Link>
                                   </Col>
                                   <Col style={{ textAlign: 'center' }} sm={3}  xs={6}  xs={6}>
                                   <Link to={"/Coursedetailspage/" + props.match.params.ids + '/' + props.match.params.id + '/Twelve/Commerce'}>
                                   <Card style={{ marginBottom: 5 }}>
                                       <Card.Img variant="top" src="/english-version-class/class/class12business.png" />
                                       <Card.Body>
                                       <Card.Text>
                                       Class : Twelve, Commerce, English Version
                                       </Card.Text>
                                       </Card.Body>
                                       </Card>
                                        </Link>
                                   </Col>
                              </Row>
                              :
                              ''
                    }


               </div>




               <Footer />
          </div>
     )
}

export default Coursedetailspage