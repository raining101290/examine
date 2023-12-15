import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import * as base from "../global";
import axios from 'axios';
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

export class Registration extends Component {

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
      versionname: ''
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
    if (!this.state.fields["mobileno"]) {
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

        axios.post(base.BASE_URL + '/signupstudent', {
          email: this.state.fields["email"],
          password: this.state.fields["password"],
          name: this.state.fields["name"],
          mobileno: this.state.fields["mobileno"],
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
              localStorage.setItem("mobileno", this.state.fields["mobileno"]);

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
    else if (event.target.value == 'Nine') {
      this.setState({
        isgrouploading: 'yes',
        groupname: '',
        className: event.target.value
      })
    }
    else if (event.target.value == 'Ten') {
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

  render() {


    if (this.state.loggdin == 'start') {
      return <Redirect to="/Studentdashboard" />
    }
    return (
      <div>

                  {
                    this.state.isLoading == true ?
                      <ActivityIndicator />
                      :
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="">
                            <div className="text-center">
                              {/*   <Online>You have good internet connection</Online>
                              <Offline>Its show your offline</Offline> */}
                              <p className="h4 text-gray-900 mb-4">Create Student Account</p>
                              {/* <Alert variant="success">Data is saved sucessfully</Alert>   */}
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
                                  <option value="S.S.C Model Test 2023">S.S.C Model Test 2023</option>
                                  <option value="H.S.C Admission Test 2022">H.S.C Admission Test 2022</option>
                                  <option value="Nursery">Nursery</option>
                                  <option value="KG">KG</option>
                                  <option value="One">One</option>
                                  <option value="Two">Two</option>
                                  <option value="Three">Three</option>
                                  <option value="Four">Four</option>
                                  <option value="Five">Five</option>
                                  <option value="Six">Six</option>
                                  <option value="Seven">Seven</option>
                                  <option value="Eight">Eight</option>
                                  <option value="Nine">Nine</option>
                                  <option value="Ten">Ten</option>
                                  <option value="Eleven">Eleven</option>

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
                                <Input type="email" className="form-control"
                                  id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Mobile No"
                                  onChange={this.handleChange.bind(this, "mobileno")} value={this.state.fields["mobileno"]}
                                /> 

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

                            </form>
                            <hr />

                          </div>
                        </div>
                      </div>
                  }

      </div>


    )

  }
}

export default Registration