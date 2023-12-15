import React, {useState, useEffect } from 'react';
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
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';
import Spinner from 'react-bootstrap/Spinner';
import * as base from "../global";

const Exampage = (props) => {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState(localStorage.getItem("studentid"));
    const [autoid, setAutoid] = useState(props.match.params.id);
    const [subjectname, setSubejctname] = useState(props.match.params.ids);
    const [isdelete, setIsdelete] = useState(false)
    const [classname, setClassname] = useState(localStorage.getItem("classname"));
    const [groupname, setGroupname] = useState(localStorage.getItem("groupname"));
    const [sectionname, setSectionname] = useState(localStorage.getItem("sectionname"));
    const [schoolname, setSchoolname] = useState('');
    // autoid: this.props.match.params.id,


const getData = () =>{
    axios.get(base.BASE_URL + '/getexamsstudentwise/' + autoid + '/' + subjectname, {
        headers: {
            authorization: `bearer ${localStorage.getItem('token')}`
        }
    }).then(res => {
        console.log(res.data)
        setUsers(res.data)
        setSchoolname(res.data[0].schoolcollegename)
    window.scrollTo(0, 0);

    });
}

useEffect(() => {
    getData();
}, [])

  return (
    <Container style={{ padding: 20 }}>
      <Studentheader />
  {/*     <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> */}

{/* 



*/}


      <Row style={{ marginTop: 20 }}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Control type="text" placeholder="Search By Subject" />
      </Form.Group>
{/*       <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
     
{/*     <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast> */}

      </Row>
      <Row>
     School Name : {schoolname}
      </Row>
      <Row style={{ marginTop: 20 }}>
       
        {users.map((result) => {
          return (
           <Link to={"/Exampage/" + result._id} className='btn btn-primary' style={{
            marginBottom: 20
           }}>{result.name}</Link>
             )
            })}
      </Row>
    </Container>
  );
}


export default Exampage;