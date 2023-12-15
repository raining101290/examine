import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'


export class Subscription extends Component {

  constructor() {
    super();

  }


  render() {


    return (
      <div>
        <Header />

        <section className="sign-in-page">
          <div className="container">
            <div className="row justify-content-center align-items-center height-self-center">
              <div className="col-lg-7 col-md-12 align-self-center">
                <div className="sign-user_card ">



                  <div className="mt-3">
                        <h3>Buy Huusk Live Premium</h3>
                        <p>Unlimited movies, dramas, and more.</p>
                        <Link to="/Package" className="btn btn-hover my-2">Buy Now</Link>
                        <Link to="/" className="btn btn-hover my-2" style={{ marginLeft: 6 }}>Not Now</Link>

                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>


        <Footer />
      </ div>
    )

  }
}

export default Subscription