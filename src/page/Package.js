import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'


export class Package extends Component {

  constructor() {
    super();
    let loggdin = false;
    this.state = {
        allsubscribelist: []
    }

  }
componentDidMount() 
{
    axios.get(base.BASE_URL + '/allpackagelist').then(res => {
        this.setState({ allsubscribelist: res.data });
    });
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

                        {this.state.allsubscribelist.map((result) => {
                            return (

                                 <div style={{ flexDirection: 'row', height: 61 }}>
                                     <div style={{ width: '80%', float: 'left', backgroundColor: '#959595' }}>
                                        <div style={{ marginLeft: 10, color: 'white' }}> {result.packagename}</div>    
                                        <div  style={{ marginLeft: 10, color: 'white', fontSize: 16 }}> {result.packageprice} BDT </div> 
                                     </div> 
                                     <div style={{ width: '20%', float: 'left', backgroundColor: '#ac0000', height: 48, padding: 10, marginLeft: 0 }}>
                                     <Link to="/Package" style={{ color: '#fff' }}>Buy Now</Link>
                                     </div>     
                                </div>
                                )
                            })} 

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

export default Package