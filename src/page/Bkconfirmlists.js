import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Form } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'

import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faDeleteLeft, fadel } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge';
import Examdatalistfile from './datapagination/Examdatalistfile';
import Bkashlist from './datapagination/Bkashlist';
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



const Bkconfirmlists = () => {

    const [studentid, setStudentid] = useState('');
    const [bkashno, setBkashno] = useState('');
    const [transid, setTransid] = useState('');

    const [examcount, setExamcount] = useState('');
    const [allsubscribelist, setAllsubscribelist] = useState('');
    const [findemail, setFindemail] = useState('');
    const [bkashamount, setBkashamount] = useState('');

        useEffect(() => {
//            getData()
        }, [])
        const submitfind = () => {
            if (studentid == "") {
                alert('Insert Student ID')
            }
            else {

            }
        }
        const submit = () => {
            if (studentid == "") {
                alert('Insert Student ID')
            }
            else {

                axios.post(base.BASE_URL + '/insertpaymentbkash', {
                    studentid: studentid,
                    bkashno: '',
                    transid: '',
                    classname: '',
                    groupname: '',
                    amount: bkashamount,
                    currency: 'BDT'
                })
                    .then((response) => {

                        if (response.data.message == "save") {
                            alert('save');
                        
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
        }




        return (

            <div>
                <Header /> {/* Slider Menu */}
                <Container style={{ marginTop: 86 }}>
                    <Row >
                        <Col xs={6} sm={8} style={{ alignContent: 'space-between' }}>
                            {/*  <p style={{ padding: 10 }}>List of examlist  {examcount}</p> */}
                            <Card style={{ marginBottom: 15 }}>
                                <Card.Body>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            placeholder="Student ID"
                                            onChange={e => setStudentid(e.target.value)}
                                           value={studentid}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            placeholder="Bkash Mobile No"
                                            maxLength={11}
                                            onChange={e => setBkashno(e.target.value)}
                                            value={bkashno}

                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            placeholder="Bkash Transaction No"
                                            onChange={e => setTransid(e.target.value)}
                                            value={transid}
                                        />

                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            placeholder="Bkash Amount"
                                            onChange={e => setBkashamount(e.target.value)}
                                            value={bkashno}

                                        />
                                    </div>
                                    <div className="form-group">
                                        <Button type="button" className="btn btn-primary btn-user btn-block" onClick={submit} >
                                            Confirm pay
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>


                        </Col>
                        <Col xs={6} sm={4} style={{ textAlign: 'right' }}>
                        <Card style={{ marginBottom: 15 }}>
                                <Card.Body>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            placeholder="find email address "
                                            onChange={e => setFindemail(e.target.value)}
                                            value={findemail}
                                        />

                                    </div>
                                    <div className="form-group">
                                        <Button type="button" className="btn btn-primary btn-user btn-block" 
                                        onClick={submitfind} >
                                            Find
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Bkashlist />
                    </Row>

                </Container>
            </div >
        );


    }
    export default Bkconfirmlists
