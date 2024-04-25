import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Parser from 'html-react-parser' // render HTML
import 'swiper/css'
import '../homepage.css'
import Button from '@mui/material/Button'

import '../navbar/index.css'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import Form from 'react-bootstrap/Form'

import { makeStyles } from '@material-ui/core/styles'
import Registration from './Registration'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))
//import jsonData from './data.json'

const Viewcart = (props) => {
  const classes = useStyles()
  const studentid = useState(localStorage.getItem('studentid'))
  const history = useHistory()
  //const employees = [...jsonData];

  let employees = require('./data.json')

  const filtered = employees.filter((employee) => {
    // let bangla = props.match.params.id
    if (props.match.params.version === 'Bangla-version') {
      let bangla = 'Bangla Version'
      return (
        employee.classname === props.match.params.singleclass &&
        employee.versionname === bangla
      )
    }
    if (props.match.params.version === 'English-version') {
      let bangla = 'English Version'
      return (
        employee.classname === props.match.params.singleclass &&
        employee.versionname === bangla
      )
    }
  })
  const submitpayment = () => {
    if (studentid) {
      // alert(studentid)
      history.push('/Studentdashboard')
    } else {
      history.push('/Continuewithstudent')

      //alert('Student ID not found')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Header />
      <div className="containerpage">
        <div className="coursedetails">
          <Row style={{ marginTop: 67 }}>
            <Col sm={12}>
              <Link
                to={
                  '/Coursedetails/' +
                  props.match.params.classnames +
                  '/' +
                  props.match.params.version
                }
                style={{ padding: 20 }}
              >
                Back
              </Link>
            </Col>
          </Row>
          <Row className="coursedetailspar">
            <Col style={{ textAlign: 'center' }} sm={8}>
              <div style={{ textAlign: 'left' }}>
                <div className={classes.root}>
                  {filtered.map((employee) => {
                    return (
                      <div key={employee.id}>
                        {Parser(employee.coursedetails)}
                      </div>
                    )
                  })}
                </div>

                {/*  */}
              </div>
            </Col>
            <Col style={{ textAlign: 'center' }} sm={4}>
              <Form className="bookingform">
                {filtered.map((employee) => {
                  const datap = employee.package

                  const filterpackagedata = datap.filter((packagedata) => {
                    return (
                      packagedata.packageid === props.match.params.packageid
                    )
                  })

                  return (
                    <div key={employee.id}>
                      {filterpackagedata.map((d) => {
                        return (
                          <div>
                            <Link className="packagebutton">
                              <p> {d.description}</p> <p>৳ {d.amount}</p>
                            </Link>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
                {studentid ? (
                  <Button onClick={submitpayment}>Confirm Payment</Button>
                ) : (
                  <Registration />
                )}
              </Form>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Viewcart
