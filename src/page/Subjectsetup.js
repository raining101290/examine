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
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class Subjectsetup extends Component {

    constructor() {
        super();
        this.register = this.register.bind(this);
        this.handlecountry = this.handlecountry.bind(this);
        this.handlestate = this.handlestate.bind(this);
        this.handlename = this.handlename.bind(this);
        this.state = {
            name: '',
            address: '',
            email: '',
            phone: '',
            id: '',
            website: '',
            isLoading: false,
            loaderfile: 'notloading',
            fields: {},
            errors: {},
            loggdin: 'stop',
            counter: 0,
            states:'',
            country:'',
            statelist:[],
            name:''
        }


    }

    handlecountry(event) {
        this.setState({
            country: event.target.value
        })

        this.setState({ statelist: [] });
        ///////////////////////////////
        axios.get(base.BASE_URL + '/getschoollist/' + event.target.value,
        {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
        })
        .then(result => {
            this.setState({ statelist: result.data });
        });
        ///////////////////////////////
    }
    handlestate(event) {
        this.setState({
          states: event.target.value
        })
          this.setState({ schoollistid: [] });
        ///////////////////////////////
        axios.get(base.BASE_URL + '/getschoolidforsave/' + event.target.value, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
        .then(result => {
            this.setState({ schoollistid: result.data, schoolid: result.data[0]._id, schoolname: result.data[0].name });
           // console.log(result.data[0]._id)
        });
   
      }
      handlename(event)
      {
        this.setState({
            name: event.target.value
        })
      }

    register() {

        if(this.state.country == "" || this.state.states == "" || this.state.name == "")
        {
                alert('Insert the Required Fields')
        }   
        else
        {
            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup


            axios.post(base.BASE_URL + '/subjectsetup', {
                inistutetype: this.state.country,
                schoolname: this.state.states,
                subjectname: this.state.name,
            }, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {

                    if (response.data == "save") {
                        this.setState({ loggdin: 'start', loaderfile: 'notloading' })
                      
                    }
                    else if (response.data == "notfound") {
                        alert("Invalid Email and Password");
                    }


                }, (error) => {
                    console.log(error);
                });


        } 
 
            /////////////////////////////////////////////////////////////////////

    }


    render() {
        // alert(this.state.loggdin);
        if (this.state.loggdin == 'start') {
            return <Redirect to="/Subjectsetuplist" />
        }

        return (
            <div>

                        <Header /> {/* Slider Menu */}
                        <Container style={{ marginTop: 86 }}>
                                <div className="container-fluid">
                                    {/* Page Heading */}
                                    <div class="card position-relative">
                                        <div class="card-header py-3">

                                            <Link to="/Subjectsetuplist">Back</Link>
                                        </div>
                                        <div class="card-body">

                                            <div className="row">

                                                <div className='col-md-12'>


                                                    <form className="user">

                                                        <div class="form-content">
                                                            <div>
                                                                <div className="form-header">
                                                                    <h3 class="m-0 font-weight-bold text-primary">Subject Setup</h3>
                                                                </div>
                                                           <p style={{ color: '#000' }}>Please fill with your details</p>
                                                               
{
    this.state.loggdin == 'start' ?
<Alert variant="success">
    <Alert.Heading>Saved</Alert.Heading>
    <p>
     Information is saved as you submited
    </p>
  </Alert>

    :
''

}   
   
 

                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-6"
                                                                        style={{ padding: 16 }}>
                                                                        <select onChange={this.handlecountry}
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled>Select Type </option>
                                                                            <option value="School">School</option>
                                                                            <option value="College">College</option>
                                                                            <option value="Admission Test">Admission Test</option>
                                                                            <option value="Job Interview">Job Interview</option>

                                                                        </select>
                                                                        <span style={{ color: "red", fontSize: 12 }}>{this.state.errors["inistute"]}</span>
                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                        <select  className="form-control" onChange={this.handlestate}>
                                                                            <option selected value=""></option>
                                                                            {
                                                                                this.state.statelist.map((result) => {
                                                                                    return (
                                                                                        <option value={result._id}>{result.name}</option>
                                                                                    )
                                                                                })}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                        <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Subject Name"
                                                                            value={this.state.name} onChange={this.handlename}
                                                                        />

                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                        <Button type="button" className="btn btn-primary btn-user btn-block" onClick={this.register}>
                                                                            Submit
                                                                        </Button>
                                                                        
                                                                    </div>
                                                                </div>


                                                                <div className="form-row">

                                                                </div>

                                                            </div>
                                                        </div>



                                                    </form>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                        </Container>         

            </div>
        );

    }
}
export default Subjectsetup
