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
import Parser from 'html-react-parser'; // render HTML 

export class Matchanswerinfo extends Component {

    constructor(props) {
        super(props);

        //handleschoolcollagename handletype
        this.state = {
            parentanswerid: this.props.data,
            allsubscribelist: []
        }
    }
    componentDidMount() {

        this.getData();


    }
    getData = () => {
        axios.get(base.BASE_URL + '/matchinfoshow/' + this.state.parentanswerid, {
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
                          <div>
                                <table>
                                    <tr style={{ backgroundColor: 'silver' }}>
                                        <td>Column A </td>
                                        <td>Column B </td>
                                        <td>Your Answer </td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td>{Parser(result.Acolone)} </td> <td>{Parser(result.Bcolone)} </td><td>{Parser(result.Anscolone)}</td>
                                    </tr>
                                    <tr>    
                                        <td>{Parser(result.Acoltwo)} </td> <td>{Parser(result.Bcoltwo)} </td><td>{result.Anscoltwo}</td>
                                        </tr>
                                    <tr>   
                                        <td>{Parser(result.Acolthree)} </td> <td>{Parser(result.Bcolthree)} </td><td>{result.Anscolthree}</td>
                                        </tr>
                                    <tr>   
                                        <td>{Parser(result.Acolfour)} </td> <td>{Parser(result.Bcolfour)} </td><td>{result.Anscolfour}</td>
                                        </tr>
                                    <tr>   
                                        <td>{Parser(result.Acolfive)} </td> <td>{Parser(result.Bcolfive)} </td><td>{result.Anscolfive}</td>
                                    </tr>
                                </table>
                            </div>
                        )
                    }) 
                  :
                 ''
                }
            </div>
        );

    }
}
export default Matchanswerinfo
