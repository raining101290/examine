import React, { useState, useEffect } from 'react';
import { Offline, Online } from "react-detect-offline";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Studentheader from './Studentheader';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faFlag } from '@fortawesome/free-solid-svg-icons'
import * as base from "../global";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Startquizsaveexits = (props) => {
    const history = useHistory();
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [examdb, setExamdb] = useState([]);
    const [studentid, setStudentid] = useState(localStorage.getItem('studentid'));
    const [examid, setExamid] = useState(props.match.params.id);
    const [serialid, setSerialid] = useState(1);
    const [totalquestion, setTotalquestion] = useState(0);
    const [answer, setAnswer] = useState('');
    const [studentchoose, setStudentchoose] = useState('stop');
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [isresultvisible, setIsresultvisible] = useState(false);
    const [totalquiz, setTotalquiz] = useState([]);

    const getData = () => {
        console.log(base.BASE_URL + '/getquizserial/' + examid + '/' + serialid)
        axios.get(base.BASE_URL + '/getquizserial/' + examid + '/' + serialid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
            setExamdb(res.data);
            if (res.data.length > 0) {
                setAnswer(res.data[0].Answer);
                setTotalquestion(res.data.length)
            }
            else {
                setIsresultvisible(true);
            }

        });
    }

    const gettotalquiz = () => {
        // console.log(base.BASE_URL + '/getquizserial/' + examid + '/' + serialid)
        axios.get(base.BASE_URL + '/gettotalquiz/' + examid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)

            if (res.data.length > 0) {
                setTotalquiz(res.data.length);
            }
            else {

            }

        });
    }

    useEffect(() => {
      //  gettotalquiz();
    }, [])

    useEffect(() => {
       // getData();
    }, [serialid])

    const saveexit = () => {
    
        history.push('/Studentdashboard');
 /*
        axios.post(base.BASE_URL + '/signupstudent', {
          examid: examid,
          studentid: studentid
        })
          .then((response) => {
            if (response.data == "save") {

            }
            else if (response.data == "Unauthorized") {

            }
            else if (response.data == "Unauthorized f") {
   
            }

          }, (error) => {
            console.log(error);
            alert(error)
          });
  */ 






    }

    return (
        <div style={{ backgroundColor: '#000000', width: '100%', height: '100%',
        padding: 20 }} className='fill-window'>

            <div style={{ height: '10%', backgroundColor: '#000000' }}>
            </div>
         
                        <div className='me'>
                        <div style={{ backgroundColor: '#461A42', padding: 20, borderRadius: 20 }}>
                        <Row>
                        
                        <div style={{ width: '100%', marginBottom: 5 }}>
                                    <div className='startleft'>
                                        <FontAwesomeIcon icon={faRunning}></FontAwesomeIcon>

                                    </div>
                                    <div className='startright'>
                                    <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                                    </div>

                            </div>
                            <div style={{ width: '100%', borderRadius: 10, 
                            backgroundColor: 'green', height: 20,
                            marginBottom: 10 }}>


                            </div>
                            <div style={{ width: '100%', marginBottom: 5 }}>
                                    <div className='startleft'>Start</div>
                                    <div className='startright'>End</div>

                            </div>
                        </Row>
                        <Row>
                            <p style={{ fontSize: 16, color: '#ffffff', textAlign: 'center' }}>
                                {props.match.params.totalquiz - props.match.params.serial } questions remaining
                            </p>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <div className='saveandexit'>
                                    <Link to={"/Startquiztwo/" + examid + '/' + props.match.params.totalquiz + '/' + props.match.params.serial} style={{ textDecoration: 'none' }}><button class="primarybutton" data-v-dd58280e="">
                                        <i class="play-icon icon-fas-play" data-v-dd58280e=""></i> Resume</button>
                                    </Link>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className='saveandexit'>
                                    <Link to="#" style={{ textDecoration: 'none' }} onClick={saveexit}>
                                        <button class="primarybutton" data-v-dd58280e="">
                                        <i class="play-icon icon-fas-play" data-v-dd58280e=""></i> Save & Exit </button>
                                    </Link>
                                </div>
                            </Col>
                          


                        </Row>
                        </div>



                    </div>
       
        </div>
    );
}


export default Startquizsaveexits;