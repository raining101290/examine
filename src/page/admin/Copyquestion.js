import React, { useState } from 'react'
import Header from '../../Layout/Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import * as base from "../../page/global";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Copyquestion = (props) => {
    const [schoollist, setSchoollist] = useState([]);
    const [examname, setExamname] = useState(props.match.params.examname);
    const [examdata, setExamdata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [totalpage, setTotalpage] = useState(0);
    const [questioncount, setQuestioncount] = useState(0);
    const [limit, setLimit] = useState(9);
    const [examid, setExamid] = useState(props.match.params.id);
    const [schoolid, setSchoolid] = useState(localStorage.getItem('schoolid'))
    const [questiondata, setQuestiondata] = useState([]);

    const [copyexamid, setCopyexamid] = useState('');
    const [copyexamname, setCopyexamname] = useState('');

    const getclassdata = () => {

        axios.get(base.BASE_URL + '/schoollist', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            //this.setState({ allsubscribelist: res.data });
            setSchoollist(res.data);
        });

    }
    const handleschool = (event) => {
        setSchoolid(event.target.value)
    }
    const handleexam = (event) => {
        setExamname(event.target.value)
    }
    const Savequestion = () => {
       // alert(examid);

       // return;
        questiondata && questiondata.map((result, slno) => {
           /*  let data = {
              
            }; */
           // console.log('data.......' + JSON.stringify(data));
            // console.log('test....' + JSON.stringify(result));
            return (
                axios.post(base.BASE_URL + '/copyexamssubmit', {
                    schoolcollegeid: schoolid,
                    subjectid: result.subjectid,
                    schooltype: result.schoolcollegetype,
                    schoolname: result.schoolname,
                    subject: result.subject,
                    groupname: result.xgroup,
                    examid: examid,
                    examname: examname,
                    sctionname: result.xsection,
                    id: examid,
                    quiztype: result.quiztype,
                    questiontype: result.questiontype,
                    questiontitle: result.questiontitle,
                    questionimage: result.questionimage,
                    Atype: result.Atype,
                    Atitle: result.Atitle,
                    Aimage: result.Aimage,
                    Btype: result.Btype,
                    Btitle: result.Btitle,
                    Bimage: result.Bimage,
                    Ctype: result.Ctype,
                    Ctitle: result.Ctitle,
                    Cimage: result.Cimage,
                    Dtype: result.Dtype,
                    Dtitle: result.Dtitle,
                    Dimage: result.Dimage,
                    Answer: result.Answer,
                    enteredby: result.enteredby,
                    updateby: result.updateby,
                    status: result.status,
                    UpdateTime: result.UpdateTime,
                    statuspage: '',
                    writtinganswertype: result.writtinganswertype,
                    questiontime: result.questiontime,
                    point: result.point,
                    questiontitle2: result.questiontitle2,
                    questiontitle3: result.questiontitle3,
                    questiontitle4: result.questiontitle4,
                    questiontitle5: result.questiontitle5,
                    questiontype1: result.questiontype1,
                    questiontype2: result.questiontype2,
                    questiontype3: result.questiontype3,
                    questiontype4: result.questiontype4,
                    questiontype5: result.questiontype5,
                    writtinganswer: result.writtinganswer

                }, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    }
                })
                    .then((response) => {

                    }, (error) => {
                        console.log(error);
                    })

            )

        })
        alert('update successfully');
    }
    const handlesubmit_byname = () => {
        setLoading(true);
        setExamdata([]);
        setCurrentPage(1)
        
        console.log(base.BASE_URL + '/findexamsbysearch/' + examname + '/' + currentPage + '/' + limit)
        axios.get(base.BASE_URL + '/findexamsbysearch/' + examname + '/' + currentPage + '/' + limit, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
           // console.log('uuu...' + res.data)
            if (res.data.length > 0) {
             //   console.log('data....' + JSON.stringify(res.data))
                setExamdata(res.data);
                setLoading(false);
               // alert(examid);

            }
            else {
                setLoading(false);
            }
        });
    }
    return (
        <>
            <Header />
            <div style={{ padding: 10, marginTop: 85 }}>
                <h3>Copy Exam School id : {schoolid}</h3>
                <Row>
                    <Col className='col-md-6'>
                        <h3>Ready to copy {copyexamid}</h3>
                        <p>Click on the Copy Question {copyexamname}</p>
                        <div style={{
                            backgroundColor: 'silver', height: 100, marginBottom: 10,
                            padding: 5
                        }}>
                            <h3 style={{ padding: 0 }}>From </h3>
                            <p> Exam Name : {copyexamname}, Exam ID :  {copyexamid} </p>
                        </div>

                        <div style={{
                            backgroundColor: 'silver', height: 100, padding: 5
                        }}> <h3>To</h3>

                        <p> Exam Name : {props.match.params.examname}  Exam ID :{examid} </p>

                        </div>

                        <p>Question Count : {questioncount}</p>
                        {
                            questioncount > 0 ?
                                <Button onClick={Savequestion}>Copy Question</Button>
                                :
                                ''

                        }

                        <div style={{ width: '100%' }}>
                            {
                                loading ?
                                    <h3>Loading</h3>
                                    :
                                    questiondata && questiondata.map((result, slno) => {
                                        let sl = slno + 1;
                                        return (
                                            <div className="card position-relative" style={{
                                                marginBottom: 10,
                                                padding: 10
                                            }} key={slno}>

                                                <p>{sl} {result.questiontitle}</p>

                                            </div>


                                        )
                                    })

                            }
                        </div>
                    </Col>
                    <Col className='col-md-6'>
                        <div style={{ padding: 20, flex: 1 }}>
                            <p>Search Question</p>

                            <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                                <input type="type" className="form-control"
                                    placeholder="Search by examname"
                                    onChange={handleexam}
                                    value={examname}
                                />
                                <Link to="#" style={{ width: 100 }} className='findbtn'
                                    onClick={handlesubmit_byname}>
                                    Find
                                </Link>
                            </div>
                            {
                                loading ?
                                    <h3>Loading</h3>
                                    :
                                    examdata && examdata.map((result, slno) => {
                                        return (
                                            <div class="card position-relative" style={{
                                                marginBottom: 10, marginTop: 10,
                                                padding: 10
                                            }} key={slno}>
                                                <p>Exam Name : {result.examname}</p>
                                                <p>Exam ID : {result._id}</p>
                                                <p>Class Name : {result.classname}</p>
                                                <p>Subject : {result.subjectname} Chapter : {result.chapter}</p>
                                                <p>Version  : {result.versionname}</p>
                                                <p>Group : {result.xgroup}</p>
                                                <Link to="#" className='findbtn' onClick={() => {
                                                    // selectexamtocop
                                                    //   alert('Test');
                                                    setCopyexamid(result._id);
                                                    setCopyexamname(result.examname);

                                                    console.log(base.BASE_URL + '/examquizcopy/' + result._id)
                                                    axios.get(base.BASE_URL + '/examquizcopy/' + result._id, {
                                                        headers: {
                                                            authorization: `bearer ${localStorage.getItem('token')}`
                                                        }
                                                    }).then(res => {
                                                        console.log('exam.....' + res.data)
                                                        if (res.data.length > 0) {
                                                            console.log(...res.data);
                                                            setQuestiondata(res.data);
                                                            // setLoading(false);
                                                            setQuestioncount(res.data.length);

                                                        }
                                                        else {
                                                            setLoading(false);
                                                        }
                                                    });

                                                    /* End */

                                                }}
                                                >
                                                    Select Exam to Copy
                                                </Link>
                                            </div>


                                        )
                                    })

                            }
                        </div>


                    </Col>
                </Row>
            </div>
        </>

    )
}
export default Copyquestion;
