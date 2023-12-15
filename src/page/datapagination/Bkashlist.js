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



const Bkashlist = () => {
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
         console.log(base.BASE_URL + '/bklistpage/' + currentPage + '/' + limit)
        axios.get(base.BASE_URL + '/bklistpage/' + currentPage + '/' + limit, {
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
    const onclickprev =() => {
        console.log('Current page ' + currentPage)
        console.log('ddddd' + currentPage + 1)
        setCurrentPage(currentPage - 1)
        window.scrollTo(0, 0);
        //alert(currentPage)
    }
    const onclicknext =() => {
        console.log('Current page ' + currentPage)
        console.log('ddddd' + currentPage + 1)
        setCurrentPage(currentPage + 1)
        window.scrollTo(0, 0);
        //alert(currentPage)
    }

    return (
        <div>
            <Row style={{ marginBottom: 20 }}>
                <Col xs={4} sm={4} style={{ alignContent: 'space-between' }}>
                <h3>Bkash List</h3>

                </Col>

                <Col xs={4} sm={4} style={{ alignContent: 'space-between' }}>



                </Col>
                <Col xs={4} sm={4} style={{ alignContent: 'space-between' }}>


                </Col>
            </Row>
            <Row>

                {
                    passengersData && passengersData.map((result,slno) => {
                        return (
                            <Col xs={12} sm={4} key={slno}>
                                <div class="card position-relative" style={{ marginBottom: 10 }}>
                                    <div class="card-header py-3">
                                        <div style={{ display: 'flex', alignContent: 'space-between' }}>
                                             
                                        </div>



                                    </div>
                                    <div class="card-body">
                                        <table style={{ width: '100%', fontSize: 12 }}>
                                            <tr>
                                                <td>
                                                   <p> Student ID : {result.studentid}</p>
                                                   <p>Class Name: {result.classname}</p>
                                                   <p>Group name : {result.groupname}</p>
                                                   <p>Mobile No: {result.mobileno}</p>
                                                   <p>Transaction No: {result.transid}</p>
                                                   <p>Status: {result.status}</p>
                                                   <Link to={'/Bkapprove/' + result._id }>Approve</Link>
                                                </td>
                                                <td>
                                                
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
            {/*         {!loading ? <Examdatalist {...paginationAttributes} 
                          onPrevClick={onPrevClick} 
                          onNextClick={onNextClick}
                          onPageChange={onPageChange}/>
        : <div> Loading... </div>
        } */}
        </div>
    )

}
export default Bkashlist;