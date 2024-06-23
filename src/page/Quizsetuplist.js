//import React, { Component } from 'react';
import React, { useEffect, useState } from 'react'
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import Footer from './Footer'
import * as base from './global'
import { Link } from 'react-router-dom'
import axios from 'axios'
import IconButton from '@material-ui/core/IconButton'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Parser from 'html-react-parser' // render HTML
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEdit, faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import InputAdornment from '@material-ui/core/InputAdornment'
import Input from '@material-ui/core/Input'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { StaticMathField } from 'react-mathquill'
import { Facebook } from 'react-content-loader'
//import { MathJaxContext, MathJax } from 'better-react-mathjax'

function Quizsetuplist(props) {
  const [state, setData] = useState({ users: [] })
  //const [email, setEmail] = useState(localStorage.getItem('vendoremailaddress'))
  const [schoolid, setSchoolid] = useState(localStorage.getItem('schoolid'))
  const [examid, setExamid] = useState(props.match.params.id)
  const [examname, setExamname] = useState(props.match.params.ids)
  const [isdelete, setIsdelete] = useState(false)
  const [isloading, setIsloading] = useState(false)
  //const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2')
  const [isOpenquestionimage, setIsOpenquestionimage] = useState(false)

  //   const [fromage, setFromage] = useState(props.match.params.frmid);
  //   const [toage, setToage] = useState(props.match.params.toid);

  const datagrid = async (pageNumber = 1) => {
    const api = await fetch(
      base.BASE_URL + '/quizlist/' + schoolid + '/' + examid,
    )
    //  console.log(await api.json());
    setData({
      users: await api.json(),
    })
  }

  const fetchData = async (pageNumber = 1) => {
    //  console.log(base.BASE_URL + '/quizlist/' + schoolid + '/' + examid)
    console.log(base.BASE_URL + '/quizlistview/' + examid)
    setIsloading(true)
    const api = await fetch(base.BASE_URL + '/quizlistview/' + examid)
    //  console.log(await api.json());
    setData({
      users: await api.json(),
    })
    setIsloading(false)
  }

  useEffect(() => {
    console.log('ddddpppp')
    console.log('school id : ' + schoolid)
    fetchData()
  }, [isdelete])

  const deleteEmployee = (id) => {
    var answer = window.confirm('Are you sure you want to delete ?')
    if (answer) {
      setIsloading(true)
      // true (paypal.me/andrewdhyder)
      axios
        .post(
          base.BASE_URL + '/delete_quiz',
          {
            id: id,
          },
          {
            headers: {
              authorization: `bearer ${localStorage.getItem('token')}`,
            },
          },
        )
        .then(
          (response) => {
            // alert('kkk')
            // if (response.data === "delete") {
            datagrid()
            setIsdelete(false)
            //}
            //else if (response.data === "notfound") {
            setIsloading(false)
            //}
          },
          (error) => {
            console.log(error)
          },
        )
    } else {
      ///////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////
    }
  }

  return (
    <div>
      <Header /> {/* Slider Menu */}
      <Container style={{ marginTop: 86 }}>
        <Row style={{ marginTop: 10 }}>
          <Col xs={2} sm={2} style={{ textAlign: 'left', padding: 20 }}>
            <Link to="/Examsetuplist" className="findbtn">
              <FontAwesomeIcon icon={{ faEdit }}></FontAwesomeIcon>
              Back
            </Link>
          </Col>
          <Col xs={6} sm={6} style={{ padding: 20 }}>
            <Input
              type="text"
              placeholder="Type Subject name and press enter"
              className="form-control "
              value={examname}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton className="passwordiconpage">
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{ color: 'silver', padding: 12, fontSize: 22 }}
                    ></FontAwesomeIcon>
                  </IconButton>
                </InputAdornment>
              }
            />
          </Col>
          <Col xs={4} sm={4} style={{ textAlign: 'right', padding: 20 }}>
            <Link
              to={'/Quizsetup/' + examid + '/' + examname}
              className="findbtn"
              style={{ marginBottom: 20 }}
            >
              Add Question
            </Link>
          </Col>
        </Row>{' '}
        {/* Row */}
        <div className="row">
          <div className="col-md-12 firstcolumn">
            <div className="col-md-12">
              {isloading ? (
                <Facebook />
              ) : state?.users ? (
                state?.users?.map((result, index) => (
                  <div
                    class="card position-relative"
                    style={{ marginBottom: 10 }}
                  >
                    <div class="card-header py-3">
                      <div style={{ display: 'flex' }}>
                        <div style={{ width: '60%' }}>
                          Question : {index + 1}
                        </div>
                        <div style={{ width: '35%' }}>
                          Question Type : {result.quiztype} , Marks :{' '}
                          {result.point}
                        </div>
                        <div style={{ display: 'flex' }}>
                          {result.quiztype === 'MCQ' ? (
                            <Link
                              variant="info"
                              to={
                                '/Mcqedit/' +
                                result._id +
                                '/' +
                                examid +
                                '/' +
                                examname
                              }
                              style={{ marginRight: 10 }}
                            >
                              <FontAwesomeIcon
                                icon={faEdit}
                                style={{ color: '#000', fontSize: 22 }}
                              ></FontAwesomeIcon>
                            </Link>
                          ) : (
                            ''
                          )}
                          {result.quiztype === 'Writting Test' ? (
                            <Link
                              variant="info"
                              to={
                                '/Writtingtestedit/' +
                                result._id +
                                '/' +
                                examid +
                                '/' +
                                examname
                              }
                              style={{ marginRight: 10 }}
                            >
                              <FontAwesomeIcon
                                icon={faEdit}
                                style={{ color: '#000', fontSize: 22 }}
                              ></FontAwesomeIcon>
                            </Link>
                          ) : (
                            ''
                          )}
                          {result.quiztype === 'Fill in the Gap' ? (
                            <Link
                              variant="info"
                              to={
                                '/Fillgapedit/' +
                                result._id +
                                '/' +
                                examid +
                                '/' +
                                examname
                              }
                              style={{ marginRight: 10 }}
                            >
                              <FontAwesomeIcon
                                icon={faEdit}
                                style={{ color: '#000', fontSize: 22 }}
                              ></FontAwesomeIcon>
                            </Link>
                          ) : (
                            ''
                          )}
                          {result.quiztype === 'Match' ? (
                            <Link
                              variant="info"
                              to={
                                '/Matchsetupedit/' +
                                result._id +
                                '/' +
                                examid +
                                '/' +
                                examname
                              }
                              style={{ marginRight: 10 }}
                            >
                              <FontAwesomeIcon
                                icon={faEdit}
                                style={{ color: '#000', fontSize: 22 }}
                              ></FontAwesomeIcon>
                            </Link>
                          ) : (
                            ''
                          )}

                          <Link
                            variant="info"
                            to="#"
                            onClick={() => deleteEmployee(result._id)}
                          >
                            <FontAwesomeIcon
                              icon={faDeleteLeft}
                              style={{ color: '#000', fontSize: 22 }}
                            ></FontAwesomeIcon>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <table
                        style={{
                          fontSize: 13,
                          width: '100%',
                          borderWidth: 1,
                          borderColor: 'red',
                        }}
                      >
                        <tr>
                          <td colSpan={4}>
                            <div className="mathall"></div>
                            <div className="mathall">
                              <table>
                                {result.questiontype1 === 'Text' ? (
                                  <tr>
                                    <td>{result.questiontitle}</td>
                                  </tr>
                                ) : (
                                  <tr>
                                    <td>
                                      <StaticMathField>
                                        {result.questiontitle}
                                      </StaticMathField>
                                    </td>
                                  </tr>
                                )}

                                {result.questiontype2 === 'Text' ? (
                                  <tr>
                                    <td>{result.questiontitle2}</td>
                                  </tr>
                                ) : (
                                  <tr>
                                    <td>
                                      <StaticMathField>
                                        {result.questiontitle2}
                                      </StaticMathField>
                                    </td>
                                  </tr>
                                )}
                                {result.questiontype3 === 'Text' ? (
                                  <tr>
                                    <td>{result.questiontitle3} </td>
                                  </tr>
                                ) : (
                                  <tr>
                                    <td>
                                      <StaticMathField>
                                        {result.questiontitle3}
                                      </StaticMathField>
                                    </td>
                                  </tr>
                                )}

                                {result.questiontype4 === 'Text' ? (
                                  <tr>
                                    <td> {result.questiontitle4} </td>
                                  </tr>
                                ) : (
                                  <tr>
                                    <td>
                                      <StaticMathField>
                                        {result.questiontitle4}
                                      </StaticMathField>{' '}
                                    </td>
                                  </tr>
                                )}
                                {result.questiontype5 === 'Text' ? (
                                  <tr>
                                    <td>{result.questiontitle5}</td>
                                  </tr>
                                ) : (
                                  <tr>
                                    <td>
                                      <StaticMathField>
                                        {result.questiontitle5}
                                      </StaticMathField>{' '}
                                    </td>
                                  </tr>
                                )}
                              </table>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4}>
                            {result.questionimage === 'x`' ? (
                              ''
                            ) : (
                              <img
                                alt=""
                                src={base.BASE_URL + result.questionimage}
                                style={{
                                  resize: 'contain',
                                  width: 300,
                                  height: 200,
                                }}
                                onClick={() => setIsOpenquestionimage(true)}
                              />
                            )}
                            {isOpenquestionimage && (
                              <Lightbox
                                imageTitle="Question Image"
                                imageCaption=""
                                mainSrc={base.BASE_URL + result.questionimage}
                                nextSrc=""
                                prevSrc=""
                                onCloseRequest={() =>
                                  setIsOpenquestionimage(false)
                                }
                                /*  onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
                                                                 onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)} */
                              />
                            )}
                          </td>
                        </tr>
                        {result.quiztype === 'Fill in the Gap' ? (
                          <div>
                            {/*  <tr>
                                                                        <td>
                                                                            {Parser(result.questiontitle)}

                                                                        </td>
                                                                    </tr> */}
                            <tr>
                              <td colSpan={2}>
                                <div
                                  style={{
                                    display: 'flex',
                                    alignContent: 'space-between',
                                  }}
                                >
                                  <div
                                    style={{ color: 'green', marginRight: 5 }}
                                  >
                                    Answer.
                                  </div>
                                  {result.writtinganswer}
                                </div>
                              </td>
                            </tr>
                          </div>
                        ) : (
                          <div></div>
                        )}

                        {result.quiztype === 'Writting Test' ? (
                          <tr>
                            <td colSpan={2}>
                              <div
                                style={{
                                  display: 'flex',
                                  alignContent: 'space-between',
                                }}
                              >
                                <div style={{ color: 'green', marginRight: 5 }}>
                                  Answer.
                                </div>
                                {result.writtinganswer}
                                {/* <StaticMathField>
       {result.writtinganswer}
    </StaticMathField> */}
                              </div>
                            </td>
                          </tr>
                        ) : (
                          ''
                        )}

                        {result.quiztype === 'MCQ' ? (
                          <div>
                            <tr>
                              <td style={{ width: '50%' }}>
                                <div style={{ display: 'flex' }}>
                                  {result.Answer === 'A' ? (
                                    <div className="bg-green"></div>
                                  ) : (
                                    <div className="bg-red"></div>
                                  )}
                                  {/*  {Parser(result.Atitle)} */}
                                  {result.Atype === 'Text' ? (
                                    <p>{result.Atitle}</p>
                                  ) : (
                                    <StaticMathField>
                                      {result.Atitle}
                                    </StaticMathField>
                                  )}
                                </div>

                                {result.Aimage === 'x' ? (
                                  ''
                                ) : (
                                  <img
                                    alt=""
                                    src={base.BASE_URL + result.Aimage}
                                    style={{ width: 50, height: 50 }}
                                  />
                                )}
                              </td>
                              <td>
                                <div style={{ display: 'flex', width: '100%' }}>
                                  {result.Answer === 'B' ? (
                                    <div className="bg-green"></div>
                                  ) : (
                                    <div className="bg-red"></div>
                                  )}
                                  {/*   {Parser(result.Btitle)} */}
                                  {result.Btype === 'Text' ? (
                                    <p>{result.Btitle}</p>
                                  ) : (
                                    <StaticMathField>
                                      {result.Btitle}
                                    </StaticMathField>
                                  )}
                                </div>

                                {result.Bimage === 'x' ? (
                                  ''
                                ) : (
                                  <img
                                    alt=""
                                    src={base.BASE_URL + result.Bimage}
                                    style={{ width: 50, height: 50 }}
                                  />
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div style={{ display: 'flex' }}>
                                  {result.Answer === 'C' ? (
                                    <div className="bg-green"></div>
                                  ) : (
                                    <div className="bg-red"></div>
                                  )}
                                  {result.Ctype === 'Text' ? (
                                    <p>{result.Ctitle}</p>
                                  ) : (
                                    <StaticMathField>
                                      {result.Ctitle}
                                    </StaticMathField>
                                  )}
                                </div>
                                {result.Cimage === 'x' ? (
                                  ''
                                ) : (
                                  <img
                                    alt=""
                                    src={base.BASE_URL + result.Cimage}
                                    style={{ width: 50, height: 50 }}
                                  />
                                )}
                              </td>
                              <td>
                                <div style={{ display: 'flex' }}>
                                  {result.Answer === 'D' ? (
                                    <div className="bg-green"></div>
                                  ) : (
                                    <div className="bg-red"></div>
                                  )}
                                  {result.Dtype === 'Text' ? (
                                    <p>{result.Dtitle}</p>
                                  ) : (
                                    <StaticMathField>
                                      {result.Dtitle}
                                    </StaticMathField>
                                  )}
                                </div>

                                {result.Dimage === 'x' ? (
                                  ''
                                ) : (
                                  <img
                                    alt=""
                                    src={base.BASE_URL + result.Dimage}
                                    style={{ width: 50, height: 50 }}
                                  />
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>Answer. {result.Answer}</td>
                            </tr>
                          </div>
                        ) : (
                          ''
                        )}

                        {result.quiztype === 'Match' ? (
                          <div>
                            <tr style={{ backgroundColor: 'silver' }}>
                              <td>Column A</td> <td>Column B</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FAF9F9' }}>
                              <td>
                                <div sytle={{ display: 'flex' }}>
                                  {Parser(result.questiontype)}
                                </div>{' '}
                              </td>
                              <td>
                                <div sytle={{ display: 'flex' }}>
                                  {' '}
                                  {Parser(result.Btitle)}
                                </div>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: 'silver' }}>
                              <td>
                                <div sytle={{ display: 'flex' }}>
                                  {' '}
                                  {Parser(result.Atype)}
                                </div>
                              </td>
                              <td>
                                <div sytle={{ display: 'flex' }}>
                                  {' '}
                                  {Parser(result.Bimage)}
                                </div>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#FAF9F9' }}>
                              <td>
                                <div sytle={{ display: 'flex' }}>
                                  {' '}
                                  {Parser(result.Atitle)}
                                </div>
                              </td>
                              <td>
                                <div sytle={{ display: 'flex' }}>
                                  {' '}
                                  {Parser(result.Ctype)}
                                </div>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: 'silver' }}>
                              <td>
                                <div sytle={{ display: 'flex' }}>
                                  {Parser(result.Aimage)}
                                </div>
                              </td>
                              <td>
                                <div sytle={{ display: 'flex' }}>
                                  {' '}
                                  {Parser(result.Ctitle)}
                                </div>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#FAF9F9' }}>
                              <td>
                                <div sytle={{ display: 'flex' }}>
                                  {Parser(result.Btype)}
                                </div>
                              </td>
                              <td>
                                <div sytle={{ display: 'flex' }}>
                                  {' '}
                                  {Parser(result.Cimage)}
                                </div>
                              </td>
                            </tr>
                          </div>
                        ) : (
                          ''
                        )}
                      </table>
                    </div>
                  </div>
                ))
              ) : (
                ''
              )}
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>{' '}
        {/* row */}
      </Container>
      <Footer />
    </div>
  )
}
export default Quizsetuplist
