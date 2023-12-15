import React, { Component } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';


export default class Manageprofile extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handlename = this.handlename.bind(this);
    this.handleemail = this.handleemail.bind(this);
    this.handledob = this.handledob.bind(this);
    this.handlegender = this.handlegender.bind(this);
    this.handlelanguages = this.handlelanguages.bind(this);
    this.state = {
      datauserprofile: [],
      email: localStorage.getItem("emailaddress"),
      dataviewprofileimage: [],
      datafavouritelist: [],
      automemberid: '',
      fields: {},
      errors: {},
      loggdin: 'stop',
      name: '',
      dob: '',
      gender: '',
      language: ''
    }


  }
  handlename(event) {
    this.setState({
      name: event.target.value
    })
  }
  handleemail(event) {
    this.setState({
      email: event.target.value
    })
  }
  handledob(event) {
    this.setState({
      dob: event.target.value
    })
  }
  handlegender(event) {
    const statusvalue = event.target.value;
    this.setState({
      gender: statusvalue
    })
    // alert(this.state.gender);
  }
  handlelanguages(event) {

    const cstatusvalue = event.target.value;
    console.log('ddd' + cstatusvalue);
    //  alert(cstatusvalue);
    this.setState({
      language: cstatusvalue
    });
  }

  componentDidMount() {
    //   alert(this.state.email);
    if (this.state.email == null) {

    }
    else {
      axios.get(base.BASE_URL + '/viewprofile/' + this.state.email).then(res => {
        // alert();
        this.setState({
          datauserprofile: res.data,
          name: res.data[0].name,
          dob: res.data[0].dob,
          gender: res.data[0].gender,
          language: res.data[0].language,
        });
        console.log(res.data)
      });

    }
  }

  onSubmit(e) {
    e.preventDefault()
    /*  register() { */
    /*     if (this.handleValidation()) { */
    //   alert("Form submitted");
    // alert(this.state.gender)
    fetch(base.BASE_URL + '/profileedit', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        dob: this.state.dob,
        gender: this.state.gender,
        language: this.state.language
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        alert(Result.message);
        if (Result.message == 'update') {

          alert('Update Successfully');
        }
        else {
          alert('Failed')
        }

      })
    /////////////////////////////////////////////////////////////////////
    /*     } else {
           alert("Form has errors.")
        }
     */

  }


  /*   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
    }
   */
  render() {
    // alert(this.state.email ==)
    if (this.state.email == null) {
      return <Redirect to="/Login" />
    }


    return (
      <div>
        <Header />
        <section className="m-profile manage-p">
          <div className="container h-100">
            <div className="row align-items-center justify-content-center h-100">
              <div className="col-lg-10">
                <div className="sign-user_card">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="upload_profile d-inline-block">
                        <img src="images/user/user.jpg" className="profile-pic rounded-circle img-fluid" alt="user" />
                        <div className="p-image">
                          <i className="ri-pencil-line upload-button" />
                          <input className="file-upload" type="file" accept="image/*" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 device-margin">

                      <div className="profile-from">
                        <h4 className="mb-3">My Profile</h4>
                        <Form onSubmit={this.onSubmit} className="mt-4" action="https://templates.iqonic.design/streamit/frontend/html/index.html">
                          <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control mb-0"
                              id="exampleInputl2" placeholder="Enter Your Name" autoComplete="off"
                              /*  value={this.state.fields["email"]} */
                              onChange={this.handlename} value={this.state.name}
                            />

                          </div>
                          <div className="form-group">
                            <label>Email Address </label>
                            <input type="text" className="form-control mb-0" id="exampleInputl2"
                              placeholder="Enter Email Address" autoComplete="off"
                              onChange={this.handleemail} value={this.state.email}
                            />
                          </div>
                          <div className="form-group">
                            <label>Date of Birth</label>
                            <input type="date" className="form-control date-input basicFlatpickr mb-0"
                              placeholder="Select Date"
                              onChange={this.handledob} value={this.state.dob}

                              id="exampleInputPassword2" />




                          </div>
                          <div className="form-group d-flex flex-md-row flex-column">
                            <div className="iq-custom-select d-inline-block manage-gen">
                              <select className="form-control pro-dropdown"
                                onChange={this.handlegender} value={this.gender}
                              >
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                              </select>

                            </div>
                            <div className="iq-custom-select d-inline-block lang-dropdown manage-dd">
                              <select className="form-control pro-dropdown"
                                onChange={this.handlelanguages} value={this.language}
                              >
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                                <option value="gujarati">Gujarati</option>
                                <option value="bengali">Bengali</option>
                                <option value="marathi">Marathi</option>
                                <option value="tamil">Tamil</option>
                                <option value="kannada">Kannada</option>
                              </select>

                            </div>
                          </div>  {/* onClick={this.register}  */}
                          <div className="d-flex">
                            {/*     <Button type="button" className="btn btn-hover"style={{ marginTop: -10 }}>
                Update </Button> */}
                            <button className="ps-btn">Submit</button>
                          </div>
                        </Form>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
