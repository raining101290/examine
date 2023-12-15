import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import * as base from "../global";
import axios from 'axios';
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'
import Topbar from '../../Layout/Topbar'
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import Container from 'react-bootstrap/Container';


export class Changepassword extends Component {

    constructor(props) {
        super(props);
        this.createuser = this.createuser.bind(this);
        this.handlepassword = this.handlepassword.bind(this);
        //handleschoolcollagename handletype
        this.state = {
            email: '',
            isLoading: false,
            loaderfile: 'notloading',
            fields: {},
            errors: {},
            loggdin: 'stop',
            counter: 0,
            schoolcollegelist: [],
            allsubscribelist: [],
            schoolname: '',
            autoid: this.props.match.params.id,
            password: ''
        }


    }
    componentDidMount() {
        axios.get(base.BASE_URL + '/edituserinformation/' + this.state.autoid)
            .then(res => {
                this.setState(
                    {
                        allsubscribelist: res.data,
                        email: res.data[0].email,
                        userrole: res.data[0].usersrole,
                        schoolcollegetype: res.data[0].schoolcollegetype,
                        schoolcollagename: res.data[0].schoolcollegename,
                        schoolid: res.data[0].schoolid,
                        fullname: res.data[0].fullname,
                        updateby: res.data[0].updateby,
                        updatetime: res.data[0].updatetime,
                        userstatus: res.data[0].userstatus
                    }
                );
                console.log(res.data[0].fullname)
            });
    }
    handleschoolcollagename(event) {
        this.setState({
            schoolcollagename: event.target.value
        })
    }
    handlestatus(event) {
        this.setState({
            userstatus: event.target.value
        })
    }
    handleuserrole(event) {
        this.setState({ userrole: event.target.value })
    }
    handletype(event) {
        this.setState({
            schoolcollegetype: event.target.value
        })

        this.setState({ schoolcollegelist: [], schoolcollagename: '' });
        ///////////////////////////////
        axios.get(base.BASE_URL + '/getschoollist/' + event.target.value,
            {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            .then(result => {

                this.setState({ schoolcollegelist: result.data });

            });
        ///////////////////////////////
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //  alert(this.state.fields["email"]);
        //Name


        //Email
        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "password Required";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    createuser() {
        if (this.handleValidation()) {
            // alert("Form submitted");
            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup
            if (this.state.password == "") {
             alert('Insert the Password');

            }
            else
            {
                axios.post(base.BASE_URL + '/updatepassword', {
                    autoid: this.state.autoid,
                    password: this.state.password
                })
                    .then((response) => {
                         alert(response.data)   
                        if (response.data.message == "save") {
                            alert('save');
                            
                            // history.push('/Paymentpaid');
                        }
                        else if (response.data == "Unauthorized") {
                        }
                        else if (response.data == "Unauthorized f") {

                        }
                    }, (error) => {
                        console.log(error);
                        alert(error)
                    });
               }
            /////////////////////////////////////////////////////////////////////
        } else {
            alert("Form has errors.")
        }


    }

    handlepassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    handleChangeemail(event) {

        this.setState({
            email: event.target.value
        })
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
                                                        <h3 class="m-0 font-weight-bold text-primary">Edit User</h3>
                                                    </div>
                                                    <p style={{ color: '#000' }}>Please fill with your details</p>

                                                    <div className="form-row">
                                                        <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                            Email
                                                            <input type="email" className="form-control form-control-user" placeholder="email"
                                                                onChange={this.handleChangeemail.bind(this, "email")}
                                                                defaultValue={this.state.email}
                                                                value={this.state.email} />
                                                            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>


                                                        </div>
                                                        <div className="form-holder col-md-6" style={{ alignSelf: 'flex-end', transform: 'translateY(4px)' }}>
                                                            Password
                                                            <input type="text"
                                                                className="form-control form-control-user"
                                                                placeholder="Password"
                                                                onChange={this.handlepassword.bind(this)}
                                                                value={this.state.password} />
                                                            <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">

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
export default Changepassword
