import React, { useState, useEffect } from 'react';
//import { Offline, Online } from "react-detect-offline";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Alert } from 'react-bootstrap'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Studentheader from './Studentheader';
import Footer from '../Footer';
import { Link, useHistory } from 'react-router-dom';
//import Recentactivity from './Recentactivity'
import Coachingdisplay from './Coachingdisplay'

import * as base from "../global";
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import Examimage from './Examimage'
import LoadingSpinner from '../library/LoadingSpinner';
import { Button, Container } from 'react-bootstrap';
import classdata from '../data/class.json'
// import Accordion from '@material-ui/core/Accordion';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Typography from '@mui/material/Typography';
// import { encrypt, decrypt, compare } from 'n-krypta';

const Studentdashboard = () => {
  const history = useHistory()
  const studentid= localStorage.getItem('studentid')
  //let subtitle;
  //const [modalIsOpen, setIsOpen] = React.useState(false);
  const [users, setUsers] = useState([]);
  
  const storedClass = localStorage.getItem('className') || '0';
  const storedGroup = localStorage.getItem('groupname') || '0';
  const storedVersion = localStorage.getItem('versionname') || '0';
  //const [classname, setClassname] = useState(localStorage.getItem('className'))
  //const [searchtext, setSearchtext] = useState('');
  const [checkpayment, setCheckpayment] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [checktrial, setChecktrial] = useState('');
  const [newUser, setNewUser] = useState(false)
  //const [errorsearch, setErrorsearch] = useState(false);
  const [isloading, setIsloading] = useState(false);
  //paymenthistory className
  const [selectedClass, setSelectedClass] = useState(storedClass);
  const [selectedGroup, setSelectedGroup] = useState(storedGroup);
  const [selectedVersion, setSelectedVersion] = useState(storedVersion);
  const [studentInfo, setStudentInfo] = useState({
      className: '',
      groupname: '',
      versionname:'',
      errors: {},
      isgrouploading: ''
  })

  let paymenthistory = require('../course/data.json');
  // const filtered = paymenthistory.filter(data => {
  //   return data.classname === localStorage.getItem('className') && data.versionname === localStorage.getItem('versionname') && data.groupname === localStorage.getItem('groupname');
  // });

  const checkUserPayment = ()=>{
    const filter = paymenthistory.filter(data => {
      return data.classname === localStorage.getItem('className') && data.versionname === localStorage.getItem('versionname') && data.groupname === localStorage.getItem('groupname');
    });
    setFiltered(filter)
  }

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
    console.log(base.BASE_URL + '/getDatacheckpayment/' + studentid )
    setIsloading(true);
    axios.get(base.BASE_URL + '/getDatacheckpayment/' + studentid, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      console.log(res.data);
      setCheckpayment(res.data);
      setIsloading(false);

    });
  }
  const getuserstatus = () => {
    if(studentid == null)
    {
      history.push('/');
    }
    
  }

  useEffect(() => {
    getuserstatus();
    getData();
    getDatacheckpayment();
    checktrialdata();
    checkUserPayment()
    //eslint-disabled-next-line
  }, [checkpayment])

  const handleversion=(event)=> {
    setSelectedVersion(event.target.value)
    setStudentInfo((prev) => ({
      ...prev,
      versionname: event.target.value
    }));
  }

  const handleValidation = ()=> {
    //let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    
    if (!studentInfo.className) {
      formIsValid = false;
      errors["className"] = "Class Name Required";
    }
    if (!studentInfo.versionname) {
      formIsValid = false;
      errors["versionname"] = "Version Name Required";
    }
    
    // alert(' Version ' + this.state.versionname + '-classname-' +this.state.className)
    setStudentInfo((prev) => ({
      ...prev,
      errors: errors
    }));
    return formIsValid;
  }

 

  const setLocalStorage = ()=>{
    if(handleValidation()){
      localStorage.setItem("className", studentInfo.className);
      localStorage.setItem("groupname", studentInfo.groupname);
      localStorage.setItem("versionname", studentInfo.versionname);
      setNewUser(false)
      setUsers([])
      getData();
      checkUserPayment()
    }
  }
  const handlegroupname=(event) =>{
    setSelectedGroup(event.target.value)
    setStudentInfo((prev) => ({
      ...prev,
      groupname: event.target.value
    }));
  }

  const handleclassName = (event)=> {
    setSelectedClass(event.target.value)
    if (event.target.value) {
      setStudentInfo((prev) => ({
        ...prev,
        isgrouploading: true,
        className: event.target.value
      }));
    }
    else {
      setSelectedGroup('0')
      setStudentInfo((prev) => ({
        ...prev,
        isgrouploading: false,
        className: event.target.value
      }));
    }
  }

  const clearLocalStorage = () =>{
    setFiltered([])
    localStorage.removeItem("className", studentInfo.className);
    setSelectedClass('0')
    setSelectedGroup('0')
    setSelectedVersion('0')
    localStorage.removeItem("groupname", studentInfo.groupname);
    localStorage.removeItem("versionname", studentInfo.versionname);
  }

  const checktrialdata = () => {
    //console.log(base.BASE_URL + '/checktrialdata/' + studentid )
    setIsloading(true);
    axios.get(base.BASE_URL + '/checktrialdata/' + studentid, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      console.log(res.data);
      setChecktrial(res.data);
      setIsloading(false);
    });
  }
  
  console.log('checkpayment', checkpayment, filtered)
  return (
    <div style={{ backgroundColor: '#ffffff', width: '100%' }}>
      <Studentheader />
      <Row style={{ marginTop: 120 }}>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0">
              <div className="card-body p-0">
                <div className="row">
                      {/* <div className="col-lg-6 d-none d-lg-block bg-login-image" /> */}
                  <div className="col-md-12">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Select Question Type</h1>
                      </div>
                      <form className="user">
                        <div className='row'>
                          <div className="col-md-3">
                            <div className="form-group">
                              <select 
                                className="form-control"
                                value={selectedClass}
                                onChange={handleclassName}
                              >
                                <option value="0">Select-Class</option>
                                {
                                  classdata && classdata.map((cl) => {
                                    return <option value={cl.classname} >{cl.classname}</option>
                                  })
                                }
                              </select>
                              <span style={{ color: "red", fontSize: 10 }}>{studentInfo.errors["className"]}</span>

                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <div>
                                <select 
                                  className="form-control"
                                  value={selectedGroup}
                                  onChange={handlegroupname}
                                >
                                  <option value="0">Select-Group</option>
                                  <option value="Arts">Arts</option>
                                  <option value="Commerce">Commerce</option>
                                  <option value="Science">Science</option>
                                </select>
                                <span style={{ color: "red", fontSize: 10 }}>{studentInfo.errors["groupname"]}</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <select 
                                className="form-control"
                                onChange={handleversion}
                                value={selectedVersion}
                                >
                                <option value="0">Select-Version</option>
                                <option value="Bangla Version">Bangla Version</option>
                                <option value="English Version">English Version</option>
                              </select>
                              <span style={{ color: "red", fontSize: 10 }}>{studentInfo.errors["versionname"]}</span>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <Button type="button" className="btn btn-primary" onClick={setLocalStorage} style={{marginRight:10}}>
                              Submit
                            </Button>
                            <Button type="button" className="btn btn-danger" onClick={clearLocalStorage}>
                              Clear
                            </Button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row>  
        {users.map((result) => {
          return (
            <Col xs={6} md={3}>
              <Link to={"/Startquiz/" + result.examid} style={{ textDecoration: 'none', color: '#000', fontSize: 14 }}>
                <Card style={{ marginBottom: 20, }}>
                  <Examimage data={result.examid} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: 14 }}> {result.examname} {result.image}</Card.Title>
                    {/* <Link to={"/Startquiz/" + result.examid}>Start </Link> */}
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )
        })}
      </Row>
      {
        isloading ?
          <LoadingSpinner />
          :
          !checkpayment ?
            filtered ?
              filtered.map(employee => {
                //console.log('employee....' + employee)
                const datap = employee.package;
                console.log('checkpayment:', datap)
                return (
                  <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                      <div className="card o-hidden border-0">
                        <div className="card-body p-0">
                          <h3>Please select a package to proceed</h3>
                          <Row key={employee.id}>
                            {
                              datap.map((d) => {
                                //let packageid = ''; 
                                return <div class="card col-md-3 box-shadow" style={{ padding: 20, marginRight: 10, marginLeft: 20,
                                marginTop: 10, marginBottom: 10 }}>
                                    <div class="card-header">
                                      <h4 class="my-0 font-weight-normal">{d.packagename}</h4>
                                    </div>
                                    <div class="card-body">
                                      <h1 class="card-title pricing-card-title">{d.amount} <small class="text-muted"></small></h1>
                                      <ul class="list-unstyled mt-3 mb-4">
                                        <li>{d.description}</li>
                                    
                                      </ul>
                                      {
                                        checktrial > 0 && d.amount=='0' ?
                                        <div class="btn">Expired</div> 
                                      :
                                      <Link 
                                      to={"/Admissiontestpayment/" + d.packageid }
                                      style={{ backgroundColor: 'rgb(108, 66, 152)',
                                    width: '100%',
                                    height: 40, color: '#ffffff', borderRadius: 15 }} class="btn">Buy Now</Link>
                                      }
                                    
                                    </div>
                                  </div>
                                
                              })
                            }

                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
              :
            ''
            :
            ''
      }


       {
        checkpayment > 0 ?
          <Coachingdisplay newUser={newUser} setNewUser={setNewUser}/>
          : ''
      } 
      <Footer />
    </div>
  );
}


export default Studentdashboard;