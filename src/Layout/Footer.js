import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import * as base from "../page/global";
import axios from 'axios';

export class Footer extends Component {
  constructor() {
    super();

  }

  componentDidMount() {

  }
  render() {

    return (
<footer id="contact" className="footer-one" style={{ backgroundColor: '#e5e5e5' }}>
  <div className="footer-top">
    <div className="container-fluid">
      <div className="row footer-standard">
        <div className="col-lg-7">
          <div className="widget text-left">
            <div className="menu-footer-link-1-container">
              <ul id="menu-footer-link-1" className="menu p-0">
                <ul id="menu-footer-link-1" className="menu p-0">
                  <li id="menu-item-7314" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314">
                    <a href="#">Terms Of Use</a>
                  </li>
                  <li id="menu-item-7316" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7316">
                    <a href="privacy-policy.html">Privacy-Policy</a>
                  </li>
                  <li id="menu-item-7118" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118">
                    <a href="faq.html">FAQ</a>
                  </li>
            
                </ul>
              </ul>
            </div>
          </div>
          <div className="widget text-left">			
            <div className="textwidget" >
              <p style={{ Color: '#000' }}><small style={{ Color: '#000' }}>© 2021 better-up.com. All Rights Reserved. All videos and quiz on this platform are organized by best quality teachers. All rights reserved.</small></p>
            </div>
          </div>                        
        </div>
        <div className="col-lg-2 col-md-6 mt-4 mt-lg-0">
          <h6 className="footer-link-title" style={{ Color: '#000' }}>
            Follow Us :
          </h6>
          <ul className="info-share"> 
            <li><a target="_blank" href="#"><i className="fa fa-facebook" /></a></li>
            <li><a target="_blank" href="#"><i className="fa fa-twitter" /></a></li>
            <li><a target="_blank" href="#"><i className="fa fa-google-plus" /></a></li>
            <li><a target="_blank" href="#"><i className="fa fa-github" /></a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <div className="widget text-left">
            <div className="textwidget">
              <h6 className="footer-link-title" style={{ Color: '#000' }}>better-up.com</h6>
              <div className="d-flex align-items-center">
                <a className="app-image" href="#">
                  <img src="images/footer/01.jpg" alt="play-store" />
                </a><br />
                <a className="ml-3 app-image" href="#"><img src="images/footer/02.jpg" alt="app-store" /></a>
              </div>
            </div>
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