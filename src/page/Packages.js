import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Header from '../Layout/Header'
import 'react-activity-indicator/src/activityindicator.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import { deletePackage, getPackages } from '../axios/student/api'
import { useHistory } from 'react-router-dom'
import { successToast, errorToast } from '../page/library/toast'

function Package() {
  const [packages, setPackages] = useState([])
  const history = useHistory()

  const fnGetPackages = () => {
    getPackages({})
      .then((res) => {
        if (res.data) {
          setPackages(res.data)
        } else {
          setPackages([])
        }
      })
      .catch(() => {
        setPackages([])
      })
  }

  useEffect(() => {
    fnGetPackages()
  }, [])

  const fnDeletePackage = (id) => {
    var answer = window.confirm('Are you sure you want to delete ?')
    if (answer) {
      deletePackage(id)
        .then((res) => {
          if (res.data) {
            if (res.data.status === 'deleted') {
              successToast('Package deleted')
              fnGetPackages()
            }
          }
        })
        .catch(() => {
          errorToast('Something went wrong')
        })
    } else {
      //
    }
  }
  const editPackage = (id) => {
    history.push('EditPackage/' + id)
  }
  return (
    <div>
      <Header /> {/* Slider Menu */}
      <Container style={{ marginTop: 86 }}>
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="row">
            <div className="col-md-12 firstcolumn">
              <div className="secondcolumn">
                <p>List of Packages</p>
              </div>
              <div className="thirdcolumn">
                <Link
                  to="/AddPackage"
                  className="btn btn-primary"
                  style={{ marginBottom: 20 }}
                >
                  Add New Package
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <table class="table" style={{ fontSize: 14 }}>
                <thead>
                  <tr>
                    <th>Package Name</th>
                    <th>Type</th>
                    <th>Class</th>
                    <th>Version</th>
                    <th>Group</th>
                    <th>Price</th>
                    <th style={{ textAlign: 'right' }}>Edit</th>
                    <th style={{ textAlign: 'right' }}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {packages?.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td>{item.packagename}</td>
                        <td>{item.type || '--'}</td>
                        <td>{item.class}</td>
                        <td>{item.versionname}</td>
                        <td>{item.group}</td>
                        <td>{item.price}</td>
                        <td align="right">
                          <Button
                            variant="danger"
                            onClick={() => editPackage(item._id)}
                            className="btn-sm"
                          >
                            Edit
                          </Button>
                        </td>
                        <td align="right">
                          <Button
                            variant="danger"
                            onClick={() => fnDeletePackage(item._id)}
                            className="btn btn-danger btn-sm"
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
        </div>
      </Container>
    </div>
  )
}
export default Package
