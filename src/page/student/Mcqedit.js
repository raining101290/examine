import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form, } from 'reactstrap';
import { Progress } from 'reactstrap';
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



export class Mcqedit extends Component {

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.handlecountry = this.handlecountry.bind(this);
        this.handlestate = this.handlestate.bind(this);
        this.handlename = this.handlename.bind(this);
        this.handlesubject = this.handlesubject.bind(this);
        this.handleQuestiontype = this.handleQuestiontype.bind(this);

        this.handleAtype = this.handleAtype.bind(this);
        this.handleBtype = this.handleBtype.bind(this);
        this.handleCtype = this.handleCtype.bind(this);
        this.handleDtype = this.handleDtype.bind(this);

        this.handleAtitle = this.handleAtitle.bind(this);
        this.handleBtitle = this.handleBtitle.bind(this);
        this.handleCtitle = this.handleCtitle.bind(this);
        this.handleDtitle = this.handleDtitle.bind(this);

        this.handleDtype = this.handleDtype.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handlewrittinganswer = this.handlewrittinganswer.bind(this);
        this.handlequestiontitle = this.handlequestiontitle.bind(this);

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
            states: '',
            country: '',
            statelist: [],
            name: '',
            schoolcollegetype: '',
            schoolcollegename: '',
            subjectlist: '',
            schoolcollegesubjectlist: [],
            seriallist: [],
            automemberid: this.props.match.params.id,
            examid: this.props.match.params.ids,
            examname: this.props.match.params.idss,
            questiontype:'',
            questionimageupload_loader: false,
            uploadPercentage: 0,
            questiontitle:'',
            Answer:'',
            writtinganswer:''
            
        }


    }

    componentDidMount() {
      /*   axios.get(base.BASE_URL + '/quizautoid').then(res => {
            this.setState({ seriallist: res.data, automemberid: res.data.status });
            console.log(res.data)
        }); */
    }
handlequestiontitle(event){
    this.setState({
        questiontitle: event.target.value
    })
}
handlewrittinganswer(event){
    this.setState({
        writtinganswer: event.target.value
    })
}
handleAtitle(event){
    this.setState({
        Atitle: event.target.value
    })
}
handleBtitle(event){
    this.setState({
        Btitle: event.target.value
    })
}
handleCtitle(event){
    this.setState({
        Ctitle: event.target.value
    })
}
handleDtitle(event){
    this.setState({
        Dtitle: event.target.value
    })
}
handleAnswer(event)
{
    this.setState({
        Answer: event.target.value
    })
}
    handlecountry(event) {
        this.setState({
            schoolcollegetype: event.target.value
        })

        this.setState({ statelist: [] });
        ///////////////////////////////
        axios.get(base.BASE_URL + '/getschoollist/' + event.target.value).then(result => {
            this.setState({ statelist: result.data });
        });
        ///////////////////////////////
    }
    handlesubject(event) {
        this.setState({
            subjectname: event.target.value
        })



    }
    handlestate(event) {
        this.setState({
            schoolcollegename: event.target.value
        })
        alert(event.target.value)
        this.setState({ schoolcollegesubjectlist: [] });
        ///////////////////////////////
        axios.get(base.BASE_URL + '/getparmetersubjectlist/' + this.state.schoolcollegetype + '/' + event.target.value).then(result => {
            this.setState({ schoolcollegesubjectlist: result.data, automemberid: result.data[0].status });

        });
        ///////////////////////////////
    }
    handlename(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleQuestiontype(event)
    {
        this.setState({
          questiontype  : event.target.value
        })
    }
    handleAtype(event)
    {
        this.setState({
          Atype  : event.target.value
        })
    }
    handleBtype(event)
    {
        this.setState({
          Btype  : event.target.value
        })
    }
    handleCtype(event)
    {
        this.setState({
          Ctype  : event.target.value
        })
    }
    handleDtype(event)
    {
        this.setState({
          Dtype  : event.target.value
        })
    }

    register() {

        if (this.state.automemberid == "" || this.state.Answer == "") {
            alert('Insert the Required Fields')
        }
        else {
            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup


            axios.post(base.BASE_URL + '/questionsaveall', {
                automemberid: this.state.automemberid,
                questiontitle: this.state.questiontitle,
                questiontype: this.state.questiontype,
                Atype: this.state.Atype,
                Atitle: this.state.Atitle,
                Btype: this.state.Btype,
                Btitle: this.state.Btitle,
                Ctype: this.state.Ctype,
                Ctitle: this.state.Ctitle,
                Dtype: this.state.Dtype,
                Dtitle: this.state.Dtitle,
                Answer: this.state.Answer,
                writtinganswer: this.state.writtinganswer,
                quiztype: 'MCQ'
                
            }, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {
                      //  alert(response.data.status)
                    if (response.data.status == "found") {
                        this.setState({ loggdin: 'start', loaderfile: 'notloading' })

                    }
                    else if (response.data == "notfound") {
                        alert("x");
                    }


                }, (error) => {
                    console.log(error);
                });


        }

        /////////////////////////////////////////////////////////////////////

    }
    fileSelectquestionimage = event => {
if(this.state.questiontype == "" || this.state.automemberid == "")
{
  alert('Insert the Question Type')
}   
else
{
////////////////////////////////////////
this.setState({ questionimage: event.target.files[0],  questionimageupload_loader: true })
console.log(event.target.files[0])
// image preview
var file = event.target.files[0];
var reader = new FileReader();
var url = reader.readAsDataURL(file);

reader.onloadend = function (e) {
    this.setState({
        preview: [reader.result]
    })
}.bind(this);
console.log(url) // Would see a path?
// end image previou
//////////upload
const options = {
    onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent
        let percent = Math.floor(loaded * 100 / total)
        if(percent < 100)
        {
            this.setState({
                uploadPercentage: percent
            })
        }

    },
}


const fd = new FormData();
fd.append('profileImg', event.target.files[0], event.target.files[0].name);
fd.append('autoincrement', this.state.automemberid);
fd.append('questiontype', this.state.questiontype);
axios.post(base.BASE_URL + '/questionimageupload', fd, options
).then(res => {
    // alert(res.message);
    if (res.status == '200') {

        this.setState({ questionimageupload_loader: false, uploadPercentage: 100 }, ()=>{
            setTimeout(() =>{
                this.setTimeout({
                        uploadPercentage: 0
                }, 1000)
            })
        })
    }
    else {
        this.setState({ questionimageupload_loader: false })
        alert('Failed To Upload')
    }
    console.log(res);
}
);

///////////////////////////////////////
}    
        ////////////
    }


    fileSelectA = event => {
        if(this.state.Atype == "" || this.state.automemberid == "")
        {
          alert('Insert the Question A Type')
        }   
        else
        {
        ////////////////////////////////////////
        this.setState({ questionAimage: event.target.files[0],  questionimageupload_loader: true })
        console.log(event.target.files[0])
        // image preview
        var file = event.target.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
        
        reader.onloadend = function (e) {
            this.setState({
                previewA: [reader.result]
            })
        }.bind(this);
        console.log(url) // Would see a path?
        // end image previou
        //////////upload
        const fd = new FormData();
        fd.append('profileImg', event.target.files[0], event.target.files[0].name);
        fd.append('autoincrement', this.state.automemberid);
        fd.append('Atype', this.state.Atype);
        axios.post(base.BASE_URL + '/Aimageupload', fd
        ).then(res => {
            // alert(res.message);
            if (res.status == '200') {
        
                this.setState({ questionimageupload_loader: false })
            }
            else {
                this.setState({ questionimageupload_loader: false })
                alert('Failed To Upload')
            }
            console.log(res);
        }
        );
        
        ///////////////////////////////////////
        }    
                ////////////
            }    
/////////////////////////////////////////////////////////////////////////


fileSelectB = event => {
    if(this.state.Btype == "" || this.state.automemberid == "")
    {
      alert('Insert the Question B Type')
    }   
    else
    {
    ////////////////////////////////////////
    this.setState({ questionBimage: event.target.files[0],  questionimageupload_loader: true })
    console.log(event.target.files[0])
    // image preview
    var file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    
    reader.onloadend = function (e) {
        this.setState({
            previewB: [reader.result]
        })
    }.bind(this);
    console.log(url) // Would see a path?
    // end image previou
    //////////upload
    const fd = new FormData();
    fd.append('profileImg', event.target.files[0], event.target.files[0].name);
    fd.append('autoincrement', this.state.automemberid);
    fd.append('Btype', this.state.Btype);
    axios.post(base.BASE_URL + '/Bimageupload', fd
    ).then(res => {
        // alert(res.message);
        if (res.status == '200') {
    
            this.setState({ questionimageupload_loader: false })
        }
        else {
            this.setState({ questionimageupload_loader: false })
            alert('Failed To Upload')
        }
        console.log(res);
    }
    );
    
    ///////////////////////////////////////
    }    
            ////////////
        }    
//////////////////////////////////////////////////////////////////////////

fileSelectC = event => {
    if(this.state.Ctype == "" || this.state.automemberid == "")
    {
      alert('Insert the Question C Type')
    }   
    else
    {
    ////////////////////////////////////////
    this.setState({ questionCimage: event.target.files[0],  questionimageupload_loader: true })
    console.log(event.target.files[0])
    // image preview
    var file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    
    reader.onloadend = function (e) {
        this.setState({
            previewC: [reader.result]
        })
    }.bind(this);
    console.log(url) // Would see a path?
    // end image previou
    //////////upload
    const fd = new FormData();
    fd.append('profileImg', event.target.files[0], event.target.files[0].name);
    fd.append('autoincrement', this.state.automemberid);
    fd.append('Ctype', this.state.Ctype);
    axios.post(base.BASE_URL + '/Cimageupload', fd
    ).then(res => {
        // alert(res.message);
        if (res.status == '200') {
    
            this.setState({ questionimageupload_loader: false })
        }
        else {
            this.setState({ questionimageupload_loader: false })
            alert('Failed To Upload')
        }
        console.log(res);
    }
    );
    
    ///////////////////////////////////////
    }    
            ////////////
        }    




////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////

fileSelectD = event => {
    if(this.state.Dtype == "" || this.state.automemberid == "")
    {
      alert('Insert the Question C Type')
    }   
    else
    {
    ////////////////////////////////////////
    this.setState({ questionDimage: event.target.files[0],  questionimageupload_loader: true })
    console.log(event.target.files[0])
    // image preview
    var file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    
    reader.onloadend = function (e) {
        this.setState({
            previewD: [reader.result]
        })
    }.bind(this);
    console.log(url) // Would see a path?
    // end image previou
    //////////upload
    const fd = new FormData();
    fd.append('profileImg', event.target.files[0], event.target.files[0].name);
    fd.append('autoincrement', this.state.automemberid);
    fd.append('Dtype', this.state.Dtype);
    axios.post(base.BASE_URL + '/Dimageupload', fd
    ).then(res => {
        // alert(res.message);
        if (res.status == '200') {
    
            this.setState({ questionimageupload_loader: false })
        }
        else {
            this.setState({ questionimageupload_loader: false })
            alert('Failed To Upload')
        }
        console.log(res);
    }
    );
    
    ///////////////////////////////////////
    }    
            ////////////
        }    

////////////////////////////////////////////////////////////////////////


    render() {
        // alert(this.state.loggdin);
        const {uploadPercentage} = this.state;
        if (this.state.loggdin == 'start') {
            return <Redirect to={"/Quizsetuplist/" + this.state.examid + '/' + this.state.examname} />
        }

        return (
            <div>
                <div>
                    {/* Page Wrapper */}
                    <div id="wrapper">
                        <Header /> {/* Slider Menu */}
                        {/* Content Wrapper */}
                        <div id="content-wrapper" className="d-flex flex-column">
                            {/* Main Content */}
                            <div id="content">
                                <Topbar />
                                {/* End of Topbar */}
                                {/* Begin Page Content */}
                                <div className="container-fluid">
                                    {/* Page Heading */}
                                    <div class="card position-relative">
                                        <div class="card-header py-3">
                                            <div className="form-header">
                                                <h3 class="m-0 font-weight-bold text-primary">Quiz Details {/* - Quiz ID: {this.state.automemberid} */}</h3>
                                            </div>
                                            <p style={{ color: '#000' }}>Exam Name : {this.state.examname}</p>

                                        </div>
                                        <div class="card-body">

                                            <div className="row">

                                                <div className='col-md-12'>


                                                    <form className="user">

                                                        <div class="form-content">
                                                            <div>
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
                                                                    <div className="form-holder col-md-1" style={{ padding: 10 }}>
                                                                        <p style={{ color: '#000' }}>Question</p>
                                                                    </div>
                                                                    <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                                        <select onChange={this.handleQuestiontype}
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled> </option>
                                                                            <option value="Text">Text</option>
                                                                            <option value="Image">Image</option>
                                                                            <option value="Image and Text">Image and Text</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                        <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Questional Title"
                                                                            value={this.state.questiontitle} onChange={this.handlequestiontitle}
                                                                        />
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                        <input type="file" onChange={this.fileSelectquestionimage} className='form-control' />



                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                   
                                                                        {
                                                                        this.state.preview == '' ?
                                                                        <img class="img-profile rounded-circle" src="/bootstrapcss/img/undraw_profile.svg" style={{ width: 50, height: 50 }}></img>
                                                                        :
                                                                        <img src={this.state.preview} style={{ width: 50, height: 50 }} /> 
                                                                        }
                                                                        {
                                                                            uploadPercentage > 0 && 
                                                                            <Progress bar color="warning" value={uploadPercentage}>{uploadPercentage}</Progress>
                                                                        }
                                                                       
                                                                    </div>
                                                                </div>


                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-1" style={{ padding: 10 }}>
                                                                        <p style={{ color: '#000' }}>A</p>
                                                                    </div>
                                                                    <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                                        <select onChange={this.handleAtype}
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled> </option>
                                                                            <option value="Text">Text</option>
                                                                            <option value="Image">Image</option>
                                                                            <option value="Image and Text">Image and Text</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                        <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" placeholder=" Title"
                                                                            value={this.state.Atitle} onChange={this.handleAtitle}
                                                                        />
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                              <input type="file" onChange={this.fileSelectA} className='form-control' />
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                        <img class="img-profile rounded-circle" src="/bootstrapcss/img/undraw_profile.svg" style={{ width: 50, height: 50 }}></img>
                                                                    </div>
                                                                </div>

                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-1" style={{ padding: 10 }}>
                                                                        <p style={{ color: '#000' }}>B</p>
                                                                    </div>
                                                                    <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                                        <select onChange={this.handleBtype}
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled> </option>
                                                                            <option value="Text">Text</option>
                                                                            <option value="Image">Image</option>
                                                                            <option value="Image and Text">Image and Text</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                        <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" placeholder=" Title"
                                                                            value={this.state.Btitle} onChange={this.handleBtitle}
                                                                        />
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                    <input type="file" onChange={this.fileSelectB} className='form-control' /> 
                                                                       
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                        <img class="img-profile rounded-circle" src="/bootstrapcss/img/undraw_profile.svg" style={{ width: 50, height: 50 }}></img>
                                                                    </div>
                                                                </div>

                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-1" style={{ padding: 10 }}>
                                                                        <p style={{ color: '#000' }}>C</p>
                                                                    </div>
                                                                    <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                                        <select onChange={this.handleCtype}
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled> </option>
                                                                            <option value="Text">Text</option>
                                                                            <option value="Image">Image</option>
                                                                            <option value="Image and Text">Image and Text</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                        <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Title"
                                                                            value={this.state.Ctitle} onChange={this.handleCtitle}
                                                                        />
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                    <input type="file" onChange={this.fileSelectC} className='form-control' />
                                                                  
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                        <img class="img-profile rounded-circle" src="/bootstrapcss/img/undraw_profile.svg" style={{ width: 50, height: 50 }}></img>
                                                                    </div>
                                                                </div>

                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-1" style={{ padding: 10 }}>
                                                                        <p style={{ color: '#000' }}>D</p>
                                                                    </div>
                                                                    <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                                        <select onChange={this.handleDtype}
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled> </option>
                                                                            <option value="Text">Text</option>
                                                                            <option value="Image">Image</option>
                                                                            <option value="Image and Text">Image and Text</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                        <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Title"
                                                                            value={this.state.Dtitle} onChange={this.handleDtitle}
                                                                        />
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                    <input type="file" onChange={this.fileSelectD} className='form-control' />
                                                                    </div>
                                                                    <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                        <img class="img-profile rounded-circle" src="/bootstrapcss/img/undraw_profile.svg" style={{ width: 50, height: 50 }}></img>
                                                                    </div>
                                                                </div>
                                                                <div className="form-row">
                                                                <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                                    Answer
                                                                </div>
                                                                <div className="form-holder col-md-3" style={{ padding: 10 }}>   
                                                                        <select onChange={this.handleAnswer}
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                            className="form-control">
                                                                                 <option value=""></option>
                                                                            <option value="A">A</option>
                                                                            <option value="B">B</option>
                                                                            <option value="C">C</option>
                                                                            <option value="D">D</option>
                                                                            <option value="No Answer">No Answer</option>
                                                                        </select>   
                                                                </div>
                                                                <div className="form-holder col-md-3" style={{ padding: 10 }}>   
                                                                <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" 
                                                                            placeholder="Witting Answer"
                                                                            value={this.state.writtinganswer} onChange={this.handlewrittinganswer}
                                                                        />  
                                                                </div>  
                                                                </div>

                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>

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
                                {/* /.container-fluid */}
                            </div>
                            {/* End of Main Content */}
                            {/* Footer */}
                            <footer className="sticky-footer bg-white">
                                <div className="container my-auto">
                                    <div className="copyright text-center my-auto">
                                        <span>Copyright © Your Website 2020</span>
                                    </div>
                                </div>
                            </footer>
                            {/* End of Footer */}
                        </div>
                        {/* End of Content Wrapper */}
                    </div>
                    {/* End of Page Wrapper */}
                    {/* Scroll to Top Button*/}
                    <a className="scroll-to-top rounded" href="#page-top">
                        <i className="fas fa-angle-up" />
                    </a>
                    {/* Logout Modal*/}
                    <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                    <a className="btn btn-primary" href="login.html">Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );

    }
}
export default Mcqedit;