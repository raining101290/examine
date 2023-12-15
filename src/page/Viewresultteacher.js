import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form, Label } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'
import Footer from './Footer'
import Topbar from '../Layout/Topbar'
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import Viewquestiondetails from './Viewquestiondetails'
import Studentname from './student/Studentname'
import Card from 'react-bootstrap/Card';


export class Viewresultteacher extends Component {

    constructor(props) {
        super(props);

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
            examname: this.props.match.params.ids,
            examwiselist: []
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
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
                console.log(base.BASE_URL + '/studentlist/' + this.state.autoid)
                axios.get(base.BASE_URL + '/studentlist/' + this.state.autoid)
                .then(resultexam => {
                    console.log(resultexam.data)
                    this.setState({ examwiselist: resultexam.data });
                });

                
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
                                        <div class="card-header py-3" style={{ display: 'flex' }}>
                                            <Link to="/Examsetuplist">Back</Link>
                                            <Link to="#" style={{ marginLeft: 20, textDecoration: 'none' }}> Exam Name : {this.state.examname}</Link>
                                        </div>
                                        <div class="card-body">
                                            <div className="row">
                                                {this.state.examwiselist.map((result) => {
                                                    return (
                                                        <div className='col-md-3'>
<Card style={{ marginBottom: 15 }}>
<Card.Img variant="top" src="/images/activity.png" 
                            style={{ backgroundPosition: '50%', resize: 'cover', height: 170 }} />
<Card.Body>
<Card.Title style={{ textDecoration: 'none', fontSize: 12, color: '#000' }}>{result.examname}</Card.Title>
<p>{result.studentid}</p>
<Studentname data={result.studentid} />
<Link variant="info" to={"/Viewquestiondetails/" + result.examid + '/' + result.studentid}>View Exam</Link>
{/*  <Viewquestiondetails data={result.studentid} stdexam={result.examid} />  */}
</Card.Body>

</Card>
</div>
                                                    )
                                                })}
                                                {
                                                    this.state.examwiselist.length > 0 ?
                                                    ''
                                                    :
                                                    'No Data'
                                                }


                                            </div>
                                        </div>
                                    </div>

                                </div>
                </Container>
                 <Footer/>                                   
            </div>
        );

    }
}
export default Viewresultteacher
