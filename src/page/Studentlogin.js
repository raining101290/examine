import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import ActivityIndicator from 'react-activity-indicator'
import 'react-activity-indicator/src/activityindicator.css'
import { Offline, Online } from "react-detect-offline";
//import { toast } from "react-toastify";
import { errorToast } from "../page/library/toast";



import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";

import 'bootstrap/dist/css/bootstrap.min.css';
//import { Alert } from 'react-bootstrap'

export class Studentlogin extends Component {

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
      counter: 0, showPassword: false,
    }


  }

  handleValidation() {
    //let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!this.state.fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password Reqired ";
    }
    if (!this.state.fields["email"]) {
      formIsValid = false;
      errors["email"] = "Student ID Required";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  register() {
    if (this.handleValidation()) {

      this.setState({ loaderfile: 'loading', isLoading: true }) ///Adminloginareacheck  adminlogin Adminloginsetup
      axios.post(base.BASE_URL + '/studentlogin', {
        email: this.state.fields["email"],
        password: this.state.fields["password"]
      })
        .then((response) => {
          if (response.data.message === "found") {
           // alert(response.data.classname)
           
           localStorage.setItem("userrole", 'Student');

            localStorage.setItem("token", response.data.access_token);
            localStorage.setItem("studentid", this.state.fields["email"]);
            localStorage.setItem("fullname", response.data.fullname);
            localStorage.setItem("examid", response.data.examid);
            localStorage.setItem("className", response.data.classname);
            localStorage.setItem("groupname", response.data.groupname);
            localStorage.setItem("versionname", response.data.versionname);
            this.setState({ loggdin: 'start', loaderfile: 'notloading', isLoading: false })
          }
          else if (response.data === "Unauthorized") {
            this.setState({ loggdin: 'stop', isLoading: false })
            errorToast("Invalid Email and Password");
          }
          else if (response.data === "Unauthorized f") {
            this.setState({ loggdin: 'stop', isLoading: false })
            errorToast("Invalid Email and Password");
          }
        }, (error) => {
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
    if(this.state.showPassword === false)
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
    if (this.state.loggdin === 'start') {
      return <Redirect to="/Studentdashboard" />
    }
    return (
      <div>
        <Header />
        <div className="container">
          {/* Outer Row */}
          <div className="row justify-content-center" style={{ marginTop: 54 }}>
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/* Nested Row within Card Body */}
                  {
                    this.state.isLoading === true ?
                      <ActivityIndicator />
                      :
                      <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                        <div className="col-lg-6">
                          <div className="p-5">
                            <div className="text-center">
                              <Online>You have good internet connection</Online>
                              <Offline>Its show your offline</Offline>
                              <h1 className="h4 text-gray-900 mb-4">Student Login</h1>
                              {/* <Alert variant="success">Data is saved sucessfully</Alert>   */}
                            </div>
                            <form className="user">
                              <div className="form-group">
                                <Input type="email" className="form-control"
                                  id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Student id/ Email..."
                                  onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}
                                />
                                <span style={{ color: "red", fontSize: 10 }}>{this.state.errors["email"]}</span>
                              </div>
                              <div className="form-group">
                              <Input
        type={this.state.showPassword ? "text" : "password"}
        onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}
        className="form-control " placeholder="Password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
             className="passwordiconpage"
              onClick={this.handleClickShowPassword}
              onMouseDown={this.handleMouseDownPassword}
            >
              {this.state.showPassword ? <VisibilityIcon /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            this.register()
          }
      }}
      />
                                <span style={{ color: "red", fontSize: 10 }}>{this.state.errors["password"]}</span>
                              </div>
                              <div className="form-group">
                                <div className="custom-control custom-checkbox small">
                                  <input type="checkbox" className="custom-control-input" id="customCheck" />
                                  <label className="custom-control-label" htmlFor="customCheck">Remember
                                    Me</label>
                                </div>
                              </div>
                              <Button type="button" className="btn btn-primary btn-user btn-block" onClick={this.register}>
                                Login
                              </Button>
                            {/*   <hr /> */}
                  {/* 
                  <a href="index.html" className="btn btn-google btn-user btn-block">
                    <i className="fab fa-google fa-fw" /> Login with Google
                  </a>
                  <a href="index.html" className="btn btn-facebook btn-user btn-block">
                    <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                  </a> */}
                            </form>

                            <div className="text-center" style={{ marginTop: 30 }}>
                              <Link to="" className="small" href="#">Forgot Password?</Link>
                            </div>
                            <div className="text-center">
                            <Link to="/Continuewithstudent" className="small" href="#">Create an Account!</Link>
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

export default Studentlogin