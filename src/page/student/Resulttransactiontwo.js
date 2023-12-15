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
import Remaningquestion from './Remaningquestion'


const Resulttransactiontwo = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isloading, setIsloading] = React.useState(true);

  const [users, setUsers] = useState([]);
  const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))

  const getData = () => {
    setIsloading(true) //ownexambystudent
    console.log(base.BASE_URL + '/studentexamresult/' + localStorage.getItem('studentid'));
    axios.get(base.BASE_URL + '/studentexamresult/' + localStorage.getItem('studentid') + '/1/10', {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      //  console.log(res.data)
      setUsers(res.data);
      window.scrollTo(0, 0);
      setIsloading(false)

    });
  }

  useEffect(() => {
    getData();
  }, [])


  return (
      <Row>
        {
        isloading ? 
        <LoadingSpinner />
        :
        users.map((result,slno) => {
          return (
            <Col xs={6} sm={3} key={slno}>
              <Link to={"/Resultpageviewhistory/" + result.examid} style={{ textDecoration: 'none' }}>
                <Card style={{ marginBottom: 15 }}>
                  <Examimage data={result.examid} />
{/*                   <Card.Body>
                    <p>{result.examid}</p>
                  </Card.Body> */}
                  <Card.Footer>
                            <Remaningquestion data={result.examid} />
                  </Card.Footer>
                </Card>
              </Link>
            </Col>
          )
        })}
      </Row>
  );
}


export default Resulttransactiontwo;