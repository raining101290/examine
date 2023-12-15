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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export class EditSchool extends Component {

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.handleChangeautoid = this.handleChangeautoid.bind(this);
        this.handleChangeid = this.handleChangeid.bind(this);
        this.handleChangename = this.handleChangename.bind(this);
        this.handleChangeaddress = this.handleChangeaddress.bind(this);
        this.handleChangeemail = this.handleChangeemail.bind(this);
        this.handleChangephone = this.handleChangephone.bind(this);
        this.handleChangewebsite = this.handleChangewebsite.bind(this);
        
        this.state = {
            name: '',
            address: '',
            email: '',
            phone: '',
            autoid: this.props.match.params.id,
            website: '',
            isLoading: false,
            loaderfile: 'notloading',
            fields: {},
            errors: {},
            loggdin: 'stop',
            counter: 0
        }
    }
    componentDidMount() {
        axios.get(base.BASE_URL + '/editschoolcollegesetup/' + this.state.autoid).then(res => {
            this.setState({ allsubscribelist: res.data,
            id: res.data[0].id,
            name: res.data[0].name,
            address: res.data[0].address,
            email: res.data[0].email,
            phone: res.data[0].phone,
            website: res.data[0].website,
            inistute: res.data[0].inistute,
         });
            console.log('monir' + res.data[0]._id);
        });
    }
    handleChangeautoid(event){
        this.setState({
            autoid: event.target.value
        })
    }
    handleChangeid(event){
        this.setState({
            id: event.target.value
        })
    }
    handleChangename(event){
        this.setState({
            name: event.target.value
        })
    }

    handleChangeaddress(event){
        this.setState({
            address: event.target.value
        })
    }

    handleChangephone(event){
        this.setState({
            phone: event.target.value
        })
    }
    handleChangeemail(event){
        this.setState({
            email: event.target.value
        })
    }


    handleChangewebsite(event){
        this.setState({
            website: event.target.value
        })
    }

    register() {

         if(this.state.id == "" || this.state.name == "" || this.state.address == "" || this.state.phone == "" || this.state.website == "")
         {

         }
         else
         {

            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup


            axios.post(base.BASE_URL + '/updateschool', {
                autoid: this.state.autoid,
                id: this.state.id,
                name: this.state.name,
                address: this.state.address,
                website: this.state.website,
                email: this.state.email,
                phone: this.state.phone
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

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        // alert(this.state.loggdin);
        if (this.state.loggdin == 'start') {
            return <Redirect to="/Schoolcollegelist" />
        }

        return (
            <div>

                        <Header /> {/* Slider Menu */}
                        <Container style={{ marginTop: 86 }}>
                                <div className="container-fluid">
                                    {/* Page Heading */}
                                    <div class="card position-relative">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">Update School/College information {this.state.id}</h6>
                                            <Link to="/Schoolcollegelist">Back</Link>
                                        </div>
                                        <div class="card-body">

                                            <div className="row">

                                                <div className='col-md-12'>
                                                    <form className="user">
                                                    <div className="form-group">
                                                            School Auto ID 
                                                            <input type="text" className="form-control form-control-user"
                                                                id="exampleInputEmail" aria-describedby="emailHelp" placeholder="School ID"
                                                                onChange={this.handleChangeautoid.bind(this)} value={this.state.autoid}
                                                                readOnly
                                                            />
                                                            <span style={{ color: "red", fontSize: 12 }}>{this.state.errors["autoid"]}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            School ID
                                                            <input type="text" className="form-control form-control-user"
                                                                id="exampleInputEmail" aria-describedby="emailHelp" placeholder="School ID"
                                                                onChange={this.handleChangeid.bind(this)} value={this.state.id}
                                                                defaultValue={this.state.id}
                                                            />
                                                            <span style={{ color: "red", fontSize: 12 }}>{this.state.errors["id"]}</span>
                                                        </div>
                                                        <div className="form-holder col-md-6"
                                                                    style={{ padding: 16 }}>
                                                                        Type
                                                                        <select onChange={this.handletype} 
                                                                        value={this.state.inistute} 
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value={this.state.inistute}>{this.state.inistute} </option>
                                                                            <option value="School">School</option>
                                                                            <option value="College">College</option>
                                                                            <option value="Admission Test">Admission Test</option>
                                                                            <option value="Job Interview">Job Interview</option>
                                                                            
                                                                        </select>
                                                                        <span style={{ color: "red", fontSize: 12 }}>{this.state.errors["inistute"]}</span>
                                                                    </div>
                                                        <div className="form-group">
                                                            School Name 
                                                            <input type="text" className="form-control form-control-user"
                                                                id="exampleInputEmail" aria-describedby="emailHelp" placeholder="School/College Name"
                                                                onChange={this.handleChangename.bind(this)} value={this.state.name}
                                                                defaultValue={this.state.name}
                                                            />
                                                            <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            Address
                                                            <input type="text" className="form-control form-control-user" placeholder="Address"
                                                                onChange={this.handleChangeaddress.bind(this)} 
                                                                value={this.state.address} 
                                                                defaultValue={this.state.address}
                                                                />
                                                        </div>
                                                        <div className="form-group">
                                                            Phone
                                                            <input type="text" className="form-control form-control-user" placeholder="phone"
                                                                onChange={this.handleChangephone.bind(this)} 
                                                                defaultValue={this.state.phone}
                                                                value={this.state.phone} />
                                                            <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            Email
                                                            <input type="email" className="form-control form-control-user" placeholder="email"
                                                             
                                                                onChange={this.handleChangeemail.bind(this)}
                                                                defaultValue={this.state.email}
                                                                value={this.state.email} />
                                                          
                                                        </div>
                                                        <div className="form-group">
                                                            Website 
                                                            <input type="text" className="form-control form-control-user" placeholder="website"
                                                                onChange={this.handleChangewebsite.bind(this)}
                                                                defaultValue={this.state.website}
                                                                value={this.state.website} />
                                                        
                                                        </div>
                                                        <Button type="button" className="btn btn-primary btn-user btn-block" onClick={this.register}>
                                                            Submit
                                                        </Button>

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
export default EditSchool
