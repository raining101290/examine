import React, { Component } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'reactstrap';


class editprofile extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedFile: null,
            email: localStorage.getItem("emailaddress"),
            loggdin: ''
        }

    }

    fileSelect = event => {
        this.setState({ selectedFile: event.target.files[0] })
        console.log(event.target.files[0])
    }
    fileUpload = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        fd.append('email', this.state.email);
        axios.post(base.BASE_URL + '/profileimageupload', fd
        ).then(res => {
           // alert(res.message);
            if (res.status == '200')  
            {
            
              this.setState({ loggdin : true })
            }
            else
            {
              alert('Failed To Upload')  
            }  
            console.log(res);
        }
        );

    }

    /*     onSubmit(){
            alert(this.state.selectedImage);
            const formData = { image: this.state.selectedImage }
          //  let endpoint = "http://192.168.0.102/datingapp_api/image/imageupload.php";
            let endpoint = base.BASE_URL + "/profileimageupload";
             axios.post(endpoint, formData, {
             }).then((res) => {
                console.log('File uploaded!');
            })
        }
      */
    render() {
        if (this.state.loggdin) {
            return <Redirect to="/profile" />
          }
        return (
            <div>
                <Header />
                <div className="main_content">
                    <div className="mcontainer">
                        <input type="file" onChange={this.fileSelect} />
                        <button onClick={this.fileUpload}>Upload</button>
                    </div></div>
            </div>
        )
    }
}

export default editprofile;