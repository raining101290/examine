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

import * as base from "../global";
import axios from 'axios';
import Examimage from './Examimage';
import LoadingSpinner from '../library/LoadingSpinner';


const Recentactivity = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [users, setUsers] = useState([]);
  const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  const [isloading, setIsloading] = React.useState(true);


  const getData = () => {
    axios.get(base.BASE_URL + '/getstudentwiseexam/' + studentid + '/Recentactivity', {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      setUsers(res.data);
      setIsloading(false)
      window.scrollTo(0, 0);
    })
    .catch(() => {
      setIsloading(false);
   });;
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <Container style={{ padding: 20 }}>
      <Row>

        {
          isloading ?
            <LoadingSpinner />
            :
            users.map((result) => {
              return (
                <Col xs={6} sm={3}>
                  <Link to={"/Startquiz/" + result.examid} style={{ textDecoration: 'none' }}>

                    <Card style={{ marginBottom: 15 }}>
                      {/*  <Card.Img variant="top" src="/images/exam.png" style={{ backgroundPosition: '50%' }} />   */}

                      <Examimage data={result.examid} />
                      <Card.Body>
                        <Card.Title style={{ textDecoration: 'none', fontSize: 12, color: '#000' }}>{result.examname}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })}

      </Row>

    </Container>
  );
}


export default Recentactivity;