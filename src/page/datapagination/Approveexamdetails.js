import React, { useEffect, useState } from 'react'
import Examdatalist from './Examdatalist';
import * as base from "../global";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faDeleteLeft, fadel } from '@fortawesome/free-solid-svg-icons'

import ReactPaginate from 'react-paginate';
import { Button } from 'reactstrap';



const Approveexamdetails = () => {
    const pageNumberLimit = 5;
    const [passengersData, setData] = useState([]);
    const [classlist, setClasslist] = useState([]);

    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [totalpage, setTotalpage] = useState(0);
    const [limit, setLimit] = useState(9);
    const [minPageLimit, setMinPageLimit] = useState(0);
    const [schoolid, setSchoolid] = useState(localStorage.getItem('schoolid'));
    const [teacherid, setTeacherid] = useState(localStorage.getItem('vendoremailaddress'))
    const [versionname, setVersionname] = useState('');
    const [classname, setClassname] = useState('');
    const [instutename, setInstutename] = useState(''); 
    


    useEffect(() => {
        setLoading(true);
         console.log(base.BASE_URL + '/examslistadmin/Draft/' + currentPage + '/' + limit)
        axios.get(base.BASE_URL + '/examslistadmin/Draft/' + currentPage + '/' + limit, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
            if (res.data.length > 0) {
                //  this.setState({ examcount: res.data.length })
                // this.setState({ allsubscribelist: res.data });
                setData(res.data)
                // setCurrentPage(currentPage + 1)
                // console.log('current page...' + currentPage)
            }
            else {
                // this.setState({ allsubscribelist: [] });
            }
        });

    }, [currentPage]);

    const handlesubmit = () => {
        ////////////////////////////////////////////////////////////
        setLoading(true);
        setData([]);
        setCurrentPage(1)
        console.log(base.BASE_URL + '/examslistteacherfilter/' + schoolid + '/' + teacherid + '/' + classname + '/' + versionname + '/' + currentPage + '/' + limit)
        axios.get(base.BASE_URL + '/examslistteacherfilter/' + schoolid + '/' + teacherid + '/' + classname + '/' + versionname + '/' + currentPage + '/' + limit, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
            if (res.data.length > 0) {
                setData(res.data);
                setLoading(false);

            }
            else {
                setLoading(false);
                // this.setState({ allsubscribelist: [] });
            }
        });
        ////////////////////////////////////////////////////////////
    }

    const getinstute = () => {
        axios.get(base.BASE_URL + '/schoollist')
            .then(result => {
                setClasslist(result.data);
            });
    }
    const getsubject = () => {
        axios.get(base.BASE_URL + '/schoollist')
            .then(result => {
                setClasslist(result.data);
            });
    }

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const handleversion = (event) => {
        setVersionname(event.target.value)
    }
    const handleinstute = (event) => {
        setInstutename(event.target.value)
    }


    const handlereset = () => {
        window.location.reload(false);
    }
    const onclickprev = () => {
        console.log('Current page ' + currentPage)
        console.log('ddddd' + currentPage + 1)
        setCurrentPage(currentPage - 1)
        window.scrollTo(0, 0);
        //alert(currentPage)
    }
    const onclicknext = () => {
        console.log('Current page ' + currentPage)
        console.log('ddddd' + currentPage + 1)
        setCurrentPage(currentPage + 1)
        window.scrollTo(0, 0);
        //alert(currentPage)
    }
    const deleteExam =(id) => {
        var answer = window.confirm("Are you sure you want to delete ?");
        if (answer) {
           
            axios.post(base.BASE_URL + '/delete_exam', {
                id: id
                },{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    } 
                })
                .then((response) => {

                if (response.data == "delete") {
                    this.getData();
                       
                
                }
                else if (response.data == "notfound") {

                }
                }, (error) => {
                console.log(error);
                });
          } else {

          }
    } 

    return (
        <div>
            <Row style={{ marginBottom: 20 }}>
                <Col xs={4} sm={4} style={{ alignContent: 'space-between' }}>

                    <select className="form-control"
                        onClick={getinstute} style={{ marginLeft: 12, fontSize: 12 }}
                        onChange={handleinstute}
                    >
                        <option value="">
                            Select-Inistute
                        </option>
                        <option value="">

                        </option>
                        {
                            classlist.map((result) => {
                                return (
                                    <option value={result._id}>
                                        {result.name}
                                    </option>
                                )
                            })}
                    </select>
                </Col>

                <Col xs={4} sm={4} style={{ alignContent: 'space-between' }}>


                    <select className="form-control" style={{ marginLeft: 10, fontSize: 12 }}
                        onChange={handleversion}
                    >
                        <option value="" selected>Select-Type</option>
                        <option value="Arts">Draft</option>
                        <option value="Commerce">Publish</option>
                    </select>


                </Col>
                <Col xs={4} sm={4} style={{ alignContent: 'space-between' }}>

                    <select className="form-control"
                        style={{ marginLeft: 12, fontSize: 12 }}

                    >
                        <option value="">
                            Select-Class
                        </option>
                        <option value="">

                        </option>
                   
                    </select>
                </Col>    
                    <Col xs={4} sm={4} style={{ alignContent: 'space-between' }}>

                        <Button className='btn btn-primary'
                            style={{
                                marginBottom: 20, marginTop: 0, alignContent: 'flex-end',
                                backgroundColor: 'silver', borderColor: 'silver', borderWidth: 1
                            }}
                            onClick={handlesubmit}
                        >
                            Find
                        </Button>
                        <Button className='btn btn-primary'
                            style={{
                                marginBottom: 20, marginTop: 0, alignContent: 'flex-end', marginLeft: 10,
                                backgroundColor: 'silver', borderColor: 'silver', borderWidth: 1
                            }}
                            onClick={handlereset}
                        >
                            Reset
                        </Button>

                    </Col>
            </Row>
            <Row>

                {
                    passengersData.map((result) => {
                        return (
                            <Col xs={12} sm={4}>
                                <div class="card position-relative" style={{ marginBottom: 10 }}>
                                    <div class="card-header py-3">
                                        <div style={{ display: 'flex', alignContent: 'space-between' }}>
                                            <div style={{ fontSize: 12, width: '80%' }}>
                                                Exam Date & Time : {result.examdate} {result.examtime}
                                            </div>
                                            <div style={{ display: 'flex', textAlign: 'right' }}>

                                                <Link variant="info" to={"/Editaddnewexam/" + result._id}
                                                    style={{ marginRight: 10 }} title="Edit Exams"
                                                >
                                                    <FontAwesomeIcon icon={faEdit} style={{ color: '#000', fontSize: 22, }}>

                                                    </FontAwesomeIcon>
                                                </Link>
                                                <Link variant="info" to="#" onClick={() => deleteExam(result._id)} title="Delete Exams">
                                                    <FontAwesomeIcon icon={faDeleteLeft} style={{ color: '#000', fontSize: 22, }}>
                                                    </FontAwesomeIcon>
                                                </Link>
                                            </div>
                                        </div>



                                    </div>
                                    <div class="card-body">
                                        <table style={{ width: '100%', fontSize: 12 }}>
                                            <tr>
                                                <td>
                                                    Exam Name : {result.examname}
                                                </td>
                                                <td>
                                                    <Link to={"/Quizsetup/" + result._id + '/' + result.examname}
                                                        className='btn btn-primary'
                                                        style={{ backgroundColor: '#6c757d', width: 100, fontSize: 12 }}
                                                    >Add Question</Link>

                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Exam fees : {result.examfees} Group : {result.xgroup}

                                                </td>

                                                <td>
                                                    <Link to={"/Examquestionlist/" + result._id}
                                                        className='btn btn-primary'
                                                        style={{ backgroundColor: 'blue', width: 100, fontSize: 12 }} >
                                                        View Question</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Class Name:  {result.classname}, {result.xsection}
                                                </td>
                                                <td>
                                                    <Link className='btn btn-primary'
                                                        style={{ backgroundColor: '#0dcaf0', width: 100, fontSize: 12 }}
                                                        to={"/Addnewstudent/" + result._id}>
                                                        Add Std</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    No of Student : {result.noofstudent}
                                                    Status : {result.examstatus}
                                                </td>
                                                <td>
                                                    <Link to={"/Viewresultteacher/" + result._id + '/' + result.examname}
                                                        className='btn btn-primary'
                                                        style={{ backgroundColor: 'green', width: 100, fontSize: 12 }} >
                                                        View Result</Link>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                  <p style={{ margin: 0 }}> Entered By :  {result.enteredby}</p>
                                                  <p>  Entry Time : {result.enteredtime}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {
                                                        result.examstatus == '0' ?
                                                            'Complete'

                                                            :
                                                            ''
                                                    }

                                                    {
                                                        result.examstatus == '2' ?
                                                            'Draft'
                                                            :
                                                            ''
                                                    }
                                                    {
                                                        result.examstatus == '1' ?
                                                            'Disable'
                                                            :
                                                            ''
                                                    }
                                                    <img src={base.BASE_URL + result.image}
                                                        style={{ width: 50, height: 50, resize: 'cover' }} />
                                                </td>
                                                <td>
                                                    <Link className='btn btn-primary'
                                                        style={{ backgroundColor: '#0dcaf0', width: 100, fontSize: 12 }}
                                                        to={"/Addexamimage/" + result._id}>
                                                        Add Exam Image</Link>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Link className='btn btn-primary'
                                                        style={{ backgroundColor: '#0dcaf0', width: 100, fontSize: 12 }}
                                                        to={"/Approve/" + result._id}>
                                                        Approve </Link>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>

                            </Col>

                        )
                    })

                    //  :
                    //  'No Data'

                }
            </Row>
            <Row>
                <Col xs={12} sm={12} style={{ alignContent: 'space-between', alignItems: 'center', marginBottom: 50 }}>
                    <Button style={{ marginRight: 10 }} onClick={onclickprev}>Prev</Button>
                    <Button onClick={onclicknext}>Next</Button>
                </Col>

            </Row>

        </div>
    )

}
export default Approveexamdetails;