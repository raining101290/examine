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


export class Examname extends Component {

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
                            ''
                            :
                           <p style={{ color: '#fff' }}>Exam Name :{result.examname}</p>
                        )
                    }) 
                  :
                 ''
                }
            </div>
        );

    }
}
export default Examname
