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



export class Editsubjectsetup extends Component {

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.handlecountry = this.handlecountry.bind(this);
        this.handleschoolcollegename = this.handleschoolcollegename.bind(this);
        this.handlename = this.handlename.bind(this);
        this.state = {
            schoolcollegename: '',
            schoolcollegeid: '',
            inistutetype: '',
            subjectname: '',
            id: '',
            website: '',
            isLoading: false,
            loaderfile: 'notloading',
            autoid: this.props.match.params.id,
            fields: {},
            errors: {},
            loggdin: 'stop',
            counter: 0,
            states:'',
            country:'',
            statelist:[],
            allsubscribelist:[],
            name:''
        }


    }
    componentDidMount() {
        axios.get(base.BASE_URL + '/editsubjectinformation/' + this.state.autoid).then(res => {
            this.setState({ allsubscribelist: res.data,
                schoolcollegeid: res.data[0].parentid,
                schoolcollegename: res.data[0].schoolcollegename,
                subjectname: res.data[0].name,
                inistutetype: res.data[0].inistute
         });
            console.log('monir' + res.data[0]._id);
        });
    }
    handlecountry(event) {
        this.setState({
            inistutetype: event.target.value
        })

        this.setState({ statelist: [] });
        ///////////////////////////////
        axios.get(base.BASE_URL + '/getschoollist/' + event.target.value).then(result => {
            this.setState({ statelist: result.data });
        });
        ///////////////////////////////
    }
    handleschoolcollegename(event) {
    //    this.setState({
    //        schoolcollegeid: event.target.value
    //    })
////////////////////////////////////////////////////////////////////////////
this.setState({ sublist: [] });
///////////////////////////////
axios.get(base.BASE_URL + '/getschoolcollegeinfo/' + event.target.value).then(result => {
    this.setState({ sublist: result.data, schoolcollegeid: result.data[0]._id, schoolcollegename: result.data[0].name });
});

////////////////////////////////////////////////////////////////////////////   
      }
      handlename(event)
      {
        this.setState({
            subjectname: event.target.value
        })
      }

    register() {

        if(this.state.inistutetype == "" || this.state.schoolcollegeid == "" || this.state.schoolcollegename == "")
        {
                alert('Insert the Required Fields')
        }   
        else
        {
            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup


            axios.post(base.BASE_URL + '/updatesubject', {
                subjectautoid: this.state.autoid,
                schoolcollegeid: this.state.schoolcollegeid,
                schoolcollegename: this.state.schoolcollegename,
                subjectname: this.state.subjectname,
                inistutetype: this.state.inistutetype
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
                                                                    <h3 class="m-0 font-weight-bold text-primary">Edit Subject Setup </h3>
                                                                </div>
                                                           <p style={{ color: '#000' }}> School College ID {this.state.schoolcollegeid} School/College Name: {this.state.schoolcollegename}</p>
                                                               
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
                                                                            <option value={this.state.inistutetype}>{this.state.inistutetype} </option>
                                                                            <option value="School">School</option>
                                                                            <option value="College">College</option>
                                                                            <option value="Admission Test">Admission Test</option>
                                                                            <option value="Job Interview">Job Interview</option>

                                                                        </select>
                                                                        <span style={{ color: "red", fontSize: 12 }}>{this.state.errors["inistute"]}</span>
                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                        <select  className="form-control" onChange={this.handleschoolcollegename}>
                                                                        <option value={this.state.schoolcollegename}>{this.state.schoolcollegename} </option>
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
                                                                            value={this.state.subjectname} onChange={this.handlename}
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
export default Editsubjectsetup
