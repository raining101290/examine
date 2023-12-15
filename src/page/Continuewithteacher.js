import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import { Offline, Online } from "react-detect-offline";

import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap'

export class Continuewithteacher extends Component {

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
      counter: 0, showpassordfirsttxt : false, showpasswordsecondtxt: false
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
      errors["password"] = "Password Reqired";
    }
    if (!this.state.fields["fullname"]) {
      formIsValid = false;
      errors["fullname"] = "Full Name Required";
    }
    if (!this.state.fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email Required";
    }
    if (!this.state.fields["reentrypassword"]) 
    {
      formIsValid = false;
      errors["reentrypassword"] = "Re Entry required";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  register() {
    if (this.handleValidation()) {
      this.setState({ loaderfile: 'loading', isLoading: true }) ///Adminloginareacheck  adminlogin Adminloginsetup
      if(this.state.fields['reentrypassword'] == this.state.fields['reentrypassword'])
      {
        axios.post(base.BASE_URL + '/continuewithteacher', {
          email: this.state.fields["email"],
          password: this.state.fields["password"],
          fullname: this.state.fields["fullname"]
        })
          .then((response) => {
            if (response.data.status == "save") {
              localStorage.setItem("token", response.data.access_token);
              localStorage.setItem("vendoremailaddress", this.state.fields["email"]);
              localStorage.setItem("usersrole", 'Teacher')
              localStorage.setItem("fullname",this.state.fields["fullname"]);
            //  localStorage.setItem("examid", response.data.examid);
            //  localStorage.setItem("classname", response.data.classname);
            //  localStorage.setItem("sectionname", response.data.sectionname);


              this.setState({ loggdin: 'start', loaderfile: 'notloading', isLoading: false })
  
            }
            else if(response.data.status == "userexits")
            {
              this.setState({ loggdin: 'stop', isLoading: false })
              alert("Email Address Already Exits, Please Try with different email");
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
  
      }
      else
      {
         alert("Password is not Match")
      }
 
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
    if(this.state.showpassordfirsttxt == false)
    {
     this.setState({
      showpassordfirsttxt: true
     })
    }
    else
    {
     this.setState({
      showpassordfirsttxt: false
     })
    }
    
   };
   handleClickShowPasswordtwo = () => {
    // setValues({ ...values, showPassword: !values.showPassword });
   // alert(this.state.showPassword)
    if(this.state.showpasswordsecondtxt == false)
    {
     this.setState({
      showpasswordsecondtxt: true
     })
    }
    else
    {
     this.setState({
      showpasswordsecondtxt: false
     })
    }
    
   };
  render() {

    if (this.state.loggdin == 'start') {
      return <Redirect to="/TeacherSchool" />
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
                    this.state.isLoading == true ?
                      <ActivityIndicator />
                      :
                      <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                        <div className="col-lg-6">
                          <div className="p-5">
                            <div className="text-center">
                            {/*   <Online>You have good internet connection</Online>
                              <Offline>Its show your offline</Offline> */}
                              <h1 className="h4 text-gray-900 mb-4">Create Account</h1>
                              {/* <Alert variant="success">Data is saved sucessfully</Alert>   */}
                            </div>
                            <form className="user">
                            

                            <div className="form-group">
                                <Input type="text" className="form-control"
                                  id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Full Name ."
                                  onChange={this.handleChange.bind(this, "fullname")} value={this.state.fields["fullname"]}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["fullname"]}</span>
                              </div>

                              <div className="form-group">
                                <Input type="email" className="form-control"
                                  id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."
                                  onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                              </div>
                              <div className="form-group">

      <Input
        type={this.state.showpassordfirsttxt ? "text" : "password"}
        onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}
        className="form-control " placeholder="Password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
             className="passwordiconpage"
              onClick={this.handleClickShowPassword}
              onMouseDown={this.handleMouseDownPassword}
            >
              {this.state.showpassordfirsttxt ? <VisibilityIcon /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />

                               {/*  <input type="password" className="form-control form-control-user" placeholder="Password"
                                  onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} /> */}






                                <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                              </div>

                              <div className="form-group">
{/* 
                                <input type="password" className="form-control form-control-user" placeholder="Re Entry Password"
                                  onChange={this.handleChange.bind(this, "reentrypassword")} value={this.state.fields["reentrypassword"]} /> */}


<Input
        type={this.state.showpasswordsecondtxt ? "text" : "password"}
        onChange={this.handleChange.bind(this, "reentrypassword")} value={this.state.fields["reentrypassword"]}
        className="form-control " placeholder="Re Entry Password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
             className="passwordiconpage"
              onClick={this.handleClickShowPasswordtwo}
              onMouseDown={this.handleMouseDownPassword}
            >
              {this.state.showpasswordsecondtxt ? <VisibilityIcon /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />


                                <span style={{ color: "red" }}>{this.state.errors["reentrypassword"]}</span>
                              </div>

                              <Button type="button" className="btn btn-primary btn-user btn-block" onClick={this.register}>
                                Submit
                              </Button>
                           {/*    <hr />

                              <a href="index.html" className="btn btn-google btn-user btn-block">
                                <i className="fab fa-google fa-fw" /> Login with Google
                              </a>
                              <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                              </a> */}
                            </form>
                            <hr />
                            <div className="text-center">
                              <Link className="small" to="/Login">Already have account. Login ?</Link>
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

export default Continuewithteacher