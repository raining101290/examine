import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Studentheader from './Studentheader'
import Footer from '../Footer'
import { useHistory } from 'react-router-dom'

import * as base from '../global'
import axios from 'axios'
import LoadingSpinner from '../library/LoadingSpinner'
import { classes, groups, versions } from '../../utils/constants'
import { Button } from 'react-bootstrap'
import { Box } from '@material-ui/core'

const Studentdashboard = () => {
  const [courses, setCourses] = useState([])
  //const [subjects, setSubjects] = useState([]);
  const [count, setCount] = useState(0)
  const history = useHistory()
  const [formValue, setFormValue] = useState({
    className: '',
    groupname: '',
    versionname: '',
    //subject:''
  })
  const [isloading, setIsloading] = useState(false)
  //this returns user's active exams
  const getCourses = () => {
    setIsloading(true)
    try {
      let queryParams = {}
      // Add classname, group, version to the queryParams object if they are not empty
      if (formValue.className) {
        queryParams.classname = formValue.className
      }
      if (formValue.groupname) {
        queryParams.group = formValue.groupname
      }
      if (formValue.versionname) {
        queryParams.version = formValue.versionname
      }
      // if (formValue.subject) {
      //   queryParams.subject = formValue.subject;
      // }
      if (queryParams.classname) {
        // Use axios to make the GET request with the constructed URL and queryParams
        axios
          .get(base.BASE_URL + '/allcourses', {
            headers: {
              authorization: `bearer ${localStorage.getItem('token')}`,
            },
            params: queryParams, // Pass the queryParams object as the params option
          })
          .then((res) => {
            setCourses(res?.data?.result)
            setCount(res?.data?.totalCount)
            window.scrollTo(0, 0)
            setIsloading(false)
          })
          .catch(() => {
            setIsloading(false)
          })
      } else {
        setIsloading(false)
      }
    } catch (err) {
      setIsloading(false)
    }
  }

  // const getAllSubjects = () =>{
  //   setIsloading(true)
  //   try{

  //     let queryParams = {};
  //     if (formValue.subject) {
  //       queryParams.subject = formValue.subject;
  //     }

  //     // Use axios to make the GET request with the constructed URL and queryParams
  //     axios.get(base.BASE_URL + '/allSubjects', {
  //       headers: {
  //         authorization: `bearer ${localStorage.getItem('token')}`
  //       },
  //       params: queryParams // Pass the queryParams object as the params option
  //     })
  //     .then(res => {
  //       setSubjects(res.data);
  //       window.scrollTo(0, 0);
  //       setIsloading(false)
  //     })
  //   }catch (err) {
  //     setIsloading(false);
  //   }
  // }

  useEffect(() => {
    if (formValue.className) {
      localStorage.setItem('className', formValue.className)
    }
    if (formValue.groupname) {
      localStorage.setItem('groupname', formValue.groupname)
    }
    if (formValue.versionname) {
      localStorage.setItem('versionname', formValue.versionname)
    }
    // if(formValue.subject){
    //   localStorage.setItem('subject', formValue.subject)
    // }
    getCourses()
    //eslint-disable-next-line
  }, [formValue])

  const settingFromValues = (fieldname, fieldval) => {
    setFormValue((prev) => ({ ...prev, [fieldname]: fieldval }))
  }
  useEffect(() => {
    if (localStorage.getItem('className')) {
      settingFromValues('className', localStorage.getItem('className'))
    }
    if (localStorage.getItem('groupname')) {
      settingFromValues('groupname', localStorage.getItem('groupname'))
    }
    if (localStorage.getItem('versionname')) {
      settingFromValues('versionname', localStorage.getItem('versionname'))
    }
    // if(localStorage.getItem('subject')){
    //   settingFromValues('subject', localStorage.getItem('subject'))
    // }
    getCourses()
    //eslint-disable-next-line
  }, [])

  const handleChange = (e) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleNavigate = (subjectName) => {
    localStorage.setItem('subject', subjectName)
    //history.push('/ShowExams')
    history.push('/SelectExamType')
  }
  return (
    <div style={{ backgroundColor: '#ffffff', width: '100%' }}>
      <Studentheader />
      <Container style={{ marginTop: 110, paddingTop: 20 }}>
        <Row>
          <Col xs={6} md={2}>
            <div className="form-group">
              <select
                name="className"
                className="form-control"
                onChange={handleChange}
              >
                <option value="">Select Class</option>
                {classes.map((item) => {
                  return (
                    <option
                      value={item.id}
                      selected={
                        localStorage.getItem('className') === item.id.toString()
                      }
                    >
                      {item.title}
                    </option>
                  )
                })}
              </select>
            </div>
          </Col>
          <Col xs={6} md={2}>
            <div className="form-group">
              <select
                name="groupname"
                className="form-control"
                onChange={handleChange}
              >
                <option value="">Select Group</option>
                {groups.map((item) => {
                  return (
                    <option
                      value={item.id}
                      selected={
                        localStorage.getItem('groupname') === item.id.toString()
                      }
                    >
                      {item.title}
                    </option>
                  )
                })}
              </select>
            </div>
          </Col>
          <Col xs={6} md={2}>
            <div className="form-group">
              <select
                name="versionname"
                className="form-control"
                onChange={handleChange}
              >
                <option value="">Select Version</option>
                {versions.map((item) => {
                  return (
                    <option
                      value={item.id}
                      selected={
                        localStorage.getItem('versionname') ===
                        item.id.toString()
                      }
                    >
                      {item.title}
                    </option>
                  )
                })}
              </select>
            </div>
          </Col>
          {/* <Col xs={6} md={2}>
            <div className="form-group">
                <select name="subject" className='form-control' onChange={handleChange}>
                  <option value="">Select Subject</option>
                  {subjects.map((item)=>{
                    return (<option value={item.name} selected={localStorage.getItem('subject') === item.id.toString()}>{item.name}</option>)
                  })}
                </select>
            </div>
          </Col> */}
          <Col xs={6} md={2}>
            <Button
              disabled={isloading}
              type="button"
              className="btn btn-primary btn-user btn-block"
              onClick={() => {
                getCourses()
              }}
            >
              {isloading ? 'Loading…' : 'Search'}
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <p>
              Showing <b>{count}</b> results.
            </p>
          </Col>
          {isloading ? (
            <LoadingSpinner />
          ) : courses.length > 0 ? (
            courses.map((result) => {
              return (
                <Col xs={6} md={3}>
                  <Box
                    style={{ cursor: 'pointer', color: '#000', fontSize: 14 }}
                    onClick={() => handleNavigate(result.subjectname)}
                  >
                    <Card style={{ marginBottom: 20 }}>
                      {/* <Examimage data={result._id} /> */}
                      <Card.Img
                        variant="top"
                        src="../images/exam.png"
                        style={{
                          backgroundPosition: '50%',
                          resize: 'cover',
                          height: 170,
                        }}
                      />
                      <Card.Body>
                        <Card.Title style={{ fontSize: 14 }}>
                          {' '}
                          {result.subjectname}
                        </Card.Title>
                        {/*      <Link to={"/Startquiz/" + result.examid}>Start </Link> */}
                      </Card.Body>
                      <Card.Footer>Total Exams: {result.count}</Card.Footer>
                    </Card>
                  </Box>
                </Col>
              )
            })
          ) : (
            <Col xs={12} md={12}>
              <Box style={{ padding: '100px 0px', textAlign: 'center' }}>
                <h3>No Data Found.</h3>
              </Box>
            </Col>
          )}
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Studentdashboard
