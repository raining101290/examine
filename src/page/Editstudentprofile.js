import React, { useEffect, useState } from 'react';
//import { Redirect } from 'react-router';
import Studentheader from './student/Studentheader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';

//import { Button, Modal } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Footer from './Footer';
import Topbar from '../Layout/Topbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DateRange } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faPassport } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from './library/LoadingSpinner';




export default function Editstudentprofile(props) {


    const history = useHistory()
    const [userrole, setUserrole] = useState(localStorage.getItem("usersrole"))
    const [schoolid, setSchoolid] = useState(localStorage.getItem('schoolid'))
    const [username, setUsername] = useState(localStorage.getItem("fullname"));
    const [fullname, setFullname] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [password, setPassword] = useState('');
    const [studentid, setStudentid] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [groupname, setGroupname] = useState('');
    const [classname, setClassname] = useState('');
    const [sectionname, setSectionname] = useState('');
    const [loader, setLoader] = useState('Update Password');
    const [isloading, setIsloading] = React.useState(false);


    const handlechangefullname = (e) => {
        setFullname(e.currentTarget.value);
    }
    const handlechangeemail = (e) => {
        setEmailaddress(e.currentTarget.value)
    }
    const handlechangepassword = (e) => {
        setPassword(e.currentTarget.value)
    }
    useEffect(() => {
        // alert(userid);'
        const getConversations = async () => {
            setIsloading(true)
            try {
                console.log(base.BASE_URL + "/studentviewprofile/" + localStorage.getItem('studentid'))
                const res = await axios.get(base.BASE_URL + "/studentviewprofile/" + localStorage.getItem('studentid'));
                // setMoviedetails(res.data);
                setStudentid(res.data[0].studentid)
                setFullname(res.data[0].studentname)
                setEmailaddress(res.data[0].email)
                setMobileno(res.data[0].mobileno)
                setGroupname(res.data[0].groupname)
                setClassname(res.data[0].classname)
                setSectionname(res.data[0].versionname)
                setIsloading(false)

                // console.log(res.data);
            } catch (err) {
                console.log(err);
                setIsloading(false);

            }
        };
        getConversations();
    }, []);
    const updatepasswordbtn = () => {
        //alert(password);
        setLoader('...');
        // console.log(base.BASE_URL + '/studentupdatepassword');
        axios.post(base.BASE_URL + '/studentupdatepassword', {
            password: password,
            studentid: localStorage.getItem('studentid')
        }, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
               // alert('ddd')
                //  console.log('ddddd' + response.data.status)
                setLoader('Update Password')
                if (response.data == "save") {

                    //   alert('save')
                    
                }
                else if (response.data == "") {

                    alert("Failed");
                }

            }, (error) => {
                console.log(error);
            });
    }
    const flogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("emailaddress");
        localStorage.removeItem("vendoremailaddress");
        history.push("/");
    }

    return (
        <div>
            <Container style={{ padding: 20 }}>
                <Studentheader /> {/* Slider Menu */}
            </Container>
            <div style={{ marginTop: 25, backgroundColor: '#f9f9f9', padding: 20, width: '100%' }}>
                <h3 style={{ textAlign: 'center', fontSize: 19 }}>Setting</h3>
                <div className='editpagediv'>
                    {
                        isloading ?
                            <LoadingSpinner />
                            :
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail" style={{ display: 'flex' }}>
                                    <FontAwesomeIcon icon={faUser} style={{ marginTop: 5, color: '#EE7258' }}></FontAwesomeIcon>
                                    <h3 style={{ textAlign: 'left', fontSize: 19, marginLeft: 10 }}>Profile </h3>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Student ID </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name"
                                        value={studentid} readOnly
                                    />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Name"
                                        onChange={handlechangefullname}
                                        value={fullname} readOnly
                                    />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Mobile No </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Mobile No"
                                        value={mobileno} readOnly
                                    />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Class </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name"
                                        value={localStorage.getItem('className')} readOnly
                                    />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Group Name </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name"
                                        value={localStorage.getItem('groupname')} readOnly
                                    />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Version </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name"
                                        value={sectionname} readOnly
                                    />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"
                                        onChange={handlechangeemail}
                                        value={emailaddress} readOnly
                                    />

                                </Form.Group>
                                {/*    <Button variant="primary" type="submit">
                           Update 
                       </Button> */}
                            </Form>
                    }


                </div>
                <div className='editpagediv'>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', borderBottomWidth: 1, borderBottomColor: 'silver' }}>
                            <FontAwesomeIcon icon={faPassport} style={{ marginTop: 5, color: '#EE7258' }}></FontAwesomeIcon>
                            <p style={{ marginLeft: 10 }}>Change Password</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password"
                                onChange={handlechangepassword}
                                value={password}
                            />

                        </Form.Group>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Button variant="primary" type="submit" onClick={updatepasswordbtn}>
                            {
                                loader == 'Update Password' ?
                                    'Update Password'
                                    :
                                    <div style={{ fontSize: 18, fontWeight: 'bold' }}>......</div>

                            }
                        </Button>
                    </div>

                </div>
                <div className='editpagediv'>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', borderBottomWidth: 1, borderBottomColor: 'silver' }}>
                            <FontAwesomeIcon icon={faUser} style={{ marginTop: 5, color: '#EE7258' }}></FontAwesomeIcon>
                            <p style={{ marginLeft: 10 }}>Account Setting</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            {/* <p>Delete Account</p> */}
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <Link to="#" onClick={flogout}>Logout</Link>
                        </div>
                    </div>

                </div>



            </div>
            <Footer />
        </div>
    );

}
