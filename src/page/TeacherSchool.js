import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as base from "./global";
import { Redirect } from 'react-router';
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class TeacherSchool extends Component {
    constructor() {
        super();
        let loggdin = false;
        this.handletype = this.handletype.bind(this);
        this.register = this.register.bind(this);
        this.state = {
            email: '',
            Password: '',
            isLoading: false,
            fields: {},
            errors: {},
            datauserprofile: [],
            statelist:[],
            image: 'maleavter.png',
            userrole: localStorage.getItem("usersrole"), 
            emailaddress: localStorage.getItem("vendoremailaddress")
        }
    }
    componentDidMount() {
        const formdata = {
            pagetype: "Homepage"
        }
        axios.post(base.BASE_URL + "/visitor", formdata, {
        }).then(res => {
            console.log('data..file..' + res.data);
        })

        axios.get(base.BASE_URL + '/getschooluniqueid', {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log('sl no' + res.data.status)
            this.setState({ counter: res.data.status })

        });

    }
    handletype(event)
    {
    
        axios.get(base.BASE_URL + '/getschoollist/' + event.target.value,
        {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
        })
        .then(result => {
            this.setState({ statelist: result.data, type:  event.target.value });
        });
    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //  alert(this.state.fields["email"]);
        //Name inistutetype inistuteid inistutename
      //  alert(this.state.type)

        if (!this.state.type) {
            formIsValid = false;
            errors["type"] = "inistutetype Reqired ";
        }
        if (!this.state.counter) {
            formIsValid = false;
            errors["inistuteid"] = "ID Reqired ";
        }
        if (!this.state.fields["inistutename"]) {
            formIsValid = false;
            errors["inistutename"] = "inistutename Reqired ";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }
    gettechername(schoolid){
       // alert(schoolid)
        console.log(base.BASE_URL + '/getschoolname/' + schoolid)
        axios.get(base.BASE_URL + '/getschoolname/' + schoolid,
        {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
        })
        .then(result => {
          //  console.log('monir' + result.data[0].name)
           // alert(result.data.name)
            localStorage.setItem("schoolcollegename", result.data[0].name)
            localStorage.setItem("schoolid", result.data[0]._id)

            
           // this.setState({ statelist: result.data, type:  event.target.value });
        });   
    }
    register() {
        if (this.handleValidation()) {
            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup
            axios.post(base.BASE_URL + '/teacherschoolsetup', {
                id: this.state.counter,
                schoolid: this.state.fields["inistutename"],
                address: 'x',
                website: 'x',
                email: 'x',
                phone: 'x',
                inistute: this.state.type,
                useremail: this.state.emailaddress
            }, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {
                      
                    if (response.data.status == "save") {
//alert('save')
                            localStorage.setItem("schoolcollegetype", this.state.type)
                            this.gettechername(this.state.fields["inistutename"]);


                       
                       // localStorage.setItem("schoolid", this.state.schoolid)

                        this.setState({ loggdin: 'start', loaderfile: 'notloading' })
                       // alert('save')
                    }
                    else if (response.data == "notfound") {
                       // alert("Invalid Email and Password");
                    }


                }, (error) => {
                    console.log(error);
                });


            /////////////////////////////////////////////////////////////////////
        } else {
            alert("Form has errors.")
        }


    }


    render() {
         if (this.state.loggdin == 'start') {
            return <Redirect to="/Dashboard" />
          } 
        return (
            <div>
                <Container>
                    <Header />

                    <div style={{ padding: 100 }}>
                        <p>School Information</p>
                       {/*  <Form> */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Inistutions Type</Form.Label>
                               {/*  <Form.Control type="email" placeholder="Enter email" /> */}
                                <select onChange={this.handletype} 
                                value={this.state.type} 
                                style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                className="form-control"
                                >
                                <option value="" selected disabled>Select Type </option>
                                <option value="School">School</option>
                                <option value="College">College</option>
                                <option value="Admission Test">Admission Test</option>
                                <option value="Job Interview">Job Interview</option>

                                </select>
                                <Form.Text className="text-muted">
                                {this.state.errors["type"]}
                                </Form.Text>
                            </Form.Group>  
{/*                             <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Inistutions ID</Form.Label>
                                <input type="text" className="form-control form-control-user"
                                id="exampleInputEmail" aria-describedby="emailHelp" placeholder="School ID"
                                onChange={this.handleChange.bind(this, "inistuteid")} value={this.state.counter}
                            />
                             <Form.Text className="text-muted">
                                {this.state.errors["inistuteid"]}
                                </Form.Text>
                            </Form.Group> */}

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Inistutions Name</Form.Label>


{/*                                 <input type="text" className="form-control form-control-user"
                                id="exampleInputEmail" aria-describedby="emailHelp" placeholder=""
                                onChange={this.handleChange.bind(this, "inistutename")} value={this.state.fields["inistutename"]}
                                /> */}

                                <select  className="form-control" onChange={this.handleChange.bind(this, "inistutename")}>
                                <option selected value="Didnot Find School">Didnot Find School</option>
                                {
                                this.state.statelist.map((result) => {
                                return (
                                <option value={result._id}>{result.name}</option>
                                )
                                })}
                                </select>



                                <Form.Text className="text-muted">
                                {this.state.errors["inistutename"]}
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.register}>
                                Submit
                            </Button>
                        {/* </Form> */}
                    </div>


                </Container>
<Footer />
            </div>
        )
    }
}

export default TeacherSchool