import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Studentheader from './Studentheader'
import Footer from '../Footer'
import { useHistory } from 'react-router-dom'
import Resulttransactiontwo from './Resulttransactiontwo'

import * as base from '../global'
import axios from 'axios'

const Resulttransaction = () => {
  const history = useHistory()
  const [users, setUsers] = useState([])
  const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  //const [classname, setClassname] = useState(localStorage.getItem('className'))
  const [searchtext, setSearchtext] = useState('')
  const [checkpayment, setCheckpayment] = useState('')
  const [errorsearch, setErrorsearch] = useState(false)

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
    //console.log(base.BASE_URL + '/getDatacheckpayment/' + studentid )
    axios
      .get(base.BASE_URL + '/getDatacheckpayment/' + studentid, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setCheckpayment(res.data)
      })
  }

  useEffect(() => {
    getData()
    getDatacheckpayment()
  }, [])
  const finddata = () => {
    // alert(searchtext)
    if (searchtext === '') {
      setErrorsearch(true)
      return
    } else {
      history.push('/Studentfindsubject/' + searchtext + '/1/12')
    }
  }
  return (
    <div>
      <Studentheader />
      <Container style={{ marginTop: 110 }}>
        <h3
          style={{ fontSize: 16, marginTop: 20 }}
          className="resulttransaction"
        >
          Result History
        </h3>
        {checkpayment > 0 ? (
          <Row>
            <Resulttransactiontwo />
          </Row>
        ) : (
          ''
        )}
      </Container>
      <Footer />
    </div>
  )
}

export default Resulttransaction
