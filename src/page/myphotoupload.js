import React, { Component } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'reactstrap';
import { Link } from 'react-router-dom';

class myphotoupload extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedFile: null,
            email: localStorage.getItem("emailaddress"),
            loggdin: '',
            dataviewprofileimage:[]
        }

    }
    componentDidMount() {
        // alert(this.state.email);

        axios.get(base.BASE_URL + '/viewprofileimage/' + this.state.email).then(res => {
          this.setState({ dataviewprofileimage: res.data });
        });
    
      }
    fileSelect = event => {
        this.setState({ selectedFile: event.target.files[0] })
        console.log(event.target.files[0])
    }
    fileUpload = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        fd.append('email', this.state.email);
        axios.post(base.BASE_URL + '/uploadphotoalbum', fd
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
                        <h3 style={{ pading: 10 }}>Add Your New Photo here </h3>
                        <input type="file" onChange={this.fileSelect} style={{ pading: 10 }}/>
                        <button onClick={this.fileUpload} style={{ width: 200, height: 50, backgroundColor: '#0187ab' }}>Upload</button>
                    </div>
,                    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-5">
                    {this.state.dataviewprofileimage.map((result) => {
                return (
				

                  <div style={{ padding: 20 }}>
                    <div className="bg-green-400 max-w-full lg:h-44 h-36 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                    
                    <Link to="/Editprofile"><img src={`${base.IMAGE_URL}/${result.com_logo}`} className="w-full h-full absolute object-cover inset-0"/></Link>                   
                    {/*   <img src="assets/images/post/img-1.jpg" className="w-full h-full absolute object-cover inset-0" /> */}
                      {/* overly*/}
                      <div className="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full" />
                      <div className="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small">
                        <div className="text-base">{result.title}</div>
                 {/*        <div className="flex justify-between text-xs">
                          <a href="#">  Like</a>
                          <a href="#">  Comment </a>
                          <a href="#">  Share </a>
                        </div> */}
                      </div>
                    </div>
                  </div>


)
})}

                        </div>

                    </div>
            </div>
        )
    }
}

export default myphotoupload;