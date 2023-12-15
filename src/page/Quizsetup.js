import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'
import Footer from './Footer'
import Topbar from '../Layout/Topbar'
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch, faMusic, faQuestion, faArrowRight, faMessage, faL } from '@fortawesome/free-solid-svg-icons'
import { ExitToApp } from '@material-ui/icons';

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";


export class Quizsetup extends Component {

    constructor(props) {
        super(props);
        // this.register = this.register.bind(this);
        this.state = {
            examid: this.props.match.params.id,
            examname: this.props.match.params.ids,
            slno: '1',
            automemberid: '',
            quiztype: '',
            random: 0,
            mcqimage: true, fillinthegapimage: false, matchingimage: false, mathimage: false
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }


    componentDidMount() {
        var min = 1;
        var max = 100;
        var rand = min + (Math.random() * (max - min));
        this.setState({ slno: rand })
        axios.get(base.BASE_URL + '/getexamid/' + this.state.examid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {

            this.setState({
                examname: res.data[0].examname,
                examtype: res.data[0].examtype,
                examdate: res.data[0].examdate,
                examtime: res.data[0].examtime,
                schoolcollegid: res.data[0].schoolcollegid,
                schoolcollegename: res.data[0].schoolcollegename,
                classname: res.data[0].classname,
                xgroup: res.data[0].xgroup,
                xsection: res.data[0].xsection,
                examfees: res.data[0].examfees,
                noofstudent: res.data[0].noofstudent,
                examstatus: res.data[0].examstatus,
                subjectname: res.data[0].subjectname

            })


        });


    }
    register = () => {
      //  alert(this.state.quiztype)
    }
    getcheckpage() {
       // alert(this.state.quiztype)
        if (this.state.quiztype == 'Writting Test') {
            this.setState({

                statuspage: 'Writting Test'
            })
        }
        else if (this.state.quiztype == 'Fill in the Gap') {
            this.setState({

                statuspage: 'Fill in the Gap'
            })
        }
        else if (this.state.quiztype == 'MCQ') {
            this.setState({

                statuspage: 'MCQ'
            })
        }
        else if (this.state.quiztype == 'Match') {
           // alert('Hasan ')
            this.setState({

                statuspage: 'Match'
            })
        }
        else if (this.state.quiztype == 'Audio Test') {
            // alert('Hasan ')
             this.setState({
 
                 statuspage: 'Audio Test'
             })
         }
        else {

        }
    }
    onChangeValue(event) {
        //  console.log(event.target.value);
        // return;
        // alert(event.target.value)
        this.setState({ quiztype: event.target.value })

        this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup quizheaderadd
        axios.post(base.BASE_URL + '/quizsetupautoid', {
            schoolcollegeid: this.state.schoolcollegid,
            subjectid: this.state.subjectid,
            schooltype: this.state.schoolcollegetype,
            schoolname: this.state.schoolcollegename,
            subject: 'fffff',
            groupname: this.state.xgroup,
            examid: this.state.examid,
            examname: this.state.examname,
            sctionname: this.state.xsection,
            id: this.state.slno,
            quiztype: event.target.value,
            questiontype: "x",
            questiontitle: "x",
            questionimage: "x",
            Atype: "Text",
            Atitle: "x",
            Aimage: "x",
            Btype: "Text",
            Btitle: "x",
            Bimage: "x",
            Ctype: "Text",
            Ctitle: "x",
            Cimage: "x",
            Dtype: "Text",
            Dtitle: "x",
            Dimage: "x",
            Answer: "x",
            enteredby: "x",
            updateby: "x",
            status: '1',
            UpdateTime: '',
            statuspage: event.target.value


        }, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.data.message == "save") {
                    this.setState({
                        automemberid: response.data.data._id,
                        loggdin: 'start',
                        loaderfile: 'notloading', firsttab: 'save'
                    })
                    this.getcheckpage();
                }
                else if (response.data == "notfound") {

                }
                else if (response.data == "Authentication failure !") {
                        alert('Authentication failure, login again')
                }
            }, (error) => {
                console.log(error);
            });
    }
    /*  register(quiztype) {
 
         if (this.state.schoolcollegetype == "" || 
         this.state.schoolcollegename == "" || this.state.quiztype == "" || this.state.examid == "" || this.state.examname == "") 
         {
             alert('Insert the Required Fields')
         }
         else 
         {
 
 
 
         }
 
         /////////////////////////////////////////////////////////////////////
 
     } */
     //onMouseOver={this.matchingmouseover} onMouseLeave={this.matchmouseonleave}

    // onMouseOver={this.writtingmouchover} onMouseLeave={this.writtingmouseleft}

    //onMouseOver={this.mathmouseover} onMouseLeave={this.mathmouseoverleft}

    mathmouseover = () => {
        this.setState({
            mcqimage: false,
            fillinthegapimage: false,
            matchingimage: false,
            writtingimage: false,
            mathimage: true

        })
     }


     mathmouseoverleft = () => {
        this.setState({
            mcqimage: false,
            fillinthegapimage: false,
            matchingimage: false,
            writtingimage: false,
            mathimage: false
        })
     }


    writtingmouchover = () => {
        this.setState({
            mcqimage: false,
            fillinthegapimage: false,
            matchingimage: false,
            writtingimage: true

        })
     }


    writtingmouseleft = () => {
        this.setState({
            mcqimage: false,
            fillinthegapimage: false,
            matchingimage: false,
            writtingimage: false
        })
     }

     matchmouseonleave = () => {
        this.setState({
            mcqimage: false,
            fillinthegapimage: false,
            matchingimage: false
        })
     }

     matchingmouseover = () => {
        this.setState({
            mcqimage: false,
            fillinthegapimage: false,
            matchingimage: true
        })
     }


     multipleoverleft = () => {
        this.setState({
            mcqimage: false,
            fillinthegapimage: false,
            matchingimage: false
        })
     }
     fillinthegapleft = () => {
        this.setState({
            fillinthegapimage: false,
            mcqimage: false
        })
     }
     multipleover = () => {
     
            this.setState({
                mcqimage: true,
                fillinthegapimage: false
            })
             
     }
     fillinthegap= () => {

            this.setState({
                fillinthegapimage: true,
                mcqimage: false,
            })
            
     }
     MCQclick =() => {
        this.setState({
            quiztype: 'MCQ'
        })
        const A = "MCQ";
        this.saveafter(A)
     }
     Fillintheclick =() => {
        this.setState({
            quiztype: 'Fill in the Gap'
        })
        const A = "Fill in the Gap";
        this.saveafter(A)
     }
     matchclick =() => {
        //alert('DDD')
        this.setState({
            quiztype: 'Match'
        })
        const A = "Match";
        this.saveafter(A)
     }
     writtenclick =() => {
        this.setState({
            quiztype: 'Writting Test'
        })
        const A = "Writting Test";
        this.saveafter(A)
     }

     mathclick =() => {
        this.setState({
            quiztype: 'Writting Test'
        })
        const A = "Writting Test";
        this.saveafter(A)
     }

     audioclick =() => {
        this.setState({
            quiztype: 'Audio Test'
        })
        const A = "Audio Test";
        this.saveafter(A)
     }

     saveafter =(A) => {
      //  alert(A)
        this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup quizheaderadd
        axios.post(base.BASE_URL + '/quizsetupautoid', {
            schoolcollegeid: this.state.schoolcollegid,
            subjectid: this.state.subjectid,
            schooltype: this.state.schoolcollegetype,
            schoolname: this.state.schoolcollegename,
            subject: 'fffff',
            groupname: this.state.xgroup,
            examid: this.state.examid,
            examname: this.state.examname,
            sctionname: this.state.xsection,
            id: this.state.slno,
            quiztype: A,
            questiontype: "x",
            questiontitle: "x",
            questionimage: "x",
            Atype: "Text",
            Atitle: "x",
            Aimage: "x",
            Btype: "Text",
            Btitle: "x",
            Bimage: "x",
            Ctype: "Text",
            Ctitle: "x",
            Cimage: "x",
            Dtype: "Text",
            Dtitle: "x",
            Dimage: "x",
            Answer: "x",
            enteredby: "x",
            updateby: "x",
            status: '1',
            UpdateTime: '',
            statuspage: A


        }, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.data.message == "save") {
                    this.setState({
                        automemberid: response.data.data._id,
                        loggdin: 'start',
                        loaderfile: 'notloading', firsttab: 'save'
                    })
                    this.getcheckpage();
                }
                else if (response.data == "notfound") {

                }
            }, (error) => {
                console.log(error);
            });
     }

    render() {
        if (this.state.statuspage == 'MCQ') {
            return <Redirect to={`/Quizsetuptwo/${this.state.automemberid}/${this.state.examid}/${this.state.examname}`} />
        }
        if (this.state.statuspage == 'Fill in the Gap') {
            return <Redirect to={`/Fillinthegap/${this.state.automemberid}/${this.state.examid}/${this.state.examname}`} />
        }
        if (this.state.statuspage == 'Writting Test') {
            return <Redirect to={`/Writtingtest/${this.state.automemberid}/${this.state.examid}/${this.state.examname}`} />
        }
        //Match
        if (this.state.statuspage == 'Match') {
            return <Redirect to={`/Matchsetup/${this.state.automemberid}/${this.state.examid}/${this.state.examname}`} />
        }
        //Audio Test
        if (this.state.statuspage == 'Audio Test') {
            return <Redirect to={`/Audiosetup/${this.state.automemberid}/${this.state.examid}/${this.state.examname}`} />
        }
        
        return (

            <div>
                {/* Page Wrapper */}
                <Header /> {/* Slider Menu */}
                <Container style={{ marginTop: 86 }}>

                    <Row style={{ marginTop: 50 }}>
                        <Col sm={12} style={{ marginBottom: 20 }}>

                            <div className='quizsetup_searchtextdiv'>
                                <input type="text"
                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                    placeholder="Search for Examamine on any topic"
                                    className='textsearchteacher'
                                    value={this.state.examname}
                                />

                                <FontAwesomeIcon icon={faSearch} style={{ color: 'silver', padding: 12, fontSize: 22 }}></FontAwesomeIcon>

                            </div>
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <p style={{ textAlign: 'center', width: '100%', marginTop: 20 }}>or, Create a new question</p>
                        </Col>


                    </Row>
                    <Row style={{ marginTop: 10 }}>
                        <Col sm={12} style={{ marginBottom: 20 }}>

                            <div className='quizsetup_searchtextdivmath'>
                            <div className='mathdiv1'>
                                  
                                  <ul style={{ marginTop: 10 }}>
                                      <li onMouseOver={this.multipleover} onMouseLeave={this.multipleoverleft}
                                      onClick={this.MCQclick}
                                      className="limouseover"
                                      >
                                          <img src='/images/MCQ/2.png' className=''
                                          style={{ width: 53, height: 51, padding: 10 }} />
                                          Multiple Choice
                                          
                                      </li>    
                                    <li onMouseOver={this.fillinthegap} onMouseLeave={this.fillinthegapleft} className="limouseover"
                                     onClick={this.Fillintheclick}
                                    >  
                                          <img src='/images/MCQ/fillinthegap.png' className=''
                                      style={{ width: 53, height: 51, padding: 10 }} /> Fill in the Blank</li> 
                                      <li onMouseOver={this.matchingmouseover} onMouseLeave={this.matchmouseonleave} className="limouseover"
                                       onClick={this.matchclick}>  
                                      <img src='/images/MCQ/match.png' className=''
                                      style={{ width: 53, height: 51, padding: 10 }} /> Match</li> 
                                      <li onMouseOver={this.writtingmouchover} onMouseLeave={this.writtingmouseleft} 
                                       onClick={this.writtenclick}
                                      className="limouseover"> 
                                         <img src='/images/MCQ/written.png' className=''
                                      style={{ width: 53, height: 51, padding: 10 }} /> Written test</li> 
                                      <li onMouseOver={this.mathmouseover} onMouseLeave={this.mathmouseoverleft} className="limouseover"
                                       onClick={this.mathclick}>  
                                         <img src='/images/MCQ/Math.jpg' className=''
                                      style={{ width: 53, height: 51, padding: 10 }} /> Math</li> 

                                      <li onMouseOver={this.mathmouseover} onMouseLeave={this.mathmouseoverleft} 
                                      className="limouseover"
                                       onClick={this.audioclick}>  
                                         <img src='/images/MCQ/Math.jpg' className=''
                                      style={{ width: 53, height: 51, padding: 10, marginBottom: 10 }} /> Audio</li> 
                                  </ul>     
                              </div>
                              <div className='mathdiv2'>
                                      <div style={{ width: '100%' }}>
                                          {
                                              this.state.mcqimage == true ?
                                              <div>
                                              <img src='/images/MCQ/mcq.gif' style={{ width: 400, height: 200 }} />
                                              <div style={{ width: 400, height: 80, backgroundColor: '#002060', marginTop: 5,
                                            padding: 5 }}>
                                                  <h3 style={{ fontSize: 12, color: '#ffffff' }}>Multiple Choice</h3>
                                                  <p style={{ fontSize: 11, color: '#ffffff' }}>Check for retention by asking students to pick one or more correct answer, Use text,
                                                    images or match equations to spice things up !
                                                  </p>
                                              </div>
                                              </div>
                                              :
                                              ''
                                          }
                                          {
                                              this.state.fillinthegapimage == true ?
                                            
                                              <div>
                                              <img src='/images/MCQ/fillinthegam.gif' style={{ width: 400, height: 200 }} />
                                              <div style={{ width: 400, height: 80, backgroundColor: '#002060', marginTop: 5,
                                            padding: 5 }}>
                                                  <h3 style={{ fontSize: 12, color: '#ffffff' }}>Fill in the Blank</h3>
                                                  <p style={{ fontSize: 11, color: '#ffffff' }}>Check for retention by asking students to pick one or more correct answer, Use text,
                                                    images or match equations to spice things up !
                                                  </p>
                                              </div>
                                              </div>
                                              :
                                              ''
                                          }
                                           {
                                              this.state.matchingimage == true ?
                                           
                                              <div>
                                              <img src='/images/MCQ/matching.gif' style={{ width: 400, height: 200 }} />
                                              <div style={{ width: 400, height: 80, backgroundColor: '#002060', marginTop: 5,
                                            padding: 5 }}>
                                                  <h3 style={{ fontSize: 12, color: '#ffffff' }}>Match</h3>
                                                  <p style={{ fontSize: 11, color: '#ffffff' }}>Revamp the good ol’ classic & ask students to match anything—from capital cities with states to fractions with their percentages!

                                                  </p>
                                              </div>
                                              </div>
                                            
                                              :
                                              ''
                                          }
                                          {
                                              this.state.writtingimage == true ?
                                            
                                              <div>
                                              <img src='/images/MCQ/written.gif' style={{ width: 400, height: 200 }} />
                                              <div style={{ width: 400, height: 80, backgroundColor: '#002060', marginTop: 5,
                                            padding: 5 }}>
                                                  <h3 style={{ fontSize: 12, color: '#ffffff' }}>Written Test</h3>
                                                  <p style={{ fontSize: 11, color: '#ffffff' }}>Prompt your students for text 
                                                  and check if they remember the correct spelling of acommodate accomodate accommodate.Get opinions or provide an essay prompt and grade it later! A longer answer type, students can enter up to 1000 characters.


                                                  </p>
                                              </div>
                                              </div>
                                           
                                              :
                                              ''
                                          }
                                          {
                                              this.state.mathimage == true ?
                                            
                                              <div>
                                              <img src='/images/MCQ/Math.gif' style={{ width: 400, height: 200 }} />
                                              <div style={{ width: 400, height: 80, backgroundColor: '#002060', marginTop: 5,
                                            padding: 5 }}>
                                                  <h3 style={{ fontSize: 12, color: '#ffffff' }}>Math</h3>
                                                  <p style={{ fontSize: 11, color: '#ffffff' }}>Check for retention by asking students to pick one or more correct answer, Use text,
                                                    images or match equations to spice things up !
                                                  </p>
                                              </div>
                                              </div>
                                           
                                              :
                                              ''
                                          }
                                      
                                      </div>
                                    
                              </div>                         

                            </div>
                        </Col>

                    </Row>
                  {/*   <Row>
                        <Col sm={12} >
                            <div className='selecttesttype'>

                                <h3>Assessment</h3>
                                <div>
                                    <div onChange={this.onChangeValue}>
                                        <p><input type="radio" value="MCQ" name="gender" style={{ marginLeft: 10 }} /> MCQ </p>
                                        <p><input type="radio" value="Writting Test" name="gender" style={{ marginLeft: 10 }} /> Writting Test</p>
                                        <p><input type="radio" value="Fill in the Gap" name="gender" style={{ marginLeft: 10 }} /> Fill in the Gap</p>
                                    </div>

                                </div>
                                <div>
                                    Audio Response
                                    Enunciate a word, recite a poem, describe an image, or demonstrate reading skills.
                                    Amplify the voices of your students.
                                </div>
                            </div>

                        </Col>

                    </Row> */}
                </Container>
<Footer />
            </div>
        );

    }
}
export default Quizsetup
