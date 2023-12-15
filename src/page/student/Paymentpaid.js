import React, { useState, useEffect} from 'react';
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
import { Link, useHistory } from 'react-router-dom';
import Footer from '../Footer';
import * as base from "../global";
import axios from 'axios';
import Examimage from './Examimage';
import Input from "@material-ui/core/Input";

const Paymentpaid = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [users, setUsers] = useState([]);
  const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  const [bkashno, setBkashno] = useState('');
  const [transid, setTransid] = useState('');
  const [classname, setClassname] = useState(localStorage.getItem('className'))
  const [groupname, setGroupname] = useState(localStorage.getItem('groupname'))
  const history = useHistory();

  const handlechangebkashno = event => {
    setBkashno(event.target.value);
  };
  const handlechangetransid = event => {
    setTransid(event.target.value)
  }

useEffect(() => {
//    getData();
}, [])

 

  return (
    <div style={{ backgroundColor: '#f9f9f9', width: '100%' }}>
    <Container style={{ padding: 20 }}>
      <Studentheader />
      <Container style={{ marginTop: 120 }}>
      <Row>
      <Col xs={6} sm={6}>

      </Col>  

           <Col xs={12} sm={6}>
          <Link  to={"#"} style={{ textDecoration: 'none' }}>
         
          <Card style={{ marginBottom: 15 }}>
         {/*  <Card.Img variant="top" src="/images/exam.png" style={{ backgroundPosition: '50%' }} />   */}


           <Card.Body>
                    <h3>Your Request has been submitted we will get back to soon</h3>
                    <p>Mobile No for call : 89798789</p>
                    <p><Link to="/Studentdashboard">Start to Check Your Course</Link></p>
           </Card.Body>
         </Card> 
         </Link>
         </Col>

     </Row>
     </Container>
    </Container>
    <Footer />
    </div>
  );
}


export default Paymentpaid;