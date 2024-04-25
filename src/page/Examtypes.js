import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Header from '../Layout/Header'
import 'react-activity-indicator/src/activityindicator.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { deleteExamType, getExamTypes } from '../axios/student/api'

export class Examtypes extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: false,
      isdelete: false,
      loaderfile: 'notloading',
      fields: {},
      errors: {},
      loggdin: 'stop',
      counter: 0,
      examtypes: [],
    }
  }
  componentDidMount() {
    this.fnExamTypes()
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

  deleteExamtype(id) {
    var answer = window.confirm('Are you sure you want to delete ?')
    if (answer) {
      this.setState({ isdelete: true })
      deleteExamType(id)
        .then((res) => {
          if (res.data) {
            if (res.data.status === 'deleted') {
              this.fnExamTypes()
            }
          }
        })
        .catch(() => {
          //this.setState({ examtypes: [] })
        })
    } else {
      //
    }
  }

  render() {
    return (
      <div>
        <Header /> {/* Slider Menu */}
        <Container style={{ marginTop: 86 }}>
          <div className="container-fluid">
            {/* Page Heading */}
            <div className="row">
              {this.state.isdelete === true ? (
                <Alert variant="success">Delete successfully </Alert>
              ) : (
                ''
              )}

              <div className="col-md-12 firstcolumn">
                <div className="secondcolumn">
                  <p>List of Exam Types</p>
                </div>
                <div className="thirdcolumn">
                  <Link
                    to="/AddExamType"
                    className="btn btn-primary"
                    style={{ marginBottom: 20 }}
                  >
                    Add New Exam Type
                  </Link>
                </div>
              </div>

              <table class="table" style={{ fontSize: 14 }}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state?.examtypes?.map((result) => {
                    return (
                      <tr key={result.id}>
                        <td>{result._id}</td>
                        <td>{result.title}</td>
                        <td>{result.status === 1 ? 'Active' : 'InActive'}</td>
                        <td>
                          <Link variant="info" to={'/EditSchool/' + result._id}>
                            Edit
                          </Link>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => this.deleteExamtype(result._id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
export default Examtypes
