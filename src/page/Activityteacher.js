import React, { useEffect, useState } from 'react';
//import { Redirect } from 'react-router';
import Header from '../Layout/Header'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Topbar from '../Layout/Topbar';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';
import { DateRange } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faDrum } from '@fortawesome/free-solid-svg-icons'

import { Button, Form } from 'reactstrap';
import Dashboardteacher from './Dashboardteacher'


export default function Activityteacher(props) {


  const [userrole, setUserrole] = useState(localStorage.getItem("usersrole"))
  const [username, setUsername] = useState(localStorage.getItem("fullname"));
  const [schoolid, setSchoolid] = useState(localStorage.getItem('schoolid'));
  const [teacherid, setTeacherid] = useState(localStorage.getItem('vendoremailaddress'))
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [totalpage, setTotalpage] = useState(0);
  const [limit, setLimit] = useState(9);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [passengersData, setData] = useState([]);


    useEffect(() => {
      setLoading(true);
      // console.log(base.BASE_URL + '/examslistteacher/' + schoolid + '/' + teacherid)
      axios.get(base.BASE_URL + '/draftexamlisttecher/' + schoolid + '/' + teacherid + '/' + currentPage + '/' + limit + '/Draft', {
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
const publish =() => {
    setLoading(true);
    setData('')
    // console.log(base.BASE_URL + '/examslistteacher/' + schoolid + '/' + teacherid)
    axios.get(base.BASE_URL + '/draftexamlisttecher/' + schoolid + '/' + teacherid + '/' + currentPage + '/' + limit + '/Publish', {
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
}

const draft =() => {
    setLoading(true);
    setData('')
    // console.log(base.BASE_URL + '/examslistteacher/' + schoolid + '/' + teacherid)
    axios.get(base.BASE_URL + '/draftexamlisttecher/' + schoolid + '/' + teacherid + '/' + currentPage + '/' + limit + '/Draft', {
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
}


  return (
    <div>
      <Container style={{ padding: 20 }}>
        <Header /> {/* Slider Menu */}
      </Container>
      <Container style={{ marginTop: 20, marginBottom: 300 }}>
        <Row style={{ marginTop: 50 }}>
          <Col sm={12} style={{ marginBottom: 10 }}>

            <div className=''>
                <Link to="#" className='running' style={{ color: 'blue' }} onClick={draft}>Draft
                <FontAwesomeIcon icon={faDrum} style={{ marginLeft: 10 }}></FontAwesomeIcon>
                </Link>
                <Link to="#" className='running' onClick={publish}>Publish <FontAwesomeIcon icon={faFile} style={{ marginLeft: 10 }}>
                  </FontAwesomeIcon></Link>
               
            </div>
           </Col>
          </Row>
         
            <div className='runningimagediv'>
            <Row>
            {
                passengersData.length > 0 ?

                    passengersData.map((result) => {
                        return (
                            <Col sm={4}>
                                    <Link variant="info" to={"/Editaddnewexam/" + result._id}
                                                    style={{ marginRight: 10 }} title="Edit Exams"
                                                >
                                <div class="card position-relative" style={{ marginBottom: 10 }}>
                                    <div class="card-body" style={{ textAlign: 'left', fontSize: 12 }}>
                                                   <p> Exam Name : {result.examname}</p>
                                                <p>Version: {result.versionname}</p>
                                                <p>Subject Name: {result.subjectname}</p>
                                                <p>Class Name : {result.classname}, {result.xsection}</p>
                                                <p>Group : {result.xgroup}</p>
                                               
                                                   
                                                
                                                          
                                              
                                                <p> Exam fees : {result.examfees} </p>
                                                <p> No of Student : {result.noofstudent}</p>
                                                <p>
<Button>
{result.examstatus}
</Button>
                                                    
                                                
                                                
                                                </p>
                                                    <img src={base.BASE_URL + result.image}
                                                        style={{ width: 50, height: 50, resize: 'cover' }} />
                                                  
                                    </div>
                                </div>
                                </Link>
                            </Col>

                        )
                    })

                   :
                   <div>
                     <h3 className='running_headline'>Looks like you haven't Added any quiz yet.</h3>
                        <img src='./images/activity.png' className='running_image' />
                   </div>

                }
  </Row>

            </div>
      

      
      </Container >
      <Footer />
    </div >
  );

}
