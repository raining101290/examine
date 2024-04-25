import React, { useEffect, useCallback, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Studentheader from './Studentheader'
import Footer from '../Footer'
import { executePayment, savePaymentInfo } from '../../axios/student/api'
import {
  getClassName,
  getGroupname,
  getStudentID,
  getVersionname,
} from '../../utils/functions'
import { Button, Container } from 'react-bootstrap'
//import { AppContext } from '../../context/AppProvider'
import { useHistory } from 'react-router-dom'
import { Box, Typography } from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined'

const BkashPayment = () => {
  //const { fnGetToken } = useContext(AppContext)
  const params = new URLSearchParams(window.location.search)
  const paymentID = params.get('paymentID')
  const status = params.get('status')
  const [paymentStatus, setPaymentStatus] = useState()
  const [bkashResponse, setBkashResponse] = useState()
  const apiCalled = useRef(false)
  const api2Called = useRef(false)
  const history = useHistory()

  const fnSavePayment = () => {
    try {
      const packageid = localStorage.getItem('packageid')
      const packagename = localStorage.getItem('packagename')
      const type = localStorage.getItem('type')
      const amount = localStorage.getItem('amount')
      const postObj = {
        studentid: getStudentID(),
        packageid: packageid,
        packagename: packagename,
        className: getClassName(),
        groupname: getGroupname(),
        type: type,
        amount: amount,
        currency: bkashResponse.currency,
        version: getVersionname(),
        invNo: bkashResponse.merchantInvoiceNumber,
        reference: bkashResponse.payerReference,
        mobileno: bkashResponse.customerMsisdn,
        trxID: bkashResponse.trxID,
        paymentID: bkashResponse.paymentID,
        bkashObj: bkashResponse,
      }
      savePaymentInfo(postObj)
    } catch (error) {
      console.error(error)
      //throw new Error('Failed to save payment info')
    }
  }

  const verifyThePayment = useCallback(async () => {
    if (!api2Called.current) {
      executePayment({
        paymentID: paymentID,
      })
        .then((result) => {
          if (result?.data?.statusCode === '0000') {
            setBkashResponse(result?.data)
            setPaymentStatus('success')
          } else if (result?.data?.statusCode === '2062') {
            //The payment has already been completed
            setPaymentStatus(result?.data?.statusMessage)
          } else if (result?.data?.statusCode === '2117') {
            setPaymentStatus(result?.data?.statusMessage)
          } else {
            setPaymentStatus('failed')
          }
        })
        .catch((error) => {
          console.log('result', error)
        })
      api2Called.current = true
    }
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (bkashResponse?.statusCode === '0000') {
      if (!apiCalled.current) {
        apiCalled.current = true
        console.log('Called Save Payment')
        fnSavePayment()
      }
    }
    //eslint-disable-next-line
  }, [bkashResponse])

  useEffect(() => {
    if (paymentID && status) {
      if (status === 'success') {
        verifyThePayment()
      } else if (status === 'failure') {
        setPaymentStatus('failed')
      } else if (status === 'cancel') {
        setPaymentStatus('cancel')
      }
    }
    //eslint-disable-next-line
  }, [])
  console.log('Called ', paymentStatus)
  const startExam = () => {
    history.push('/ShowExams')
  }
  const startAgain = () => {
    history.push('/SelectExamType')
  }
  const renderPaymentStatus = (message) => {
    if (message === 'success') {
      return (
        <>
          <Box className="payment-icon">
            <img
              width={200}
              alt="Payment Success"
              src="../assets/icons/success.svg"
            />
          </Box>
          <Typography variant="h4">
            Your payment was successful
            <CheckCircleOutlineIcon fontSize="large" className="success" />
          </Typography>
          <Box className="paddt30">
            <Typography>
              Thank you for your payment. Now proceed for the Exam.
            </Typography>
          </Box>
          <Button onClick={startExam}>Start Exam Now </Button>
        </>
      )
    } else if (message === 'failed') {
      return (
        <>
          <Box className="payment-icon">
            <img
              width={200}
              alt="Payment Success"
              src="../assets/icons/failed.svg"
            />
          </Box>
          <Typography variant="h4">
            Your payment was failed
            <CancelOutlinedIcon fontSize="large" className="failed" />
          </Typography>
          <Box className="paddt30">
            <Typography>
              Sorry Your payment was not successful. Would you like to pay the
              exam fee again?
            </Typography>
          </Box>
          <Button onClick={startAgain}> Start Aagain </Button>
        </>
      )
    } else if (message === 'cancel') {
      return (
        <>
          <Box className="payment-icon">
            <img
              width={200}
              alt="Payment Success"
              src="../assets/icons/failed.svg"
            />
          </Box>
          <Typography variant="h4">
            Your payment was canceled
            <CancelOutlinedIcon fontSize="large" className="failed" />
          </Typography>
          <Box className="paddt30">
            <Typography>
              Sorry Your payment was not successful. Would you like to pay the
              exam fee again?
            </Typography>
          </Box>
          <Button onClick={startAgain}> Pay Again </Button>
        </>
      )
    } else {
      return (
        <>
          <Box className="payment-icon">
            <img
              width={200}
              alt="Payment Success"
              src="../assets/icons/success.svg"
            />
          </Box>
          <Box className="paddt30">
            <Typography variant="h4">{paymentStatus}</Typography>
          </Box>
          <Button onClick={startExam}>Start Exam Now </Button>
        </>
      )
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
            <Col sm={12}>{renderPaymentStatus(paymentStatus)}</Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default BkashPayment
