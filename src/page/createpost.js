import React, { Component } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'reactstrap';

export default class createpost extends Component {

  constructor() {
    super();
    this.createpostsubmit = this.createpostsubmit.bind(this);
    this.state = {
      datafiveuser: [],
      currentuserdata: [],
      show: false,
      com_logo: '',
      id: '',
      fields: {},
      errors: {},
      email: localStorage.getItem("emailaddress")
    }


  }
  componentDidMount() {
    // alert(this.state.email);
    this.getuserdata();
    axios.get(base.BASE_URL + '/frontuserfive').then(res => {
      this.setState({ datafiveuser: res.data });
    });
    this._loadname();

  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }
  getuserdata() {

    axios.get(base.BASE_URL + '/viewprofile/' + this.state.email).then(res => {
      this.setState({ currentuserdata: res.data });
    });
  }

  _loadname = async () => {
    let meetupId = this.state.email;
    try {
      let response = await fetch(base.BASE_URL + '/viewprofile/' + meetupId);
      // let response = await fetch(base.BASE_URL + '/profile.php?ID=' + username);
      console.log(response);
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        let userData = JSON.parse(res);
        //  alert(userData[0]["com_logo"]);  //studentimage
        this.setState({
          'firstname': userData[0]["firstname"],
          'lastname': userData[0]["lastname"],
          'com_logo': userData[0]["com_logo"],
          'id': userData[0]["id"]
        });


      } else {
        let error = res;
        throw error;
      }
    } catch (error) {
    }

  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //alert(this.state.fields["email"]);
    //Name
    if (!this.state.fields["notes"]) {
      formIsValid = false;
      errors["notes"] = "Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  createpostsubmit() {
    if (this.handleValidation()) {
      // alert("Form submitted");
      //////////////////////////////////////////////////////////////////////
      fetch(base.BASE_URL + '/postadd', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          notes: this.state.fields["notes"],
          email: this.state.email,
          id: this.state.id
        })
      }).then((Response) => Response.json())
        .then((Result) => {
          if (Result.message == 'success') {
            alert('Post has been submited successfully');
            this.setState({ loggdin: true })
          }
          else {
            alert('Failed to post')
          }

        })

      /////////////////////////////////////////////////////////////////////
    } else {
      // alert("Form has errors.")
    }


  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  /*   EditData(result) {
      alert(result.email);
      this.setState({ name: result.name, address: result.address, contact: result.contact, 
        email: result.email, id: result._id, Buttontxt: 'Update' });
    }
   */
  render() {

    return (
      <div>
        <Header />
        {/* Main Contents */}
        <div className="main_content">
          <div className="mcontainer">
          <Form>
            <div className="" style={{ backgroundColor: '#fff' }}>
              <div className="text-center py-3 border-b">
                <h3 className="text-lg font-semibold" style={{ textAlign: 'left', marginLeft: 10 }}>
                  Create Post
                </h3>
                <button className="uk-modal-close-default bg-gray-100 rounded-full p-2.5 right-2" type="button" uk-close uk-tooltip="title: Close ; pos: bottom ;offset:7" />
              </div>
              <div className="flex flex-1 items-start space-x-4 p-5">

                {/*     <img src="assets/images/avatars/avatar-2.jpg" 
    className="bg-gray-200 border border-white rounded-full w-11 h-11" /> */}

                    <img src={`${base.IMAGE_URL}/${this.state.com_logo}`} className="bg-gray-200 border border-white rounded-full w-11 h-11" />

                <div className="flex-1 pt-2">
               
                  <textarea className="uk-textare text-black shadow-none focus:shadow-none text-xl font-medium resize-none"
                    rows={5} placeholder="What's Your Mind ? Stella!"
                    onChange={this.handleChange.bind(this, "notes")} value={this.state.fields["notes"]}

                  />
                  <span style={{ color: "red" }}>{this.state.errors["notes"]}</span>
                </div>
              </div>
              <div className="bsolute bottom-0 p-4 space-x-4 w-full">
                {/*     <div className="flex bg-gray-50 border border-purple-100 rounded-2xl p-2 shadow-sm items-center">
      <div className="lg:block hidden ml-1"> Add to your post </div>
      <div className="flex flex-1 items-center lg:justify-end justify-center space-x-2">
        <svg className="bg-blue-100 h-9 p-1.5 rounded-full text-blue-600 w-9 cursor-pointer" 
        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
        <path strokeLinecap="round" strokeLinejoin="round" 
        strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        <svg className="text-red-600 h-9 p-1.5 rounded-full bg-red-100 w-9 cursor-pointer" 
        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"> </path></svg>
        <svg className="text-green-600 h-9 p-1.5 rounded-full bg-green-100 w-9 cursor-pointer" 
        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
        <svg className="text-pink-600 h-9 p-1.5 rounded-full bg-pink-100 w-9 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"> </path></svg>
        <svg className="text-pink-600 h-9 p-1.5 rounded-full bg-pink-100 w-9 cursor-pointer" id="veiw-more" hidden fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"> </path></svg>
        <svg className="text-pink-600 h-9 p-1.5 rounded-full bg-pink-100 w-9 cursor-pointer" id="veiw-more" hidden fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
        <svg className="text-purple-600 h-9 p-1.5 rounded-full bg-purple-100 w-9 cursor-pointer" id="veiw-more" hidden fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /> </svg>
         <svg className="hover:bg-gray-200 h-9 p-1.5 rounded-full w-9 cursor-pointer" id="veiw-more" uk-toggle="target: #veiw-more; animation: uk-animation-fade" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"> </path></svg>
      </div>
    </div> */}
              </div>
              <div className="flex items-center w-full justify-between border-t p-3">
                {/*                 <select className="selectpicker mt-2 story">
                  <option>Only me</option>
                  <option>Every one</option>
                  <option>People I Follow </option>
                  People Follow Me
                </select>  */}
                <div className="flex space-x-2">
               
                  <a href="#" className="bg-red-100 flex font-medium h-9 items-center justify-center px-5 rounded-md text-red-600 text-sm">
                    <svg className="h-5 pr-1 rounded-full text-red-500 w-6 fill-current" id="veiw-more" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="false" style={{}}> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    Live </a>
                  <a href="#" className="bg-blue-600 flex h-9 items-center justify-center rounded-md text-white px-5 font-medium">
                    Share </a>
                </div>
                <a href="#" hidden className="bg-blue-600 flex h-9 items-center justify-center rounded-lg text-white px-12 font-semibold">
                  Share </a>

                  <Button type="button" className="bg-blue-600 flex h-9 items-center justify-center rounded-lg text-white px-12 font-semibold"

                    onClick={this.createpostsubmit}>
                    POST</Button>

              </div>
            </div>

            </Form>



          </div>
        </div>
      </div>
    );
  }
}
