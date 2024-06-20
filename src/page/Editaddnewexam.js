import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
//import useForm from 'react-hook-form'
import { Button, Label } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Spinner } from 'react-bootstrap'

import * as base from './global'
import axios from 'axios'
import Header from '../Layout/Header'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import Container from 'react-bootstrap/Container'
import { getExamTypes } from '../axios/student/api'
import { classes, groups } from '../utils/constants'

export class Editaddnewexam extends Component {
  constructor(props) {
    super(props)
    this.updateExam = this.updateExam.bind(this)
    this.handletype = this.handletype.bind(this)
    this.handleschoolcollagename = this.handleschoolcollagename.bind(this)
    this.handlestatus = this.handlestatus.bind(this)
    this.handleuserrole = this.handleuserrole.bind(this)
    this.handleclassname = this.handleclassname.bind(this)
    this.handlesection = this.handlesection.bind(this)
    this.handlegroupname = this.handlegroupname.bind(this)
    this.handleexamdate = this.handleexamdate.bind(this)
    this.handlenoofstudent = this.handlenoofstudent.bind(this)
    this.handleexamfees = this.handleexamfees.bind(this)
    this.handleexamname = this.handleexamname.bind(this)
    this.handleexamtime = this.handleexamtime.bind(this)
    this.handlepaymenttype = this.handlepaymenttype.bind(this)
    this.handlechapter = this.handlechapter.bind(this)
    this.fnExamTypes = this.fnExamTypes.bind(this)
    this.handleExamType = this.handleExamType.bind(this)
    //handleschoolcollagename handletype
    this.state = {
      name: '',
      address: '',
      email: '',
      status: '',
      website: '',
      isLoading: false,
      loading: false,
      loaderfile: 'notloading',
      fields: {},
      errors: {},
      loggdin: 'stop',
      counter: 0,
      schoolcollegelist: [],
      classlist: classes,
      sectionlist: [],
      grouplist: groups,
      examstatus: '',
      schoolid: localStorage.getItem('schoolid'),
      schoolcollegename: localStorage.getItem('schoolcollegename'),
      sectionname: '',
      autoid: this.props.match.params.id,
      allnewsexamlist: [],
      schoolcollegetype: localStorage.getItem('schoolcollegetype'),
      subjectlist: [],
      examtypes: [],
      quizType: '',
      selectedQuizType: '',
      paymenttype: '',
      versionname: '',
      groupname: '',
      subjectname: '',
      chapter: '',
    }
  }
  componentDidMount() {
    //  alert(this.state.schoolid)
    this.fnExamTypes()
    // alert(this.state.schoolid)
    //this.getclassdata()
    this.getexamdata()
    this.getsubjectdata()
    this.getsectiondata()
    // this.getgrouplist();

    if (this.state.userrole === 'Admin') {
    } else if (this.state.userrole === 'Super Admin') {
    } else if (this.state.userrole === 'Teacher') {
    }
  }
  //getsectiondata
  getsectiondata = () => {
    axios
      .get(base.BASE_URL + '/getsectionid/' + this.state.schoolid)
      .then((result) => {
        if (result.data.length > 0) {
          this.setState({
            sectionlist: result.data,
            sectionname: result.data[0].sectionname,
          })
        } else {
        }
      })
  }
  fnExamTypes() {
    getExamTypes({})
      .then((res) => {
        if (res.data) {
          this.setState({ examtypes: res.data })
        } else {
          this.setState({ examtypes: [] })
        }
      })
      .catch(() => {
        this.setState({ examtypes: [] })
      })
  }

  handleExamType = (event) => {
    const selectedValue = event.target.value
    this.setState({ quizType: selectedValue })
  }

  // getgrouplist = () => {
  //   console.log(base.BASE_URL + '/grouplist/' + this.state.schoolid)
  //   axios
  //     .get(base.BASE_URL + '/grouplist/' + this.state.schoolid)
  //     .then((result) => {
  //       this.setState({ grouplist: result.data })
  //     })
  // }
  getexamdata = () => {
    axios
      .get(base.BASE_URL + '/geteditnewexams/' + this.state.autoid)
      .then((res) => {
        // alert(res.data[0].subjectname)
        this.setState({
          allnewsexamlist: res.data,
          examname: res.data[0].examname,
          schoolcollegetype: res.data[0].examtype,
          //   schoolcollegename: res.data[0].schoolcollegename,
          examdate: res.data[0].examdate,
          classname: res.data[0].classname,
          quizType: res.data[0].quizType,
          examtime: res.data[0].examtime,
          groupname: res.data[0].xgroup,
          sectionname: res.data[0].xsection,
          examfees: res.data[0].examfees,
          noofstudent: res.data[0].noofstudent,
          examstatus: res.data[0].examstatus,
          subjectname: res.data[0].subjectname,
          versionname: res.data[0].versionname,
          paymenttype: res.data[0].paymenttype,
          chapter: res.data[0].chapter,
        })
        console.log('monir' + res.data)
      })
  }
  // getclassdata = () => {
  //   axios
  //     .get(base.BASE_URL + '/getclassid/' + this.state.schoolid)
  //     .then((result) => {
  //       this.setState({ classlist: result.data })
  //     })
  // }
  getsubjectdata = () => {
    console.log(base.BASE_URL + '/subjectlistschool/' + this.state.schoolid)
    axios
      .get(base.BASE_URL + '/subjectlistschool/' + this.state.schoolid)
      .then((result) => {
        this.setState({ subjectlist: result.data })
      })
  }
  handleexamfees(event) {
    this.setState({
      examfees: event.target.value,
    })
  }
  handlegroupname(event) {
    this.setState({
      groupname: event.target.value,
    })
  }
  handlechapter(event) {
    this.setState({
      chapter: event.target.value,
    })
  }
  handlepaymenttype(event) {
    this.setState({
      paymenttype: event.target.value,
    })
  }
  handlesection(event) {
    this.setState({
      sectionname: event.target.value,
    })
  }
  handleversion(event) {
    this.setState({
      versionname: event.target.value,
    })
  }
  handleclassname(event) {
    this.setState({
      classname: event.target.value,
    })
    /////////////////////Class list //////////////////////

    /////////////////////End List
  }
  handleschoolcollagename(event) {
    this.setState({
      schoolcollagename: event.target.value,
    })
  }
  handleexamname(event) {
    this.setState({
      examname: event.target.value,
    })
  }
  handleexamdate(event) {
    this.setState({
      examdate: event.target.value,
    })
  }
  handleexamtime(event) {
    this.setState({
      examtime: event.target.value,
    })
  }
  handlenoofstudent(event) {
    this.setState({
      noofstudent: event.target.value,
    })
  }
  handlestatus(event) {
    this.setState({
      examstatus: event.target.value,
    })
  }
  handleuserrole(event) {
    this.setState({ userrole: event.target.value })
  }
  handlesubject(event) {
    // alert(event.target.value)
    this.setState({
      subjectname: event.target.value,
    })
  }
  handletype(event) {
    alert(event)
    this.setState({
      schoolcollegetype: event.target.value,
    })

    this.setState({ schoolcollegelist: [] })
    ///////////////////////////////
    axios
      .get(base.BASE_URL + '/getschoollist/' + event.target.value, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((result) => {
        this.setState({
          schoolcollegelist: result.data,
          schoolid: result.data[0]._id,
          schoolname: result.data[0].name,
        })
      })
    ///////////////////////////////
  }

  updateExam() {
    //  alert(this.state.versionname)
    if (
      this.state.examname === '' ||
      localStorage.getItem('schoolcollegetype') === '' ||
      this.state.examdate === '' ||
      this.state.examtime === '' ||
      this.state.schoolid === '' ||
      this.state.schoolname === '' ||
      this.state.groupname === '' ||
      this.state.sectionname === '' ||
      this.state.examfees === '' ||
      this.state.noofstudent === '' ||
      this.state.examstatus === '' ||
      this.state.autoid === '' ||
      this.state.subjectname === '' ||
      this.state.paymenttype === '' ||
      this.state.versionname === '' ||
      this.state.chapter === ''
    ) {
      alert('Insert the required Fields')
    } else {
      //  alert(this.state.sectionname);
      this.setState({ loaderfile: 'loading', loading: true }) ///Adminloginareacheck  adminlogin Adminloginsetup
      const postObject = {
        autoid: this.state.autoid,
        examname: this.state.examname,
        chapter: this.state.chapter,
        examtype: this.state.schoolcollegetype,
        quizType: this.state.quizType,
        examdate: this.state.examdate,
        examtime: this.state.examtime,
        schoolcollegid: this.state.schoolid,
        schoolcollegename: this.state.schoolcollegename,
        classname: this.state.classname,
        xgroup: this.state.groupname,
        subjectname: this.state.subjectname,
        paymenttype: this.state.paymenttype,
        versionname: this.state.versionname,
        xsection: this.state.sectionname,
        examfees: this.state.examfees,
        noofstudent: this.state.noofstudent,
        examstatus: this.state.examstatus,
        packagetype: this.state.packagetype,
        version: this.state.version,
        status: 'Active',
      }
      //console.log('postObject', postObject)
      axios
        .post(base.BASE_URL + '/updateexams', postObject, {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        })
        .then(
          (response) => {
            console.log('ddddd' + response.data)

            if (response.data == 'save') {
              this.setState({
                loggdin: 'start',
                loaderfile: 'notloading',
                loading: false,
              })
              // alert('save')
            } else if (response.data == '') {
              this.setState({
                loggdin: 'stop',
                loaderfile: 'notloading',
                loading: false,
              })
              alert('Failed To Update')
            }
          },
          (error) => {
            console.log(error)
          },
        )
    }
  }

  render() {
    // alert(this.state.loggdin);
    if (this.state.loggdin === 'start') {
      return <Redirect to="/Examsetuplist" />
    }

    return (
      <div>
        <Header /> {/* Slider Menu */}
        <Container style={{ marginTop: 86 }}>
          <div className="container-fluid">
            {/* Page Heading */}
            <div class="card position-relative">
              <div class="card-header py-3">
                <Link to="/Examsetuplist">Back</Link>
              </div>
              <div class="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <form className="user">
                      <div class="form-content">
                        <div>
                          <div className="form-header">
                            {this.state.loading ? (
                              <Spinner
                                style={{ marginBottom: 27 }}
                                animation="border"
                                variant="danger"
                              />
                            ) : null}
                            <h3
                              class="m-0 font-weight-bold text-primary"
                              style={{ fontSize: 16 }}
                            >
                              Edit New Exam
                            </h3>
                          </div>
                          <p style={{ color: '#000' }}>
                            Please fill with your details
                          </p>
                          <div className="form-row">
                            <div
                              className="form-holder col-md-4"
                              style={{ padding: 10 }}
                            >
                              <Label> Type </Label>
                              <select
                                onChange={this.handletype}
                                className="combox"
                              >
                                <option
                                  value={localStorage.getItem(
                                    'schoolcollegetype',
                                  )}
                                >
                                  {localStorage.getItem('schoolcollegetype')}
                                </option>
                                <option value="School">School</option>
                                <option value="College">College</option>
                                <option value="Admission Test">
                                  Admission Test
                                </option>
                                <option value="Job Interview">
                                  Job Interview
                                </option>
                              </select>
                            </div>
                            <div
                              className="form-holder col-md-4"
                              style={{ padding: 10 }}
                            >
                              <Label>Exam Type </Label>
                              <select
                                className="combox"
                                onChange={(e) =>
                                  this.setState({ quizType: e.target.value })
                                }
                                value={this.state.quizType} // Set the value attribute
                              >
                                {this.state.examtypes.map((item) => {
                                  return (
                                    <option key={item.id} value={item.title}>
                                      {item.title}
                                    </option>
                                  )
                                })}
                              </select>
                              <span style={{ color: 'red', fontSize: 12 }}>
                                {this.state.errors['inistute']}
                              </span>
                            </div>
                            <div
                              className="form-holder col-md-4"
                              style={{ padding: 10 }}
                            >
                              <Label> Inistutions Name </Label>

                              <select
                                className="combox"
                                onChange={this.handleschoolcollagename}
                              >
                                <option value={this.state.schoolcollegename}>
                                  {this.state.schoolcollegename}
                                </option>
                                <option value="None">None</option>
                                {this.state.schoolcollegelist.map((result) => {
                                  return (
                                    <option value={result._id}>
                                      {result.name}
                                    </option>
                                  )
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="form-row">
                            <div
                              className="form-holder col-md-2"
                              style={{ padding: 10 }}
                            >
                              <Label> Class Name </Label>
                              <select
                                className="combox"
                                /*   onChange={this.handleclassname} */
                                onChange={(e) =>
                                  this.setState({ classname: e.target.value })
                                }
                                /*  onClick={this.getclassdata} */
                              >
                                <option value={this.state.classname}>
                                  {this.state.classname}
                                </option>
                                {this.state.classlist.map((result) => {
                                  return (
                                    <option value={result.id}>
                                      {result.title}
                                    </option>
                                  )
                                })}
                              </select>
                            </div>
                            <div
                              className="form-holder col-md-2"
                              style={{ padding: 10 }}
                            >
                              <Label> Section </Label>
                              <select
                                className="combox"
                                /*  onChange={this.handlesection} */
                                /*   onClick={this.getsectiondata} */
                                onChange={(e) =>
                                  this.setState({ sectionname: e.target.value })
                                }
                              >
                                <option value={this.state.sectionname}>
                                  {this.state.sectionname}
                                </option>
                                {this.state.sectionlist.map((result) => {
                                  return (
                                    <option value={result.sectionname}>
                                      {result.sectionname}
                                    </option>
                                  )
                                })}
                              </select>
                            </div>
                            <div
                              className="form-holder col-md-2"
                              style={{ padding: 10 }}
                            >
                              <Label> Subject </Label>
                              <select
                                className="combox"
                                /*  onChange={this.handlesubject} */
                                onChange={(e) =>
                                  this.setState({ subjectname: e.target.value })
                                }
                                /* onClick={this.getsubjectdata} */
                              >
                                <option value={this.state.subjectname}>
                                  {this.state.subjectname}
                                </option>
                                {this.state.subjectlist.map((result) => {
                                  return (
                                    <option value={result.name}>
                                      {result.name}
                                    </option>
                                  )
                                })}
                              </select>
                            </div>
                            <div
                              className="form-holder col-md-3"
                              style={{ padding: 10 }}
                            >
                              <Label>Group Name</Label>
                              <select
                                className="combox"
                                onChange={this.handlegroupname}
                                // onClick={this.getgrouplist}
                              >
                                <option value={this.state.groupname}>
                                  {this.state.groupname}
                                </option>
                                {/* <option value="General">General</option>
                                <option value="Arts">Arts</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Science">Science</option> */}
                                {this.state.grouplist.map((result) => {
                                  return (
                                    <option value={result.id}>
                                      {result.title}
                                    </option>
                                  )
                                })}
                              </select>
                            </div>
                            <div
                              className="form-holder col-md-3"
                              style={{ padding: 10 }}
                            >
                              <Label>Version</Label>
                              <select
                                className="combox"
                                /*  onChange={this.handleversion} */
                                onChange={
                                  (e) =>
                                    this.setState({
                                      versionname: e.target.value,
                                    })
                                  //  alert(e.target.value)
                                }
                              >
                                <option value={this.state.versionname}>
                                  {this.state.versionname}
                                </option>
                                <option value="English Version">
                                  English Version
                                </option>
                                <option value="Bangla Version">
                                  Bangla Version
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-row">
                            <div
                              className="form-holder col-md-3"
                              style={{ padding: 10 }}
                            >
                              <lable>Exam Name</lable>

                              <input
                                type="text"
                                className="form-control form-control-user"
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Exam Name"
                                onChange={this.handleexamname}
                                value={this.state.examname}
                              />
                            </div>

                            <div
                              className="form-holder col-md-3"
                              style={{ padding: 10 }}
                            >
                              <lable>Exam Date</lable>
                              <input
                                type="date"
                                className="form-control form-control-user"
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder=""
                                onChange={this.handleexamdate}
                                value={this.state.examdate}
                              />
                            </div>
                            <div
                              className="form-holder col-md-3"
                              style={{ padding: 10 }}
                            >
                              <lable>Exam Times</lable>
                              <input
                                type="time"
                                className="form-control form-control-user"
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder=""
                                onChange={this.handleexamtime}
                                value={this.state.examtime}
                              />
                            </div>

                            <div
                              className="form-holder col-md-3"
                              style={{
                                padding: 10,
                                borderRadius: 17,
                                height: 45,
                              }}
                            >
                              <lable>Payment Type</lable>
                              <select
                                className="combox"
                                onChange={this.handlepaymenttype}
                              >
                                <option value={this.state.paymenttype}>
                                  {this.state.paymenttype}
                                </option>

                                <option value="Free">Free</option>
                                <option value="Paid">Paid</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-row">
                            <div
                              className="form-holder col-md-3"
                              style={{ padding: 10 }}
                            >
                              <Label> No of Student</Label>
                              <input
                                type="text"
                                className="form-control form-control-user"
                                placeholder="0"
                                onChange={this.handlenoofstudent}
                                value={this.state.noofstudent}
                              />
                            </div>

                            <div
                              className="form-holder col-md-3"
                              style={{ padding: 10 }}
                            >
                              <Label>Exam fees</Label>
                              <input
                                type="number"
                                className="form-control form-control-user"
                                placeholder="0"
                                onChange={this.handleexamfees}
                                value={this.state.examfees}
                              />
                            </div>
                            <div
                              className="form-holder col-md-3"
                              style={{ padding: 10 }}
                            >
                              <Label>Chapter Name</Label>
                              <input
                                type="text"
                                className="form-control form-control-user"
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Chapter Name"
                                onChange={this.handlechapter}
                                value={this.state.chapter}
                              />
                            </div>

                            <div
                              className="form-holder col-md-3"
                              style={{ padding: 10 }}
                            >
                              <Label>Exams Status</Label>
                              <select
                                onChange={this.handlestatus}
                                className="combox"
                              >
                                <option value={this.state.examstatus}>
                                  {this.state.examstatus}
                                </option>
                                {/*   <option value="Draft">Draft</option>
                                                                <option value="Publish">Publish</option> */}
                              </select>
                            </div>
                          </div>
                          <div className="form-row">
                            <div
                              className="form-holder col-md-6"
                              style={{ padding: 10 }}
                            >
                              <Button
                                type="button"
                                className="btn btn-primary btn-user btn-block"
                                style={{ marginTop: 20 }}
                                onClick={this.updateExam}
                              >
                                {this.state.loading ? (
                                  <Spinner
                                    style={{ marginBottom: 27 }}
                                    animation="border"
                                    variant="danger"
                                  />
                                ) : (
                                  'Update'
                                )}
                              </Button>
                            </div>
                          </div>
                          <div className="form-row"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
export default Editaddnewexam
