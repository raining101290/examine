import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHistory,
  faHome,
  faPlus,
  faSearch,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const history = useHistory()
  const flogout = () => {
    //localStorage.removeItem("token");
    //localStorage.removeItem("vendoremailaddress");
    //localStorage.removeItem("userrole");
    //localStorage.removeItem("examid");
    //window.localStorage.clear();
    localStorage.clear()
    history.push('/')
  }

  return (
    <Container>
      <Navbar
        expand="lg"
        fixed="top"
        style={{ backgroundColor: '#ffffff' }}
        className="navcss"
      >
        <Container fluid>
          <Navbar.Brand href="/Dashboard">
            {/* examamine */}
            <img
              alt=""
              src="/images/logo.png"
              style={{ width: 78, height: 57 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ height: 38 }} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              /*  style={{ maxHeight: '150px' }} */
              navbarScroll
            >
              <Nav.Link href="#" style={{ marginTop: 12 }}>
                <div className="dashboardtextbox">
                  <input
                    type="text"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Search by Name"
                    style={{ borderWidth: 0 }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        // this.setState({ searchtext: e.target.value },
                        // setSearchtext(e.target.value);
                        history.push(
                          '/Subjectfilterlist/' + e.target.value + '/1/12',
                        )
                      }
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ color: 'silver' }}
                  ></FontAwesomeIcon>
                </div>
              </Nav.Link>
              <Nav.Link href="/Dashboard" style={{ marginTop: 12 }}>
                <div className="menuhome">
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ color: '#adadb5', marginRight: 10 }}
                  ></FontAwesomeIcon>
                  Home
                </div>
              </Nav.Link>
              <Nav.Link href="/Activityteacher" style={{ marginTop: 12 }}>
                <div className="menuhome">
                  <FontAwesomeIcon
                    icon={faHistory}
                    style={{ color: '#adadb5', marginRight: 10 }}
                  ></FontAwesomeIcon>
                  Activity
                </div>
              </Nav.Link>
              <Nav.Link href="#" style={{ marginTop: 12 }}>
                <div className="menuhome">
                  <FontAwesomeIcon
                    icon={faUsers}
                    style={{ color: '#adadb5', marginRight: 10 }}
                  ></FontAwesomeIcon>
                  Classes
                </div>
              </Nav.Link>

              {localStorage.getItem('usersrole') === 'Teacher' ? (
                <Nav.Link href="#" style={{ marginTop: 10 }}>
                  <Link to="/Examsetuplist" className="createquizbutton">
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ marginRight: 5 }}
                    ></FontAwesomeIcon>
                    Create Exam
                  </Link>
                </Nav.Link>
              ) : (
                ''
              )}
              {localStorage.getItem('usersrole') === 'Admin' ? '' : ''}
            </Nav>

            <NavDropdown
              title="Menu"
              id="navbarScrollingDropdown"
              style={{ marginRight: 100 }}
            >
              <NavDropdown.Item href="#">
                <Link to="/Editprofilepage">Profile</Link>
              </NavDropdown.Item>
              {localStorage.getItem('usersrole') === 'Super Admin' ? (
                <div>
                  <NavDropdown.Item href="#">
                    <Link to="/Userlist">Userlist</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <Link to="/Studentuserlist">Student List</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#">
                    <Link to="/Bkconfirmlists">Bkash List</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#">
                    <Link to="/Schoolcollegelist">Schoolcollegelist</Link>
                  </NavDropdown.Item>
                  {/*    <NavDropdown.Item href="#">
                      <Link to="/copyexams">Copy Exams</Link>
                    </NavDropdown.Item> */}
                  <NavDropdown.Item href="#">
                    <Link to="/Approveexam">Approve Exams</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <Link to="/Listofpackages">List of Package</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <Link to="/Listofexams">List of Exams</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <Link to="/Listofexamtypes">List of Examtype</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <Link to="/Subjectsetuplist">Subject List</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <Link to="/Classsetuplist">Class List</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <Link to="/Groupsetuplist">Group List</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <Link to="/Sectionsetuplist">Section List</Link>
                  </NavDropdown.Item>
                </div>
              ) : (
                ''
              )}

              <NavDropdown.Divider />

              <NavDropdown.Item href="#action5" onClick={flogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            {/*                   <Link to="/" className='btn' variant="outline-success"
                    style={{ backgroundColor: '#8854c0', color: '#ffffff' }}  onClick={flogout}>
                    LogOut</Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Header
