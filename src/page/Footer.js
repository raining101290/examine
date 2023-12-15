import React, { Component } from 'react'
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
import Input from "@material-ui/core/Input";
import './Footer.css'

//https://codepen.io/alvarotrigo/pen/GRxxWGQ
export class Footer extends Component {


  render() {

    return (
/*

  <ul style={{ marginTop: 50 }}>
                  <li className='footer-text'>
                  Download Examamine mobile apps
                  </li>
                  <li>
                  <a href="https://play.google.com/store/apps/details?id=com.examamineapps" target="_blank">
                 <img src="https://quizizz.com/wf/assets/62fa641a161d3a2982681d00_Google_Play.svg" 
                 loading="lazy" style={{ marginTop: 10 }} alt="Get it on Google Play Badge" classname="download-image" 
                 />
                  </a>
                  </li>
                </ul>
*/


      <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>B-20, South Sayabithiya, Gazipur, Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>+88 01823-345768</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>info@examamine.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                            <img src='/images/logo.png' style={{ width: 78, height: 58, marginLeft: 10 }} />
                            </div>
                            <div className="footer-text">
                                <a href="https://play.google.com/store/apps/details?id=com.manirul.examaminestudentplatformapps" target="_blank">
                                <img src='/images/footer/01.jpg' />  
                                </a>
                            
                            </div>
                            <div className="footer-social-icon">
                               {/*  <span>Follow us</span> */}
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>লিঙ্ক</h3>
                            </div>
                            <ul>
                                <li><Link to="/">হোম</Link></li>
                                <li><a href="#">আমাদের সম্পর্কে</a></li>
                                <li><a href="#">যোগাযোগ</a></li>
                                <li><a href="#">ক্যারিয়ার</a></li>
                            
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                               {/*  <form action="#">
                                <Input type="email" className="form-control"
                                 
                                />

                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved <a href="">Examamine</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/Termsandconditions">Terms & Conditions</Link></li>
                                <li><Link to="/Termsandconditions">Refund Policy</Link></li>
                                <li><Link to="/Termsandconditions">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    )
  }
}

export default Footer