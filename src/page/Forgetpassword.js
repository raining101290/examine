import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import Header from './Header'
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import { Offline, Online } from "react-detect-offline";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap'
import Footer from './Footer'

export class Forgetpassword extends Component {

  constructor() {
    super();
    this.register = this.register.bind(this);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      Password: '',
      isLoading: false,
      loaderfile: 'notloading',
      fields: {},
      errors: {},
      loggdin: 'stop',
      counter: 0,showPassword: false,

    }


  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //  alert(this.state.fields["email"]);
    //Name
    if (!this.state.fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password Reqired ";
    }
    if (!this.state.fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email Required";
    }

    if (typeof this.state.fields["email"] !== "undefined") {
      let lastAtPos = this.state.fields["email"].lastIndexOf('@');
      let lastDotPos = this.state.fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (this.state.fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  register() {
    if (this.handleValidation()) {
      this.setState({ loaderfile: 'loading', isLoading: true }) ///Adminloginareacheck  adminlogin Adminloginsetup
      axios.post(base.BASE_URL + '/adminlogin', {
        email: this.state.fields["email"],
        password: this.state.fields["password"]
      })
        .then((response) => {
          if (response.data.message == "found") {
            localStorage.setItem("token", response.data.access_token);
            localStorage.setItem("vendoremailaddress", this.state.fields["email"])
            localStorage.setItem("fullname", response.data.fullname)
            localStorage.setItem("usersrole", response.data.usersrole)
            localStorage.setItem("schoolcollegename", response.data.schoolcollegename)
            localStorage.setItem("schoolid", response.data.schoolid)
            
            this.setState({ loggdin: 'start', loaderfile: 'notloading', isLoading: false })

          }
          else if (response.data == "Unauthorized") {
            this.setState({ loggdin: 'stop', isLoading: false })
            alert("Invalid Email and Password");
          }
          else if (response.data == "Unauthorized f") {

            this.setState({ loggdin: 'stop', isLoading: false })
            alert("Invalid Email and Password");

          }


        }, (error) => {
          console.log(error);
          alert(error)
        });

    } else {
      // alert("Form has errors.")
    }


  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  handleClickShowPassword = () => {
   // setValues({ ...values, showPassword: !values.showPassword });
  // alert(this.state.showPassword)
   if(this.state.showPassword == false)
   {
    this.setState({
      showPassword: true
    })
   }
   else
   {
    this.setState({
      showPassword: false
    })
   }
   
  };
  

  render() {
    // alert(this.state.loggdin);
    if (this.state.loggdin == 'start') {
      return <Redirect to="/Dashboard" />
    }
    return (
      <div>
        <Header />
        <div className="container">
          {/* Outer Row */}
          <div className="row justify-content-center" style={{ marginTop: 54 }}>
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5" >
                <div className="card-body p-0">
                  {/* Nested Row within Card Body */}
                  {
                    this.state.isLoading == true ?
                      <ActivityIndicator />
                      :
                      <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                        <div className="col-lg-6">
                          <div className="p-5">
                            <div className="text-center">

                              <h1 className="h4 text-gray-900 mb-4">Forget Password</h1>
                              {/* <Alert variant="success">Data is saved sucessfully</Alert>   */}
                            </div>
                            <form className="user">
                              <div className="form-group">
                                <Input type="email" className="form-control"
                                  id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."
                                  onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                              </div>
                          

                              <Button type="button" className="btn btn-primary btn-user btn-block" onClick={this.register}>
                                Submit
                              </Button>
                              <hr />

                              {/*    <a href="index.html" className="btn btn-google btn-user btn-block">
                    <i className="fab fa-google fa-fw" /> Login with Google
                  </a>
                  <a href="index.html" className="btn btn-facebook btn-user btn-block">
                    <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                  </a> */}
                            </form>
                            <div className="text-center">
                              <a className="small" href="/Login">Back to Login</a>
                            </div>
                          </div>
                        </div>
                      </div>
                  }


                </div>
              </div>
            </div>
          </div>
        </div>
<Footer />

      </div>


    )

  }
}

export default Forgetpassword