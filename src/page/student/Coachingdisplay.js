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
import Input from "@material-ui/core/Input";
import ActivityIndicator from 'react-activity-indicator'
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as base from "../global";
import axios from 'axios';
import Examimage from './Examimage';
import Remaningquestion from './Remaningquestion'
import groupBy from 'json-groupby';
import { IconButton, InputAdornment } from '@material-ui/core';
import { VisibilityOff } from '@material-ui/icons';
import classdata from '../data/class.json'
import { Redirect } from 'react-router';

const Coachingdisplay = () => {
  //let subtitle;
  //const [modalIsOpen, setIsOpen] = React.useState(false);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState(false)
  //const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  const [studentInfo, setStudentInfo] = useState({
      className: '',
      groupname: '',
      versionname:'',
      errors:{},
      isgrouploading: ''
  })

  const getData = () => {
    //console.log(base.BASE_URL + '/coachingcourse/' + localStorage.getItem('className') + '/' + localStorage.getItem('groupname') + '/' + localStorage.getItem('versionname'))
    axios.get(base.BASE_URL + '/coachingcourse/' + localStorage.getItem('className') + '/' + localStorage.getItem('groupname') + '/' + localStorage.getItem('versionname'), {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      let newdata = groupBy(res.data, ['subjectname']);
      setUsers(newdata)
      window.scrollTo(0, 0);

    });
  }
  
  useEffect(() => {
    if(!localStorage.getItem('className') || 
    !localStorage.getItem('groupname') || 
    !localStorage.getItem('versionname'))
    {
      setNewUser(true)
    }else{
      getData();
    }
    //var after = groupBy(users, ['subjectname']);
  }, [])
  
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

  const register = ()=>{
    if(handleValidation()){
      localStorage.setItem("className", studentInfo.className);
      localStorage.setItem("groupname", studentInfo.groupname);
      localStorage.setItem("versionname", studentInfo.versionname);
      setNewUser(false)
    }
  }

  const handleversion=(event)=> {
    setStudentInfo((prev) => ({
      ...prev,
      versionname: event.target.value
    }));
  }

  const handlegroupname=(event) =>{
    setStudentInfo((prev) => ({
      ...prev,
      groupname: event.target.value
    }));
  }

  const handleclassName = (event)=> {
    if (event.target.value) {
      setStudentInfo((prev) => ({
        ...prev,
        isgrouploading: 'yes',
        groupname: '',
        className: event.target.value
      }));
    }
    else {
      setStudentInfo((prev) => ({
        ...prev,
        isgrouploading: false,
        groupname: '',
        className: event.target.value
      }));
    }
  }
console.log('CHECK::', newUser)
console.log('CHECK::', localStorage.getItem('className'))
console.log('CHECK::', localStorage.getItem('groupname'))
console.log('CHECK::', localStorage.getItem('versionname'))
  return (
    <Container>
      {newUser ? (
        <Row>
          <div className="row justify-content-center" style={{ marginTop: 54 }}>
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                        {/* <div className="col-lg-6 d-none d-lg-block bg-login-image" /> */}
                        <div className="col-md-6">
                          <div className="p-5">
                            <div className="text-center">
                              <h1 className="h4 text-gray-900 mb-4">Create Student Account</h1>
                            </div>
                            <form className="user">
                              <div className="form-group">
                                <select className="form-control"
                                  onChange={handleclassName}>
                                  <option value="">Select-Class</option>
                                  {
                                    classdata && classdata.map((cl) => {
                                      return <option value={cl.classname}>{cl.classname}</option>

                                    })
                                  }
                                </select>
                                <span style={{ color: "red", fontSize: 10 }}>{studentInfo.errors["className"]}</span>

                              </div>
                              <div className="form-group">
                                {
                                  studentInfo.isgrouploading === 'yes' ?
                                    <div>
                                      <select className="form-control"
                                        onChange={handlegroupname}>
                                        <option value="">Select-Group</option>
                                        <option value="Arts">Arts</option>
                                        <option value="Commerce">Commerce</option>
                                        <option value="Science">Science</option>
                                      </select>
                                      <span style={{ color: "red", fontSize: 10 }}>{studentInfo.errors["groupname"]}</span>
                                    </div>
                                    :
                                    ''
                                }
                              </div>

                              <div className="form-group">
                                <select className="form-control"
                                  onChange={handleversion}>
                                  <option value="">Select-Version</option>
                                  <option value="Bangla Version">Bangla Version</option>
                                  <option value="English Version">English Version</option>
                                </select>
                                <span style={{ color: "red", fontSize: 10 }}>{studentInfo.errors["versionname"]}</span>
                              </div>

                              <Button type="button" className="btn btn-primary btn-user btn-block" onClick={register}>
                                Submit
                              </Button>
                            </form>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      ):(
      <Row>
        {Object.entries(users).map(([dep, staff]) => {
          return (
              <div > {/* style={{ padding: 50 }} */}
                <div style={{
                  justifyContent: 'space-between',
                  width: '100%', display: 'flex', padding: 5, marginTop: 13
                }}>
                  {dep} <p><Link to={"/Readmore/" + dep} className='readmore'>
                    Read More
                    </Link></p>
                </div>
                <Row>

                </Row>
                <Row>
                  
               {/*  <Sixdatalist data={staff}/> */}
                 {staff.slice(0, 6).map((result,slno) => { // slice 0,5 means limit of index 0 to 5
                    return <Col xs={6} sm={2} key={slno}>
                      <Link to={"/Starttoprocesscourse/" + result._id} style={{ textDecoration: 'none' }}>
                        <Card style={{ marginBottom: 15 }}>
                          <Examimage data={result._id} />
                          <Card.Footer>
                            <Remaningquestion data={result._id} />
                          </Card.Footer>
                        </Card>
                      </Link>
                    </Col>
                })} 
                </Row>
              </div>

          )
        }
        )
        }
      </Row>
      )}
    </Container>
  );
}


export default Coachingdisplay;