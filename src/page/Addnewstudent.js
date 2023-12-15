import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form, Label } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Topbar from '../Layout/Topbar'
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'

export class Addnewstudent extends Component {

    constructor(props) {
        super(props);
        this.createuser = this.createuser.bind(this);
        this.handlefind = this.handlefind.bind(this);
        this.handlestatus = this.handlestatus.bind(this);
        this.handlesection = this.handlesection.bind(this);
        this.handlegroupname = this.handlegroupname.bind(this);
        this.handleclassname = this.handleclassname.bind(this);
        this.handleChangestudent = this.handleChangestudent.bind(this);
        this.handleChangestudentname = this.handleChangestudentname.bind(this);
        this.handleChangemobileno = this.handleChangemobileno.bind(this)
        this.handleChangeemail = this.handleChangeemail.bind(this);
        //handleschoolcollagename handletype
        this.state = {
            isLoading: false,
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
            schoolid: localStorage.getItem('schoolid'),
            userrole: localStorage.getItem('usersrole'),
            studentid: '',
            studentname: '', 
            classname: '',
            sectionname: '', 
            groupname: '', 
            mobileno: '', 
            email:'',
            examstatus: '',
            autoid: this.props.match.params.id,
            examwiselist: [],
            list: []
        }
    }
    componentDidMount() {
        //  alert(this.state.schoolid)
        if (this.state.userrole == "Admin") {

        }
        else if (this.state.userrole == "Super Admin") {

        }
        else if (this.state.userrole == "Teacher") {
            axios.get(base.BASE_URL + '/getclassid/' + this.state.schoolid)
                .then(result => {
                    this.setState({ classlist: result.data });
                });

            axios.get(base.BASE_URL + '/getsectionid/' + this.state.schoolid)
                .then(result => {
                    if(result.data.length > 0)
                    {
                        this.setState({
                            sectionlist: result.data,
                            sectionname: result.data[0].sectionname
                        });
                    }
                    else
                    {
                      
                    }

                });

            axios.get(base.BASE_URL + '/grouplist/' + this.state.schoolid)
                .then(result => {
                    this.setState({ grouplist: result.data });
                });

                axios.get(base.BASE_URL + '/studentlist/' + this.state.autoid)
                .then(resultexam => {
                  //  console.log(resultexam.data)
                    this.setState({ examwiselist: resultexam.data });
                });
        }
    }
    //
    handleChangemobileno(event)
    {
        this.setState({
            mobileno: event.target.value
        }) 
    }
    handleChangeemail(event)
    {
        this.setState({
            email: event.target.value
        }) 
    }
    handleChangestudentname(event)
    {
        this.setState({
            studentname: event.target.value
        })
    }
    handleChangestudent(event)
    {
      console.log(event.target.value);
        this.setState({
            studentid: event.target.value
        })
    }

 
    handlegroupname(event) {
        this.setState({
            groupname: event.target.value
        })
    }
    handlesection(event) {
        this.setState({
            sectionname: event.target.value
        })
    }
    handleclassname(event) {
        this.setState({
            classname: event.target.value
        })
    }
    handlestatus(event) {
        this.setState({
            examstatus: event.target.value
        })
    }

   
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //  alert(this.state.fields["email"]);
        //Name
        if (!this.state.studentid) {
            formIsValid = false;
            errors["studentid"] = "Student ID Reqired ";
        }

        if (!this.state.studentname) {
            formIsValid = false;
            errors["studentname"] = "studentname Reqired ";
        }
        //Email
        if (!this.state.mobileno) {
            formIsValid = false;
            errors["mobileno"] = "mobileno Required";
        }
        if (!this.state.email) {
            formIsValid = false;
            errors["email"] = "email Required";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    handlefind()
    {
        axios.get(base.BASE_URL + '/studentviewprofile/' + this.state.studentid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {

           this.setState({
                studentid: res.data[0].studentid,
                studentname: res.data[0].studentname,
                mobileno: res.data[0].mobileno,
                groupname: res.data[0].groupname,
                classname: res.data[0].classname,
                sectionname: res.data[0].sectionname,
                email: res.data[0].email,
                examstatus: res.data[0].status
                })
        });
     

    }
    createuser() {
        if (this.handleValidation()) {
            //  alert(this.state.sectionname);
            this.setState({ loaderfile: 'loading', loading: true }) 
            axios.post(base.BASE_URL + '/Addnewstudent', {
                autoid: this.state.autoid,
                  studentid: this.state.studentid,
                  studentname: this.state.studentname,
                  mobileno: this.state.mobileno,
                  email: this.state.email,
                groupname: this.state.groupname,
                classname: this.state.classname,
                sectionname: this.state.sectionname,
                examstatus: this.state.examstatus
            }, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {
                    //  console.log('ddddd' + response.data.status)
                    alert(response.data);
                    if (response.data == "save") {
                        this.setState({ loggdin: 'start', loaderfile: 'notloading', loading: false })
                        // alert('save')
                    }
                    else if (response.data == "idexits") {
                        this.setState({ loggdin: 'start', loaderfile: 'notloading', loading: false })
                        alert('Student ID Already Exits')
                        
                    }
             
                    else if (response.data == "") {
                        this.setState({ loggdin: 'start', loaderfile: 'notloading', loading: false })
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
    deletestudent = (id) => {
        var answer = window.confirm("Are you sure you want to delete ?");
        if (answer) {
          
            axios.post(base.BASE_URL + '/deletestudentfromexam', {
                id: id
                },{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    }
                })
                .then((response) => {
                // alert(response.data[0].status);       
                if (response.data == "delete") {
                    //setIsdelete(false);
               
                }
                //idexits
                else if (response.data == "") {

                }
                }, (error) => {
                console.log(error);
                });
 
        } else {
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
          }

    }

    render() {
        // alert(this.state.loggdin);
        if (this.state.loggdin == 'start') {
            return <Redirect to="/Examsetuplist" />
        }
        return (
            <div>
            <Header /> {/* Slider Menu */}
            <Container style={{ marginTop: 86 }}>
                                <div className="container-fluid">
                                    {/* Page Heading */}
                                    <div class="card position-relative">
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
                                                                        style={{ fontSize: 16 }}>Add New Student</h3>
                                                                </div>
                                                                <p style={{ color: '#000' }}>Please fill with your details</p>
                                                                <div className="form-row">

                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                        <Label> Student ID </Label>
                                                                        <div style={{ display: 'flex' }}>

                                                                                                                                           
                                                                    <input type="text" className="form-control form-control-user" placeholder="Student ID"
                                                                            onChange={this.handleChangestudent} 
                                                                           
                                                                            value={this.state.studentid} />


                                                                        <Button onClick={this.handlefind}
                                                                        style={{ borderRadius: 17 }}
                                                                        >Find</Button>
                                                                        </div>
                                                                        <span style={{ color: "red" }}>{this.state.errors["studentid"]}</span>
                                                                    </div>

                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                        <Label> Student Name </Label> 


                                                                        <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                                                            placeholder="Student Name "
                                                                            onChange={this.handleChangestudentname}
                                                                            value={this.state.studentname}
                                                                        />
                                                                        <span style={{ color: "red" }}>{this.state.errors["studentname"]}</span>
                                                                    </div>

                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                        <Label> Class Name </Label>
                                                                       
                                                                        <select className="form-control-combo"
                                                                            onChange={this.handleclassname}>
                                                                            <option value={this.state.classname}>{this.state.classname}</option>
                                                                            {
                                                                                this.state.classlist.map((result) => {
                                                                                    return (
                                                                                        <option value={result.xclassname}>
                                                                                            {result.xclassname}
                                                                                        </option>
                                                                                    )
                                                                                })}
                                                                        </select>
                                                                        <span style={{ color: "red" }}>{this.state.errors["classname"]}</span>
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                    
                                                                        <Label> Section </Label>
                                                                        <select className="form-control-combo"
                                                                            onChange={this.handlesection}>
                                                                            <option value={this.state.sectionname}>{this.state.sectionname}</option>
                                                                            {
                                                                                this.state.sectionlist.map((result) => {
                                                                                    return (
                                                                                        <option value={result.sectionname}>
                                                                                            {result.sectionname}
                                                                                        </option>
                                                                                    )
                                                                                })}
                                                                        </select>
                                                                        <span style={{ color: "red" }}>{this.state.errors["sectionname"]}</span>


                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                     
                                                                        <lable>Group Name</lable>
                                                                        <select className="form-control-combo"
                                                                            onChange={this.handlegroupname}>
                                                                            <option value={this.state.groupname}>{this.state.groupname}</option>
                                                                            {
                                                                                this.state.grouplist.map((result) => {
                                                                                    return (
                                                                                        <option value={result.xgroupname}>
                                                                                            {result.xgroupname}
                                                                                        </option>
                                                                                    )
                                                                                })}
                                                                        </select>
                                                                        <span style={{ color: "red" }}>{this.state.errors["groupname"]}</span>
                                                                    </div> 
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                        <lable>Mobile No</lable>

                                                                        <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                                                            placeholder="Mobile No "
                                                                            onChange={this.handleChangemobileno}
                                                                            value={this.state.mobileno}
                                                                        />
                                                                        <span style={{ color: "red" }}>{this.state.errors["mobileno"]}</span>

                                                                    </div>
                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>

                                                                        <lable>Email</lable>
                                                                        <input type="email" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                                                            placeholder=""
                                                                            onChange={this.handleChangeemail}
                                                                            value={this.state.email}
                                                                        />
                                                                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                                                    </div>

                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                        <lable>Status</lable>
                                                                        <select onChange={this.handlestatus}
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control-combo"
                                                                        >
                                                                            <option value="0">Active</option>
                                                                            <option value="1">Inactive</option>

                                                                        </select>
                                                                        <span style={{ color: "red", fontSize: 12 }}>{this.state.errors["examstatus"]}</span>

                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                        <Button type="button" className="btn btn-primary btn-user btn-block"
                                                                        style={{ width: 100 }}
                                                                            onClick={this.createuser}>
                                                                            {
                                                                                this.state.loading ?
                                                                                    <Spinner
                                                                                        style={{ marginBottom: 27 }}
                                                                                        animation="border"
                                                                                        variant="danger"
                                                                                    />
                                                                                    :
                                                                                    "Save"
                                                                            }
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                                <div className="form-row">

                                                                </div>

                                                            </div>
                                                        </div>



                                                    </form>

                                                    <table class="table" style={{ fontSize: 12, padding: 10, }}>
                                            <thead>
                                                <tr style={{ backgroundColor: 'aqua' }}>
                                                    <th>Student ID</th>
                                                   {/*  <th>Student Name</th> */}
                                                    <th>Exam Name</th>
                                                      <th>Action</th>
                                                     <th>Delete</th> 

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.examwiselist.map((result) => {
                                                    return (
                                                        <tr key={result.studentid}>
                                                            <td>{result.studentid}</td>
                                                           {/*  <td>{result.studentname}</td> */}
                                                            <td>{result.examname}</td>
                                                            <td>
                                                                <Link variant="info" to={"/Addnewstudentedit/" + result.studentid}>Edit</Link>
                                                            </td>
                                                        <td>
                                                                <Button variant="danger" onClick={() => this.deletestudent(result._id)}>Delete</Button>
                                                        </td> 
                                                         
                                                        </tr>
                                                    )
                                                })}
                                                {
                                                    this.state.examwiselist.length > 0 ?
                                                    ''
                                                    :
                                                    'No Data'
                                                }
                                            </tbody>
                                        </table>
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
export default Addnewstudent
