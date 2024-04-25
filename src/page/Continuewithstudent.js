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

import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap'
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import classdata from './data/class.json'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import MuiPhoneNumber from 'material-ui-phone-number';


export class Continuewithstudent extends Component {

  constructor() {
    super();
    this.register = this.register.bind(this);
    this.handleclassName = this.handleclassName.bind(this);
    this.handlegroupname = this.handlegroupname.bind(this);
    this.handleversion = this.handleversion.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      className: '',
      groupname: '',
      email: '',
      Password: '',
      isLoading: false,
      loaderfile: 'notloading',
      fields: {},
      errors: {},
      loggdin: 'stop',
      counter: 0, showpassordfirsttxt: false, showpasswordsecondtxt: false,
      isgrouploading: '',
      versionname: '',
      mobileno: ''

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
    if (!this.state.fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email Required";
    }
    if (!this.state.mobileno) {
      formIsValid = false;
      errors["mobileno"] = "Mobileno Required";
    }
    if (!this.state.className) {
      formIsValid = false;
      errors["className"] = "Class Name Required";
    }
    if (!this.state.versionname) {
      formIsValid = false;
      errors["versionname"] = "Version Name Required";
    }
    if (!this.state.fields["name"]) {
      formIsValid = false;
      errors["name"] = "Name Required";
    }
    //name
    //mobileno
    if (!this.state.fields["reentrypassword"]) {
      formIsValid = false;
      errors["reentrypassword"] = "Re-entry required";
    }
    // alert(' Version ' + this.state.versionname + '-classname-' +this.state.className)
    this.setState({ errors: errors });
    return formIsValid;
  }

  register() {
    if (this.handleValidation()) {
      this.setState({ loaderfile: 'loading', isLoading: true }) ///Adminloginareacheck  adminlogin Adminloginsetup
      if (this.state.fields['password'] !== this.state.fields['reentrypassword']) {
        this.setState({ loggdin: 'stop', isLoading: false })
        alert("Password is not Match")
      }
      else {
       // alert(this.state.mobileno);
        axios.post(base.BASE_URL + '/signupstudent', {
          email: this.state.fields["email"],
          password: this.state.fields["password"],
          name: this.state.fields["name"],
          mobileno: this.state.mobileno,
          className: this.state.className,
          groupname: this.state.groupname,
          versionname: this.state.versionname
        })
          .then((response) => {
            if (response.data == "save") {
              localStorage.setItem("token", response.data.access_token);
              localStorage.setItem("studentid", this.state.fields["email"]);
              localStorage.setItem("fullname", this.state.fields["name"]);
              localStorage.setItem("className", this.state.className);
              localStorage.setItem("groupname", this.state.groupname);
              localStorage.setItem("versionname", this.state.versionname);
              localStorage.setItem("mobileno", this.state.mobileno);

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
            else if (response.data == "exits") {

              this.setState({ loggdin: 'stop', isLoading: false })
              alert("Email Already Exits");

            }


          }, (error) => {
            console.log(error);
            alert(error)
          });

      }


    } else {
      // alert("Form has errors.")
    }


  }
  handleversion(event) {
    //  alert(event.target.value)
    this.setState({
      versionname: event.target.value
    })
  }
  handlegroupname(event) {
    this.setState({
      groupname: event.target.value
    })
  }
  handleclassName(event) {
    // alert(event.target.value)

    if (event.target.value == 'H.S.C Admission Test 2022') {
      this.setState({
        isgrouploading: 'yes',
        groupname: '',
        className: event.target.value

      })
    }
    else if (event.target.value == 'S.S.C Model Test 2023') {
      this.setState({
        isgrouploading: 'yes',
        groupname: '',
        className: event.target.value
      })
    }
    else if (event.target.value == 'H.S.C. Model Test 2023') {
      this.setState({
        isgrouploading: 'yes',
        groupname: '',
        className: event.target.value
      })
    }
    else if (event.target.value == 'Catholic College Admission') {
      this.setState({
        isgrouploading: 'yes',
        groupname: '',
        className: event.target.value
      })
    }
    else if (event.target.value == 'SSC Batch') {
      this.setState({
        isgrouploading: 'yes',
        groupname: '',
        className: event.target.value
      })
    }
    else if (event.target.value == 'HSC 2024') {
      this.setState({
        isgrouploading: 'yes',
        groupname: '',
        className: event.target.value
      })
    }
    else if (event.target.value == 'Eleven') {
      this.setState({
        isgrouploading: 'yes',
        groupname: '',
        className: event.target.value
      })
    }
    else {
      this.setState({
        isgrouploading: false,
        groupname: 'General',
        className: event.target.value
      })
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
    if (this.state.showpassordfirsttxt == false) {
      this.setState({
        showpassordfirsttxt: true
      })
    }
    else {
      this.setState({
        showpassordfirsttxt: false
      })
    }

  };
  handleClickShowPasswordtwo = () => {
    // setValues({ ...values, showPassword: !values.showPassword });
    // alert(this.state.showPassword)
    if (this.state.showpasswordsecondtxt == false) {
      this.setState({
        showpasswordsecondtxt: true
      })
    }
    else {
      this.setState({
        showpasswordsecondtxt: false
      })
    }

  };
  
  handleOnChangeMobileno = (value) => {
    console.log('phone code....' + value)
        this.setState({ mobileno: value })

  }

  render() {


    if (this.state.loggdin == 'start') {
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
                  {
                    this.state.isLoading == true ?
                      <ActivityIndicator />
                      :
                      <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                        <div className="col-lg-6">
                          <div className="p-5">
                            <div className="text-center">
                              <h1 className="h4 text-gray-900 mb-4">Create Student Account</h1>
                            </div>
                            <form className="user">
                              <div className="form-group">
                                <Input type="text" className="form-control"
                                  id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Your Full Name"
                                  onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}
                                />
                                <span style={{ color: "red", fontSize: 10 }}>{this.state.errors["name"]}</span>
                              </div>
                              <div className="form-group">
                                <select className="form-control"
                                  onChange={this.handleclassName}>
                                  <option value="">Select-Class</option>
                                  {
                                    classdata && classdata.map((cl) => {
                                      return <option value={cl.classname}>{cl.classname}</option>

                                    })
                                  }
                                </select>
                                <span style={{ color: "red", fontSize: 10 }}>{this.state.errors["className"]}</span>

                              </div>
                              <div className="form-group">
                                {
                                  this.state.isgrouploading == 'yes' ?
                                    <div>
                                      <select className="form-control"
                                        onChange={this.handlegroupname}>
                                        <option value="">Select-Group</option>
                                        <option value="Arts">Arts</option>
                                        <option value="Commerce">Commerce</option>
                                        <option value="Science">Science</option>
                                      </select>
                                      <span style={{ color: "red", fontSize: 10 }}>{this.state.errors["groupname"]}</span>
                                    </div>
                                    :
                                    ''
                                }
                              </div>

                              <div className="form-group">
                                <select className="form-control"
                                  onChange={this.handleversion}>
                                  <option value="">Select-Version</option>
                                  <option value="Bangla Version">Bangla Version</option>
                                  <option value="English Version">English Version</option>
                                </select>
                                <span style={{ color: "red", fontSize: 10 }}>{this.state.errors["versionname"]}</span>
                              </div>
                              <div className="form-group">
                                {/*                                 <Input type="email" className="form-control"
                                  id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Mobile No"
                                  onChange={this.handleChange.bind(this, "mobileno")} value={this.state.fields["mobileno"]}
                                /> */}
                            {/*     <PhoneInput
                                  defaultCountry='BD'
                                  value={this.state.mobileno}
                                  onChange={this.handleOnChangeMobileno}
                                /> */}
                                <MuiPhoneNumber defaultCountry='bd'
                                value={this.state.mobileno}
                                className="form-control"
                                onChange={this.handleOnChangeMobileno}
                              
                                />

{/*                                  Is possible: {this.state.mobileno && isPossiblePhoneNumber(this.state.mobileno) ? 'true' : 'false'}
Is valid: {this.state.mobileno && isValidPhoneNumber(this.state.mobileno) ? 'true' : 'false'}
National: {this.state.mobileno && formatPhoneNumber(this.state.mobileno)}
International: {this.state.mobileno && formatPhoneNumberIntl(this.state.mobileno)} */}
 
                                {/*  <PhoneInput
                                  placeholder="Enter mobile number"
                                 defaultCountry="BD"
                                  value={this.state.fields["mobileno"]}
                                  onChange={this.handleChange.bind(this, "mobileno")}/> */}
                                <span style={{ color: "red", fontSize: 10 }}>{this.state.errors["mobileno"]}</span>
                              </div>

                              <div className="form-group">
                                <Input type="email" className="form-control"
                                  id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."
                                  onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}
                                />
                                <span style={{ color: "red", fontSize: 10 }}>{this.state.errors["email"]}</span>
                              </div>
                              <div className="form-group">

                                {/*                                 <Input type="password" className="form-control" placeholder="Password"
                                  onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} /> */}

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

                                <span style={{ color: "red", fontSize: 10 }}>{this.state.errors["password"]}</span>
                              </div>

                              <div className="form-group">

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

                                <span style={{ color: "red", fontSize: 10 }}>{this.state.errors["reentrypassword"]}</span>
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
                              <Link className="small" to="/Studentlogin">Already have account. Login ?</Link>
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

export default Continuewithstudent