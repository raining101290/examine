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


export class Studentname extends Component {

    constructor(props) {
        super(props);

        //handleschoolcollagename handletype
        this.state = {
            studentid: this.props.data,
            allsubscribelist: []
        }
    }
    componentDidMount() {

        this.getData();


    }
    getData = () => {
        //console.log(base.BASE_URL + '/studentname/' + this.state.studentid)
        axios.get(base.BASE_URL + '/studentname/' + this.state.studentid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
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
                            <p>{result.studentname}</p>
                        )
                    }) 
                  :
                 'No Data'
                }
            </div>
        );

    }
}
export default Studentname
