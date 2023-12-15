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
import Table from 'react-bootstrap/Table';


const Studentlist = () => {
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


    useEffect(() => {
        setLoading(true);
        console.log(base.BASE_URL + '/studentuserlistpage/' + currentPage + '/' + limit);
        axios.get(base.BASE_URL + '/studentuserlistpage/' + currentPage + '/' + limit, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
            if (res.data.length > 0) {
                setData(res.data)
            }
            else {

            }
        });

    }, [currentPage]);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const handleversion = (event) => {
        setVersionname(event.target.value)
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
            <Row style={{ marginBottom: 20, marginTop: 20 }}>
                <Col xs={4} sm={4} style={{ alignContent: 'space-between' }}>
                    <h3>List of Student</h3>

                </Col>

                <Col xs={4} sm={4} style={{ alignContent: 'space-between' }}>



                </Col>
                <Col xs={4} sm={4} style={{ alignContent: 'space-between' }}>


                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Name</th>
                                <th>Class Name</th>
                                <th>Email Address</th>
                                <th> Mobile No</th>
                                <th>View</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                passengersData.map((result) => {
                                    return (
                                        <tr>
                                            <td>
                                                {result.studentid} </td>
                                            <td>  {result.studentname} </td>
                                            <td>  {result.classname} </td>
                                            <td>  {result.email} </td>
                                            <td>  {result.mobileno} </td>
                                            <td>
                                                <Link variant="info" to={"/Edituserssetup/" + result._id}>View Details</Link>
                                               
                                            </td>
                                            <td>
                                                <Link variant="info" to={"/Studentviewpayment/" + result.email}>Payment</Link>
                                            </td>

                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
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
export default Studentlist;