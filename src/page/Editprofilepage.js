import React, { useEffect, useState } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer';
import Topbar from '../Layout/Topbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DateRange } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'



export default function Editprofilepage(props) {



    const [userrole, setUserrole] = useState(localStorage.getItem("usersrole"))
    const [schoolid, setSchoolid] = useState(localStorage.getItem('schoolid'))
    const [username, setUsername] = useState(localStorage.getItem("fullname"));
    const [fullname, setFullname] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [password, setPassword] = useState('');
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
          try {
            const res = await axios.get(base.BASE_URL + "/teacherviewprofile/" + localStorage.getItem('vendoremailaddress'));
           // setMoviedetails(res.data);
           setFullname(res.data[0].fullname)
           setEmailaddress(res.data[0].email)
           // console.log(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getConversations();
      }, []);
     


    return (
        <div>
            <Container style={{ padding: 20 }}>
                <Header /> {/* Slider Menu */}
            </Container>
            <div style={{ marginTop: 18, backgroundColor: '#f9f9f9', padding: 20, width: '100%' }}>
                <h3 style={{ textAlign: 'center', fontSize: 19 }}>Setting</h3>
                <div className='editpagediv'>
                   
                    <Form>
                         <Form.Group className="mb-3" controlId="formBasicEmail" style={{ display: 'flex' }}>
                         <FontAwesomeIcon icon={faUser} style={{ marginTop: 5, color: '#EE7258' }}></FontAwesomeIcon>
                          <h3 style={{ textAlign: 'left', fontSize: 19, marginLeft: 10 }}>Profile </h3>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Name" 
                            onChange={handlechangefullname}
                            value={fullname}
                            />
                     
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" 
                             onChange={handlechangeemail}
                             value={emailaddress}
                            />
                          
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Change Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                              onChange={handlechangepassword}
                              value={password}/>
                        </Form.Group>
                       
                        <Button variant="primary" type="submit">
                            Update 
                        </Button>
                    </Form>
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
                            <p>Delete Account</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <Link to="">Logout</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}
