import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topbar from '../Layout/Topbar'
import Container from 'react-bootstrap/Container';
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'

const Userlist = () => {
    const pageNumberLimit = 5;
    const [passengersData, setData] = useState([]);
    const [classlist, setClasslist] = useState([]);

    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [totalpage, setTotalpage] = useState(0);
    const [limit, setLimit] = useState(9);
    const [minPageLimit, setMinPageLimit] = useState(0);
    const [schoolid, setSchoolid] = useState(localStorage.getItem('schoolid'));
    const [teacherid, setTeacherid] = useState(localStorage.getItem('vendoremailaddress'))
    const [versionname, setVersionname] = useState('');
    const [classname, setClassname] = useState('');
    const [selected, setSelected] = useState('');


    useEffect(() => {
        setLoading(true);
        axios.get(base.BASE_URL + '/userslist/' + currentPage + '/' + limit, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
            if (res.data.length > 0) {
                setData(res.data)
            }
            else {

            }
        });

    }, [currentPage]);


    const handlestudenttype = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
      };

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


    const deleteUser =(id) => {
            var answer = window.confirm("Are you sure you want to delete ?");
            if (answer) {
                this.setState({ isdelete: true })
                axios.post(base.BASE_URL + '/delete_users', {
                    id: id
                    },{
                        headers: {
                            authorization: `bearer ${localStorage.getItem('token')}`
                        } 
                    })
                    .then((response) => {
    
                    if (response.data == "delete") {
                        this.getData();
                            this.setState({ isdelete: false })
                    
                    }
                    else if (response.data == "notfound") {
    
                    }
                    }, (error) => {
                    console.log(error);
                    });
              } else {
    
              }
        } 

    return (
        <div>

            <Header /> {/* Slider Menu */}
            <Container style={{ marginTop: 86 }}>
                <div className="row">
                    <div className='col-md-12 firstcolumn'>
                        <div className='secondcolumn'>
                            <Link to="" style={{ padding: 30 }}>List of users</Link>
                            
                        </div>
                        <div className='thirdcolumn'>
                            <Link to="/Userssetup" className='btn btn-primary'
                                style={{ marginBottom: 20 }}
                            >
                                Add New
                            </Link>
                        </div>
                    </div>

                    <table class="table">
                        <thead>
                        <tr>
                                <th>Type</th>
                                <th>
                                <select name="typechange" 
                                 onChange={handlestudenttype}
                                >
                                    <option value="">Select-One</option>
                                    <option value="Student">Student</option>
                                    <option value="Teacher">Teacher</option>
                                </select>
                                </th>
                               

                            </tr>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Instituted Name</th>
                                <th>Action</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                //this.state.allsubscribelist.map((result) => {
                                passengersData.map((result) => {
                                    return (
                                        <tr key={result.email}>
                                            <td>
                                                <Link variant="info" to={"/Edituserssetup/" + result._id}>{result.fullname}</Link>
                                            </td>
                                            <td>{result.email}</td>
                                            <td>
                                                <p>{result.schoolcollegename}</p>
                                                <p style={{
                                                    width: '100%', height: 40, backgroundColor: '#000', color: '#ffffff',
                                                    padding: 5, borderRadius: 15
                                                }}>
                                                    {result.usersrole}</p>

                                            </td>
                                            <td>

                                                <Link variant="info" to={"/Changepassword/" + result._id}>Change Password</Link>
                                            </td>
                                            <td>
                                                <Button variant="danger" onClick={() => this.deleteUser(result._id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>


                </div>
                <Row>
                    <Col xs={12} sm={12} style={{ alignContent: 'space-between', alignItems: 'center', marginBottom: 50 }}>
                        <Button style={{ marginRight: 10 }} onClick={onclickprev}>Prev</Button>
                        <Button onClick={onclicknext}>Next</Button>
                    </Col>

                </Row>

            </Container>

        </div>
    );

}
export default Userlist
