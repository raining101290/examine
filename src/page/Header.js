import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


import i18next from 'i18next';
import { useTranslation } from 'react-i18next'
import Languagesconfigureation from './languages/languagesconfigureation';
import './front/header.css'

const Header = (props) => {
  const [studentid, setStudentid] = useState(localStorage.getItem("studentid"));
  const [emailaddress, setEmailaddress] = useState(localStorage.getItem("vendoremailaddress"));
  const [userrole, setUserrole] = useState(localStorage.getItem("usersrole"));
  const [logout, setLogout] = useState('');
  const { t } = useTranslation();
  const [language, setLanguage] = useState('BN');


  const handleclickeng = () => {

   // alert(a)
    /* 
                    <a href="#" onClick={handleclick('en-US')}>English</a>
                <a href="#" onClick={handleclick('bn')}>Bangla</a>

    */
   /*  i18next.changeLanguage(e.target.value);
    console.log('event....' + e.target.value) */
    i18next.changeLanguage('en-US');
    setLanguage('EN')

  }
  const handleclickbn= () => {
    // alert(a)
     /* 
                     <a href="#" onClick={handleclick('en-US')}>English</a>
                 <a href="#" onClick={handleclick('bn')}>Bangla</a>
 
     */
    /*  i18next.changeLanguage(e.target.value);
     console.log('event....' + e.target.value) */
     i18next.changeLanguage('bn');
     setLanguage('BN')
 
   }
  const flogout = () => {
    //alert('');
    // localStorage.removeItem("token");
    // localStorage.removeItem("emailaddress");
    // localStorage.removeItem("studentid");
    // localStorage.removeItem("vendoremailaddress");
    // localStorage.removeItem("userrole");
    localStorage.clear();
    setLogout(true);
    window.location.reload()

  }
  useEffect(() => {
    // alert(studentid);
    //localStorage.getItem('studentid') == null ? 'Logout' : '';
    //localStorage.getItem('emailaddress') == null ? 'Logout' : '';

  }, [])



  return (
    <Navbar expand="lg" fixed="top">
      <Container fluid>
        <Link to="/">
          {/* <h3 style={{ color: '#5D1F57' }}>examamine</h3> */}
          <img src='/images/logo.png' style={{ width: 78, height: 58, marginLeft: 10 }} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" style={{ marginRight: 20 }} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '157px', padding: 15 }}
            navbarScroll
          >
            {/*    <Link to="/Teacher" style={{ padding: 15, textDecoration: 'none' }}>
               {t('Forteacher')} 
              </Link>
              <Link to="/Students" style={{ padding: 15, textDecoration: 'none'}}>
              {t('Forstudent')} 
              </Link> */}
         
        {/*     <select name="" onChange={handleclick} style={{ marginTop: 17, height: 20 }}>
              <option value="bn">বাংলা</option>
              <option value="en-US">English</option>
            </select> */}



          </Nav>


          {
            studentid == null ?
              <Form className="d-flex" style={{ padding: 10 }}>
                   <div className="dropdown">
              <button className="dropbtn" id="language">{language}</button>
              <div className="dropdown-content">
                <a href="#" onClick={handleclickeng}>English</a>
                <a href="#" onClick={handleclickbn}>Bangla</a>
              </div>
            </div>
                <Link to="/Signinwithaccount" className='btn'
                  style={{
                    backgroundColor: '#ffffff', color: '#000',
                    marginRight: 5, borderWidth: 2, borderColor: '#000', padding: 9
                  }}>
                  {t('Signin')} {studentid}</Link>
                <Link to="/Signupwithaccount" className='btn' variant="outline-success"
                  style={{ backgroundColor: '#8854c0', color: '#ffffff', padding: 9 }}>
                  {t('Signup')} </Link>
              </Form>
              :
              <Form className="d-flex">
                {
                  localStorage.getItem('userrole') == "Teacher" ?
                    <Link to="/Dashboard" className='btn' variant="outline-success"
                      style={{ backgroundColor: '#8854c0', color: '#ffffff', marginRight: 10 }}>
                      Teacher Dashboard</Link>
                    :
                    ''
                }

                {
                  localStorage.getItem('userrole') == "Super Admin" ?
                    <Link to="/Dashboard" className='btn' variant="outline-success"
                      style={{ backgroundColor: '#8854c0', color: '#ffffff', marginRight: 10 }}>
                      Admin Dashboard</Link>
                    :
                    ''

                }

                <Link to="/Studentdashboard" className='btn' variant="outline-success"
                  style={{ backgroundColor: '#8854c0', color: '#ffffff', marginRight: 10 }}>
                    Dashboard
                </Link>
                <Link to="#" className='btn' variant="outline-success"
                  style={{ backgroundColor: '#8854c0', color: '#ffffff' }} onClick={flogout}>
                  {t('Logout')}</Link>
              </Form>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
  /*  } */
}

export default Header