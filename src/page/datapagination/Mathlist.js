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
import Card from 'react-bootstrap/Card';
import ReactPaginate from 'react-paginate';
import { Button } from 'reactstrap';



const Mathlist = () => {
    const pageNumberLimit = 5;
    const [passengersData, setData] = useState([]);
    const [classlist, setClasslist] = useState([]);

    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [totalpage, setTotalpage] = useState(0);
    const [limit, setLimit] = useState(4);
    const [minPageLimit, setMinPageLimit] = useState(0);
    const [schoolid, setSchoolid] = useState(localStorage.getItem('schoolid'));
    const [teacherid, setTeacherid] = useState(localStorage.getItem('vendoremailaddress'))
    const [versionname, setVersionname] = useState('');
    const [classname, setClassname] = useState('');


    useEffect(() => {
        setLoading(true);
         console.log(base.BASE_URL + '/Mathsubject/Math/' + currentPage + '/' + limit)
        axios.get(base.BASE_URL + '/Mathsubject/Math/' + currentPage + '/' + limit, {
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

    return (
        <div>
            <Row>

                {
                    passengersData.map((result) => {
                        return (
                            <Col xs={6} sm={3}>
                           <Link to={"/Questiondetails/" + result._id + '/' + result.examname} style={{ textDecoration: 'none',  }}> 
                             {/*  <Link to="#" style={{ textDecoration: 'none',  }}> */}

                                    <Card style={{ marginBottom: 10 }}>
                                        {
                                            result.image == null ?
                                            <Card.Img variant="top" src="../images/exam.png" 
                            style={{ backgroundPosition: '50%', resize: 'cover', height: 170 }} />
                                            :
                                            <Card.Img variant="top" src={base.BASE_URL + result.image} 
                                        style={{ backgroundPosition: '50%', resize: 'cover', height: 170 }} />
                                        }
                                        
                                        <Card.Body style={{ display: 'flex', alignContent: 'space-between' }}>
                                            <Card.Title style={{ textDecoration: 'none', fontSize: 12, color: '#000' }}>
                                                {result.examname} </Card.Title>
                                               {/*  {result.result.examid}<Card.Title style={{ textDecoration: 'none', fontSize: 12, color: '#000' }}>
                                               Q. 10 </Card.Title> */}
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    })

                    //  :
                    //  'No Data'

                }
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
export default Mathlist;