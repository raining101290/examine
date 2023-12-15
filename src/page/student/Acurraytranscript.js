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

let readings = [
    {
      name: 'Correct',
      value: 60,
      color: '#eb4d4b'
    },
    {
      name: 'Incorrect',
      value: 7,
      color: '#22a6b3'
    }
  ];
  //https://scriptverse.academy/tutorials/reactjs-multicolor-progressbar.html

export class Acurraytranscript extends Component {

    

    constructor(props) {
        super(props);

        //handleschoolcollagename handletype
        this.state = {
            examrandomid: this.props.data,
            allsubscribelist: [],
            correctdata:'',incorrectdata:''
        }
    }
    componentDidMount() {

        this.getData();
        this.getDatatwo();


    }
    getData = () => {
        console.log(base.BASE_URL + '/viewtransactioncorrect/' + this.state.examrandomid)
        axios.get(base.BASE_URL + '/viewtransactioncorrect/' + this.state.examrandomid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
          //  alert(res.data)
          this.setState({ correctdata : res.data})
            //this.setState({ allsubscribelist: res.data });
        });

    }
    getDatatwo = () => {
        console.log(base.BASE_URL + '/viewtransactionincorrect/' + this.state.examrandomid)
        axios.get(base.BASE_URL + '/viewtransactionincorrect/' + this.state.examrandomid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            this.setState({ incorrectdata : res.data})
        });


    }

    render() {
        const totalmarks =  this.state.correctdata + this.state.incorrectdata;
        const correctpercentage = this.state.correctdata / totalmarks * 100;
        const incorrectpercentage = this.state.incorrectdata / totalmarks * 100;
        const percent = 100;

 
       
        return (
            <div>
                <p style={{ color: '#ffffff' }}>Correct : {this.state.correctdata} Incorrect : {this.state.incorrectdata}</p>

                          <div style={{ display: 'flex', color: '#000', justifyContent: 'space-between',
                          backgroundColor: '#ffffff', height: 40, borderRadius: 20 }}>
                               {
                                 correctpercentage > 0 ?
                                    <div style={{ backgroundColor: 'green', width: correctpercentage + '%', borderBottomLeftRadius: 20,
                                    borderTopLeftRadius: 20,
                                    padding: 5, color: '#ffffff' }}>{parseInt(correctpercentage)} % Correct</div>
                                    :
                                    ''
                               }
                               {
                                 incorrectpercentage > 0 ?
                                 <div style={{ backgroundColor: 'red', width: incorrectpercentage + '%', borderBottomRightRadius: 20,
                                 borderTopRightRadius: 20,
                                 padding: 5, color: '#ffffff'  }}>{parseInt(incorrectpercentage)} % Incorrect</div>
                                 :
                                 ''
                               }
                          </div>
            </div>
        )
    }
}
export default Acurraytranscript
