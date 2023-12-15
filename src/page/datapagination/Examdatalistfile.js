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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';



const Examdatalistfile = () => {
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
    const [classnamelist, setClassnamelist] = useState('');
    const [subjectname, setSubjectname] = useState('')
    const [allsubjectlist, setAllsubjectlist] = useState([]);
    const [subjectlist, setSubjectlist] = useState([]);


    useEffect(() => {

        teacheralltest();

        setLoading(true);
        console.log(base.BASE_URL + '/examslistteacher/' + schoolid + '/' + teacherid + '/' + currentPage + '/' + limit)
        axios.get(base.BASE_URL + '/examslistteacher/' + schoolid + '/' + teacherid + '/' + currentPage + '/' + limit, {
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
            }
        });


    }, [currentPage]);

    const handlesubmit = () => {
        ////////////////////////////////////////////////////////////
        setLoading(true);
        setData([]);
        setCurrentPage(1)
        let limitpage = 100;
        console.log(base.BASE_URL + '/examslistteacherfilter/' + schoolid + '/' + teacherid + '/' + classname + '/' + subjectname + '/' + versionname + '/' + currentPage + '/' + limitpage)
        axios.get(base.BASE_URL + '/examslistteacherfilter/' + schoolid + '/' + teacherid + '/' + classname + '/' + subjectname + '/' + versionname + '/' + currentPage + '/' + limitpage, {
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
    const handlesubmit_byname = () => {
        setLoading(true);
        setData([]);
        setCurrentPage(1)
        console.log(base.BASE_URL + '/examslistfindbyteacher/' + schoolid + '/' + teacherid + '/' + subjectname + '/' + currentPage + '/' + limit)
        axios.get(base.BASE_URL + '/examslistfindbyteacher/' + schoolid + '/' + teacherid + '/' + subjectname + '/' + currentPage + '/' + limit, {
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
            }
        });
    }

    const deleteUser = (id) => {
        var answer = window.confirm("Are you sure you want to delete ?");
        if (answer) {
            //this.setState({ isdelete: true })
            axios.post(base.BASE_URL + '/delete_exam', {
                id: id
            }, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {

                    if (response.data == "delete") {
                        //        this.getData();
                        //          this.setState({ isdelete: false })
                        window.location.reload();
                    }
                    else if (response.data == "notfound") {

                    }
                }, (error) => {
                    console.log(error);
                });
        } else {
            ///////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////
        }

        ////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////
    }

    const getclassdata = () => {
        axios.get(base.BASE_URL + '/getclassid/' + schoolid)
            .then(result => {
                setClasslist(result.data);
                console.log('classlist...' + JSON.stringify(result.data))
                //   setClassnamelist(JSON.stringify(result.data))
            });
        axios.get(base.BASE_URL + '/subjectlistschool/' + schoolid)
            .then(result => {
                console.log('classlist...' + JSON.stringify(result.data))
                setSubjectlist(result.data)
            });
    }

    const teacheralltest = () => {
        axios.get(base.BASE_URL + '/teacherallexammname/' + schoolid + '/' + teacherid + '/1/10')
            .then(result => {
                console.log('classlist...' + result.data)
                setAllsubjectlist(result.data)
            });
    }

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const handleversion = (event) => {
        setVersionname(event.target.value)
    }
    const handlesubject = (event) => {
        setSubjectname(event.target.value)
        console.log('subject name' + event.target.value)
    }
    const handleclass = (event) => {
        setClassname(event.target.value)
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

    return (
        <div>
            <Row style={{ marginBottom: 20 }}>
                <Col xs={3} sm={2} style={{ alignContent: 'space-between' }}>

                    <select className="form-control"
                        onClick={getclassdata} style={{ marginLeft: 12, fontSize: 12 }}
                        onChange={handleclass}
                    >
                        <option value="">
                            Select-Class
                        </option>
                        <option value="">

                        </option>
                        {
                            classlist && classlist.map((result) => {
                                return (
                                    <option value={result.xclassname}>
                                        {result.xclassname}
                                    </option>
                                )
                            })}
                    </select>
                </Col>
                <Col xs={3} sm={2} style={{ alignContent: 'space-between' }}>
                    <select className="form-control"
                        style={{ marginLeft: 12, fontSize: 12 }}
                        onChange={handlesubject}
                    >
                        <option value="Subject ">Subject </option>
                        {
                            subjectlist && subjectlist.map((result) => {
                                return (
                                    <option value={result.name}>
                                        {result.name}
                                    </option>
                                )
                            })}
                    </select>
                </Col>
                <Col xs={3} sm={2} style={{ alignContent: 'space-between' }}>


                    <select className="form-control" style={{ marginLeft: 10, fontSize: 12 }}
                        onChange={handleversion}
                    >
                        <option value="" selected>Select-Version</option>
                        <option value="English Version">English Version</option>
                        <option value="Bangla Version">Bangla Version</option>
                    </select>


                </Col>
                <Col xs={6} sm={2} style={{ alignContent: 'space-between' }}>

                    <Link to="#" className='findbtn' onClick={handlesubmit}>
                        Find
                    </Link>
                    <Link to="#" className='findbtn' onClick={handlereset}>
                        Reset
                    </Link>

                </Col>
                <Col xs={6} sm={3} style={{ alignContent: 'space-between' }}>

                    <Stack spacing={2} sx={{ width: '100%', display: 'flex' }}>

                        <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            onChange={(event, newValue) => {
                                setSubjectname(newValue);
                            }}
                            disableClearable
                            options={allsubjectlist.map((option) => option.examname)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search by subject name"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                    </Stack>

                </Col>
                <Col xs={6} sm={3} style={{ alignContent: 'space-between' }}>
                    <Link to="#" className='findbtn' onClick={handlesubmit_byname}>
                        Find By Subject Name
                    </Link>
                </Col>
            </Row>
            <Row>

                {
                    loading ?
                        <h3>Loading</h3>
                        :
                        passengersData.map((result) => {
                            return (
                                <Col xs={12} sm={4}>
                                    <div class="card position-relative" style={{ marginBottom: 10 }}>
                                        <div class="card-header py-3" style={{ backgroundColor: 'aqua' }}>
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
                                                    <Link variant="info" to="#" onClick={() => deleteUser(result._id)} title="Delete Exams">
                                                        <FontAwesomeIcon icon={faDeleteLeft} style={{ color: '#000', fontSize: 22, }}>
                                                        </FontAwesomeIcon>
                                                    </Link>
                                                </div>
                                            </div>



                                        </div>
                                        <div class="card-body">
                                            <table style={{ width: '100%', fontSize: 12 }}>
                                                <tr>
                                                    <td style={{ width: '80%' }}>
                                                        <p> Exam Name : {result.examname}</p>


                                                    </td>
                                                    <td>
                                                        <Link to={"/Quizsetup/" + result._id + '/' + result.examname}
                                                            className="addquestionbtn"
                                                            style={{ width: 120, fontSize: 12 }}
                                                        >Add Question</Link>

                                                    </td>


                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Version: {result.versionname}</p>


                                                    </td>

                                                    <td>
                                                        <Link to={"/Quizsetuplist/" + result._id + '/' + result.examname}
                                                            className='findbtn'
                                                            style={{ width: 120, fontSize: 12 }} >
                                                            View Question</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Subject Name: {result.subjectname}</p>



                                                    </td>
                                                    <td>
                                                        <Link
                                                            style={{ width: 120, fontSize: 12 }}
                                                            className="addstudentbtn"
                                                            to={"/Addnewstudent/" + result._id}>
                                                            Add Std</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Class Name : {result.classname}, {result.xsection}</p>


                                                    </td>
                                                    <td>
                                                        <Link to={"/Viewresultteacher/" + result._id + '/' + result.examname}
                                                            className="viewresultbtn"
                                                            style={{ width: 120, fontSize: 12 }} >
                                                            View Result</Link>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Group : {result.xgroup}</p>

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

                                                    </td>
                                                    <td>
                                                        <Link
                                                            to={"/Addexamimage/" + result._id}
                                                            className="addexambtn"
                                                            style={{ width: 120, fontSize: 12 }} >

                                                            Add Exam Image</Link>


                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <p> Exam fees : {result.examfees} </p>
                                                        <p> No of Student : {result.noofstudent}</p>
                                                    </td>
                                                    <td>
                                                        <div style={{ flexDirection: 'row' }}>
                                                        <Button>
                                                            {result.examstatus}
                                                        </Button>
                                                    
                                                        </div>
                                                    

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>


                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src={base.BASE_URL + result.image}
                                                            style={{ width: 50, height: 50, resize: 'cover' }} />
                                                    </td>
                                                    <td>
                                                    <Link to={"/Copyquestion/" + result._id + '/' + result.examname}
                                                            className="addquestionbtn"
                                                            style={{ fontSize: 12, padding: 10 }}
                                                        >Copy </Link>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>

                                </Col>

                            )
                        })

                }
                {
                    passengersData.length == "0" ?
                        <div style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', textAlign: 'center', marginBottom: 100 }}>
                            <h3 className='running_headline'>Looks like you didnot added any quiz, To Create a new exam Click on "Create new Quiz" </h3>
                            <img src='https://examamine.com/images/activity.png' className='running_image' />
                        </div>
                        :
                        ''
                }

            </Row>
            {
                passengersData.length == "0" ?
                    ''
                    :
                    <Row>
                        <Col xs={12} sm={12} style={{ alignContent: 'space-between', alignItems: 'center', marginBottom: 50 }}>
                            <Button style={{ marginRight: 10 }} onClick={onclickprev}>Prev</Button>
                            <Button onClick={onclicknext}>Next</Button>
                        </Col>

                    </Row>
            }
            {/*         {!loading ? <Examdatalist {...paginationAttributes} 
                          onPrevClick={onPrevClick} 
                          onNextClick={onNextClick}
                          onPageChange={onPageChange}/>
        : <div> Loading... </div>
        } */}
        </div>
    )

}
export default Examdatalistfile;

