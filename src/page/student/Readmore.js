import React from 'react';
// import { Offline, Online } from "react-detect-offline";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Alert } from 'react-bootstrap'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card';
import Studentheader from './Studentheader';
import Footer from '../Footer';
//import { Link, useHistory } from 'react-router-dom';

import Readmoredetails from './Readmoredetails'



const Readmore = (props) => {
  //const history = useHistory()
  // let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  // const [users, setUsers] = useState([]);
  // const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  // const [classname, setClassname] = useState(localStorage.getItem('className'))
  // const [subject, setSubject] = useState(props.match.params.id);
  return (
    <div style={{ backgroundColor: '#ffffff', width: '100%' }}>

        <Studentheader />

          <Readmoredetails data={props.match.params.id}/>  

      <Footer />
    </div>
  );
}


export default Readmore;