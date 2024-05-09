import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Studentheader from './Studentheader'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faClose,
  faMusic,
  faSortNumericDesc,
  faYenSign,
  faWonSign,
} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import * as base from '../global'
import axios from 'axios'
import Switch from 'react-switch'
import { Facebook } from 'react-content-loader'

const Starttoprocesscourse = (props) => {
  let subtitle
  const history = useHistory()
  const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  const [examid, setExamid] = useState(props.match.params.id)
  const [randomid, setRandomid] = useState(
    localStorage.getItem('studentid') + '-' + moment().format('DDMMYYYYHHmmss'),
  )
  const [isloading, setIsloading] = useState(true)

  /////////////////////////////////////////////////////////////////////////////////////
  const poststudentpermission = () => {
    axios
      .post(base.BASE_URL + '/permissionstudent', {
        studentid: studentid,
        examid: examid,
      })
      .then(
        (response) => {
          // alert(response.data)
          //history.push('/Paymentpaid');

          setIsloading(false)
          history.push('/Startquiz/' + examid)
        },
        (error) => {
          console.log(error)
          alert(error)
        },
      )
  }
  ////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    poststudentpermission()
    //alert(counter)
  }, [])

  return (
    <div>
      <Studentheader />
      <Container>
        <Row style={{ padding: 20 }}>
          <Col sm={12}>{isloading ? <Facebook /> : 'ffffff'}</Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Starttoprocesscourse
