import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from 'react-router-dom';


const Studentheader = () => {
  const history = useHistory();
  const [searchtext, setSearchtext] = useState('');
  const [errorsearch, setErrorsearch] = useState(false);

  const finddata = () => {
    if (searchtext === "") {
      setErrorsearch(true);
      return;
    }
    else {
      history.push("/Studentfindsubject/" + searchtext + '/1/12')
    }
  }
  useEffect(() => {
  //  alert(localStorage.getItem('studentid'))

  },[]);

  const flogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("studentid");
    localStorage.removeItem("userrole");
    history.push('/');
  }
  //https://mui.com/material-ui/react-menu/
  return (
    <Navbar expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src='/images/logo.png' style={{ width: 78, height: 58, marginLeft: 10 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{ marginRight: 20 }} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
           /*  className="me-auto my-2 my-lg-0" */
           className='col-md-8'
            style={{ maxHeight: '100px', padding: 15, 
            borderWidth: 1, borderColor: '#000',
            justifyContent: 'center' }}
            navbarScroll
          >
            <div className='firstdivstudentdeashboardsearch'>
              <div className='searchstudentbycourse'>
                <input type="text" className="studentsearchtext"
                  id="exampleInputEmail" aria-describedby="emailHelp"
                  placeholder="Search by Name"
                  onChange={(e) => { setSearchtext(e.target.value) }}
                />
                <Link to="#" className='studentsearchbutton' style={{ backgroundColor: '#6c4298' }}
                  onClick={finddata}>
                  <FontAwesomeIcon icon={faSearch} className='studentsearchbutton_icon'></FontAwesomeIcon>
                </Link>
              </div>
              {
                errorsearch == true ?
                  <p style={{ color: 'red', fontSize: 12 }}>Fill up the search bar</p>
                  :
                  ''
              }

            </div>
          </Nav>


          <Form className="d-flex">
            <Link to="/Studentdashboard" className='btn' variant="outline-success"
              style={{ marginRight: 10 }}>
              Dashboard {localStorage.getItem('userrole')}</Link>
            <Link to="/Editstudentprofile" className='btn' variant="outline-success"
              style={{ marginRight: 10 }}>
              Profile</Link>
              <Link to="/Paymenthistory" className='btn' variant="outline-success"
              style={{ marginRight: 10 }}>
              Package</Link>
          
            <Link to="/Resulttransaction" className='btn' variant="outline-success"
              style={{ marginRight: 10 }}>
              Result</Link>
            <Link to="#" className='btn' variant="outline-success"
              onClick={flogout}>
              Logout</Link>
          </Form>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Studentheader;