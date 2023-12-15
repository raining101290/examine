import React, { Component } from 'react';


export class logout extends Component {

    constructor(props) {
        super(props);
        
   
      }
      componentDidMount() {
        const token = localStorage.removeItem("token");
        const emailaddress = localStorage.removeItem("emailaddress");
        alert(emailaddress);
       
          }
  render() {
    return (
      <div> LogOut Successfully </div>
    );
  }
}