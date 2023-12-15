import React, { Component } from 'react';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
import axios from 'axios';

export default class Watchhistory extends Component {
  constructor(props) {
    super(props);

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
