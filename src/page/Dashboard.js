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
import { Link, useHistory } from 'react-router-dom';
import Footer from './Footer';
import Topbar from '../Layout/Topbar';
import Nav from 'react-bootstrap/Nav';

import { DateRange } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowRightArrowLeft, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

import { Button, Form } from 'reactstrap';
import Dashboardteacher from './Dashboardteacher'
import Mathlist from './datapagination/Mathlist'
import Englishlist from './datapagination/Englishlist'
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";


export default function Dashboard(props) {

  const history = useHistory()

  const [userrole, setUserrole] = useState(localStorage.getItem("usersrole"))
  const [schoolid, setSchoolid] = useState(localStorage.getItem('schoolid'))
  const [username, setUsername] = useState(localStorage.getItem("fullname"));
  const [searchtext, setSearchtext] = useState('');
  /*   useEffect(() => {
      // alert(userid);
      const getConversations = async () => {
        try {
          const res = await axios.get(base.BASE_URL + "/allvideo.php");
          setMoviedetails(res.data);
          //console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getConversations();
    }, []);
   */
    useEffect(() => {
    window.scrollTo(0, 0);
    });
    
  return (
    <div>
      <Container style={{ padding: 20 }}>
        <Header /> {/* Slider Menu */}
      </Container>
      <Container style={{ marginTop: 40, marginBottom: 300 }}>
        <Row>
          <Col style={{ textAlign: 'center', fontSize: 27, fontWeight: 'bold', padding: 20 }}>What will you teach today?</Col>
        </Row>
        <Row style={{ marginTop: 50 }}>
          <Col sm={12} style={{ marginBottom: 50 }}>

            <div className='teachdashboardsearchtextsearch'>
{/*               <input type="text" 
                id="exampleInputEmail" aria-describedby="emailHelp"
                 placeholder="Type Subject name and press enter"
                className='textsearchteacher'
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                        setSearchtext(e.target.value);
                        history.push("/Subjectfilterlist/" + e.target.value  + '/1/12')
                  }
              }}
              /> */}

<Input
        type="text"
        placeholder="Type Subject name and press enter"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
             // this.setState({ searchtext: e.target.value },
                setSearchtext(e.target.value);
                history.push("/Subjectfilterlist/" + e.target.value  + '/1/12')
          }
      }}
        className="form-control " 
        endAdornment={
          <InputAdornment position="end">
            <IconButton
             className="passwordiconpage"
            >
           <FontAwesomeIcon icon={faSearch} style={{ color: 'silver', padding: 12, fontSize: 22 }}></FontAwesomeIcon>
            </IconButton>
          </InputAdornment>
        }
      />

              

            </div>
          </Col>

        </Row>

        <Row>
          <Col className='allsubject'>
            <Link to="/Subjectfilterlist/Math/1/12">
            <div className='subjectwithimage'>
              <img src='/images/subject/math.png' className='imagesubject' />
              <p style={{ textAlign: 'center' }}>Math</p>
            </div>
            </Link>
            <Link to="/Subjectfilterlist/English/1/12">
            <div className='subjectwithimage'>
              <img src='/images/subject/english.png' className='imagesubject' />
              <p style={{ textAlign: 'center' }}>English</p>
            </div>
            </Link>
            <Link to="/Subjectfilterlist/Social studies/1/12">
            <div className='subjectwithimage'>
              <img src='/images/subject/socialstudies.png' className='imagesubject' />
              <p style={{ textAlign: 'center' }}>Social studies</p>
            </div>
            </Link>
            <Link to="/Subjectfilterlist/Languages/1/12">
            <div className='subjectwithimage'>
              <img src='/images/subject/world.png' className='imagesubject' />
              <p style={{ textAlign: 'center' }}>Languages</p>
            </div>
            </Link>
            <Link to="/Subjectfilterlist/Science/1/12">
            <div className='subjectwithimage'>
              <img src='/images/subject/science.png' className='imagesubject' />
              <p style={{ textAlign: 'center' }}>Science</p>
            </div>
            </Link>
            <Link to="/Subjectfilterlist/Computer/1/12">
            <div className='subjectwithimage'>
              <img src='/images/subject/computer.png' className='imagesubject' />
              <p style={{ textAlign: 'center' }}>Computer</p>
            </div>
            </Link>
            <Link to="/Subjectfilterlist/Arts/1/12">
            <div className='subjectwithimage'>
              <img src='/images/subject/carts.png' className='imagesubject' />
              <p style={{ textAlign: 'center' }}>Arts</p>
            </div>
            </Link>
            <Link to="/Subjectfilterlist/Health/1/12">
            <div className='subjectwithimage'>
              <img src='/images/subject/health.png' className='imagesubject' />
              <p style={{ textAlign: 'center' }}>Health</p>
            </div>
            </Link>
          </Col>
        </Row>

        <div style={{
          width: '100%', backgroundColor: '#f2f2f2', borderRadius: 20,
          padding: 10, alignContent: 'space-between', marginBottom: 50
        }}>
          <Row>
            <Col sm={6}>
              <div style={{ padding: 34 }}>
                <h3>Make your own Examamine !</h3>
                <p>Engage live or asynchronously with quiz and poll questions.</p>
                <Link to="/Examsetuplist" className='createquizbutton'>
                  <FontAwesomeIcon icon={faPlus} style={{ marginRight: 5 }}></FontAwesomeIcon>
                  Create Exam
                </Link>

              </div>
            </Col>
            <Col sm={6}>
              <div className='quiz_image_right'>
                <img src='/images/subject/quiz_image.png' className='quiz_image' />

              </div>
            </Col>
          </Row>
          
        </div>
        <Row style={{ marginBottom: 20 }}>
            <Col>
                <div className='matchfetchdata'>
                    <div className='matchfetchdataone'>Math</div>
                    <Link to="/Subjectfilterlist/Math/2/12">
                    <div className='matchfetchdatatwo'>
                     see more
                    <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 5 }}></FontAwesomeIcon>
                    
                    </div>
                    </Link>
                </div>
            </Col>
          </Row>

          <Row style={{ marginBottom: 20 }}>
            <Col>
               <Mathlist />

            </Col>
          </Row>
          
          <Row style={{ marginBottom: 20 }}>
            <Col>
                <div className='matchfetchdata'>
                    <div className='matchfetchdataone'>English</div>
                    <Link to="/Subjectfilterlist/English/2/12">
                    <div className='matchfetchdatatwo'>
                     see more
                    <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 5 }}></FontAwesomeIcon>
                    
                    </div>
                    </Link>
                </div>
            </Col>
          </Row>
          <Row style={{ marginBottom: 20 }}>
            <Col>
               <Englishlist />

            </Col>
          </Row>
          
          <div style={{ padding: 50 }}>
            </div>
      </Container >
      <Footer />
    </div >
  );

}
