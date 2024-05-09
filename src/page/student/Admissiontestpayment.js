import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Studentheader from './Studentheader'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer'
import * as base from '../global'
import axios from 'axios'
import Iframe from 'react-iframe'
import LoadingSpinner from '../library/LoadingSpinner'
import { makeStyles } from '@material-ui/core/styles'

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

const Admissiontestpayment = (props) => {
  const history = useHistory()
  const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  const [bkashno, setBkashno] = useState('')
  const [transid, setTransid] = useState('')
  const [classname, setClassname] = useState(localStorage.getItem('className'))
  const [groupname, setGroupname] = useState(localStorage.getItem('groupname'))
  const [isloading, setIsloading] = useState(false)
  const gridIframe = useRef(null)

  let paymenthistory = require('../course/data.json')
  const filtered = paymenthistory.filter((data) => {
    return (
      data.classname === localStorage.getItem('className') &&
      data.versionname === localStorage.getItem('versionname')
    )
  })

  const handleIframe = () => {
    //setLoading(false);
    //alert('load');
    const iframeItem = gridIframe.current
    const anchors = iframeItem.contentWindow.getElementsByTagName('a') //iframeItem.contentWindow.getElementsBy("input-16");
    alert(anchors)
  }
  useEffect(() => {
    //    getData();
  }, [])

  const processtoactive = (packageid, packagename, amount) => {
    /*   axios.post(base.BASE_URL + '/bkashpaymentonline', {
      studentid: studentid,
      packageid: packageid,
      packagename: packagename,
      bkashno: '',
      transid: '',
      classname: '',
      groupname: '',
      amount: amount,
      currency: 'BDT'
    })
      .then((response) => {

        if (response.data.message === "save") {
          // alert('save');

          history.push('/Studentdashboard');
        }
        else if (response.data === "Unauthorized") {
        }
        else if (response.data === "Unauthorized f") {

        }
      }, (error) => {
        console.log(error);
        alert(error)
      });
 */
  }
  const submit = () => {
    if (
      bkashno === '' ||
      transid === '' ||
      classname === '' ||
      groupname === ''
    ) {
      alert('Insert the Bkash Mobile No and transaction No')
    } else {
      axios
        .post(base.BASE_URL + '/insertpaymentbkash', {
          studentid: studentid,
          bkashno: bkashno,
          transid: transid,
          classname: classname,
          groupname: groupname,
          amount: '500',
          currency: 'BDT',
        })
        .then(
          (response) => {
            if (response.data.message === 'save') {
              //  alert(response.data.message)
              // history.push("/Paymentpaid")
              //history.push('/Paymentpaid')
            } else if (response.data === 'Unauthorized') {
              // alert("Invalid Email and Password");
            } else if (response.data === 'Unauthorized f') {
              // alert("Invalid Email and Password");
            }
          },
          (error) => {
            this.setState({ loggdin: 'stop', isLoading: false })
            console.log(error)
            alert(error)
          },
        )
    }
  }

  return (
    <div style={{ backgroundColor: '#f9f9f9', width: '100%' }}>
      <Container style={{ padding: 20 }}>
        <Studentheader />
        <Container style={{ marginTop: 120 }}>
          <Row>
            {/*             <Col className="col-md-6">
              <h3 style={{ fontSize: 16, fontWeight: 'bold' }}>Confirm Payment</h3>
              <p>
                Student ID : {localStorage.getItem('studentid')}
              </p>

              <div className={classes.root}>
                {
                  filtered.map(employee => {
                    return (
                      <div key={employee.id}>
                         {Parser(employee.coursedetails)} 

                      </div>
                    )
                  })
                }
              </div>
            </Col> */}
            {isloading ? (
              <LoadingSpinner />
            ) : filtered ? (
              filtered.map((employee) => {
                const datap = employee.package //.packageid === props.match.params.id;

                return (
                  <Col key={employee.id} className="col-md-12">
                    {datap.map((d) => {
                      //"https://shop.bkash.com/examamine01823345768/pay/bdt500/Mbc1W7"
                      return d.packageid === props.match.params.id ? (
                        <div>
                          {d.amount === 0 ? (
                            <Button
                              style={{ backgroundColor: 'rgb(108, 66, 152)' }}
                              onClick={() => {
                                //alert();
                                setIsloading(true)
                                axios
                                  .post(base.BASE_URL + '/bkashpaymentonline', {
                                    studentid: studentid,
                                    packageid: d.packageid,
                                    packagename: 'Trial',
                                    bkashno: '',
                                    transid: '',
                                    classname: '',
                                    groupname: '',
                                    amount: 0,
                                    currency: 'BDT',
                                  })
                                  .then(
                                    (response) => {
                                      if (response.data.message === 'save') {
                                        // alert('save');
                                        setIsloading(false)
                                        history.push('/Studentdashboard')
                                      } else if (
                                        response.data === 'Unauthorized'
                                      ) {
                                        setIsloading(false)
                                      } else if (
                                        response.data === 'Unauthorized f'
                                      ) {
                                        setIsloading(false)
                                      }
                                    },
                                    (error) => {
                                      setIsloading(false)
                                      console.log(error)
                                      alert(error)
                                    },
                                  )
                              }}
                            >
                              Confirm Payment
                            </Button>
                          ) : (
                            ''
                          )}
                        </div>
                      ) : (
                        ''
                      )
                    })}
                    {datap.map((d) => {
                      //"https://shop.bkash.com/examamine01823345768/pay/bdt500/Mbc1W7"
                      /* 10 taka URL  https://shop.bkash.com/examamine01823345768/pay/bdt10/oHYkAZ */
                      return d.packageid === props.match.params.id ? (
                        /*      <Iframe url={d.url} */
                        <>
                          <Iframe
                            url={d.url}
                            width="100%"
                            height="700px"
                            ref={gridIframe}
                            id="bkashpayment"
                            className=""
                            display="block"
                            position="relative"
                            onLoad={handleIframe}
                          />
                        </>
                      ) : (
                        ''
                      )
                    })}
                    {/* 
    <Button style={{ backgroundColor: 'rgb(108, 66, 152)' }}
                                      onClick={processtoactive(d.packageid,d.packagename,d.amount)}>Process to active Package </Button>
*/}
                  </Col>
                )
              })
            ) : (
              ''
            )}
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  )
}

export default Admissiontestpayment
