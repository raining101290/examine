import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faDeleteLeft, fadel } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge';
import Examdatalistfile from './datapagination/Examdatalistfile';
import Studentlist from './datapagination/Studentlist';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



export class Examsetuplist extends Component {

    constructor() {
        super();
        this.handleversion = this.handleversion.bind(this);
        this.state = {
            isLoading: false,
            loaderfile: 'notloading',
            isdelete: false,
            fields: {},
            errors: {},
            loggdin: 'stop',
            modalIsOpen: false,
            counter: 0,
            allsubscribelist: [],
            schoolid: localStorage.getItem('schoolid'),
            teacherid: localStorage.getItem('vendoremailaddress'),
            examcount: '',
            classlist: []
        }


    }
    componentDidMount() {
        // this.getData()
       // this.getclassdata()
    }

    handleversion(event)
    {
        this.setState({
            versionname: event.target.value
        })
    }
    getData = () => {
        // alert(this.state.teacherid)
        console.log(base.BASE_URL + '/examslistteacher/' + this.state.schoolid + '/' + this.state.teacherid)
        axios.get(base.BASE_URL + '/examslistteacher/' + this.state.schoolid + '/' + this.state.teacherid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
            if (res.data.length > 0) {
                this.setState({ examcount: res.data.length })
                this.setState({ allsubscribelist: res.data });
            }
            else {
                // this.setState({ allsubscribelist: [] });
            }


        });


    }


    deleteUser(id) {
        var answer = window.confirm("Are you sure you want to delete ?");
        if (answer) {
            this.setState({ isdelete: true })
            axios.post(base.BASE_URL + '/delete_exam', {
                id: id
            }, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {

                    if (response.data == "delete") {
                        this.getData();
                        this.setState({ isdelete: false })
                    }
                    else if (response.data == "notfound") {

                    }
                }, (error) => {
                    console.log(error);
                });
        } else {
            ///////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////
        }

        ////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////
    }


    render() {
        return (

            <div>
                <Header /> {/* Slider Menu */}
                <Container style={{ marginTop: 86 }}>
                    <Row >
                        <Col xs={6} sm={8} style={{ alignContent: 'space-between' }}>
                            {/*  <p style={{ padding: 10 }}>List of examlist  {this.state.examcount}</p> */}


                        </Col>
                        <Col xs={6} sm={4} style={{ textAlign: 'right' }}>

                        </Col>
                    </Row>

                    <Row>
                        <Studentlist />
                    
                    </Row>

                </Container>
            </div >
        );

    }
}
export default Examsetuplist
