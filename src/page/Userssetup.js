import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Topbar from '../Layout/Topbar'
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import Container from 'react-bootstrap/Container';

export class Userssetup extends Component {

    constructor() {
        super();
        this.createuser = this.createuser.bind(this);
        this.handletype = this.handletype.bind(this);
        this.handleschoolcollagename = this.handleschoolcollagename.bind(this);
        this.handlestatus = this.handlestatus.bind(this);
        this.handleuserrole = this.handleuserrole.bind(this);
        //handleschoolcollagename handletype
        this.state = {
            name: '',
            address: '',
            email: '',
            status: '',
            website: '',
            isLoading: false,
            loaderfile: 'notloading',
            fields: {},
            errors: {},
            loggdin: 'stop',
            counter: 0,
            schoolcollegelist:[],
            schoolname:'',
            userstatus:''
        }


    }
    handleschoolcollagename(event) {
        this.setState({
            schoolid: event.target.value
        })
        alert(event.target.value)
//////////////here need to add school list
            this.setState({ schoolcollegelist: [] });
            ///////////////////////////////
            axios.get(base.BASE_URL + '/getschoolname/' + event.target.value,
            {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            .then(result => {
                this.setState({ schoolcollegelist: result.data, 
                    schoolname:  result.data[0].name })
            
            });

    }
    handlestatus(event) {
        this.setState({
            userstatus: event.target.value
        })
    }
    handleuserrole(event){
        this.setState({ userrole : event.target.value })
    }
    handletype(event) {
        this.setState({
            schoolcollegetype: event.target.value
        })

        this.setState({ schoolcollegelist: [] });
        ///////////////////////////////
        axios.get(base.BASE_URL + '/getschoollist/' + event.target.value,
        {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
        .then(result => {
            this.setState({ schoolcollegelist: result.data })
          
        });
        ///////////////////////////////
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //  alert(this.state.fields["email"]);
        //Name


        if (!this.state.fields["name"]) {
            formIsValid = false;
            errors["name"] = "name Reqired ";
        }

        //Email
        if (!this.state.fields["email"]) {
            formIsValid = false;
            errors["email"] = "Email Required";
        }
        if (!this.state.fields["password"]) {
            formIsValid = false;
            errors["password"] = "Password Required";
        }

        if (typeof this.state.fields["email"] !== "undefined") {
            let lastAtPos = this.state.fields["email"].lastIndexOf('@');
            let lastDotPos = this.state.fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (this.state.fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    createuser() {
        if (this.handleValidation()) {
           // alert("Form submitted");
            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup
            axios.post(base.BASE_URL + '/Adminloginsetup', {
                usersrole: this.state.userrole,
                schoolcollegetype: this.state.schoolcollegetype,
                schoolname: this.state.schoolname,
                schoolid: this.state.schoolid,
                fullname: this.state.fields["name"],
                email: this.state.fields["email"],
                password: this.state.fields["password"],
                userstatus: this.state.userstatus,
                enteredby: '',
                updateby: '',
                enteredtime: '',
                updatetime:''
            }, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {
                  //  console.log('ddddd' + response.data.status)

                    if (response.data.status == "save") {
                        this.setState({ loggdin: 'start', loaderfile: 'notloading' })
                        alert('save')
                    }
                    else if (response.data.status == "") {
                        alert("Here");
                    }


                }, (error) => {
                    console.log(error);
                });


            /////////////////////////////////////////////////////////////////////
        } else {
            alert("Form has errors.")
        }


    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        // alert(this.state.loggdin);
        if (this.state.loggdin == 'start') {
            return <Redirect to="/Userlist" />
        }

        return (
            <div>

                        <Header /> {/* Slider Menu */}
                        <Container style={{ marginTop: 86 }}>
                                <div className="container-fluid">
                                    {/* Page Heading */}
                                    <div class="card position-relative">
                                        <div class="card-header py-3">
                                           
                                            <Link to="/Userlist">Back</Link>
                                        </div>
                                        <div class="card-body">

                                            <div className="row">

                                                <div className='col-md-12'>


                                                    <form className="user">

                                                        <div class="form-content">
                                                            <div>
                                                                <div className="form-header">
                                                                    <h3 class="m-0 font-weight-bold text-primary">Add New User</h3>
                                                                </div>
                                                                <p style={{ color: '#000' }}>Please fill with your details</p>
                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-6"
                                                                    style={{ padding: 16 }}>
                                                                        User Role
                                                                        <select onChange={this.handleuserrole} 
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled>Users Role </option>
                                                                            <option value="Super Admin">Super Admin</option>
                                                                            <option value="Admin">Admin</option>
                                                                            <option value="Teacher">Teacher/Question Uploader</option>

                                                                            
                                                                        </select>
                                                                        <span style={{ color: "red", fontSize: 12 }}>{this.state.errors["inistute"]}</span>
                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                        <lable>Type</lable>
                                                                    <select onChange={this.handletype}
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled>Select Type </option>
                                                                            <option value="None">None</option>
                                                                            <option value="School">School</option>
                                                                            <option value="College">College</option>
                                                                            <option value="Admission Test">Admission Test</option>
                                                                            <option value="Job Interview">Job Interview</option>
                                                                            
                                                                        </select>
                                                                        <span style={{ color: "red", fontSize: 12 }}>{this.state.errors["inistute"]}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                       Inistute Name

                                                                        <select  className="form-control" onChange={this.handleschoolcollagename}>
                                                                            <option value="None">None</option>
                                                                            {
                                                                                this.state.schoolcollegelist.map((result) => {
                                                                                    return (
                                                                                        <option value={result._id}>{result.name}</option>
                                                                                    )
                                                                                })}
                                                                        </select>

                                                                     
                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                                Full Name
                                                                    <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" 
                                                                            placeholder="User Full Name"
                                                                            onChange={this.handleChange.bind(this, "name")} 
                                                                            value={this.state.fields["name"]}
                                                                        />
                                                                        <span style={{ color: "red" }}>{this.state.errors["name"]}</span>

                                                                    </div>
                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                    Email
                                                                    <input type="email" className="form-control form-control-user" placeholder="email"
                                                                            onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                                                                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>

                                                                       
                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ alignSelf: 'flex-end', transform: 'translateY(4px)' }}>
                                                                    Password
                                                                    <input type="text" className="form-control form-control-user" placeholder="Password"
                                                                            onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
                                                                        <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="form-row">
                                                                   <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                    <lable>User Status</lable>
                                                                    <select onChange={this.handlestatus}
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled>Select Type </option>
                                                                            <option value="0">Active</option>
                                                                            <option value="1">Inactive</option>
                                                                            
                                                                        </select>
                                                                        <span style={{ color: "red", fontSize: 12 }}>{this.state.errors["inistute"]}</span>     

                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                    <Button type="button" className="btn btn-primary btn-user btn-block" onClick={this.createuser}>
                                                                        Submit
                                                                    </Button>
                                                                    </div>
                                                                </div>
                                                                <div className="form-row">
                                                                   
                                                                </div>

                                                            </div>
                                                        </div>



                                                    </form>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                </Container>        

            </div>
        );

    }
}
export default Userssetup
