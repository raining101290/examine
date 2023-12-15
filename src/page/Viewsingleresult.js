import React, { useState, useEffect } from 'react';
import { Offline, Online } from "react-detect-offline";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faFlag, faShare, faUser } from '@fortawesome/free-solid-svg-icons'
import * as base from "./global";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom';
import Parser from 'html-react-parser'; // render HTML 
import Studentname from './student/Studentname'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from 'react-bootstrap/Image'
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill'
import Modal from 'react-modal';
import Input from "@material-ui/core/Input";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Mcqresult from './viewresult/Mcqresult';
import Fillinthegap from './viewresult/Fillinthegap';
import Writtingtest from './viewresult/Writtingtest';
import Matchingviewpage from './viewresult/Matchingviewpage';

const Viewsingleresult = (props) => {
    const history = useHistory();
    let subtitle;

    const [studentid, setStudentid] = useState(props.match.params.ids);
    const [examrandomid, setExamrandomid] = useState(props.match.params.idss);
    const [examid, setExamid] = useState(props.match.params.id);
    const [serialid, setSerialid] = useState(1);

    const [totalquiz, setTotalquiz] = useState([]);
    const [state, setData] = useState({ users: [] });
    const [isOpenquestionimage, setIsOpenquestionimage] = useState(false);
    const [isOpenteacherimage, setIsOpenteacherimage] = useState(false);
    const dataURL = {
        "p1": props.match.params.id,
        "p2": props.match.params.ids,
        "p3": props.match.params.idss
    }
    {/*  <Link to={"/Markingwrittingexam/" + userdata._id + '/' + 
  props.match.params.id + '/' + props.match.params.ids + '/' + props.match.params.idss}>
          Marking
         </Link> */}
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const modules = {
        toolbar: [
            [{ font: [] }],
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
    };




    const gettotalquiz = () => {
        console.log(base.BASE_URL + '/gettotalquiz/' + examid)
        axios.get(base.BASE_URL + '/gettotalquiz/' + examid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)

            if (res.data.length > 0) {
                setTotalquiz(res.data.length);
            }
            else {

            }

        });
    }
    const getallquestionshow = async () => {
        console.log(base.BASE_URL + '/getresultpage/' + examid + '/' + studentid + '/' + examrandomid)
        const api = await fetch(base.BASE_URL + '/getresultpage/' + examid + '/' + studentid + '/' + examrandomid);
        //  console.log(await api.json());
        setData({
            users: await api.json()

        });

    };
    useEffect(() => {
        // gettotalquiz();
        getallquestionshow();
    }, [])
    useEffect(() => {
        gettotalquiz();
        //getallquestionshow();
    }, [])

    useEffect(() => {
        //getData();
    }, [serialid])


    const saveexit = () => {

        history.push('/Studentdashboard');
    }

    return (
        <div className='resultpage'>

            <div style={{ height: '10%', backgroundColor: '#000000' }}>
            </div>

            <div className='me'>
                <div className='resultpagebackground'>

                    <Row style={{ display: 'flex' }}>
                        <p style={{ fontSize: 16, color: '#ffffff', textAlign: 'center' }}>
                            <Link to={"/Viewquestiondetails/" + props.match.params.id + '/' + props.match.params.ids}>
                                Back
                            </Link>
                        </p>
                        <p style={{ fontSize: 16, color: '#ffffff', textAlign: 'center' }}>
                            Summary
                        </p>

                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div className='resultprofilepage' style={{ display: 'flex' }}>
                                <FontAwesomeIcon icon={faUser} style={{
                                    color: '#ffffff',
                                    padding: 14
                                }}></FontAwesomeIcon>
                                <div style={{ width: '90%' }}>
                                    <p style={{
                                        marginLeft: 10, color: '#ffffff',
                                        padding: 10
                                    }} >Me</p>


                                </div>
                                <FontAwesomeIcon icon={faShare} style={{
                                    color: '#ffffff',
                                    padding: 14
                                }}></FontAwesomeIcon>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div style={{ padding: 20 }}>

                                <p style={{ color: '#ffffff' }}> Total Q: {totalquiz} </p>
                            </div>
                        </Col>

                    </Row>
                </div>
                <Row>
                    <Col sm={12}>
                        <div className=''>
                            <div class="card position-relative" style={{ marginBottom: 10, marginTop: 10, padding: 20 }}>
                                <p style={{ margin: 0, padding: 0, fontSize: 18 }}><b>Student Info</b></p>
                                <p style={{ margin: 0, padding: 0, fontSize: 12 }}> Student ID: {props.match.params.ids}</p>
                                <p style={{ margin: 0, padding: 0, fontSize: 12 }}>Student Name : <Studentname data={props.match.params.ids} /></p>
                            </div>
                            {

                                state?.users ?
                                    state?.users?.map((result, index) => (

                                        <div class="card position-relative" style={{ marginBottom: 10 }}>
                                            <div class="card-header py-3">
                                                <div style={{ display: 'flex' }}>
                                                    <div style={{ width: '90%' }}>
                                                        {result.quiztype} {result.answertype}
                                                    </div>
                                                    <div style={{ width: '10%', display: 'flex' }}>
                                                        Point:  {result.studentpoint} / {result.point}
                                                    </div>
                                                </div>
                                            </div>
                                            {isOpenquestionimage && <Lightbox
                                                imageTitle='Question Image'
                                                imageCaption=''
                                                mainSrc={base.BASE_URL + result.questionimage}
                                                nextSrc=''
                                                prevSrc=''
                                                onCloseRequest={() => setIsOpenquestionimage(false)}
                                            />}
                                            <div class="card-body">

                                                {
                                                    result.quiztype == 'MCQ' ?
                                                        <Mcqresult data={result} />
                                                        :
                                                        ''
                                                }
                                                {
                                                    result.quiztype == 'Fill in the Gap' ?
                                                        <Fillinthegap data={result} />
                                                        :
                                                        ''
                                                }
                                                {
                                                    result.quiztype == 'Writting Test' ?
                                                        <Writtingtest data={result} />
                                                        :
                                                        ''
                                                }
                                                {
                                                    result.quiztype == 'Match' ?
                                                        <Matchingviewpage data={result} />
                                                        :
                                                        ''
                                                }

                                                {/*                                                     {
                                                        result.quiztype == 'Fill in the Gap' ?
                                                            <tr>
                                                                <td colSpan={2}>
                                                                    <div style={{ display: 'flex', alignContent: 'space-between' }}>
                                                                        <div style={{ color: 'green', marginRight: 5 }}>
                                                                            Answer.
                                                                        </div>

                                                                        {Parser(result.writtinganswer)}
                                                                        <div style={{ color: 'blue', marginLeft: 5, marginRight: 5 }}>
                                                                            Quiz Type:
                                                                        </div>
                                                                        {result.quiztype} {result.answertype}
                                                                    </div>

                                                                </td>

                                                            </tr>
                                                            :
                                                            <div>

                                                            </div>
                                                    } */}

                                                {/*                                                     {
                                                        result.quiztype == 'Writting Test' ?
                                                            <div>
                                                                <tr>

                                                                    <td style={{ width: '100%' }}>
                                                                        <div style={{ width: '100%', height: 50 }}>
                                                                            <p style={{ color: 'green' }}>Student Answer</p>
                                                                            <p> {Parser(result.useranswer)}</p>
                                                                        </div>

                                                                        {
                                                                            result.questiontype == 'Text' ?
                                                                                <div style={{ width: '100%', height: 50, marginTop: 50 }}>
                                                                                    <Link to={"/Markingwrittingexam/" + result._id + '/' + props.match.params.id + '/' + props.match.params.ids + '/' + props.match.params.idss}>
                                                                                        Marking
                                                                                    </Link>
                                                                                </div>
                                                                                :
                                                                                ''
                                                                        }
                                                                        <div style={{ width: '100%', height: 200, padding: 10 }}>
                                                                            {
                                                                                result.Bimage == 'x' ?
                                                                                    ''
                                                                                    :

                                                                                    <Link to={"/Viewteachermarkingimage/" + result._id + '/' + result.Bimage} target="_blank">

                                                                                        <img src={base.BASE_URL + '/public/' + result.Bimage}
                                                                                            style={{ resize: 'cover', width: '100%', height: 100 }} />

                                                                                    </Link>
                                                                            }
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ width: '100%' }}>
                                                                        <div style={{ width: '100%', height: 50 }}>
                                                                            <p style={{ color: 'green' }}> Teacher Comments</p>
                                                                        </div>
                                                                        <div style={{ width: '100%', height: 200, padding: 10 }}>
                                                                            {
                                                                                result.Cimage == 'x' ?
                                                                                    ''
                                                                                    :
                                                                                    <a href={base.BASE_URL + '/public/' + result.Cimage} target='_blank'>
                                                                                        <img src={base.BASE_URL + '/public/' + result.Cimage}
                                                                                            style={{ resize: 'cover', width: '100%', height: 100 }}

                                                                                        />
                                                                                    </a>
                                                                            }
                                                                        </div>
                                                                        {isOpenteacherimage && <Lightbox
                                                                            imageTitle='Teacher marks'
                                                                            imageCaption=''
                                                                            mainSrc={base.BASE_URL + "/public/" + result.Cimage}
                                                                            nextSrc=''
                                                                            prevSrc=''
                                                                            onCloseRequest={() => setIsOpenteacherimage(false)}
                                                                       
                                                                        />}
                                                                        <div style={{ width: '100%' }}>
                                                                            <p>Answer: {Parser(result.answertype)} </p>  

                                                                            <p>Student marks : {result.studentpoint}</p>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </div>
                                                            :
                                                            ''
                                                    } */}

                                                {/*   {
                                                        result.quiztype == 'MCQ' ?
                                                            <div>
                                                                <tr>
                                                                    <td>
                                                                        <div style={{ display: 'flex' }}>
                                                                            {
                                                                                result.Answer == 'A' ?
                                                                                    <div className='bg-green'></div>
                                                                                    :
                                                                                    <div className='bg-red'></div>
                                                                            }
                                                                            {
                                                                                result.Atype == "Text" ?
                                                                                    <p>{result.Atitle}</p>
                                                                                    :
                                                                                    <StaticMathField>
                                                                                        {result.Atitle}
                                                                                    </StaticMathField>
                                                                            }
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div style={{ display: 'flex' }}>
                                                                            {
                                                                                result.Answer == 'B' ?
                                                                                    <div className='bg-green'></div>
                                                                                    :
                                                                                    <div className='bg-red'></div>
                                                                            }
                                                                            {
                                                                                result.Btype == "Text" ?
                                                                                    <p>{result.Btitle}</p>
                                                                                    :
                                                                                    <StaticMathField>
                                                                                        {result.Btitle}
                                                                                    </StaticMathField>
                                                                            }
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div style={{ display: 'flex' }}>
                                                                            {
                                                                                result.Answer == 'C' ?
                                                                                    <div className='bg-green'></div>
                                                                                    :
                                                                                    <div className='bg-red'></div>
                                                                            }

                                                                            {
                                                                                result.Ctype == "Text" ?
                                                                                    <p>{result.Ctitle}</p>
                                                                                    :
                                                                                    <StaticMathField>
                                                                                        {result.Ctitle}
                                                                                    </StaticMathField>
                                                                            }
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div style={{ display: 'flex' }}>
                                                                            {
                                                                                result.Answer == 'D' ?
                                                                                    <div className='bg-green'></div>
                                                                                    :
                                                                                    <div className='bg-red'></div>
                                                                            }

                                                                            {
                                                                                result.Dtype == "Text" ?
                                                                                    <p>{result.Dtitle}</p>
                                                                                    :
                                                                                    <StaticMathField>
                                                                                        {result.Dtitle}
                                                                                    </StaticMathField>
                                                                            }
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan={2}>
                                                                        Answer.  {result.Answer}


                                                                    </td>

                                                                </tr>
                                                                <tr>
                                                                    <td colSpan={2}>

                                                                        Question Type:  {result.quiztype} {result.ans}


                                                                    </td>

                                                                </tr>
                                                                <tr>
                                                                    <td colSpan={2}>
                                                                        {
                                                                            result.answertype == 'Correct' ?
                                                                                <span className='correcttbtn'>{result.answertype}</span>
                                                                                :
                                                                                <span className='incorrectbtn'>{result.answertype}</span>
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            </div>
                                                            :
                                                            ''
                                                    }  */}

                                            </div>
                                        </div>

                                    )) : "Loading..."
                            }
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    );
}


export default Viewsingleresult;