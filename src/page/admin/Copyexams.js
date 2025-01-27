import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form, Label } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

import axios from 'axios';
import Header from '../../Layout/Header'
import * as base from '../../page/global'

import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ThirtyFpsTwoTone } from '@mui/icons-material';



export class Copyexams extends Component {

    constructor() {
        super();
        this.createuser = this.createuser.bind(this);
        this.handletype = this.handletype.bind(this);
        this.handleschoolcollagename = this.handleschoolcollagename.bind(this);
        this.handlestatus = this.handlestatus.bind(this);
        this.handleuserrole = this.handleuserrole.bind(this);
        this.handleclassname = this.handleclassname.bind(this);
        this.handlesection = this.handlesection.bind(this);
        this.handlesubject = this.handlesubject.bind(this);
        this.handlegroupname = this.handlegroupname.bind(this);
        this.handlepaymenttype = this.handlepaymenttype.bind(this);
        this.handleversion = this.handleversion.bind(this);
        //handleschoolcollagename handletype
        this.state = {
            name: '',
            address: '',
            email: '',
            status: '',
            website: '',
            isLoading: false,
            subjectname: '',
            loading: false,
            loaderfile: 'notloading',
            fields: {},
            errors: {},
            loggdin: 'stop',
            counter: 0,
            schoolcollegelist: [],
            classlist: [],
            sectionlist: [],
            grouplist: [],
            subjectlist: [],
            examstatus: 'Draft',
            schoolid: localStorage.getItem('schoolid'),
            schoolcollegename: localStorage.getItem('schoolcollegename'),
            schoolcollegetype: localStorage.getItem('schoolcollegetype'),
            userrole: localStorage.getItem('usersrole'),
            sectionname: '',
            paymenttype: '',
            versionname: '', free: false,
            allsubscribelist: [],
            chapter: ''
        }
    }
    getdata = () => {
        axios.get(base.BASE_URL + '/schoollist', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            this.setState({ allsubscribelist: res.data });
        });
    }
    componentDidMount() {
        // alert(this.state.schoolid)
        // alert(localStorage.getItem('schoolcollegetype'))
        this.getdata();

        // console.log(base.BASE_URL + '/getclassid/' + this.state.schoolid)


        axios.get(base.BASE_URL + '/getsectionid/' + this.state.schoolid)
            .then(result => {
                if (result.data.length > 0) {
                    this.setState({
                        sectionlist: result.data,
                        sectionname: result.data[0].sectionname
                    });
                }
                else {

                }

            });
        console.log(base.BASE_URL + '/grouplist/' + this.state.schoolid)
        axios.get(base.BASE_URL + '/grouplist/' + this.state.schoolid)
            .then(result => {
                this.setState({ grouplist: result.data });
            });


    }
    handlegroupname(event) {
        this.setState({
            groupname: event.target.value
        })
    }
    handlepaymenttype(event) {

        this.setState({
            paymenttype: event.target.value
        })
    }
    handlesection(event) {
        this.setState({
            sectionname: event.target.value
        })
    }
    handlesubject(event) {


        this.setState({
            subjectname: event.target.value
        })

    }
    handleclassname(event) {
        this.setState({
            classname: event.target.value
        })
    }
    handleschoolcollagename(event) {
        //alert(event.target.value);
        this.setState({
            schoolcollagename: event.target.value
        })

        this.setState({ schoollistid: [] });
        ///////////////////////////////
        axios.get(base.BASE_URL + '/getschoolidforsave/' + event.target.value, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(result => {
                this.setState({ schoollistid: result.data, schoolid: result.data[0]._id, schoolname: result.data[0].name });
                console.log('dddd......' + result.data[0]._id)

                console.log(base.BASE_URL + '/getclassid/' + event.target.value);
                axios.get(base.BASE_URL + '/getclassid/' + event.target.value)
                    .then(result => {
                        this.setState({ classlist: result.data });
                    });

            });
        // alert(event.target.value);
        console.log(base.BASE_URL + '/subjectlistschool/' + event.target.value)
        axios.get(base.BASE_URL + '/subjectlistschool/' + event.target.value)
            .then(result => {
                this.setState({ subjectlist: result.data });
            });

    }
    handlestatus(event) {
        this.setState({
            examstatus: event.target.value
        })
    }
    handleuserrole(event) {
        this.setState({ userrole: event.target.value })
    }
    handleversion(event) {
        this.setState({ versionname: event.target.value })
    }
    handletype(event) {
        // alert(event.target.value)
        this.setState({
            schoolcollegetype: event.target.value
        })

        //this.setState({ schoolcollegelist: [] });
        ///////////////////////////////
        /*     axios.get(base.BASE_URL + '/getschoollist/' + event.target.value,
            {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            .then(result => {
                this.setState({ schoolcollegelist: result.data, 
                    schoolid: result.data[0]._id, schoolname: result.data[0].name });
            }); */
        ///////////////////////////////
    }


    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        // alert(this.state.fields["examstatus"]);
        //Name

        if (!this.state.examstatus) {
            formIsValid = false;
            errors["examstatus"] = "examstatus Reqired ";
        }
        if (!this.state.fields["examname"]) {
            formIsValid = false;
            errors["examname"] = "examname Reqired ";
        }
        if (!this.state.fields["examtime"]) {
            formIsValid = false;
            errors["examtime"] = "examtime Reqired ";
        }
        //Email
        if (!this.state.fields["examdate"]) {
            formIsValid = false;
            errors["examdate"] = "Exam Date Required";
        }
        if (!this.state.fields["noofstudent"]) {
            formIsValid = false;
            errors["noofstudent"] = "No of Student Required";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }
    handlechapter(event){
        this.setState({
            chapter: event.target.value
        })
    }
    createuser() {
        if (this.handleValidation()) {
            //  alert(this.state.sectionname);
            this.setState({ loaderfile: 'loading', loading: true }) ///Adminloginareacheck  adminlogin Adminloginsetup
            axios.post(base.BASE_URL + '/addnewexam', {
                examname: this.state.fields["examname"],
                examtype: this.state.schoolcollegetype,
                examdate: this.state.fields["examdate"],
                examtime: this.state.fields["examtime"],
                schoolcollegid: this.state.schoolid,
                schoolcollegename: this.state.schoolcollegename,
                xgroup: this.state.groupname,
                classname: this.state.classname,
                subjectname: this.state.subjectname,
                paymenttype: this.state.paymenttype,
                versionname: this.state.versionname,
                xsection: this.state.sectionname,
                examfees: this.state.fields["examfees"],
                noofstudent: this.state.fields["noofstudent"],
                examstatus: this.state.examstatus,
                chapter: this.state.chapter,
                status: 'Active'
            }, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {
                    //  console.log('ddddd' + response.data.status)

                    if (response.data == "save") {
                        this.setState({ loggdin: 'start', loaderfile: 'notloading', loading: false })
                        // alert('save')
                    }
                    else if (response.data == "") {
                        this.setState({ loggdin: 'start', loaderfile: 'notloading', loading: false })
                       // alert("Here");
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
            return <Redirect to="/Adminexamsetuplist" />
        }
        if (localStorage.getItem('schoolcollegename') == null) {
            localStorage.removeItem("token");
            localStorage.removeItem("emailaddress");
            localStorage.removeItem("vendoremailaddress");

            localStorage.removeItem("schoolcollegename")
            localStorage.removeItem("schoolid")
            return <Redirect to="/Login" />
        }

        return (
            <div>
                <Header /> {/* Slider Menu */}
                <Container style={{ marginTop: 90 }}>

                    <div class="card-header py-3">

                        <Link to="/Examsetuplist">Back</Link>
                    </div>
                    <div class="card-body">

                        <div className="row">

                            <div className='col-md-12'>


                                <form className="user">

                                    <div class="form-content">
                                        <div>
                                            <div className="form-header">

                                                {this.state.loading ? (
                                                    <Spinner
                                                        style={{ marginBottom: 27 }}
                                                        animation="border"
                                                        variant="danger"
                                                    />
                                                ) : null}
                                                <h3 class="m-0 font-weight-bold text-primary"
                                                    style={{ fontSize: 16 }}>Add New Exam</h3>
                                            </div>
                                            <p style={{ color: '#000' }}>Please fill with your details
                                                {/*   {this.state.schoolid} */}
                                            </p>
                                            <div className="form-row">

                                                <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                    <Label> Type {this.state.schoolcollegetype}</Label>
                                                    <select className="combox" onChange={this.handletype}
                                                    >
                                                        <option value="School">School</option>
                                                        <option value="College">College</option>
                                                        <option value="Admission Test">Admission Test</option>
                                                        <option value="Job Interview">Job Interview</option>

                                                    </select>
                                                    <span style={{ color: "red", fontSize: 12 }}>{this.state.errors["inistute"]}</span>
                                                </div>

                                                <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                    <Label> Institution Name </Label>

                                                    <select className="combox" onChange={this.handleschoolcollagename}>

                                                        {this.state.allsubscribelist.map((result) => {
                                                            return (
                                                                <option value={result._id}>{result.name}</option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>

                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                    <Label> Class Name </Label>

                                                    <select className="combox"
                                                        onChange={this.handleclassname}>
                                                        <option value=""></option>
                                                        {
                                                            this.state.classlist.map((result) => {
                                                                return (
                                                                    <option value={result.xclassname}>
                                                                        {result.xclassname}
                                                                    </option>
                                                                )
                                                            })}
                                                    </select>

                                                </div>
                                                <div className="form-holder col-md-2" style={{ padding: 10 }}>

                                                    <Label> Section </Label>
                                                    <select className="combox"
                                                        onChange={this.handlesection}>
                                                        <option value="None">None</option>
                                                        {
                                                            this.state.sectionlist.map((result) => {
                                                                return (
                                                                    <option value={result.sectionname}>
                                                                        {result.sectionname}
                                                                    </option>
                                                                )
                                                            })}
                                                    </select>



                                                </div>
                                                <div className="form-holder col-md-2" style={{ padding: 10 }}>

                                                    <Label> Subject </Label>
                                                    <select className="form-control" style={{
                                                        padding: 10, borderRadius: 17,
                                                        height: 45
                                                    }}
                                                        onChange={this.handlesubject}>
                                                        <option value=""></option>
                                                        {
                                                            this.state.subjectlist.map((result) => {
                                                                return (
                                                                    <option value={result.name}>
                                                                        {result.name}
                                                                    </option>
                                                                )
                                                            })}
                                                    </select>



                                                </div>

                                                <div className="form-holder col-md-3" style={{ padding: 10 }}>

                                                    <lable>Group Name</lable>
                                                    <select className="form-control" style={{
                                                        padding: 10, borderRadius: 17,
                                                        height: 45
                                                    }}
                                                        onChange={this.handlegroupname}>
                                                        <option value=""></option>
                                                        <option value="General">General</option>
                                                        <option value="Arts">Arts</option>
                                                        <option value="Commerce">Commerce</option>
                                                        <option value="Science">Science</option>
                                                        {/*   {
                                                            this.state.grouplist.map((result) => {
                                                                return (
                                                                    <option value={result.xgroupname}>
                                                                        {result.xgroupname}
                                                                    </option>
                                                                )
                                                            })} */}
                                                    </select>

                                                </div>
                                                <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                    <lable>Version</lable>
                                                    <select className="combox" style={{
                                                        padding: 10, borderRadius: 17,
                                                        height: 45
                                                    }}
                                                        onChange={this.handleversion}>
                                                        <option value={this.state.versionname}>
                                                            {this.state.versionname}
                                                        </option>
                                                        <option value="English Version">English Version</option>
                                                        <option value="Bangla Version">Bangla Version</option>
                                                    </select>
                                                </div>


                                                <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                    <lable>Exam Name</lable>

                                                    <input type="text" className="combox"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Exam Name"
                                                        onChange={this.handleChange.bind(this, "examname")}
                                                        value={this.state.fields["examname"]}
                                                    />
                                                    <span style={{ color: "red" }}>{this.state.errors["examname"]}</span>

                                                </div>
                                                <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                    <lable>Chapter Name</lable>
                                                    <input type="text" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Chapter Name"
                                                        onChange={this.handlechapter}
                                                        value={this.state.chapter}
                                                    />
                                                </div>
                                                <div className="form-holder col-md-3" style={{ padding: 10 }}>

                                                    <lable>Exam Date</lable>
                                                    <input type="date" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder=""
                                                        onChange={this.handleChange.bind(this, "examdate")}
                                                        value={this.state.fields["examdate"]}
                                                    />
                                                    <span style={{ color: "red" }}>{this.state.errors["examdate"]}</span>
                                                </div>
                                                <div className="form-holder col-md-3" style={{ padding: 10 }}>

                                                    <lable>Exam Times</lable>
                                                    <input type="time" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder=""
                                                        onChange={this.handleChange.bind(this, "examtime")}
                                                        value={this.state.fields["examtime"]}
                                                    />
                                                    <span style={{ color: "red" }}>{this.state.errors["examtime"]}</span>
                                                </div>
                                                {/* Select Type  */}
                                             
                                                {/*  */}

                                            </div>
                                            <div className="form-row">

                                            <div className="form-holder col-md-3"
                                                    style={{
                                                        padding: 10, borderRadius: 17,
                                                        height: 45
                                                    }}>
                                                    <lable>Payment Type</lable>
                                                    <select className="combox"
                                                        onChange={this.handlepaymenttype}>
                                                        <option value=""></option>
                                                        <option value="Free">Free</option>
                                                        <option value="Paid">Paid</option>
                                                    </select>
                                                </div>

                                                <div className="form-holder col-md-3">
                                                    <Label>Exam fees</Label>

                                                    <input type="number" className="form-control form-control-user"
                                                        placeholder="0"
                                                        onChange={this.handleChange.bind(this, "examfees")}
                                                        value={this.state.fields["examfees"]}

                                                        readOnly={this.state.paymenttype == 'Free' ? true : false}
                                                    />
                                                    <span style={{ color: "red" }}>
                                                        {this.state.errors["examfees"]}
                                                    </span>


                                                </div>
                                                <div className="form-holder col-md-3" >

                                                    <Label> No of Student</Label>
                                                    <input type="text" className="form-control form-control-user"
                                                        placeholder="0"
                                                        onChange={this.handleChange.bind(this, "noofstudent")}
                                                        value={this.state.fields["noofstudent"]} />
                                                    <span style={{ color: "red" }}>{this.state.errors["noofstudent"]}
                                                    </span>
                                                </div>

                                                <div className="form-holder col-md-2">
                                                    <lable>Exams Status</lable>
                                                    <select onChange={this.handlestatus}
                                                        className="combox"
                                                        style={{ marginTop: 10 }}
                                                    >
                                                        <option value="Draft">Draft</option>

                                                    </select>
                                                    <span style={{ color: "red", fontSize: 12 }}>{this.state.examstatus}</span>

                                                </div>
                                            </div>
                                            <div className="form-row">

                                                <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                    <Button type="button"
                                                        className="btn btn-primary btn-user btn-block"
                                                        onClick={this.createuser}
                                                        style={{ marginTop: 20 }}
                                                    >
                                                        {
                                                            this.state.loading ?
                                                                <Spinner
                                                                    style={{ marginBottom: 27 }}
                                                                    animation="border"
                                                                    variant="danger"
                                                                />
                                                                :
                                                                "Next"
                                                        }
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

                </Container>
            </div>
        );

    }
}
export default Copyexams
