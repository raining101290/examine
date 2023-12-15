import React, { useEffect, useState } from 'react'
import Header from '../../Layout/Header'
import Container from 'react-bootstrap/Container';
import * as base from '../global';
import axios from 'axios';
import LoadingSpinner from '../library/LoadingSpinner';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import { errorToast, successToast } from "../page/library/toast";
import { errorToast, successToast } from '../library/toast'

const Studentviewpayment = (props) => {

    const [isloading, setIsloading] = useState(true);
    const [users, setUsers] = useState([]);
    const [studentid, setStudentid] = useState(props.match.params.id);
    const [show, setShow] = useState(false);
    const [id, setId] = useState('');
    const [status, setStatus] = useState('');
    const [selectValue, setSelectValue] = React.useState("");
    const [showpackage, setShowpackage] = useState(false); // package info

    /* 
    show={showpackage} onHide={handleClosepackage}
    */
    const handleClosepackage = () => {
        setShowpackage(false);
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = (id,email) => {
     //   alert(id);
     console.log(id);
        setShow(true);
    }
    const handledeletepackage = () => {
        if(id == '' )
        {
            errorToast("Required");
        }
        else
        {
            axios.post(base.BASE_URL + '/deletestudentpackage', {
                status: selectValue,
                ID: id
              })
                .then((response) => {
                   // alert(response.data);
                  if (response.data == "delete") {
                   // alert('update successfully')
                    setShow(false);
                    successToast("Delete successfully");
                    getData();
                    
                  }
                  else if (response.data == "Unauthorized") {
                    this.setState({ loggdin: 'stop', isLoading: false })
                    alert("unauthorized");
                  }
                  else if (response.data == "Unauthorized f") {
        
                    this.setState({ loggdin: 'stop', isLoading: false })
                    alert("unauthorized");
        
                  }
        
        
                }, (error) => {
                 
                  console.log(error);
                 
                });
        }

    }
    const handleupdatestatus = () => {
        if(id == ''|| selectValue == '' )
        {
            errorToast("Required");
        }
        else
        {
            axios.post(base.BASE_URL + '/updatetrialstatus', {
                status: selectValue,
                ID: id
              })
                .then((response) => {
                   // alert(response.data);
                  if (response.data == "save") {
                   // alert('update successfully')
                    setShow(false);
                    successToast("update successfully");
                    getData();
                    
                  }
                  else if (response.data == "Unauthorized") {
                    this.setState({ loggdin: 'stop', isLoading: false })
                    alert("unauthorized");
                  }
                  else if (response.data == "Unauthorized f") {
        
                    this.setState({ loggdin: 'stop', isLoading: false })
                    alert("unauthorized");
        
                  }
                }, (error) => {
                  console.log(error);
                });
        }
    }

   
    const onChange = (event) => {
      const value = event.target.value;
     // alert(value);
      setSelectValue(value);
    };

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {

        console.log(base.BASE_URL + '/getstudentpackageinfo/' + studentid)
        axios.get(base.BASE_URL + '/getstudentpackageinfo/' + studentid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setUsers(res.data);
            setIsloading(false)
            window.scrollTo(0, 0);

        });
        // setIsloading(false) 
    }
    return (
        <>
            <Header />
            <Container style={{ marginTop: 86 }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: 10 }}>
                    <Link to="/Studentuserlist" className='btn btn-primary'>Back</Link>
                  {/*   <Link to="" className='btn btn-primary'>Add Package</Link> */}

                    <Button variant="primary" 
                    onClick={() => {
                    setShowpackage(true);
                    }
                    }
                    >Add Package</Button>
                </div>
                <Row>
                    <Col xs={12}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>ID</th>
                                    <th>Purchase Date</th>
                                    <th>Student ID</th>
                                    <th>Package Name</th>
                                    <th>Amount</th>
                                    <th>Class Name</th>
                                    <th> Status</th>
                                    <th>View</th>
                                    <th>Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    isloading ?
                                        <LoadingSpinner />
                                        :
                                        users ?
                                            users.map(d => {
                                                return <tr>
                                                    <td>{d._id}</td>
                                                    <td>{d.purchasedate} {d.updatetime}</td>
                                                    <td> {d.studentid} </td>
                                                    <td>{d.packagename} </td>
                                                    <td>{d.amount} </td>
                                                    <td>{d.classname} </td>
                                                    <td>{d.status} </td>
                                                    <td>
                                                        <Button variant="primary" 
                                                        onClick={() => {
                                                            setId(d._id);
                                                            setStatus(d.status);
                                                            console.log(d._id);
                                                            setShow(true);
                                                        }
                                                        }
                                                        >View</Button>
                                                    </td>
                                                    <td>
                                                       <Button variant="danger" 
                                                        onClick={() => {
                                                            setId(d._id);
                                                            setStatus(d.status);
                                                            console.log(d._id);
                                                            setShow(true);
                                                        }
                                                        }
                                                        >Delete</Button>
                                                    </td>
                                                </tr>

                                            })

                                            :
                                            ''
                                }
                            </tbody>
                        </Table>
                    </Col>

                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="form-group">
                        <p>{id}</p>
                    </div>
                        {/* Woohoo, you are reading this text in a modal! */}
                        <div className="form-group" >
                               <select className="form-control" onChange={onChange} >
                               <option value={status}>{status}</option>
                                  <option value="approve">approve</option>
                                  <option value="expair">expair</option>
                                 
                                </select>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleupdatestatus}>
                            Save Changes
                        </Button>
                        <Button variant="danger" onClick={handledeletepackage}>
                            Delete Package
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showpackage} onHide={handleClosepackage}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Package</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="form-group">
                        <p>{id}</p>
                    </div>
                        {/* Woohoo, you are reading this text in a modal! */}
                        <div className="form-group" >
                               <select className="form-control" onChange={onChange} >
                               <option value={status}>{status}</option>
                                  <option value="approve">approve</option>
                                  <option value="expair">expair</option>
                                 
                                </select>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleupdatestatus}>
                            Add Package
                        </Button>
                     
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    )
}

export default Studentviewpayment