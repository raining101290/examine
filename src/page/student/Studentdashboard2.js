import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Studentheader from './Studentheader'
import Footer from '../Footer'
import { Link, useHistory } from 'react-router-dom'
import Coachingdisplay from './Coachingdisplay'

import * as base from '../global'
import axios from 'axios'
import Examimage from './Examimage'
import LoadingSpinner from '../library/LoadingSpinner'

const Studentdashboard = () => {
  const history = useHistory()
  const [users, setUsers] = useState([])
  const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  const [checkpayment, setCheckpayment] = useState('')
  const [checktrial, setChecktrial] = useState('')
  const [isloading, setIsloading] = useState(false)
  //paymenthistory className
  let paymenthistory = require('../course/data.json')
  const filtered = paymenthistory.filter((data) => {
    return (
      data.classname === localStorage.getItem('className') &&
      data.versionname === localStorage.getItem('versionname') &&
      data.groupname === localStorage.getItem('groupname')
    )
  })

  const getData = () => {
    axios
      .get(base.BASE_URL + '/getstudentwiseexam/' + studentid + '/Active', {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setUsers(res.data)

        window.scrollTo(0, 0)
      })
  }
  const getDatacheckpayment = () => {
    console.log(base.BASE_URL + '/getDatacheckpayment/' + studentid)
    setIsloading(true)
    axios
      .get(base.BASE_URL + '/getDatacheckpayment/' + studentid, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        setCheckpayment(res.data)
        setIsloading(false)
      })
  }
  const getuserstatus = () => {
    if (!studentid) {
      history.push('/')
    }
  }

  useEffect(() => {
    getuserstatus()
    getData()
    getDatacheckpayment()
    checktrialdata()
  }, [])

  const checktrialdata = () => {
    console.log(base.BASE_URL + '/checktrialdata/' + studentid)
    setIsloading(true)
    axios
      .get(base.BASE_URL + '/checktrialdata/' + studentid, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        setChecktrial(res.data)
        setIsloading(false)
      })
  }

  return (
    <div style={{ backgroundColor: '#ffffff', width: '100%' }}>
      <Studentheader />
      <Row style={{ marginTop: 120 }}>
        {users.map((result) => {
          return (
            <Col xs={6} md={3}>
              <Link
                to={'/Startquiz/' + result.examid}
                style={{ textDecoration: 'none', color: '#000', fontSize: 14 }}
              >
                <Card style={{ marginBottom: 20 }}>
                  <Examimage data={result.examid} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: 14 }}>
                      {' '}
                      {result.examname} {result.image}
                    </Card.Title>
                    {/*      <Link to={"/Startquiz/" + result.examid}>Start </Link> */}
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )
        })}
      </Row>
      {isloading ? (
        <LoadingSpinner />
      ) : checkpayment === '' ? (
        filtered ? (
          filtered.map((employee) => {
            console.log('employee....' + employee)

            const datap = employee.package
            return (
              <Row key={employee.id}>
                {datap.map((d) => {
                  let packageid = ''
                  return (
                    <div
                      class="card col-md-3 box-shadow"
                      style={{
                        padding: 20,
                        marginRight: 10,
                        marginLeft: 20,
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    >
                      <div class="card-header">
                        <h4 class="my-0 font-weight-normal">{d.packagename}</h4>
                      </div>
                      <div class="card-body">
                        <h1 class="card-title pricing-card-title">
                          {d.amount} <small class="text-muted"></small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                          <li>{d.description}</li>
                        </ul>
                        {checktrial > 0 && d.amount === '0' ? (
                          <div class="btn">Expaired</div>
                        ) : (
                          <Link
                            to={'/Admissiontestpayment/' + d.packageid}
                            style={{
                              backgroundColor: 'rgb(108, 66, 152)',
                              width: '100%',
                              height: 40,
                              color: '#ffffff',
                              borderRadius: 15,
                            }}
                            class="btn"
                          >
                            Buy Now
                          </Link>
                        )}
                      </div>
                    </div>
                  )
                })}
              </Row>
            )
          })
        ) : (
          ''
        )
      ) : (
        ''
      )}

      {checkpayment > 0 ? <Coachingdisplay /> : ''}
      <Footer />
    </div>
  )
}

export default Studentdashboard
