import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import GoogleLogin from 'react-google-login';
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation

export class Registration extends Component {

  constructor() {
    super();
    let loggdin = false;
    this.state = {
      isLoading: 'notloading',
      logincheck:'',
    };

  }

  signup(res) {
    this.setState({ isLoading: 'loading' })
    const googleresponse = {
      Name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      Image: res.profileObj.imageUrl,
      ProviderId: 'Google'
    };

    debugger;

   axios.post( base.BASE_URL + '/googlesignin', googleresponse)
      .then((result) => {
        let responseJson = result;
        localStorage.setItem("userData", JSON.stringify(result));
        localStorage.setItem("emailaddress", res.profileObj.email)
        alert(res.profileObj.email);
        this.setState({ logincheck: 'yes', isLoading: 'notloading' });
     //   this.props.history.push('/Dashboard')
      });
 

  };

  render() {

    const responseGoogle = (response) => {
      console.log(response);
      var res = response.profileObj;
      console.log(res);
      debugger;
      this.signup(response);
    }

    if (this.state.logincheck == 'yes') {
      return <Redirect to="/Dashboard" />
    }

    return (
      <div>
        <Header />

        <section className="sign-in-page">
          <div className="container">
            <div className="row justify-content-center align-items-center height-self-center">
              <div className="col-lg-7 col-md-12 align-self-center">
                <div className="sign-user_card ">

                  <div className="mt-3">
                    <div className="d-flex justify-content-center links">
                      <Link to="/Continuewithemail" className="btn btn-hover my-2">Continue With Email</Link>
                    </div>
                  </div>

                  <div className="mt-3">
                     <div className="d-flex justify-content-center links"> 
                      <GoogleLogin
                        clientId="588382775890-3dncpnchbnfuuc7gdv763nt91qt00sqs.apps.googleusercontent.com"
                        buttonText="Continue with Gmail"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle} className="btn btn-hover my-2" style={{ color: '#fff', width: '100%' }}></GoogleLogin>
                     </div> 
                  </div>

                  <div className="mt-3">
                    <div className="d-flex justify-content-center links">
                      Already have an account? <Link to="/Login" className="text-primary ml-2">Sign In</Link>
                    </div>
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

export default Registration