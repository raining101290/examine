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

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const  modules  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
      //  ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
      //  [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
      //  ["link", "image", "video"],
      //  ["clean"],
    ],
};


export class Fillgapedit extends Component {

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);

        this.handlestate = this.handlestate.bind(this);
        this.handlename = this.handlename.bind(this);
  
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
            writtinganswer:'',
            quizdatalist:[]
            
        }
        this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount() {
        axios.get(base.BASE_URL + '/quizedit/' + this.state.automemberid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log('kkk....' + res.data)

          
            if(res.data.length > 0)
            {
                this.setState({ 
                    quizdatalist: res.data, 
                    quizid: res.data[0].id,
                    questiontype: res.data[0].questiontype,
                    editorHtml: res.data[0].questiontitle,
                    questionimage: res.data[0].questionimage,
                    Atype: res.data[0].Atype,
                    Btype: res.data[0].Btype,
                    Ctype: res.data[0].Ctype,
                    Dtype: res.data[0].Dtype,
                    Atitle: res.data[0].Atitle, 
                    Btitle: res.data[0].Btitle,
                    Ctitle: res.data[0].Ctitle, 
                    Dtitle: res.data[0].Dtitle,
                    Answer: res.data[0].Answer,
                    writtinganswer: res.data[0].writtinganswer,
                    Aimage: res.data[0].Aimage,
                    Bimage: res.data[0].Bimage,
                    Cimage: res.data[0].Cimage,
                    Dimage: res.data[0].Dimage

                });
            }
            else
            {

            }
           
        });

    }
    handleChange (html) {
        this.setState({ editorHtml: html });
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

handleAnswer(event)
{
    this.setState({
        Answer: event.target.value
    })
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

    register() {

        if (this.state.automemberid == "" || this.state.writtinganswer == "" || this.state.questiontitle == "") {
            alert('Insert the Required Fields')
        }
        else {
            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup


            axios.post(base.BASE_URL + '/fillinthegapupdate', {
                automemberid: this.state.automemberid,
                questiontitle: this.state.questiontitle,
                Answer: this.state.writtinganswer,
                writtinganswer: this.state.writtinganswer,
                quiztype: 'Fill in the Gap'
                
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




    render() {
        // alert(this.state.loggdin);
        const {uploadPercentage} = this.state;
        if (this.state.loggdin == 'start') {
            return <Redirect to={"/Quizsetuplist/" + this.state.examid + '/' + this.state.examname} />
        }

        return (
            <div>

                        <Header /> {/* Slider Menu */}
                        <Container style={{ marginTop: 86 }}>

                                <div className="container-fluid">
                                    {/* Page Heading */}
                                    <div class="card position-relative">
                                        <div class="card-header py-3">
                                            <div className="form-header">
                                                <h3 class="m-0 font-weight-bold text-primary">Edit Fill in the Gaps Quiz Details {/* - Quiz ID: {this.state.automemberid} */}</h3>
                                            </div>
                                            <p style={{ color: '#000' }}>Exam Name : {this.state.examname} SL No : {this.state.quizid}</p>

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

                                                                    <div className="form-holder col-md-11" >
<div style={{ padding: 10, height: 220 }}>
<ReactQuill  modules={modules} theme="snow" 
placeholder="Question Title"
style={{ width: '100%', fontSize: 18, color: '#000', height: 200 }}

onChange={this.handleChange}
value={this.state.editorHtml}
/>
</div>

                                                                      {/*   <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Questional Title"
                                                                            value={this.state.questiontitle} onChange={this.handlequestiontitle}
                                                                        /> */}
                                                                    </div>
                                                                </div>

                                                                <div className="form-row" style={{ marginTop: 60 }}>
                                                                <div className="form-holder col-md-1" style={{ padding: 10 }}>
                                                                    Answer
                                                                </div>
                                                                <div className="form-holder col-md-3" style={{ padding: 10 }}>   
                                                                <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" 
                                                                            placeholder="Witting Answer"
                                                                            value={this.state.writtinganswer} onChange={this.handlewrittinganswer}
                                                                        />  
                                                                </div>   
                                                                <div className="form-holder col-md-3" style={{ padding: 10 }}>   
                                                                <Button type="button" className="btn btn-primary btn-user btn-block" onClick={this.register}>
                                                                            Update Question
                                                                        </Button>
                                                                </div> 
                                                                </div>
                                                               

                                                                <div className="form-row">
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>

                                                                    </div>
                                                                    <div className="form-holder col-md-6" style={{ padding: 10 }}>
                                                                       

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
export default Fillgapedit
