import React, { useState, useEffect } from 'react'
import * as base from './global'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Topbar from '../Layout/Topbar'
import Container from 'react-bootstrap/Container';


const Listofexams = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [totalpage, setTotalpage] = useState(0);
  const [limit, setLimit] = useState(9);
  const [minPageLimit, setMinPageLimit] = useState(0);



  const handlecheckbox = (e) => {

    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }

  }

  useEffect(() => {
    setLoading(true);
    console.log(base.BASE_URL + '/examlist/' + currentPage + '/' + limit)
    axios.get(base.BASE_URL + '/examlist/' + currentPage + '/' + limit, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      console.log(res.data)
      if (res.data.length > 0) {
        setUsers(res.data)
      }
      else {
      }
    });

  }, [currentPage]);

  const onclickprev =() => {
    console.log('Current page ' + currentPage)
    console.log('ddddd' + currentPage + 1)
    setCurrentPage(currentPage - 1)
    window.scrollTo(0, 0);
    //alert(currentPage)
}
const onclicknext =() => {
    console.log('Current page ' + currentPage)
    console.log('ddddd' + currentPage + 1)
    setCurrentPage(currentPage + 1)
    window.scrollTo(0, 0);
    //alert(currentPage)
}

  return (
    <div>
      <Header /> {/* Slider Menu */}
      <Container style={{ marginTop: 86 }}>
        <table class="table">
          <thead>
            <tr>
              <th>   <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handlecheckbox}
          />
                Student Email</th>
              <th>Examid</th>
              <th>Status</th>
              <th>Action</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>
            {users && users.map((user, slno) => {
              return (
                <tr key={slno}>
                  <td>
                    <input type="checkbox" name={user._id} onChange={handlecheckbox} 
                    style={{ marginRight: 5 }}   checked={user?.isChecked || false}/>
                    <Link variant="info" to={"/Edituserssetup/" + user._id}>
                      {user.studentexamid}</Link>
                  </td>
                  <td>{user.examid}</td>
                  <td>
                  {user.examstatus}

                  </td>
                  <td>

                    <Link variant="info" to={"/Changepassword/" + user._id}>
                      {user.status}
                    </Link>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => this.deleteUser(user._id)}>Delete</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <Row>
          <Col xs={12} sm={12} style={{ alignContent: 'space-between', alignItems: 'center', marginBottom: 50 }}>
            <Button style={{ marginRight: 10 }} onClick={onclickprev}>Prev</Button>
            <Button onClick={onclicknext}>Next</Button>
          </Col>

        </Row>

      </Container>
    </div>
  )
}

export default Listofexams
