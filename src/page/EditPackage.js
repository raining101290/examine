import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Label } from 'reactstrap'
import Header from '../Layout/Header'
import 'react-activity-indicator/src/activityindicator.css'
import Container from 'react-bootstrap/Container'
import { Spinner } from 'react-bootstrap'
import {
  addPackage,
  getExamTypes,
  getPackage,
  updatePackage,
} from '../axios/student/api'
import { successToast, errorToast } from './library/toast'
import { useParams } from 'react-router-dom'

function EditPackage({ props }) {
  const { id } = useParams()
  const [packagename, setPackagename] = useState('')
  const [classname, setClassname] = useState('')
  const [version, setversion] = useState('')
  const [group, setgroup] = useState('')
  const [price, setPrice] = useState(50)
  const [examTypes, setExamTypes] = useState([])
  const [selectedQuizType, setSelectedQuizType] = useState('')
  const [loading, setLoading] = useState()
  const handleName = (e) => {
    setPackagename(e.target.value)
  }
  const handleClass = (e) => {
    setClassname(e.target.value)
  }
  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const fnGetPackage = () => {
    getPackage(id)
      .then((res) => {
        if (res.data) {
          if (res.status === 200) {
            setPackagename(res.data.packagename)
            setSelectedQuizType(res.data.type)
            setClassname(res.data.class)
            setPrice(res.data.price)
            setversion(res.data.versionname)
            setgroup(res.data.group)
          }
        }
      })
      .catch(() => {})
  }

  useEffect(() => {
    if (id) {
      fnGetPackage()
    }
    fnExamTypes()
  }, [])

  const fnExamTypes = () => {
    getExamTypes({})
      .then((res) => {
        if (res.data) {
          setExamTypes(res.data)
        } else {
          setExamTypes([])
        }
      })
      .catch(() => {
        setExamTypes([])
      })
  }

  const updatePackageinfo = () => {
    if (packagename !== '' && classname !== '') {
      setLoading(true)
      const postObj = {
        packagename: packagename,
        type: selectedQuizType,
        classname: classname,
        versionname: version,
        group: group,
        price: price,
      }
      updatePackage(postObj, id)
        .then((res) => {
          if (res.status === 200) {
            successToast('Package updated Successfully.')
          }
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      errorToast('Fill out form')
    }
  }

  const handleExamType = (event) => {
    setSelectedQuizType(event.target.value)
  }
  const handleVersion = (event) => {
    setversion(event.target.value)
  }
  const handleGroup = (event) => {
    setgroup(event.target.value)
  }

  return (
    <div>
      <Header />
      <Container style={{ marginTop: 86 }}>
        <div className="container-fluid">
          {/* Page Heading */}
          <div class="card position-relative">
            <div class="card-header py-3">
              <Link to="/Listofpackages">Back</Link>
            </div>
            <div class="card-body">
              <div className="row">
                <div className="col-md-12">
                  <form className="user">
                    <div class="form-content">
                      <div>
                        <div className="form-header">
                          <h3 class="m-0 font-weight-bold text-primary">
                            Update Package
                          </h3>
                        </div>
                        <div className="form-row">
                          <div
                            className="form-holder col-md-6"
                            style={{ padding: 16 }}
                          >
                            <Label>Package Name</Label>
                            <input
                              type="text"
                              className="form-control form-control-user"
                              placeholder="Package Name"
                              onChange={(e) => handleName(e)}
                              value={packagename}
                            />
                          </div>
                          <div
                            className="form-holder col-md-6"
                            style={{ padding: 10 }}
                          >
                            <Label>Exam Type </Label>
                            <select
                              className="combox"
                              onChange={handleExamType}
                              value={selectedQuizType}
                            >
                              {examTypes.map((item) => {
                                return (
                                  <option key={item.id} value={item.id}>
                                    {item.title}
                                  </option>
                                )
                              })}
                            </select>
                          </div>
                          <div
                            className="form-holder col-md-6"
                            style={{ padding: 16 }}
                          >
                            <Label>Class</Label>
                            <input
                              type="text"
                              className="form-control form-control-user"
                              placeholder="Class"
                              onChange={(e) => handleClass(e)}
                              value={classname}
                            />
                          </div>
                          <div
                            className="form-holder col-md-6"
                            style={{ padding: 16 }}
                          >
                            <Label>Version</Label>
                            <select
                              onChange={(e) => handleVersion(e)}
                              value={version}
                              className="combox"
                            >
                              <option value="Bangla Version">
                                Bangla Version
                              </option>
                              <option value="English Version">
                                English Version
                              </option>
                            </select>
                          </div>
                          <div
                            className="form-holder col-md-6"
                            style={{ padding: 16 }}
                          >
                            <Label>Group</Label>
                            <select
                              onChange={(e) => handleGroup(e)}
                              value={group}
                              className="combox"
                            >
                              <option value="Science">Science</option>
                              <option value="Arts">Arts</option>
                              <option value="Commerce">Commerce</option>
                            </select>
                          </div>
                          <div
                            className="form-holder col-md-6"
                            style={{ padding: 16 }}
                          >
                            <Label>Price</Label>
                            <input
                              type="number"
                              className="form-control form-control-user"
                              placeholder="Price"
                              onChange={(e) => handlePrice(e)}
                              value={price}
                            />
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
                              onClick={updatePackageinfo}
                              style={{ marginTop: 20 }}
                            >
                              {loading ? (
                                <Spinner
                                  style={{ marginBottom: 27 }}
                                  animation="border"
                                  variant="danger"
                                />
                              ) : (
                                'Update Package'
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
export default EditPackage
