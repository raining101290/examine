import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import * as base from "../page/global";
import axios from 'axios';

export class Header extends Component {
  constructor() {
    super();

     this.state = {
      emailaddress: localStorage.getItem("emailaddress"),
      datayourmatch: [],
      datauserprofile: [],
      image: 'maleavter.png'
    } 
  }
  logout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  }
  componentDidMount() {
   //  alert(this.state.emailaddress);
/*     axios.get(base.BASE_URL + '/frontuserfive').then(res => {
      this.setState({ datayourmatch: res.data });
    });

    axios.get(base.BASE_URL + '/viewprofile/' + this.state.emailaddress).then(res => {
      this.setState({ datauserprofile: res.data });
    }); */
  }
  render() {
    /*     if (this.state.emailaddress == "") {
          return <Redirect to="/" />
        } */
    return (
            <p>testttttttttttttt</p>
        )
    }
  }
