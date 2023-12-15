import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Studentheader from './Studentheader';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faFlag, faShare, faUser } from '@fortawesome/free-solid-svg-icons'
import * as base from "../global";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom';
import Parser from 'html-react-parser'; // render HTML 
import Acurray from './Acurray';
import Matchanswerinfo from './Matchanswerinfo';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ReactQuill from 'react-quill';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill'
import Examname from './Examname'


const Resultpage = (props) => {
    const history = useHistory();
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [examdb, setExamdb] = useState([]);
    const [studentid, setStudentid] = useState(localStorage.getItem('studentid'));
    const [examrandomid, setExamrandomid] = useState(localStorage.getItem('examrandomid'));
    const [examid, setExamid] = useState(props.match.params.id);
    const [serialid, setSerialid] = useState(1);
    const [totalquestion, setTotalquestion] = useState(0);
    const [answer, setAnswer] = useState('');
    const [studentchoose, setStudentchoose] = useState('stop');
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [isresultvisible, setIsresultvisible] = useState(false);
    const [totalquiz, setTotalquiz] = useState([]);
    const [state, setData] = useState({ users: [] });

    const getData = () => {
        console.log(base.BASE_URL + '/getquizserial/' + examid + '/' + serialid) //examrandomid
        axios.get(base.BASE_URL + '/getquizserial/' + examid + '/' + serialid + '/' + examrandomid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
            setExamdb(res.data);
            if (res.data.length > 0) {
                setAnswer(res.data[0].Answer);
                setTotalquestion(res.data.length)
            }
            else {
                setIsresultvisible(true);
            }

        });
    }

    const gettotalquiz = () => {
        //  console.log(base.BASE_URL + '/gettotalquiz/' + examid)
        axios.get(base.BASE_URL + '/gettotalquiz/' + examid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            // console.log(res.data)

            if (res.data.length > 0) {
                setTotalquiz(res.data.length);
            }
            else {

            }

        });
    }
    const getallquestionshow = async (pageNumber = 1) => {
        console.log(base.BASE_URL + '/getresultpage/' + examid + '/' + studentid + '/' + examrandomid);
        const api = await fetch(base.BASE_URL + '/getresultpage/' + examid + '/' + studentid + '/' + examrandomid);
        //  console.log(await api.json());
        setData({
            users: await api.json()

        });

    };
    useEffect(() => {
        gettotalquiz();
        // getallquestionshow();
    }, [])
    useEffect(() => {
        // gettotalquiz();
        getallquestionshow();
    }, [])

    useEffect(() => {
        //getData();
    }, [serialid])

    const saveexit = () => {

        history.push('/Studentdashboard');

    }

    return (
        <div className='resultpage'>
            <div className='me'>

                <div className='resultpagebackground'>
                    <div style={{
                        height: 40, padding: 10,
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
                    }}>
                        <Link to={"/Studentdashboard"} className='resultback' style={{ color: '#ffffff' }}>Back</Link>
                        <Link to={"/Studentdashboard"} className='resultback'>...</Link>

                    </div>
                    <Row>
                        <p style={{
                            fontSize: 16,
                            color: '#ffffff',
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}> Summary </p>
                        <Examname data={examid} />
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <div className='resultaccuracy'>
                                <Acurray data={examrandomid} />

                            </div>
                        </Col>

                    </Row>


                </div>
                <Row>
                    <Col sm={12}>
                        <div style={{ padding: 10 }}>
                            <p>Result Details</p>
                            {
                                state?.users ?
                                    state?.users?.map((result, index) => (

                                        <div class="card position-relative" style={{ marginBottom: 10 }}>
                                            <div class="card-header py-3">
                                                <div style={{ display: 'flex' }}>
                                                    <div style={{ width: '80%' }}>
                                                        Question : {result.quiztype}
                                                    </div>
                                                    <div style={{
                                                        width: 100, display: 'flex', textAlign: 'right',
                                                        flexDirection: 'row'
                                                    }}>
                                                        Point:  {result.studentpoint} / {result.point}
                                                    </div>
                                                </div>



                                            </div>
                                            <div class="card-body">
                                                <table style={{ fontSize: 13 }}>
                                                    <tr>
                                                        <td colSpan={4}>

                                                            {
                                                                result.questiontype1 == 'Text' ?
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                {result.questiontitle}
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    :
                                                                    <table>
                                                                        <tr>
                                                                            <td>

                                                                                <StaticMathField>
                                                                                    {result.questiontitle}
                                                                                </StaticMathField>
                                                                            </td>
                                                                        </tr>
                                                                    </table>

                                                            }


                                                            {
                                                                result.questiontype2 == 'Text' ?
                                                                    <table>
                                                                        <tr><td>

                                                                            {result.questiontitle2}
                                                                        </td></tr>
                                                                    </table>
                                                                    :
                                                                    <table>
                                                                        <tr>
                                                                            <td>

                                                                                <StaticMathField>
                                                                                    {result.questiontitle2}
                                                                                </StaticMathField>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                            }
                                                            {
                                                                result.questiontype3 == 'Text' ?
                                                                    result.questiontype3 == null ?
                                                                        ''
                                                                        :
                                                                        <table>
                                                                            <tr><td>


                                                                                {result.questiontitle3}  </td></tr>
                                                                        </table>
                                                                    :
                                                                    result.questiontype3 == 'Math' ?
                                                                        <table>
                                                                            <tr><td>


                                                                                <StaticMathField>
                                                                                    {result.questiontitle3}
                                                                                </StaticMathField>
                                                                            </td></tr>
                                                                        </table>
                                                                        :
                                                                        ''
                                                            }

                                                            {
                                                                result.questiontype4 == 'Text' ?
                                                                    result.questiontype4 == null ?
                                                                        ''
                                                                        :
                                                                        <table>
                                                                            <tr><td>

                                                                                {result.questiontitle4}  </td></tr>
                                                                        </table>
                                                                    :
                                                                    result.questiontype4 == 'Math' ?

                                                                        <table>
                                                                            <tr><td>


                                                                                <StaticMathField>
                                                                                    {result.questiontitle4}
                                                                                </StaticMathField> </td></tr>
                                                                        </table>
                                                                        :
                                                                        ''
                                                            }
                                                            {
                                                                result.questiontype5 == 'Text' ?

                                                                    result.questiontitle5 == null ?
                                                                        ''
                                                                        :
                                                                        <table>
                                                                            <tr><td>
                                                                                {result.questiontitle5}
                                                                            </td></tr>
                                                                        </table>
                                                                    :
                                                                    result.questiontitle5 == 'Math' ?
                                                                        <table>
                                                                            <tr><td>

                                                                                <StaticMathField>
                                                                                    {result.questiontitle5}
                                                                                </StaticMathField> </td></tr>
                                                                        </table>
                                                                        :
                                                                        ''

                                                            }


                                                        </td>
                                                    </tr>
                                                    {
                                                        result.questionimage == 'x`' ?
                                                            ''
                                                            :
                                                            <tr>
                                                                <td colSpan={4}>
                                                                    <img src={base.BASE_URL + result.questionimage}
                                                                        style={{ resize: 'cover', width: 250, height: 250 }}
                                                                    />
                                                                </td>
                                                            </tr>
                                                    }
                                                    {
                                                        result.quiztype == 'Fill in the Gap' ?
                                                            <tr>
                                                                <td colSpan={2}>
                                                                    <div style={{ display: 'flex', alignContent: 'space-between' }}>
                                                                        <div style={{ color: 'green', marginRight: 5 }}>

                                                                            Answer.  {Parser(result.useranswer)}
                                                                        </div>


                                                                    </div>

                                                                </td>

                                                            </tr>
                                                            :
                                                            ''
                                                    }

                                                    {
                                                        result.quiztype == 'Writting Test' ?
                                                            <div style={{ color: 'green', marginRight: 5 }}>
                                                                Your Answer.
                                                                <div style={{ width: '100%' }}>

                                                                    {Parser(result.useranswer)}
                                                                </div>
                                                                <div>
                                                                    {result.writtinganswer}
                                                                </div>
                                                                {
                                                                    result.Bimage == 'x' ?
                                                                        ''
                                                                        :
                                                                        <img src={base.BASE_URL + '/public/' + result.Bimage}
                                                                            style={{ height: 400 }} />
                                                                }
                                                                <div style={{ width: '100%', padding: 10, borderWidth: 2, borderColor: 'green' }}>
                                                                    {
                                                                        result.Cimage == 'x' ?
                                                                            ''
                                                                            :
                                                                            <a href={base.BASE_URL + '/public/' + result.Cimage} target='_blank'>
                                                                                <img src={base.BASE_URL + '/public/' + result.Cimage}
                                                                                    style={{ height: 100 }}

                                                                                />
                                                                            </a>
                                                                    }



                                                                </div>

                                                            </div>
                                                            :
                                                            ''
                                                    }

                                                    {
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
                                                                            }</div>
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
                                                                        Answer.  {result.Answer}  {result.ans}


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
                                                    }


                                                    {
                                                        result.quiztype == 'Match' ?
                                                            //examid + '/' + studentid + '/' + examrandomid
                                                            <Matchanswerinfo data={result._id} />
                                                            :
                                                            ''
                                                    }

                                                </table>
                                            </div>
                                        </div>

                                    )) : "Loading..."
                            }


                        </div>
                    </Col>

                </Row>



            </div>
            {/*      )
            })} */}




        </div>
    );
}


export default Resultpage;

