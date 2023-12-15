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
import Footer from '../Footer';
import { Link, useHistory } from 'react-router-dom';
import Recentactivity from './Recentactivity'
import Resulttransactiontwo from './Resulttransactiontwo'

import * as base from "../global";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import Examimage from './Examimage'



const Resulttransaction = () => {
  const history = useHistory()
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [users, setUsers] = useState([]);
  const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  const [classname, setClassname] = useState(localStorage.getItem('className'))
  const [searchtext, setSearchtext] = useState('');
  const [checkpayment, setCheckpayment] = useState('');
  const [errorsearch, setErrorsearch] = useState(false);
  const data = [
    {
      "id": "1",
      "type": "School",
      "image": "/images/exam/school.png"
    },
    {
      "id": "2",
      "type": "College",
      "image": "/images/exam/college.png"
    },
    {
      "id": "3",
      "type": "Job Interview",
      "image": "/images/exam/jobinterview.png"
    },
    {
      "id": "4",
      "type": "Admission Test",
      "image": "/images/exam/admission.png"
    }

  ];

  const getData = () => {
    axios.get(base.BASE_URL + '/getstudentwiseexam/' + studentid + '/Active', {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      setUsers(res.data);

      window.scrollTo(0, 0);

    });
  }
  const getDatacheckpayment = () => {
    //console.log(base.BASE_URL + '/getDatacheckpayment/' + studentid )
    axios.get(base.BASE_URL + '/getDatacheckpayment/' + studentid, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {

      setCheckpayment(res.data);


    });
  }

  useEffect(() => {
    getData();
    getDatacheckpayment();
  }, [])
  const finddata = () => {
    // alert(searchtext)
    if (searchtext == "") {
      setErrorsearch(true);
      return;
    }
    else {
      history.push("/Studentfindsubject/" + searchtext + '/1/12')
    }
  }
  return (
    <div>
        <Studentheader />
        <Container style={{ marginTop: 110 }}>
          <h3 style={{ fontSize: 16, marginTop: 20 }} className='resulttransaction'>Result History</h3>
          {
            checkpayment == '1' ?
              <Row>
                <Resulttransactiontwo />
              </Row>
              :
              ''
          }
        </Container>
      <Footer />
    </div>
  );
}


export default Resulttransaction;