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


export default class Termsofuse extends Component {
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

      window.scrollTo(0, 0);

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
     

      </div>
    );
  }
}
