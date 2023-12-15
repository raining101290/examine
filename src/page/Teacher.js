import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as base from "./global";
import { Redirect } from 'react-router';
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import Easytoacton from './Easytoacton'
import Homebanner from './Homebanner'
import Teacherbanner from './Teacherbanner'
import Quicklyfinder from './Quicklyfinder'
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faFlag, faManatSign } from '@fortawesome/free-solid-svg-icons'
import Engageevery from './Engageevery';

export class Teacher extends Component {
    constructor() {
        super();

    }
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Header />
                <Teacherbanner />


                <div className='trustedwrapperfordistancelearning'>

                    <h2 className="distanceheading" style={{}}>
                        Using Examamine for Distance Learning
                    </h2>

                    <img src="/images/template-2.png" className='trustedbyimage' style={{ width: '100%', marginTop: 60 }} />
                    <Row>
                        <Col style={{ textAlign: 'center' }} sm={4}>
                            <img src='/images/person_holding_phone.png' className='imagewatch' />
                            <div className='mobiletext'>Students ALWAYS see questions on their own screen.</div>
                        </Col>
                        <Col style={{ textAlign: 'center' }} sm={4}>
                            <img src='/images/people_at_home.png' className='imagewatch' />
                            <div className='mobiletext'>Bring people together (apart) with live Examamine and polls.</div>
                        </Col>
                        <Col style={{ textAlign: 'center' }} sm={4}>
                            <img src='/images/people_around_globe.png' className='imagewatch' />
                            <div className='mobiletext'>Assign Examamine and engage families on their own time.</div>
                        </Col>

                    </Row>
                </div>



                <div className='teacherexploremillions'>

                    <h2 className="teacherexploremillionsheading" style={{ marginBottom: 50, color: '#efa929;' }}>
                        Explore millions of teacher-created Examamine
                    </h2>
                    <Row>

                        <Col style={{ textAlign: 'center' }} xs={6} md={12}>
                            <div className='teachertopicswrapper'>
                                <div>
                                    <a className="router-link" href="/admin/English-and-Language-Arts/1" target="_BLANK_">
                                        <div className="topic-pill  topic-0" data-idx={0}>
                                            <span className="full-name">English and Language Arts</span>

                                        </div>
                                    </a>
                                    <a className="router-link" href="/admin/Mathematics/2" target="_BLANK_">
                                        <div className="topic-pill  topic-1" data-idx={1}>
                                            <span className="full-name">Mathematics</span>

                                        </div>
                                    </a>
                                    <a className="router-link" href="/admin/Social-Studies/3" target="_BLANK_">
                                        <div className="topic-pill  topic-2" data-idx={2}>
                                            <span className="full-name">Social Studies</span>

                                        </div>
                                    </a>
                                    <a className="router-link" href="/admin/Science/4" target="_BLANK_">
                                        <div className="topic-pill  topic-3" data-idx={3}>
                                            <span className="full-name">Science</span>

                                        </div>
                                    </a>
                                    <a className="router-link" href="/admin/World-Languages/5" target="_BLANK_">
                                        <div className="topic-pill  topic-4" data-idx={4}>
                                            <span className="full-name">World Languages</span>

                                        </div>
                                    </a>
                                    <a className="router-link" href="/admin/Creative-Arts/6" target="_BLANK_">
                                        <div className="topic-pill active topic-5" data-idx={5}>
                                            <span className="full-name">Creative Arts</span>

                                        </div>
                                    </a>
                                    <a className="router-link" href="/admin/Computer-Science-and-Skills/9" target="_BLANK_">
                                        <div className="topic-pill  topic-6" data-idx={6}>
                                            <span className="full-name">Computer Science and Skills</span>

                                        </div>
                                    </a>
                                    <a className="router-link" href="/admin/Career-and-Technical-Education/8" target="_BLANK_">
                                        <div className="topic-pill  topic-7" data-idx={7}>
                                            <span className="full-name">Career and Technical Education</span>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </Col>


                    </Row>
                </div>
                {/*  */}

                <div className='trusted-wrapper'>

                    <h2 className="trusted-heading" style={{ marginBottom: 50, color: '#efa929;' }}>
                        Join incredible teachers
                    </h2>
                    <Row>

                        <Col style={{ textAlign: 'center' }} xs={12} md={4}>
                            <div className='teachercomment'>
                                <div className='teacherheader'>
                                    <div className='teacherimageprofile1'>

                                    </div>
                                    <div>
                                        Jon Corippo
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <p>
                                    BOOM! So much faster than worksheets and lecture. #EDUProtocols
                                </p>

                            </div>
                        </Col>
                        <Col style={{ textAlign: 'center' }} xs={12} md={4}>
                            <div className='teachercomment'>
                                <div className='teacherheader'>
                                    <div className='teacherimageprofile2'>

                                    </div>
                                    <div>
                                        Carla Jefferson
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <p>
                                    Today I’m choosing @examamine ‘cause it’s gamified & it has a HW aspect. Ss learning on the weekend! Whoop! #dcsdtransforms
                                </p>

                            </div>
                        </Col>
                        <Col style={{ textAlign: 'center' }} xs={12} md={4}>
                            <div className='teachercomment'>
                                <div className='teacherheader'>
                                    <div className='teacherimageprofile3'>

                                    </div>
                                    <div>
                                        Alice Keeler
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <p>
                                    As they take the examamine on their, there, they're they are laughing out loud. That doesn't happen with a worksheet.
                                </p>

                            </div>
                        </Col>
                    </Row>
                    <Row>

                        <Col style={{ textAlign: 'center' }} xs={12} md={4}>
                            <div className='teachercomment'>
                                <div className='teacherheader'>
                                    <div className='teacherimageprofile4'>

                                    </div>
                                    <div>
                                        Leslie Fisher
                                    </div>
                                    <div>
                                        Icon
                                    </div>
                                </div>
                                <p>
                                examamine Released an iOS Student App today! … One of the new features? It reads the question aloud! #edtech #edapp
                                </p>

                            </div>
                        </Col>
                        <Col style={{ textAlign: 'center' }} xs={12} md={4}>
                            <div className='teachercomment'>
                                <div className='teacherheader'>
                                    <div className='teacherimageprofile5'>

                                    </div>
                                    <div>
                                        Jhon Markes
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <p>
                                    Superfaster! So much faster than worksheets and lecture. 
                                </p>

                            </div>
                        </Col>
                        <Col style={{ textAlign: 'center' }} xs={12} md={4}>
                            <div className='teachercomment'>
                                <div className='teacherheader'>
                                    <div className='teacherimageprofile6'>

                                    </div>
                                    <div>
                                        Alina Khan
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <p>
                                    Great ! Best for the test and quiz. 
                                </p>

                            </div>
                        </Col>
                    </Row>
                </div>
                {/*  */}
                <Footer />
            </div>
        )
    }
}

export default Teacher