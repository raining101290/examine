import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form, Label } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

import * as base from "./global";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topbar from '../Layout/Topbar'
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import Countquestion from './Countquestion'
import Header from '../Layout/Header'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';

export class Viewquestiondetails extends Component {

    constructor(props) {
        super(props);

        //handleschoolcollagename handletype
        this.state = {
            studentid: this.props.match.params.ids, //this.props.data,
            stdexam: this.props.match.params.id, //this.props.stdexam,
            allsubscribelist: []
        }
    }
    componentDidMount() {

        this.getData();


    }
    getData = () => {
        axios.get(base.BASE_URL + '/examwisestudentwiseresult/' + this.state.studentid + '/' + this.state.stdexam, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
            this.setState({ allsubscribelist: res.data });
        });


    }
    deleteEmployee(id) {
        var answer = window.confirm("Are you sure you want to delete ?");
        if (answer) {
            this.setState({ isdelete: true })
            // true (paypal.me/andrewdhyder)
            axios.post(base.BASE_URL + '/deletestudentexamid', {
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
        <div className="row">

                {this.state.allsubscribelist.map((result) => {
                    return (
                  
                              <div className='col-md-3'>
                                    <Card style={{ marginBottom: 15 }}>
                                    <Card.Body>
                                    <Card.Title style={{ textDecoration: 'none', fontSize: 12, color: '#000' }}>{result.uid}</Card.Title>
                                    <Link variant="info" to={"/Viewsingleresult/" + this.state.stdexam + '/' + result.studentexamid + '/' + result.uid}>View Question</Link>
                                    <Countquestion examid={this.state.stdexam} studentid={result.studentexamid} stdexam={result.uid}/> 
                                   
                                    </Card.Body>
                                    <Card.Footer>
                                                                <Button variant="danger" 
                                                                onClick={() => this.deleteEmployee(result.uid)}

                                                                >Delete</Button>
                                    </Card.Footer>

                                   </Card>

                              </div>    
                       
                    )
                })}

</div></div>
                </Container>
                <Footer />
            </div>
        );

    }
}
export default Viewquestiondetails
