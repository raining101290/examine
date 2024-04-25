import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Studentheader from './Studentheader'
import Footer from '../Footer'
import { Button, Container } from 'react-bootstrap'
import { Box } from '@material-ui/core'
import {
  checkPaymentStatus,
  getPackagePrice,
  createPayment,
  getExamTypes,
} from '../../axios/student/api'
import {
  getStudentID,
  getVersionname,
  getClassName,
  getGroupname,
  generateReference,
} from '../../utils/functions'
import { useHistory } from 'react-router-dom'
//import { AppContext } from '../../context/AppProvider'

const SelectExamType = () => {
  const history = useHistory()
  const [isloading, setIsloading] = useState(false)
  const [examTypes, setExamTypes] = useState([])
  const [isError, setIsError] = useState()
  //const { setStudentPackage } = useContext(AppContext)

  const fnExamTypes = async () => {
    return new Promise((resolve, reject) => {
      getExamTypes({})
        .then((res) => {
          if (res.data) {
            setExamTypes(res.data)
          } else {
            setExamTypes([])
          }
        })
        .catch(() => {
          resolve('failed')
        })
    })
  }

  useEffect(() => {
    if (examTypes.length === 0) {
      fnExamTypes()
    }
    //eslint-disable-next-line
  }, [])

  const checkPayment = async (type) => {
    return new Promise((resolve) => {
      let queryParams = {
        studentid: getStudentID(),
        className: getClassName(),
        group: getGroupname(),
        type: type,
        version: getVersionname(),
      }
      checkPaymentStatus(queryParams)
        .then((res) => {
          if (res.data) {
            if (res.data.status === 'approved') {
              resolve('success')
            } else if (res.data.status === 'pending') {
              resolve('pending')
            } else {
              resolve('failed')
            }
          } else {
            resolve('failed')
          }
        })
        .catch(() => {
          resolve('failed')
        })
    })
  }

  const getCoursePrice = async (type) => {
    return new Promise((resolve) => {
      getPackagePrice({
        type: type,
        version: getVersionname(),
        classname: getClassName(),
        group: getGroupname(),
      })
        .then((res) => {
          console.log('res.data', res?.data)
          //set package info in the context for later use
          localStorage.setItem('packageid', res?.data?.packageid)
          localStorage.setItem('packagename', res?.data?.packagename)
          localStorage.setItem('type', res?.data?.type)
          localStorage.setItem('amount', res?.data?.price)
          //returning the package price
          resolve(res?.data?.price)
          setIsloading(false)
        })
        .catch(() => {
          setIsloading(false)
        })
    })
  }

  const getPaymentLink = (amount, type) => {
    return new Promise((resolve) => {
      createPayment({
        reference: generateReference(
          getVersionname(),
          getClassName(),
          getGroupname(),
          type,
        ),
        amount: amount,
      })
        .then((result) => {
          resolve(result.data)
        })
        .catch((error) => {
          resolve(error?.response?.data?.message)
        })
    })
  }

  //console.log('StudentPackage', studentPackage)
  const buyCourse = async (type) => {
    const price = await getCoursePrice(type)
    if (price === undefined) {
      setIsError('No Package is associated with the selected Exam Type')
    } else {
      const paymentInfo = await getPaymentLink(price, type)
      if (paymentInfo.statusCode === '0000') {
        setIsloading(false)
        window.location.replace(paymentInfo.bkashURL)
      } else {
        setIsError(paymentInfo.statusMessage)
        setIsloading(false)
      }
    }
  }

  const handleSubcription = async (type) => {
    setIsloading(true)
    const result = await checkPayment(type)
    if (result === 'failed') {
      buyCourse(type)
    } else if (result === 'success') {
      setIsloading(false)
      history.push('/ShowExams')
    } else {
      setIsloading(false)
    }
  }

  return (
    <div style={{ backgroundColor: '#ffffff', width: '100%' }}>
      <Container>
        <Studentheader />
        <div
          style={{
            padding: 100,
            flexDirection: 'row',
            textAlign: 'center',
            marginTop: 100,
          }}
        >
          <Row className="justify-content-md-center">
            <Col sm={12}>
              <h3 style={{ marginBottom: '50px' }}>Select Exam Type</h3>
            </Col>
            {examTypes.length > 0 &&
              examTypes.map((item) => {
                return (
                  <Col xs={12} md={4}>
                    <div
                      className="d-grid gap-2"
                      style={{ marginBottom: '20px' }}
                    >
                      <Button
                        variant="danger"
                        size="lg"
                        onClick={() => {
                          handleSubcription(item.title)
                        }}
                      >
                        {item.title}
                      </Button>
                    </div>
                  </Col>
                )
              })}

            <Col xs={12}>
              <Box alignItems="center" style={{ padding: '100px 20px' }}>
                <p>
                  {isError}
                  {isloading &&
                    'Please wait, You will be redirected to payment page...'}
                </p>
              </Box>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default SelectExamType
