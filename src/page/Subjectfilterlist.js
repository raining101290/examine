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
import Footer from './Footer';
import Topbar from '../Layout/Topbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import { DateRange } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowRightArrowLeft, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

import { Button, Form } from 'reactstrap';
import Dashboardteacher from './Dashboardteacher'
import Mathlist from './datapagination/Mathlist'
import Englishlist from './datapagination/Englishlist'

export default function Subjectfilterlist(props) {

  const [passengersData, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [userrole, setUserrole] = useState(localStorage.getItem("usersrole"))
  const [schoolid, setSchoolid] = useState(localStorage.getItem('schoolid'))
  const [username, setUsername] = useState(localStorage.getItem("fullname"));
  const [subject, setSubject] = useState(props.match.params.id);
  const [page, setPage] = useState(props.match.params.ids);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(12);



  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
     console.log(base.BASE_URL + '/Mathsubject/'+ subject + '/' + currentPage + '/' + limit)
    axios.get(base.BASE_URL + '/Mathsubject/'+ subject + '/' + currentPage + '/' + limit, {
        headers: {
            authorization: `bearer ${localStorage.getItem('token')}`
        }
    }).then(res => {
        console.log(res.data)
        if (res.data.length > 0) {
            setData(res.data)
            setLoading(false);
        }
        else {
          setLoading(false);
        }
    });

}, [currentPage]);

  return (
    <div>
      <Container style={{ padding: 20 }}>
        <Header /> {/* Slider Menu */}
      </Container>
      <Container style={{ marginTop: 40, marginBottom: 300 }}>

        <Row style={{ marginTop: 50 }}>
          <Col sm={12} style={{ marginBottom: 50 }}>

           {/*  <div className='teachdashboardsearchtextsearch'>
              <input type="text" 
                id="exampleInputEmail" aria-describedby="emailHelp"
                 placeholder="Search for Examamine on any topic"
                className='textsearchteacher'
              />

              <FontAwesomeIcon icon={faSearch} style={{ color: 'silver', padding: 12, fontSize: 22 }}></FontAwesomeIcon>

            </div> */}
          </Col>

        </Row>

          <Row style={{ marginBottom: 20 }}>

                    {
                    passengersData.map((result) => {
                        return (
                            <Col xs={6} sm={3}>
                                <Link to={"/Questiondetails/" + result._id + '/' + result.examname} style={{ textDecoration: 'none',  }}>

                                    <Card style={{ marginBottom: 10 }}>
                                    {
                                            result.image == null ?
                                            <Card.Img variant="top" src="https://examamine.com/images/exam.png" 
                            style={{ backgroundPosition: '50%', resize: 'cover', height: 170 }} />
                                            :
                                            <Card.Img variant="top" src={base.BASE_URL + result.image} 
                                        style={{ backgroundPosition: '50%', resize: 'cover', height: 170 }} />
                                        }
                                        <Card.Body style={{ display: 'flex', alignContent: 'space-between' }}>
                                            <Card.Title style={{ textDecoration: 'none', fontSize: 12, color: '#000' }}>
                                                {result.examname}, Class : {result.classname}</Card.Title>
                                               {/*  <Card.Title style={{ textDecoration: 'none', fontSize: 12, color: '#000' }}>
                                               Q. 10 </Card.Title> */}
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    })


                   }
                   {
                    passengersData.length == "0" ?
                    <div style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', textAlign: 'center' }}>
                    <h3 className='running_headline'>Looks like Didnot Find anything.</h3>
                       <img src='https://examamine.com/images/activity.png' className='running_image' />
                    </div>
                    :
                    ''
                   }




          </Row>
          
               
          <div style={{ padding: 50 }}>
            </div>
      </Container >
      <Footer/>
    </div >
  );

}
