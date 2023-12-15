import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form, Label } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

import * as base from "../global";
import axios from 'axios';
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'


export class Examimage extends Component {

    constructor(props) {
        super(props);

        //handleschoolcollagename handletype
        this.state = {
            examid: this.props.data,
            allsubscribelist: []
        }
    }
    componentDidMount() {

        this.getData();


    }
    getData = () => {
        axios.get(base.BASE_URL + '/examimage/' + this.state.examid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            this.setState({ allsubscribelist: res.data });
        });


    }


    render() {

        return (
            <div>
                {
                this.state.allsubscribelist.length > 0 ?
                
                    this.state.allsubscribelist.map((result) => {
                        return (
                            result.image == null ?
                            <Card.Img variant="top" src="../images/exam.png" 
                            style={{ backgroundPosition: '50%', resize: 'cover', height: 170 }} />
                            :
                            <Card.Img variant="top" src={base.BASE_URL + result.image} 
                                            style={{ backgroundPosition: '50%', resize: 'cover', height: 170 }} />
                        )
                    }) 
                  :
                 ''
                }
            </div>
        );

    }
}
export default Examimage
