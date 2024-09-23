import React, { useState, useEffect } from 'react'
//import { Offline, Online } from 'react-detect-offline'
import 'bootstrap/dist/css/bootstrap.min.css'
//import { Alert } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
//import Studentheader from './Studentheader'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  //faCoffee,
  faClose,
  // faMusic,
  // faSortNumericDesc,
  // faYenSign,
  // faWonSign,
} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import * as base from '../global'
import axios from 'axios'
//import Switch from 'react-switch'
//import Music from '../Music'
import Examimage from './Examimage'

const Startquiz = (props) => {
  //let subtitle
  //const [modalIsOpen, setIsOpen] = React.useState(false)
  const [users, setUsers] = useState([])
  const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  const [examid, setExamid] = useState(props.match.params.id)
  const [randomid, setRandomid] = useState(
    localStorage.getItem('studentid') + '-' + moment().format('DDMMYYYYHHmmss'),
  )
  // const [checked, setChecked] = useState(false)
  // const [count, setCount] = useState(0)
  const [totalquiz, setTotalquiz] = useState([])
  const url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)
  const [examstatus, setExamstatus] = useState(false)
  const [playcount, setPlaycount] = useState('0')
  const [examname, setExamname] = useState('')
  //const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause()
    //eslint-disable-next-line
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
      console.log('remove sound')
    }
    //eslint-disable-next-line
  }, [])

  const postexaminrecent = () => {
    axios
      .post(base.BASE_URL + '/ ', {
        studentid: studentid,
        examid: examid,
      })
      .then(
        (response) => {
          console.log('monir......' + response)
        },
        (error) => {
          console.log(error)
          //  alert(error)
        },
      )
  }

  const getData = () => {
    axios
      .get(base.BASE_URL + '/getbyexamid/' + examid + '/' + studentid, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        setUsers(res.data)
      })
  }

  const getexamstatus = () => {
    console.log(base.BASE_URL + '/exampublishstatus/' + examid)
    axios
      .get(base.BASE_URL + '/exampublishstatus/' + examid, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setExamstatus(res.data[0].examstatus)
        setExamname(res.data[0].examname)
      })
  }

  const getexamidunique = () => {
    axios
      .get(
        base.BASE_URL +
          '/studentexamid/' +
          examid +
          '/' +
          studentid +
          '/' +
          randomid,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      .then((res) => {
        if (res.data === 'Authentication failure !') {
          alert('Auth Failed')
        } else {
          console.log('first randomid......' + randomid)
          localStorage.removeItem('examrandomid')
          setTimeout(() => {
            localStorage.setItem('examrandomid', randomid)
          }, 2000)
        }
      })
  }

  const getolduniqueid = () => {
    localStorage.removeItem('examrandomid')
    axios
      .get(base.BASE_URL + '/getoldexamid/' + examid + '/' + studentid, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        localStorage.removeItem('examrandomid')
        setTimeout(() => {
          localStorage.setItem('examrandomid', res.data[0].uid)
        }, 2000)
        // localStorage.setItem("examrandomid", res.data[0].uid);
      })
  }

  /////////////////////////////////////////////////////////////////////////////////////
  const postactivity = () => {
    axios
      .post(base.BASE_URL + '/updateexamstatus', {
        studentid: studentid,
        examid: examid,
      })
      .then(
        (response) => {},
        (error) => {
          console.log(error)
          alert(error)
        },
      )
  }
  ////////////////////////////////////////////////////////////////////////////////////

  const gettotalquiz = () => {
    axios
      .get(base.BASE_URL + '/gettotalquiz/' + examid, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          setTotalquiz(res.data.length)
        } else {
          setTotalquiz([])
        }
      })
  }
  const getplayquiz = () => {
    console.log(
      base.BASE_URL + '/countplayquestion/' + examid + '/' + studentid,
    )
    axios
      .get(base.BASE_URL + '/countplayquestion/' + examid + '/' + studentid, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        //  this.setState({ allsubscribelist: res.data });
        //   setPlaycount(res.data)

        if (res.data > 0) {
          let data = res.data + 1
          setPlaycount(data)
          if (totalquiz < data) {
            console.log('fistlogin')
            // alert('Already Over the Exam')
            getolduniqueid()
          } else if (totalquiz > data) {
            // alert('old id')
            console.log('old id')
            getolduniqueid()
          } else {
            //alert('New')
            console.log('new unique id')
            getexamidunique()
          }
        } else {
          setPlaycount(1)
          getexamidunique()
        }
      })
  }
  useEffect(() => {
    postexaminrecent()
    gettotalquiz()
    postactivity()
    getexamstatus()
    getplayquiz()
    //alert(counter)
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    getData()
    //eslint-disable-next-line
  }, [])

  /* useEffect(() => {
    localStorage.removeItem("examrandomid");
    setTimeout(() => {
      localStorage.setItem("examrandomid", randomid);
  }, 2000);
  }) */
  return (
    <div className="startquiz">
      <Container>
        <Row style={{ backgroundColor: '#000000' }}>
          <Col sm={12}>
            <div className="headerquizleft">
              <Link to="/ShowExams">
                <FontAwesomeIcon
                  icon={faClose}
                  style={{ color: 'white', fontSize: 28 }}
                ></FontAwesomeIcon>
              </Link>
            </div>
          </Col>
        </Row>
        <Row style={{ backgroundColor: '#000000', padding: 20 }}>
          {users.length > 1
            ? users.map((result) => {
                if (result.status === 'Recentactivity') {
                  return (
                    <>
                      <Col sm={4}>
                        <Card
                          className="carddiv"
                          style={{
                            borderWidth: 1,
                            borderColor: '#212121',
                            backgroundColor: '#212121',
                          }}
                        >
                          <Examimage data={result.examid} />
                          <Card.Body className="carddiv">
                            <Card.Title style={{ color: '#ffffff' }}>
                              {' '}
                              {examname} {result.examname}
                            </Card.Title>
                            <Link to={'/Startquiztwo/' + result.examid}> </Link>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col sm={4}>
                        <div className="playbuttondiv">
                          {totalquiz < playcount ? (
                            <>
                              <p style={{ color: '#ffffff', padding: 10 }}>
                                You already Played{' '}
                              </p>
                              <Link
                                to={
                                  '/Startquiztwo/' +
                                  result.examid +
                                  '/' +
                                  totalquiz +
                                  '/' +
                                  playcount
                                }
                                style={{ textDecoration: 'none' }}
                              >
                                <button
                                  class="primarybutton"
                                  data-v-dd58280e=""
                                >
                                  <i
                                    class="play-icon icon-fas-play"
                                    data-v-dd58280e=""
                                  ></i>{' '}
                                  Play Again
                                </button>
                              </Link>
                            </>
                          ) : (
                            <div>
                              {examstatus === 'Draft' ? (
                                <p style={{ color: '#ffffff', padding: 10 }}>
                                  Teacher will publish exam soon
                                </p>
                              ) : (
                                <Link
                                  to={
                                    '/Startquiztwo/' +
                                    result.examid +
                                    '/' +
                                    totalquiz +
                                    '/' +
                                    playcount
                                  }
                                  style={{ textDecoration: 'none' }}
                                >
                                  <button
                                    class="primarybutton"
                                    data-v-dd58280e=""
                                  >
                                    <i
                                      class="play-icon icon-fas-play"
                                      data-v-dd58280e=""
                                    ></i>{' '}
                                    Start{' '}
                                  </button>
                                </Link>
                              )}
                            </div>
                          )}
                        </div>
                      </Col>
                    </>
                  )
                } else {
                  return null
                }
              })
            : users.length === 1 &&
              users.map((result) => {
                return (
                  <>
                    <Col sm={4}>
                      <Card
                        className="carddiv"
                        style={{
                          borderWidth: 1,
                          borderColor: '#212121',
                          backgroundColor: '#212121',
                        }}
                      >
                        <Examimage data={result.examid} />
                        <Card.Body className="carddiv">
                          <Card.Title style={{ color: '#ffffff' }}>
                            {' '}
                            {examname} {result.examname}
                          </Card.Title>
                          <Link to={'/Startquiztwo/' + result.examid}> </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm={4}>
                      <div className="playbuttondiv">
                        {totalquiz < playcount ? (
                          <>
                            <p style={{ color: '#ffffff', padding: 10 }}>
                              You already Played{' '}
                            </p>
                            <Link
                              to={
                                '/Startquiztwo/' +
                                result.examid +
                                '/' +
                                totalquiz +
                                '/' +
                                1
                              }
                              style={{ textDecoration: 'none' }}
                            >
                              <button class="primarybutton" data-v-dd58280e="">
                                <i
                                  class="play-icon icon-fas-play"
                                  data-v-dd58280e=""
                                ></i>{' '}
                                Play Again
                              </button>
                            </Link>
                          </>
                        ) : (
                          <div>
                            {examstatus === 'Draft' ? (
                              <p style={{ color: '#ffffff', padding: 10 }}>
                                Teacher will publish exam soon
                              </p>
                            ) : (
                              <Link
                                to={
                                  '/Startquiztwo/' +
                                  result.examid +
                                  '/' +
                                  totalquiz +
                                  '/' +
                                  playcount
                                }
                                style={{ textDecoration: 'none' }}
                              >
                                <button
                                  class="primarybutton"
                                  data-v-dd58280e=""
                                >
                                  <i
                                    class="play-icon icon-fas-play"
                                    data-v-dd58280e=""
                                  ></i>{' '}
                                  Start{' '}
                                </button>
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </Col>
                  </>
                )
              })}
          {users.length === 0 && (
            <>
              <Col sm={4}>
                <Card
                  className="carddiv"
                  style={{
                    borderWidth: 1,
                    borderColor: '#212121',
                    backgroundColor: '#212121',
                  }}
                >
                  <Examimage data={examid} />
                  <Card.Body className="carddiv">
                    <Card.Title style={{ color: '#ffffff' }}>
                      {' '}
                      {examname}
                    </Card.Title>
                    <Link to={'/Startquiztwo/' + examid}> </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <div className="playbuttondiv">
                  {totalquiz < playcount ? (
                    <>
                      <p style={{ color: '#ffffff', padding: 10 }}>
                        You already Played{' '}
                      </p>
                    </>
                  ) : (
                    <div>
                      {examstatus === 'Draft' ? (
                        <p style={{ color: '#ffffff', padding: 10 }}>
                          Teacher will publish exam soon
                        </p>
                      ) : (
                        <Link
                          to={
                            '/Startquiztwo/' +
                            examid +
                            '/' +
                            totalquiz +
                            '/' +
                            playcount
                          }
                          style={{ textDecoration: 'none' }}
                        >
                          <button class="primarybutton" data-v-dd58280e="">
                            <i
                              class="play-icon icon-fas-play"
                              data-v-dd58280e=""
                            ></i>{' '}
                            Start{' '}
                          </button>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default Startquiz
