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


export class Remaningquestion extends Component {

    constructor(props) {
        super(props);

        //handleschoolcollagename handletype
        this.state = {
            examid: this.props.data,
            allsubscribelist: [],
            studentid: localStorage.getItem('studentid'),
            playcount: 0,
            questioncount: 0
        }
    }
    componentDidMount() {

        this.getplayquiz();
        this.questioncount();


    }
    getplayquiz = () => {
        console.log(base.BASE_URL + '/countplayquestion/' + this.state.examid + '/' + this.state.studentid)
        axios.get(base.BASE_URL + '/countplayquestion/' + this.state.examid + '/' + this.state.studentid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
          //  this.setState({ allsubscribelist: res.data });
            this.setState({ playcount : res.data})
        });
    }
    questioncount = () => {
       // console.log(base.BASE_URL + '/gettotalquiz/' + this.state.examid)
        axios.get(base.BASE_URL + '/gettotalquiz/' + this.state.examid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
          //  this.setState({ allsubscribelist: res.data });
           
            if (res.data.length > 0) {
               // setTotalquiz(res.data.length);
                this.setState({ questioncount : res.data.length})
            }
            else {

            }
        });
    }


    render() {
        const totalmarks =  100;
        const remaning = this.state.questioncount - this.state.playcount;
        
        const correctpercentage = remaning - totalmarks;
        const incorrectpercentage = this.state.playcount / totalmarks * 100;
        const percent = 100;
        return (
            
            <div>
                          <div style={{ display: 'flex', color: '#000', justifyContent: 'space-between',
                          height: 40, borderRadius: 20 }}>
                            {
                                this.state.playcount ==  this.state.questioncount ?
                                <div style={{ fontSize: 12 }}>Exam Completed</div>
                                :
                                <div style={{ fontSize: 12 }}>
                                    {
                                        this.state.playcount > 0 ?
                                        <div>{this.state.playcount} Q. Left</div>
                                        :
                                        ''
                                    }
                                    
                                </div>
                               
                            }
                                    
                                    <div style={{ fontSize: 12 }}> Q : {this.state.questioncount}   </div>                     
                          </div>
                     
            </div>
        );

    }
}
export default Remaningquestion
