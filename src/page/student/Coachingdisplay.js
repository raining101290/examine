import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import * as base from "../global";
import axios from 'axios';
import Examimage from './Examimage';
import Remaningquestion from './Remaningquestion'
import groupBy from 'json-groupby';
import LoadingSpinner from '../library/LoadingSpinner';

const Coachingdisplay = ({newUser, setNewUser}) => {
  
  //let subtitle;
  //const [modalIsOpen, setIsOpen] = React.useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)
  //const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))
  

  const getData = () => {

    let base_url
    if(localStorage.getItem('className') === 'HSC 2024'){
      base_url = base.BASE_URL_COLLEGE
    } else{
      base_url = base.BASE_URL
    }
    // console.log('LocalStorage', base.BASE_URL + '/coachingcourse/' + localStorage.getItem('className') + '/' + localStorage.getItem('groupname') + '/' + localStorage.getItem('versionname'))
    setLoading(true)
    axios.get(base_url + '/coachingcourse/' + localStorage.getItem('className') + '/' + localStorage.getItem('groupname') + '/' + localStorage.getItem('versionname'), {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      let newdata = groupBy(res.data, ['subjectname']);
      setUsers(newdata)
      window.scrollTo(0, 0);
      setLoading(false)
    });
  }

  const isEmptyLoalStorage =()=>{
    if(localStorage.getItem('className') === "" ||
    localStorage.getItem('className') === "undefined" ||
    localStorage.getItem('groupname') === "" ||
    localStorage.getItem('groupname') === "undefined" ||
    localStorage.getItem('versionname') === "" ||
    localStorage.getItem('versionname') === "undefined"){
      return true
    }
  }
  useEffect(() => {
    if(isEmptyLoalStorage()){
      setNewUser(true)
    }else{
      getData();
    }
    //var after = groupBy(users, ['subjectname']);
  }, [])
  
  

  useEffect(()=>{
    getData();
  },[newUser])

  return (
    <Container>
      
        {/* <Row>
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0">
                <div className="card-body p-0">
                  <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                    <div className="col-md-12">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Select Question Type</h1>
                        </div>
                        <form className="user">
                          <div className='row'>
                            <div className="col-md-3">
                              <div className="form-group">
                                <select 
                                  className="form-control"
                                  value={selectedClass}
                                  onChange={handleclassName}
                                >
                                  <option value="0">Select-Class</option>
                                  {
                                    classdata && classdata.map((cl) => {
                                      return <option value={cl.classname} >{cl.classname}</option>
                                    })
                                  }
                                </select>
                                <span style={{ color: "red", fontSize: 10 }}>{studentInfo.errors["className"]}</span>

                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <div>
                                  <select 
                                    className="form-control"
                                    value={selectedGroup}
                                    onChange={handlegroupname}
                                  >
                                    <option value="0">Select-Group</option>
                                    <option value="Arts">Arts</option>
                                    <option value="Commerce">Commerce</option>
                                    <option value="Science">Science</option>
                                  </select>
                                  <span style={{ color: "red", fontSize: 10 }}>{studentInfo.errors["groupname"]}</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <select 
                                  className="form-control"
                                  onChange={handleversion}
                                  value={selectedVersion}
                                  >
                                  <option value="0">Select-Version</option>
                                  <option value="Bangla Version">Bangla Version</option>
                                  <option value="English Version">English Version</option>
                                </select>
                                <span style={{ color: "red", fontSize: 10 }}>{studentInfo.errors["versionname"]}</span>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <Button type="button" className="btn btn-primary" onClick={setLocalStorage} style={{marginRight:10}}>
                                Submit
                              </Button>
                              <Button type="button" className="btn btn-danger" onClick={clearLocalStorage}>
                                Clear
                              </Button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row> */}
      
      {
        loading ? 
        <LoadingSpinner /> :
        <Row>
          {Object.entries(users).map(([dep, staff]) => {
            return (
                <div > {/* style={{ padding: 50 }} */}
                  <div style={{
                    justifyContent: 'space-between',
                    width: '100%', display: 'flex', padding: 5, marginTop: 13
                  }}>
                    {dep} <p><Link to={"/Readmore/" + dep} className='readmore'>
                      Read More
                      </Link></p>
                  </div>
                  <Row>

                  </Row>
                  <Row>
                    
                {/*  <Sixdatalist data={staff}/> */}
                  {staff.slice(0, 6).map((result,slno) => { // slice 0,5 means limit of index 0 to 5
                      return <Col xs={6} sm={2} key={slno}>
                        <Link to={"/Starttoprocesscourse/" + result._id} style={{ textDecoration: 'none' }}>
                          <Card style={{ marginBottom: 15 }}>
                            <Examimage data={result._id} />
                            <Card.Footer>
                              <Remaningquestion data={result._id} />
                            </Card.Footer>
                          </Card>
                        </Link>
                      </Col>
                  })} 
                  </Row>
                </div>

            )
          }
          )
          }
        </Row>
      }
      
    </Container>
  );
}


export default Coachingdisplay;