import React, { useState, useEffect } from 'react'
//import { Offline, Online } from "react-detect-offline";
import 'bootstrap/dist/css/bootstrap.min.css'
//import { Alert } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
//import Studentheader from './Studentheader';
import { Link } from 'react-router-dom'

import * as base from '../global'
import axios from 'axios'
import Examimage from './Examimage'
import Remaningquestion from './Remaningquestion'
import groupBy from 'json-groupby'
import { Box } from '@material-ui/core'

const Coachingdisplay = () => {
  //let subtitle;
  //const [modalIsOpen, setIsOpen] = React.useState(false);
  let token = localStorage.getItem('token')
  const [users, setUsers] = useState([])
  //const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))

  const getData = () => {
    let classname = localStorage.getItem('className')
    let group = localStorage.getItem('groupname')
    let version = localStorage.getItem('versionname')
    let subject = localStorage.getItem('subject')

    axios
      .get(
        base.BASE_URL +
          '/coachingcourse/' +
          classname +
          '/' +
          group +
          '/' +
          version +
          '?subjectname=' +
          subject,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        },
      )
      .then((res) => {
        let newdata = groupBy(res.data, ['subjectname'])
        //console.log('new data......' + JSON.stringify(newdata))
        setUsers(newdata)
        window.scrollTo(0, 0)
      })
  }
  useEffect(() => {
    getData()
    //eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Box className="marginTop115">
        <Row>
          <Col sm={12}>
            <center>
              Want more Subjects <Link to="/StudentDashboard">Go Home</Link>
            </center>
          </Col>
        </Row>
        <Row>
          {Object.entries(users).map(([dep, staff], index) => {
            return (
              <div key={index}>
                {' '}
                {/* style={{ padding: 50 }} */}
                <div
                  style={{
                    justifyContent: 'space-between',
                    width: '100%',
                    display: 'flex',
                    padding: 5,
                    marginTop: 13,
                  }}
                >
                  {dep}{' '}
                  <p>
                    <Link to={'/Readmore/' + dep} className="readmore">
                      Read More
                    </Link>
                  </p>
                </div>
                <Row></Row>
                <Row>
                  {/*  <Sixdatalist data={staff}/> */}
                  {staff.slice(0, 6).map((result, slno) => {
                    // slice 0,5 means limit of index 0 to 5
                    return (
                      <Col xs={6} sm={2} key={slno}>
                        <Link
                          to={'/Startquiz/' + result._id}
                          style={{ textDecoration: 'none' }}
                        >
                          <Card style={{ marginBottom: 15 }}>
                            <Examimage data={result._id} />
                            <Card.Footer>
                              <Remaningquestion data={result._id} />
                            </Card.Footer>
                          </Card>
                        </Link>
                      </Col>
                    )
                  })}
                </Row>
              </div>
            )
          })}
        </Row>
        <Row>
          <Col sm={12}>
            <center>
              Want more Subjects <Link to="/StudentDashboard">Go Home</Link>
            </center>
          </Col>
        </Row>
      </Box>
    </Container>
  )
}

export default Coachingdisplay
