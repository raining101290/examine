import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faMusic, faSave } from '@fortawesome/free-solid-svg-icons'
import * as base from '../global'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Parser from 'html-react-parser' // render HTML
import Modal from 'react-modal'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { StaticMathField } from 'react-mathquill'
import 'katex/dist/katex.min.css'
//import { InlineMath, BlockMath } from 'react-katex';
//import { InlineMath } from 'react-katex'

const modules = {
  toolbar: [
    // [{ font: [] }],
    //   [{ header: [1, 2, 3, 4, 5, 6, false] }],
    //   ["bold", "italic", "underline", "strike"],
    //   [{ color: [] }, { background: [] }],
    //  [{ script:  "sub" }, { script:  "super" }],
    //  ["blockquote", "code-block"],
    //  [{ list:  "ordered" }, { list:  "bullet" }],
    //  [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
    //  ["link", "image", "video"],
    //  ["clean"],
  ],
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const Startquiztwo = (props) => {
  const history = useHistory()

  const [examdb, setExamdb] = useState([])
  const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  const [examid, setExamid] = useState(props.match.params.id)
  //  const [serialid, setSerialid] = useState(1);
  let getdataserial = parseInt(props.match.params.idss)
  const [serialid, setSerialid] = useState(getdataserial) // get serial from startquiz page

  const [totalquestion, setTotalquestion] = useState(0)
  const [answer, setAnswer] = useState('')
  const [studentchoose, setStudentchoose] = useState('stop')
  const [totalquiz, setTotalquiz] = useState(props.match.params.ids)
  const [writtingtext, setWrittingtext] = useState('')
  const [fillinthegapanswer, setFillinthegapanswer] = useState('')
  const [mcquseranswer, setMcquseranswer] = useState('')
  const [obid, setObid] = useState('')
  const [quiztype, setQuiztype] = useState('')
  const [useranswer, setUseranswer] = useState('')
  const [correctanswerschoose, setCorrectanswerschoose] = useState('')

  const [points, setPoints] = useState(0)
  const [writtinganswertypeuser, setWrittinganswertypeuser] = useState('')
  const [questiontime, setQuestiontime] = useState('')
  const [questionAimage, setQuestionAimage] = useState('')
  const [previewA, setPreviewA] = useState('')

  const [firttimeload, setFirsttimeload] = useState(0)
  const [Rightone, setRightone] = useState('')
  const [Righttwo, setRighttwo] = useState('')
  const [Rightthree, setRightthree] = useState('')
  const [Rightfour, setRightfour] = useState('')
  const [Rightfive, setRightfive] = useState('')
  const [isloading, setIsloading] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [isOpenquestionimage, setIsOpenquestionimage] = useState(false)

  const getData = () => {
    // alert(serialid)
    setIsloading(true)
    //  console.log('second time ....data....' + firttimeload)
    //  console.log('getdata..second...' + base.BASE_URL + '/findfirstquestion/' + examid + '/' + studentid + '/' + serialid + '/1')
    axios
      .get(
        base.BASE_URL +
          '/findfirstquestion/' +
          examid +
          '/' +
          studentid +
          '/' +
          serialid +
          '/1',
        {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      .then((res) => {
        //console.log('kkk....' + res.data)
        setExamdb(res.data)
        if (res.data.length > 0) {
          setObid(res.data[0]._id)
          setAnswer(res.data[0].Answer)
          setQuiztype(res.data[0].quiztype)
          setPoints(res.data[0].point)
          setWrittinganswertypeuser(res.data[0].writtinganswertype)
          setQuestiontime(res.data[0].questiontime)
          setTotalquestion(res.data.length)
          // setCounter(res.data[0].questiontime);
          setFirsttimeload(1)
          // setSerialid(serialid+1)
          setIsloading(false)
        } else {
          setIsloading(false)
          //result page
          // setIsresultvisible(true);
          //update exam status as finish exam
          ///////////////////////////////////////////////////////

          axios
            .get(
              base.BASE_URL + '/updateexamasfinish/' + examid + '/' + studentid,
              {
                headers: {
                  authorization: `bearer ${localStorage.getItem('token')}`,
                },
              },
            )
            .then((res) => {
              console.log('Read....' + res.data)
            })

          ///////////////////////////////////////////////////////
          history.push('/Resultpage/' + examid)
        }
      })
  }

  useEffect(() => {
    // alert(localStorage.getItem('examrandomid'))
    if (localStorage.getItem('examrandomid') === null) {
    }
  })

  useEffect(() => {
    // setSerialid(serialid + 1)
    getData()
    // return () => getData();
  }, [serialid])

  const Nextbtn = () => {
    setSerialid(serialid + 1)
  }

  const getid = (A) => {
    if (quiztype === 'MCQ') {
      console.log('..MCQ...' + A)
      setMcquseranswer(A)
      if (A === answer) {
        setUseranswer('Correct')
        setStudentchoose('correct')
        let correct = 'Correct'
        insertqestionMCQ(A, correct)
        // setIsOpen(true);
        setTimeout(() => {
          //setStudentchoose('stop');
          //  setIsOpen(false);
        }, 2000)
        // getData()
        setSerialid(serialid + 1)
      } else {
        let correct = 'Incorrect'
        setUseranswer('Incorrect')
        setStudentchoose('incorrect')
        insertqestionMCQ(A, correct)
        // setIsOpen(true);
        setTimeout(() => {
          //setStudentchoose('stop');
          // setIsOpen(false);
        }, 2000)
        setSerialid(serialid + 1)
        // getData()
      }
    } else if (quiztype === 'Fill in the Gap') {
      //alert(fillinthegapanswer + '/' + answer)
      if (fillinthegapanswer === answer) {
        //alert('Correct')
        setCorrectanswerschoose('Correct')
        setStudentchoose('correct')
        const choseanswer = 'correct'
        /*    setTimeout(() => {
                       setStudentchoose('stop');
                   }, 2000); */
        insertqestion_fillinthegaps(choseanswer)
        // setFillinthegapanswer('Fill in the Gaps');
        // getData()
        setSerialid(serialid + 1)
      } else {
        // alert('incorrect')
        setCorrectanswerschoose('Incorrect')
        setStudentchoose('incorrect')
        const choseanswer = 'Incorrect'
        /*   setTimeout(() => {
                      setStudentchoose('stop');
                  }, 2000); */
        insertqestion_fillinthegaps(choseanswer)
        // setFillinthegapanswer('Fill in the Gaps');
        setSerialid(serialid + 1)
        // getData()
      }
    } else if (quiztype === 'Writting Test') {
      axios
        .post(
          base.BASE_URL + '/playingquizinsert',
          {
            quizid: obid,
            useranswer: writtingtext,
            studentid: studentid,
            examid: examid,
            examrandomid: localStorage.getItem('examrandomid'),
          },
          {
            headers: {
              authorization: `bearer ${localStorage.getItem('token')}`,
            },
          },
        )
        .then(
          (response) => {
            setWrittingtext('')
            if (response.data.message === 'save') {
            } else if (response.data === 'notfound') {
            }
            setSerialid(serialid + 1)
          },
          (error) => {
            console.log(error)
          },
        )
    }
    //alert(A)
    ///////check question answer

    //////end check
  }
  const insertmatchfirst = (answerid) => {
    // alert(answerid)
    axios
      .post(
        base.BASE_URL + '/insertMatch',
        {
          //insertmatchfirst
          answerid: answerid,
          studentid: studentid,
          examid: examid,
          quizid: obid,
          Rightone: Rightone,
          Righttwo: Righttwo,
          Rightthree: Rightthree,
          Rightfour: Rightfour,
          Rightfive: Rightfive,
          examrandomid: localStorage.getItem('examrandomid'),
        },
        {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      .then(
        (response) => {
          setSerialid(serialid + 1)
          setIsloading(false)
          if (response.data.message === 'save') {
          } else if (response.data === 'notfound') {
          }
        },
        (error) => {
          console.log(error)
        },
      )
  }
  const insertMatch = () => {
    setIsloading(true)
    axios
      .post(
        base.BASE_URL + '/insertmatchfirst',
        {
          studentid: studentid,
          examid: examid,
          quizid: obid,
          examrandomid: localStorage.getItem('examrandomid'),
        },
        {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      .then(
        (response) => {
          // setSerialid(serialid+1);
          if (response.data.message === 'save') {
            ///  alert(response.data.data._id)
            insertmatchfirst(response.data.data._id)
          } else if (response.data === 'notfound') {
          }
        },
        (error) => {
          console.log(error)
        },
      )
  }
  const insertqestionMCQ = (A, correct) => {
    // alert(A)
    //playinsertmcq
    if (correct === 'Correct') {
      var marks = '1'
    } else {
      var marks = '0'
    }
    axios
      .post(
        base.BASE_URL + '/playinsertmcq',
        {
          quizid: obid,
          useranswer: A,
          studentid: studentid,
          examid: examid,
          answertype: correct,
          examrandomid: localStorage.getItem('examrandomid'),
          marks: marks,
        },
        {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      .then(
        (response) => {
          if (response.data.message === 'save') {
          } else if (response.data === 'notfound') {
          }
        },
        (error) => {
          console.log(error)
        },
      )
  }
  const insertqestion_fillinthegaps = (choseanswer, e) => {
    //  alert(choseanswer);
    axios
      .post(
        base.BASE_URL + '/playinsertfillinthegap',
        {
          quizid: obid,
          useranswer: fillinthegapanswer,
          studentid: studentid,
          examid: examid,
          answertype: choseanswer,
          examrandomid: localStorage.getItem('examrandomid'),
        },
        {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      .then(
        (response) => {
          // fillinthegapanswer.value= '';
          //alert(fillinthegapanswer)
          setFillinthegapanswer('')
          if (response.data.message === 'save') {
          } else if (response.data === 'notfound') {
          }
        },
        (error) => {
          console.log(error)
        },
      )
  }

  const playwrittingtest = () => {
    const question = 'A'
    getid(question)
  }
  const playwrittingtestimage = () => {
    setSerialid(serialid + 1)
    setPreviewA('')
  }
  const playfillinthegap = () => {
    const question = 'A'
    getid(question)
  }
  const playA = () => {
    const question = 'A'
    getid(question)
  }
  const playB = () => {
    const question = 'B'
    getid(question)
  }
  const playC = () => {
    //  alert('C' + serialid);
    // setSerialid(serialid + 1);
    const question = 'C'
    getid(question)
    // getData()
  }
  const playD = () => {
    const question = 'D'
    getid(question)
  }
  /*  handleChange1 (html) {
         this.setState({ editorHtml1: html });
     } */
  const handlefillinthegaptext = (html) => {
    setFillinthegapanswer(html)
  }

  const handlewrittingtest = (html) => {
    // alert(html)
    setWrittingtext(html)
  }

  const fileSelectA = (event) => {
    if (obid === '') {
      alert('Insert the file')
    } else {
      ////////////////////////////////////////
      // this.setState({ questionAimage: event.target.files[0],  questionimageupload_loader: true })
      setQuestionAimage(event.target.files[0])
      console.log(event.target.files[0])
      // image preview
      var file = event.target.files[0]
      var reader = new FileReader()
      var url = reader.readAsDataURL(file)

      reader.onloadend = function (e) {
        /*    this.setState({
                      previewA: [reader.result]
                  })  */
        setPreviewA([reader.result])
      }.bind(this)
      console.log(url) // Would see a path?
      // end image previou
      //////////upload
      const fd = new FormData()
      fd.append('profileImg', event.target.files[0], event.target.files[0].name)
      fd.append('autoincrement', obid)
      fd.append('examid', examid)
      fd.append('examrandomid', localStorage.getItem('examrandomid'))
      fd.append('Atype', '')
      fd.append('studentid', localStorage.getItem('studentid'))
      fd.append('useranswer', 'x')
      axios
        .post(base.BASE_URL + '/Aimageupload_useranswerfileupload', fd)
        .then((res) => {
          // alert(res.message);
          if (res.status === '200') {
            //this.setState({ questionimageupload_loader: false })
          } else {
            this.setState({ questionimageupload_loader: false })
            // alert('Failed To Upload')
          }
          console.log(res)
        })

      ///////////////////////////////////////
    }
    ////////////
  }
  /////////////////////////////////////////////////////////////////////////
  const MyTrim = (value) => {
    const abc = value?.replace(/\\n/g, '')
    return abc?.replace(/[\n\r]+/g, '')
    //return value
  }
  return (
    <div className="fill-window">
      <Container style={{ backgroundColor: '#5d2057' }}>
        {/*      <div style={{ height: '10%', backgroundColor: '#000000' }}> */}
        <Row style={{ marginBottom: 10 }}>
          <Col xs={6} sm={4}>
            <div className="headerquizleft">
              <Link
                to={
                  '/Startquizsaveexits/' +
                  examid +
                  '/' +
                  serialid +
                  '/' +
                  totalquiz
                }
                title="save and Exit"
              >
                <FontAwesomeIcon
                  icon={faSave}
                  style={{ color: 'white', fontSize: 28 }}
                ></FontAwesomeIcon>
              </Link>
            </div>
            <div className="headerquizleft">
              <Link to="">
                <FontAwesomeIcon
                  icon={faMusic}
                  style={{
                    color: 'white',
                    fontSize: 24,
                    marginTop: 3,
                    marginLeft: -5,
                  }}
                ></FontAwesomeIcon>
              </Link>
            </div>
            <div className="headerquizleft">
              <p style={{ fontSize: 10 }}>
                {serialid} / {totalquiz}
              </p>
            </div>
          </Col>
          <Col xs={4} sm={4}>
            <div className="headerquizpoint">
              <p style={{ fontSize: 16 }}>Points : {points}</p>
            </div>
            <div className="headerquiztime" onClick={Nextbtn}>
              <p style={{ fontSize: 16, textAlign: 'center' }}>
                {' '}
                Next {/* {minutes}:{seconds}  */}{' '}
              </p>
            </div>
          </Col>
          <Col xs={2} sm={4}>
            <div className="headerquizright">
              <Link
                to={
                  '/Startquizsaveexits/' +
                  examid +
                  '/' +
                  serialid +
                  '/' +
                  totalquiz
                }
                title="Close"
              >
                <FontAwesomeIcon
                  icon={faClose}
                  style={{ color: 'white', fontSize: 28 }}
                ></FontAwesomeIcon>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          {isloading && <span className="spinner-grow spinner-grow-sm"></span>}
        </Row>
        {isloading ? (
          <span className="spinner-grow spinner-grow-sm"></span>
        ) : (
          examdb.map((result) => {
            return (
              <div className="mcqexampage_divsecond">
                <Row>
                  {result.questiontype === 'Image and Text' ? (
                    <Col xs={12} sm={12}>
                      <div
                        style={{
                          textAlign: 'center',
                          marginBottom: 50,
                          width: 250,
                          height: 150,
                          alignContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <img
                          alt=""
                          src={base.BASE_URL + result.questionimage}
                          style={{ resize: 'cover', width: '100%' }}
                          onClick={() => setIsOpenquestionimage(true)}
                        />
                      </div>
                      {isOpenquestionimage && (
                        <Lightbox
                          imageTitle="Question Image"
                          imageCaption=""
                          mainSrc={base.BASE_URL + result.questionimage}
                          nextSrc=""
                          prevSrc=""
                          onCloseRequest={() => setIsOpenquestionimage(false)}
                          /*  onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
                                                     onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)} */
                        />
                      )}
                    </Col>
                  ) : (
                    ''
                  )}
                  {result.questiontype === 'Image' ? (
                    <Col xs={12} sm={12}>
                      <div
                        style={{
                          textAlign: 'center',
                          marginBottom: 50,
                        }}
                      >
                        <img
                          alt=""
                          src={base.BASE_URL + result.questionimage}
                          style={{ width: 250, height: 250 }}
                          onClick={() => setIsOpenquestionimage(true)}
                        />
                      </div>
                      {isOpenquestionimage && (
                        <Lightbox
                          imageTitle="Question Image"
                          imageCaption=""
                          mainSrc={base.BASE_URL + result.questionimage}
                          nextSrc=""
                          prevSrc=""
                          onCloseRequest={() => setIsOpenquestionimage(false)}
                        />
                      )}
                    </Col>
                  ) : (
                    ''
                  )}
                  <table striped bordered hover>
                    {result.questiontype1 === 'Text' ? (
                      <tr style={{ height: 30 }}>
                        <td style={{ textAlign: 'center', color: '#ffffff' }}>
                          {result.questiontitle}
                        </td>
                      </tr>
                    ) : (
                      <tr style={{ height: 30 }}>
                        <td style={{ textAlign: 'center', color: '#ffffff' }}>
                          <StaticMathField>
                            {result.questiontitle}
                          </StaticMathField>
                        </td>
                      </tr>
                    )}
                    {result.questiontype2 === 'Text' ? (
                      <tr style={{ height: 30 }}>
                        <td style={{ textAlign: 'center', color: '#ffffff' }}>
                          {result.questiontitle2}
                        </td>
                      </tr>
                    ) : (
                      <tr style={{ height: 30 }}>
                        <td style={{ textAlign: 'center', color: '#ffffff' }}>
                          <StaticMathField>
                            {result.questiontitle2}
                          </StaticMathField>
                        </td>
                      </tr>
                    )}
                    {result.questiontype3 === 'Text' ? (
                      <tr style={{ height: 30 }}>
                        <td style={{ textAlign: 'center', color: '#ffffff' }}>
                          {result.questiontitle3}{' '}
                        </td>
                      </tr>
                    ) : (
                      <tr style={{ height: 30 }}>
                        <td style={{ textAlign: 'center', color: '#ffffff' }}>
                          <StaticMathField>
                            {result.questiontitle3}
                          </StaticMathField>
                        </td>
                      </tr>
                    )}
                    {result.questiontype4 === 'Text' ? (
                      <tr style={{ height: 30 }}>
                        <td style={{ textAlign: 'center', color: '#ffffff' }}>
                          {result.questiontitle4}{' '}
                        </td>
                      </tr>
                    ) : (
                      <tr style={{ height: 30 }}>
                        <td style={{ textAlign: 'center', color: '#ffffff' }}>
                          <StaticMathField>
                            {result.questiontitle4}
                          </StaticMathField>{' '}
                        </td>
                      </tr>
                    )}
                    {result.questiontype5 === 'Text' ? (
                      <tr style={{ height: 30 }}>
                        <td style={{ textAlign: 'center', color: '#ffffff' }}>
                          {result.questiontitle5}
                        </td>
                      </tr>
                    ) : (
                      <tr style={{ height: 30 }}>
                        <td style={{ textAlign: 'center', color: '#ffffff' }}>
                          <StaticMathField>
                            {result.questiontitle5}
                          </StaticMathField>{' '}
                        </td>
                      </tr>
                    )}
                  </table>
                </Row>
                <Row>
                  <Col>
                    {result.quiztype === 'Match' ? (
                      <div
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '100%',
                          display: 'flex',
                        }}
                      >
                        <table style={{ width: '100%', padding: 20 }}>
                          <tr>
                            <td>
                              <p style={{ color: '#ffffff' }}> Column A </p>
                            </td>
                            <td>
                              <p style={{ color: '#ffffff' }}> Column B </p>
                            </td>
                            <td>
                              <p style={{ color: '#ffffff' }}>
                                {' '}
                                select the right answer with column A{' '}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                style={{ color: '#ffffff', marginBottom: 5 }}
                              >
                                {Parser(result.questiontype)}
                              </div>
                            </td>
                            <td>
                              {/*  <Draggable> */}
                              <div
                                style={{ color: '#ffffff', marginBottom: 5 }}
                              >
                                {Parser(MyTrim(result.Btitle))}
                              </div>
                              {/*  </Draggable> */}
                            </td>
                            <td>
                              <select
                                style={{
                                  padding: 6,
                                  backgroundColor: '#f2f2f2',
                                  fontSize: 10,
                                }}
                                className="form-control"
                                onChange={(e) => {
                                  setRightone(e.target.value)
                                }}
                              >
                                <option value="">
                                  Select Match with Column A
                                </option>

                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                style={{ color: '#ffffff', marginBottom: 5 }}
                              >
                                {Parser(result.Atype)}
                              </div>
                            </td>
                            <td>
                              <div
                                style={{ color: '#ffffff', marginBottom: 5 }}
                              >
                                {Parser(result.Bimage)}
                              </div>
                            </td>
                            <td>
                              <select
                                style={{
                                  padding: 6,
                                  backgroundColor: '#f2f2f2',
                                  fontSize: 10,
                                }}
                                onChange={(e) => {
                                  setRighttwo(e.target.value)
                                }}
                                className="form-control"
                              >
                                <option value="">
                                  Select Match with Column A
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                style={{ color: '#ffffff', marginBottom: 5 }}
                              >
                                {Parser(result.Atitle)}
                              </div>
                            </td>
                            <td>
                              <div
                                style={{ color: '#ffffff', marginBottom: 5 }}
                              >
                                {Parser(result.Ctype)}
                              </div>
                            </td>
                            <td>
                              <select
                                style={{
                                  padding: 6,
                                  backgroundColor: '#f2f2f2',
                                  fontSize: 10,
                                }}
                                onChange={(e) => {
                                  setRightthree(e.target.value)
                                }}
                                className="form-control"
                              >
                                <option value="">
                                  Select Match with Column A
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                style={{ color: '#ffffff', marginBottom: 5 }}
                              >
                                {Parser(result.Aimage)}
                              </div>
                            </td>
                            <td>
                              <div
                                style={{ color: '#ffffff', marginBottom: 5 }}
                              >
                                {Parser(MyTrim(result.Ctitle))}
                              </div>
                            </td>
                            <td>
                              <select
                                style={{
                                  padding: 6,
                                  backgroundColor: '#f2f2f2',
                                  fontSize: 10,
                                }}
                                onChange={(e) => {
                                  setRightfour(e.target.value)
                                }}
                                className="form-control"
                              >
                                <option value="">
                                  Select Match with Column A
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                style={{ color: '#ffffff', marginBottom: 5 }}
                              >
                                {Parser(result.Btype)}
                              </div>
                            </td>
                            <td>
                              <div
                                style={{ color: '#ffffff', marginBottom: 5 }}
                              >
                                {Parser(result.Cimage)}
                              </div>
                            </td>
                            <td>
                              <select
                                style={{
                                  padding: 6,
                                  backgroundColor: '#f2f2f2',
                                  fontSize: 10,
                                }}
                                onChange={(e) => {
                                  setRightfive(e.target.value)
                                }}
                                className="form-control"
                              >
                                <option value="">
                                  Select Match with Column A
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="3">
                              <Button
                                onClick={insertMatch}
                                style={{ marginTop: 40 }}
                              >
                                Submit
                              </Button>
                            </td>
                          </tr>
                        </table>
                      </div>
                    ) : (
                      ''
                    )}
                  </Col>
                </Row>

                {quiztype === 'Fill in the Gap' ? (
                  <Row>
                    <Col>
                      <div className="writtingtext">
                        <div style={{ marginBottom: 10, display: 'flex' }}>
                          <ReactQuill
                            modules={modules}
                            theme="snow"
                            placeholder=""
                            style={{
                              width: '100%',
                              fontSize: 12,
                              color: '#ffffff',
                            }}
                            value={fillinthegapanswer}
                            onChange={handlefillinthegaptext}
                          />
                        </div>

                        <Button
                          onClick={playfillinthegap}
                          style={{ marginTop: 40 }}
                        >
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  ''
                )}
                {quiztype === 'Writting Test' ? (
                  <div style={{ width: '100%', overflow: 'auto' }}>
                    {writtinganswertypeuser === 'Text' ? (
                      <Row>
                        <Col
                          xs={12}
                          sm={12}
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <div
                            className="writtingtext"
                            style={{ width: '100%' }}
                          >
                            <div style={{ marginBottom: 10, display: 'flex' }}>
                              <ReactQuill
                                modules={modules}
                                theme="snow"
                                placeholder=""
                                style={{
                                  width: '100%',
                                  fontSize: 12,
                                  color: '#ffffff',
                                }}
                                value={writtingtext}
                                onChange={handlewrittingtest}
                              />
                            </div>

                            <Button
                              onClick={playwrittingtest}
                              style={{ marginTop: 40 }}
                            >
                              Submit
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    ) : (
                      ''
                    )}

                    {writtinganswertypeuser === 'Image' ? (
                      <div
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          display: 'flex',
                        }}
                      >
                        <div style={{ width: 250, textAlign: 'center' }}>
                          <table>
                            <tr>
                              <td>
                                <input
                                  type="file"
                                  onChange={fileSelectA}
                                  className="form-control"
                                  style={{
                                    marginTop: 50,
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {previewA === '' ? (
                                  ''
                                ) : (
                                  <img
                                    alt=""
                                    src={previewA}
                                    style={{
                                      width: 50,
                                      height: 50,
                                      marginTop: 7,
                                    }}
                                  />
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Button
                                  onClick={playwrittingtestimage}
                                  style={{ marginTop: 20 }}
                                >
                                  Submit{' '}
                                </Button>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  ''
                )}
                {quiztype === 'MCQ' ? (
                  <Row>
                    <Col xs={6} sm={3}>
                      <Link
                        to="#"
                        onClick={playA}
                        style={{ color: '#ffffff', textDecoration: 'none' }}
                      >
                        <div className="playA text-center">
                          {result.Atype === 'Math' ? (
                            <StaticMathField>
                              {MyTrim(result.Atitle)}
                            </StaticMathField>
                          ) : (
                            <p> {MyTrim(result.Atitle)}</p>
                          )}
                          {result.Atype === 'Image and Text' ? (
                            <img
                              alt=""
                              src={base.BASE_URL + result.Aimage}
                              style={{ width: '100%', height: '100%' }}
                            />
                          ) : (
                            ''
                          )}
                          {result.Atype === 'Image' ? (
                            <img
                              alt=""
                              src={base.BASE_URL + result.Aimage}
                              style={{ width: 100, height: 100 }}
                            />
                          ) : (
                            ''
                          )}
                        </div>
                      </Link>
                    </Col>
                    <Col xs={6} sm={3}>
                      <Link
                        to="#"
                        onClick={playB}
                        style={{ color: '#ffffff', textDecoration: 'none' }}
                      >
                        <div className="playB">
                          {result.Btype === 'Math' ? (
                            <StaticMathField>
                              {MyTrim(result.Btitle)}
                            </StaticMathField>
                          ) : (
                            <p> {MyTrim(result.Btitle)}</p>
                          )}
                          {result.Btype === 'Image and Text' ? (
                            <img
                              alt=""
                              src={base.BASE_URL + result.Bimage}
                              style={{ width: '100%', height: '100%' }}
                            />
                          ) : (
                            ''
                          )}
                          {result.Btype === 'Image' ? (
                            <img
                              alt=""
                              src={base.BASE_URL + result.Bimage}
                              style={{ width: 100, height: 100 }}
                            />
                          ) : (
                            ''
                          )}
                        </div>
                      </Link>
                    </Col>
                    <Col xs={6} sm={3}>
                      <Link
                        to="#"
                        onClick={playC}
                        style={{ color: '#ffffff', textDecoration: 'none' }}
                      >
                        <div className="playC">
                          {result.Ctype === 'Math' ? (
                            <StaticMathField>{result.Ctitle}</StaticMathField>
                          ) : (
                            <p> {MyTrim(result.Ctitle)}</p>
                          )}
                          {result.Ctype === 'Image and Text' ? (
                            <img
                              alt=""
                              src={base.BASE_URL + result.Cimage}
                              style={{ width: '100%', height: '100%' }}
                            />
                          ) : (
                            ''
                          )}
                          {result.Ctype === 'Image' ? (
                            <img
                              alt=""
                              src={base.BASE_URL + result.Cimage}
                              style={{ width: 100, height: 100 }}
                            />
                          ) : (
                            ''
                          )}
                        </div>
                      </Link>
                    </Col>
                    <Col xs={6} sm={3}>
                      <Link
                        to="#"
                        onClick={playD}
                        style={{ color: '#ffffff', textDecoration: 'none' }}
                      >
                        <div className="playD">
                          {result.Dtype === 'Math' ? (
                            <StaticMathField>
                              {MyTrim(result.Dtitle)}
                            </StaticMathField>
                          ) : (
                            <p> {MyTrim(result.Dtitle)}</p>
                          )}
                          {result.Dtype === 'Image and Text' ? (
                            <img
                              alt=""
                              src={base.BASE_URL + result.Dimage}
                              style={{ width: '100%', height: '100%' }}
                            />
                          ) : (
                            ''
                          )}
                          {result.Dtype === 'Image' ? (
                            <img
                              alt=""
                              src={base.BASE_URL + result.Dimage}
                              style={{ width: 100, height: 100 }}
                            />
                          ) : (
                            ''
                          )}
                        </div>
                      </Link>
                    </Col>
                  </Row>
                ) : (
                  ''
                )}
              </div>
            )
          })
        )}

        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {studentchoose === 'correct' ? (
            <div style={{ height: 300, width: 300 }}>
              <div className="correctanswer">
                <p>Correct Answer</p>
              </div>
            </div>
          ) : (
            ''
          )}
          {studentchoose === 'incorrect' ? (
            <div style={{ height: 300, width: 300 }}>
              <div className="wronganswer">
                <p>Incorrect Answer</p>
              </div>
            </div>
          ) : (
            ''
          )}
        </Modal>
      </Container>
    </div>
  )
}

export default Startquiztwo
