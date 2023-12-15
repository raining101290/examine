import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Topbar from '../Layout/Topbar'
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Alert} from 'react-bootstrap'  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class Schoolcollegelist extends Component {

    constructor() {
        super();

        this.state = {
          
            isLoading: false,
            isdelete: false,
            loaderfile: 'notloading',
            fields: {},
            errors: {},
            loggdin: 'stop',
            counter: 0,
            allsubscribelist: []
        }


    }
    componentDidMount() {
      this.getdata()
    }
    getdata = () => {
        axios.get(base.BASE_URL + '/schoollist', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            this.setState({ allsubscribelist: res.data });
        });
    }
    deleteEmployee(id) {
        var answer = window.confirm("Are you sure you want to delete ?");
        if (answer) {
            this.setState({ isdelete: true })
            // true (paypal.me/andrewdhyder)
            axios.post(base.BASE_URL + '/delete_schoolcollege', {
                id: id
                },{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    } 
                })
                .then((response) => {

                if (response.data == "delete") {
                   
                        this.setState({ isdelete: false })
                        this.getdata()
                
                }
                else if (response.data == "notfound") {

                }
                }, (error) => {
                console.log(error);
                });
          } else {
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
          }

        ////////////////////////////////////////////////////////////////////
 
        ////////////////////////////////////////////////////////////////////
    }

    render() {

        return (
            <div>

                        <Header /> {/* Slider Menu */}
                        <Container style={{ marginTop: 86 }}>
                                <div className="container-fluid">
                                    {/* Page Heading */}
                                    <div className="row">
                                        {
                                            this.state.isdelete == true ?
                                            <Alert variant="success">Delete successfully </Alert>  
                                            :
                                            ''
                                        }
                                   
                                        <div className='col-md-12 firstcolumn'>
                                            <div className='secondcolumn'>
                                                <p>List of School/College</p>
                                            </div>
                                            <div className='thirdcolumn'>
                                                <Link to="/Schoolcollegesetup" className='btn btn-primary'
                                                    style={{ marginBottom: 20 }}
                                                >
                                                    Add New
                                                </Link>
                                            </div>
                                        </div>

                                        <table class="table" style={{ fontSize: 14 }}>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Type</th>
                                                    <th>Address</th>
                                                    <th>Action</th>
                                                    <th>Delete</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.allsubscribelist.map((result) => {
                                                    return (
                                                        <tr key={result.id}>
                                                            <td>{result.name}</td>
                                                            <td>{result.inistute}</td>
                                                            <td>{result.address}</td>
                                                            <td>
                                                                <Link variant="info" to={"/EditSchool/" + result._id}>Edit</Link>
                                                            </td>
                                                            <td>

                                                                <Button variant="danger" 
                                                                onClick={() => this.deleteEmployee(result._id)}

                                                                >Delete</Button>
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
        );

    }
}
export default Schoolcollegelist
