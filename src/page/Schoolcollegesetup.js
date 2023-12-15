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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class Schoolcollegesetup extends Component {

    constructor() {
        super();
        this.register = this.register.bind(this);
        this.handletype = this.handletype.bind(this);
        this.state = {
            name: '',
            address: '',
            email: '',
            phone: '',
            id: '',
            website: '',
            isLoading: false,
            loaderfile: 'notloading',
            fields: {},
            errors: {},
            loggdin: 'stop',
            counter: 0,
            allrowcount:[]
        }


    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //  alert(this.state.fields["email"]);
        //Name


        if (!this.state.fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "phone Reqired ";
        }
        if (!this.state.fields["website"]) {
            formIsValid = false;
            errors["website"] = "website Reqired ";
        }
        if (!this.state.fields["name"]) {
            formIsValid = false;
            errors["name"] = "name Reqired ";
        }

        //Email
        if (!this.state.fields["email"]) {
            formIsValid = false;
            errors["email"] = "Email Required";
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

    register() {
        if (this.handleValidation()) {

           // alert("Form submitted");
            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup


            axios.post(base.BASE_URL + '/schoolsetup', {
                id: this.state.counter,
                name: this.state.fields["name"],
                address: this.state.fields["address"],
                website: this.state.fields["website"],
                email: this.state.fields["email"],
                phone: this.state.fields["phone"],
                inistute: this.state.type
            }, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {
                      
                    if (response.data.status == "save") {
                        this.setState({ loggdin: 'start', loaderfile: 'notloading' })
                       // alert('save')
                    }
                    else if (response.data == "notfound") {
                       // alert("Invalid Email and Password");
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
    handletype(event)
    {

        axios.get(base.BASE_URL + '/getschooluniqueid', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log('slno' + res.data)
            this.setState({ counter: res.data.status, type: event.target.value })

        });


    }

    render() {
        // alert(this.state.loggdin);
        if (this.state.loggdin == 'start') {
            return <Redirect to="/Schoolcollegelist" />
        }

        return (
            <div>

                        <Header /> {/* Slider Menu */}
                        <Container style={{ marginTop: 86 }}>
                                <div className="container-fluid">
                                    {/* Page Heading */}
                                    <div class="card position-relative">
                                        <div class="card-header py-3">
                                           
                                            <Link to="/Schoolcollegelist">Back</Link>
                                        </div>
                                        <div class="card-body">

                                            <div className="row">

                                                <div className='col-md-12'>


                                                    <form className="user">

                                                        <div class="form-content">
                                                            <div>
                                                                <div className="form-header">
                                                                    <h3 class="m-0 font-weight-bold text-primary">Add New School/College</h3>
                                                                </div>
                                                                <p style={{ color: '#000' }}>Please fill with your details</p>
                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-6"
                                                                    style={{ padding: 16 }}>
                                                                        <select onChange={this.handletype} 
                                                                        value={this.state.fields["inistute"]} 
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled>Select Type </option>
                                                                            <option value="School">School</option>
                                                                            <option value="College">College</option>
                                                                            <option value="Admission Test">Admission Test</option>
                                                                            <option value="Job Interview">Job Interview</option>
                                                                            
                                                                        </select>
                                                                        <span style={{ color: "red", fontSize: 12 }}>{this.state.errors["inistute"]}</span>
                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                        <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" placeholder="School ID"
                                                                            onChange={this.handleChange.bind(this, "id")} value={this.state.counter}
                                                                        />
                                                                        <span style={{ color: "red", fontSize: 12 }}>{this.state.errors["id"]}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                        <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" placeholder="School/College Name"
                                                                            onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}
                                                                        />
                                                                        <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>

                                                                        <input type="text" className="form-control form-control-user" placeholder="Address"
                                                                            onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]} />
                                                                        <span style={{ color: "red" }}>{this.state.errors["address"]}</span>

                                                                    </div>
                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                        <input type="text" className="form-control form-control-user" placeholder="phone"
                                                                            onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]} />
                                                                        <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ alignSelf: 'flex-end', transform: 'translateY(4px)' }}>
                                                                        <input type="email" className="form-control form-control-user" placeholder="email"
                                                                            onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                                                                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="form-row">
                                                                   <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                    <input type="text" className="form-control form-control-user" placeholder="website"
                                                                        onChange={this.handleChange.bind(this, "website")} value={this.state.fields["website"]} />
                                                                    <span style={{ color: "red" }}>{this.state.errors["website"]}</span>
                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                    <Button type="button" className="btn btn-primary btn-user btn-block" onClick={this.register}>
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
export default Schoolcollegesetup
