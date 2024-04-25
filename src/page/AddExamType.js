import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Header from '../Layout/Header'
import 'react-activity-indicator/src/activityindicator.css'
import Container from 'react-bootstrap/Container'
import { Spinner } from 'react-bootstrap'
import { addExamType } from '../axios/student/api'
import { successToast } from '../page/library/toast'

function AddExamType() {
  const [name, setName] = useState('')
  const [status, setStatus] = useState(1)
  const [loading, setLoading] = useState()
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleStatus = (e) => {
    setStatus(e.target.value)
  }

  const createuser = () => {
    setLoading(true)
    const postObj = {
      title: name,
      status: status,
    }
    addExamType(postObj)
      .then((res) => {
        if (res.data.message === 'Created') {
          successToast('Exam Type Created Successfully.')
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <Header />
      <Container style={{ marginTop: 86 }}>
        <div className="container-fluid">
          {/* Page Heading */}
          <div class="card position-relative">
            <div class="card-header py-3">
              <Link to="/Listofexamtypes">Back</Link>
            </div>
            <div class="card-body">
              <div className="row">
                <div className="col-md-12">
                  <form className="user">
                    <div class="form-content">
                      <div>
                        <div className="form-header">
                          <h3 class="m-0 font-weight-bold text-primary">
                            Add New Exam Type
                          </h3>
                        </div>
                        <p style={{ color: '#000' }}>
                          Please fill with your details
                        </p>
                        <div className="form-row">
                          <div
                            className="form-holder col-md-6"
                            style={{ padding: 16 }}
                          >
                            <input
                              type="text"
                              className="form-control form-control-user"
                              placeholder="Exam Type Name"
                              onChange={(e) => handleName(e)}
                              value={name}
                            />
                          </div>
                          <div
                            className="form-holder col-md-6"
                            style={{ padding: 16 }}
                          >
                            <select
                              onChange={(e) => handleStatus(e)}
                              value={status}
                              className="combox"
                            >
                              <option value="" selected disabled>
                                Status
                              </option>
                              <option value="1">Active</option>
                              <option value="0">Inactive</option>
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
                              onClick={createuser}
                              style={{ marginTop: 20 }}
                            >
                              {loading ? (
                                <Spinner
                                  style={{ marginBottom: 27 }}
                                  animation="border"
                                  variant="danger"
                                />
                              ) : (
                                'Add Exam Type'
                              )}
                            </Button>
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
    </div>
  )
}
export default AddExamType
