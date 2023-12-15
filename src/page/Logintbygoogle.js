import React, { Component } from 'react'
//import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import * as base from "./global";
//https://dzone.com/articles/login-with-google-using-reactjs

import axios from 'axios'

export class Logintbygoogle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: 'notloading',
      logincheck:'',
    };
    // this.signup = this
    //   .signup
    //   .bind(this);

  }

  signup(res) {

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
      //  localStorage.setItem("userData", JSON.stringify(result));

        localStorage.setItem("emailaddress", res.profileObj.email)
        this.setState({ logincheck: 'yes', isLoading: 'notloading' })
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
    
          <div className="App">
    
            <div className="row">
    
              <div className="col-sm-12 btn btn-info">
    
                Login With Google Using ReactJS
    
                </div>
   
            </div>
    
            <div className="row">
   
              <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
    
                <div className="col-sm-4"></div>
    
                <div className="col-sm-4">
    
                  <GoogleLogin
  
                    clientId="588382775890-3dncpnchbnfuuc7gdv763nt91qt00sqs.apps.googleusercontent.com"
    
                    buttonText="Login with Google"
    
                    onSuccess={responseGoogle}
    
                    onFailure={responseGoogle} ></GoogleLogin>
    
                </div>
    
                <div className="col-sm-4"></div>
    
              </div>
    
            </div>
    
          </div>
    
        )
    
      }
    
    }

/*   render() {

    const responseGoogle = (response) => {
      console.log(response);
      var res = response.profileObj;
      console.log(res);
      debugger;
      this.signup(response);
    }
    return 
    (
      <div className="App">
        <div className="row">
          <div className="col-sm-12 btn btn-info">
            Login With Google Using ReactJS
            </div>
        </div>
        <div className="row">

          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">

            <div className="col-sm-4"></div>
            <div className="col-sm-4">

              <GoogleLogin
                clientId="588382775890-3dncpnchbnfuuc7gdv763nt91qt00sqs.apps.googleusercontent.com"

                buttonText="Login with Google"

                onSuccess={responseGoogle}

                onFailure={responseGoogle} ></GoogleLogin>

            </div>

            <div className="col-sm-4"></div>

          </div>

        </div>

      </div>

    )

  }

} */

export default Logintbygoogle


