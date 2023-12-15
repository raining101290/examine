import React, { useEffect, useState } from 'react';
//import { Redirect } from 'react-router';
import Studentheader from './student/Studentheader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router';
import * as base from "./global";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import { DateRange } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowRightArrowLeft, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import Examimage from '../../src/page/student/Examimage'


export default function Studentfindsubject(props) {

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


    /*    let subject = 'ku';
       const array = [{
         name: 'ram'
       }, {
         name: 'kumar ra'
       }, {
         name: 'nani'
       }];
       const subjectdata = "/" + subject + "/";
       console.log(subjectdata)
       const filtered1 = array.filter(e => e.name.match(/'+subject+"/));
       
       console.log(filtered1); */

    setLoading(true);
    console.log(base.BASE_URL + '/Mathsubject/' + localStorage.getItem('className') + '/' + localStorage.getItem('groupname') + '/' + localStorage.getItem('versionname') + '/' + currentPage + '/' + limit)
    axios.get(base.BASE_URL + '/Mathsubject/' + localStorage.getItem('className') + '/' + localStorage.getItem('groupname') + '/' + localStorage.getItem('versionname') + '/' + currentPage + '/' + limit, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      console.log('data' + res.data)
      let datafile = res.data;
      if (res.data.length > 0) {
        let search = props.match.params.id;
        const filtered = datafile.filter(result => {
          return result.examname.match(new RegExp(`${search}`, 'gi'));
          //return result.artist.match(new RegExp(`${search}`, 'gi')) || result.title.match(new RegExp(`${search}`, 'gi'));
        });
        setData(filtered);
        console.log('data' + JSON.stringify(filtered))

      }
      else {

      }
    });

  }, [currentPage]);

  return (
    <div>
      <Container style={{ padding: 20, backgroundColor: '#f9f9f9', width: '100%' }}>
        <Studentheader /> {/* Slider Menu */}
      </Container>
      <Container style={{ marginTop: 40, marginBottom: 300 }}>
        <Row style={{ marginBottom: 20 }}>
          {
            passengersData.map((result) => {
              return (
                <Col xs={6} sm={3}>
                  <Link to={"/Startquiz/" + result.examid} style={{ textDecoration: 'none', }}>
                    <Card style={{ marginBottom: 10 }}>
                      {
                        result.image == null ?
                          <Card.Img variant="top" src="../../../images/exam.png"
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
              <h3>No Data Found</h3>
              :
              ''
          }




        </Row>


        <div style={{ padding: 50 }}>
        </div>
      </Container >
      <Footer />
    </div >
  );

}
