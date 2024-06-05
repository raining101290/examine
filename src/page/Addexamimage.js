import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
//import useForm from 'react-hook-form'
import { Button, Form, Label } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Spinner } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import * as base from './global'
import axios from 'axios'
import Header from '../Layout/Header'
import Footer from './Footer'
import Topbar from '../Layout/Topbar'
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import { PowerInputSharp } from '@material-ui/icons'

export class Addexamimage extends Component {
  constructor(props) {
    super(props)

    //handleschoolcollagename handletype
    this.state = {
      loading: false,
      loaderfile: 'notloading',
      fields: {},
      errors: {},
      loggdin: 'stop',
      counter: 0,
      schoolcollegelist: [],
      classlist: [],
      sectionlist: [],
      grouplist: [],
      schoolid: localStorage.getItem('schoolid'),
      userrole: localStorage.getItem('usersrole'),
      autoid: this.props.match.params.id,
      examwiselist: [],
      list: [],
    }
  }
  componentDidMount() {}

  fileSelectA = (event) => {
    //  alert('kkk')
    if (this.state.autoid === '') {
      alert('Insert the file')
    } else {
      this.setState({
        loading: true,
      })
      ////////////////////////////////////////
      // this.setState({ questionAimage: event.target.files[0],  questionimageupload_loader: true })
      //   setQuestionAimage(event.target.files[0]);
      console.log(event.target.files[0])
      // image preview
      var file = event.target.files[0]
      var reader = new FileReader()
      var url = reader.readAsDataURL(file)

      reader.onloadend = function (e) {
        /*    this.setState({
                       previewA: [reader.result]
                   }) */
        // setPreviewA([reader.result])
      }.bind(this)
      console.log(url) // Would see a path?
      // end image previou
      //////////upload
      const fd = new FormData()
      fd.append('profileImg', event.target.files[0], event.target.files[0].name)
      fd.append('autoincrement', this.state.autoid)

      axios.post(base.BASE_URL + '/examimageupdate', fd).then((res) => {
        // alert(res.message);
        if (res.status === '200') {
          this.setState({
            loading: false,
          })
          alert('Update Successfully')
          //this.setState({ questionimageupload_loader: false })
        } else {
          this.setState({
            loading: false,
          })
          this.setState({ questionimageupload_loader: false })
          alert('Failed To Upload')
        }
        console.log(res)
      })
      ///////////////////////////////////////
    }
    ////////////
  }

  handleChange(field, e) {
    let fields = this.state.fields
    fields[field] = e.target.value
    this.setState({ fields })
  }

  render() {
    // alert(this.state.loggdin);
    if (this.state.loggdin == 'start') {
      return <Redirect to="/Examsetuplist" />
    }
    return (
      <div>
        <Header /> {/* Slider Menu */}
        <Container style={{ marginTop: 86 }}>
          <div className="container-fluid">
            {/* Page Heading */}
            <div class="card position-relative" style={{ marginBottom: 200 }}>
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
                              Exam Image
                            </h3>
                          </div>

                          <div className="form-row">
                            <div
                              className="form-holder col-md-6"
                              style={{ padding: 10 }}
                            >
                              {this.state.loading ? (
                                <Spinner
                                  style={{ marginBottom: 27 }}
                                  animation="border"
                                  variant="danger"
                                />
                              ) : (
                                <div>
                                  <Label> Image Upload </Label>
                                  <input
                                    type="file"
                                    onChange={this.fileSelectA}
                                    className="form-control"
                                    style={{
                                      borderWidth: 1,
                                      borderColor: 'silver',
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}
export default Addexamimage
