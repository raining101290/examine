import React, { useState, useEffect } from 'react'
import { Offline, Online } from 'react-detect-offline'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Studentheader from './Studentheader'
import { Link } from 'react-router-dom'

import * as base from '../global'
import axios from 'axios'
import Examimage from './Examimage'
import Remaningquestion from './Remaningquestion'
import groupBy from 'json-groupby'

const Readmoredetails = (data) => {
  const [users, setUsers] = useState([])
  console.log('hhhh' + data.data)

  const getData = () => {
    axios
      .get(
        base.BASE_URL +
          '/subjectwisedata/' +
          localStorage.getItem('className') +
          '/' +
          localStorage.getItem('groupname') +
          '/' +
          localStorage.getItem('versionname') +
          '/' +
          data.data +
          '?quiztype=' +
          localStorage.getItem('quiztype'),
        {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      .then((res) => {
        setUsers(res.data)
        window.scrollTo(0, 0)
      })
  }
  useEffect(() => {
    getData()
    //var after = groupBy(users, ['subjectname']);
  }, [])

  return (
    <Container style={{ padding: 20, marginTop: 120 }}>
      <Row>
        {users.length > 0 ? (
          users.map((result, slno) => {
            // slice 0,5 means limit of index 0 to 5

            return (
              <Col xs={6} sm={2} key={slno}>
                <Link
                  to={'/Startquiz/' + result._id}
                  style={{ textDecoration: 'none' }}
                >
                  <Card style={{ marginBottom: 15 }}>
                    <Examimage data={result._id} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          textDecoration: 'none',
                          fontSize: 12,
                          color: '#000',
                        }}
                      >
                        {result.examname}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <Remaningquestion data={result._id} />
                    </Card.Footer>
                  </Card>
                </Link>
              </Col>
            )
          })
        ) : (
          <Col xs={12} sm={12}>
            <h3 style={{ margin: '50px 0px 50px 0px', textAlign: 'center' }}>
              No data found
            </h3>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default Readmoredetails
