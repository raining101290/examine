import React, { Component } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';


export default class video extends Component {

  constructor(props) {
    super(props);

    const token = localStorage.getItem("token")
    let loggdin = true;
    if (token == null) {
      loggdin = false
    }
    this.state = {
      loggdin,
      datafiveuser: [],
      show: false,
      email: localStorage.getItem("emailaddress")
    }


  }
  componentDidMount() {
    // alert(this.state.email);
    axios.get(base.BASE_URL + '/frontuserfive').then(res => {
      this.setState({ datafiveuser: res.data });
    });

  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }

  render() {

    if (this.state.email == null) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <Header />
        {/* Main Contents */}
        <div className="main_content">
          <div className="mcontainer">
                <h3>Video</h3>

          </div>
          </div>
      </div>
    );
  }
}
