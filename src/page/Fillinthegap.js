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
import Basic from './Basic'
import Basictwo from './Basictwo';
import Basicthree from './Basicthree'
import Basicfour from './Basicfour'
import Basicfive from './Basicfive'
import Modal from 'react-modal';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

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



export class Fillinthegap extends Component {

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

        this.titletype1 = this.titletype1.bind(this);
        this.titletype2 = this.titletype2.bind(this);
        this.titletype3 = this.titletype3.bind(this);
        this.titletype4 = this.titletype4.bind(this);
        this.titletype5 = this.titletype5.bind(this);

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
            writtinganswer:'',  editorHtml: '', theme: 'snow', text: '',
            titletypetext1: 'Text',
            titletypetext2: 'Text',
            titletypetext3: 'Text',
            titletypetext4: 'Text',
            titletypetext5: 'Text',text1:'', showmathpopup2: false, text2:'',text3:'',text4:'',text5:'',
            showmathpopup3: false, showmathpopup4: false, showmathpopup5: false,
          
            
        }
        this.handleChange = this.handleChange.bind(this)

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
    titletype1(event) {
        if (event.target.value == 'Text') {
            this.setState({
                titleonetype: false
            })
        }
        else {
            this.setState({
                titleonetype: true
            })
        }
        this.setState({
            titletypetext1: event.target.value
        })
    }
    titletype2(event) {
        if (event.target.value == 'Text') {
            this.setState({
                titletwotype: false
            })
        }
        else {
            this.setState({
                titletwotype: true
            })
        }
        this.setState({
            titletypetext2: event.target.value
        })
    }
    titletype3(event) {
        if (event.target.value == 'Text') {
            this.setState({
                titlethreetype: false
            })
        }
        else {
            this.setState({
                titlethreetype: true
            })
        }
        this.setState({
            titletypetext3: event.target.value
        })
    }
    insertmath = () => {
        if(this.state.textarea1 == 'yes')
        {
            this.setState({
                text: this.state.text,
                showmathpopup: false,
            });
        }
       /*  this.setState({
            text: this.state.text,
            showmathpopup: false,

        }); */
    }
    insertmath2 = () => {
      // alert(this.state.text2)
            this.setState({
                text2: this.state.text2,
                showmathpopup2: false,
            });
       
    }
    insertmath3 = () => {
        // alert(this.state.text2)
              this.setState({
                  text3: this.state.text3,
                  showmathpopup3: false,
              });
         
      }
      insertmath4 = () => {
        // alert(this.state.text2)
              this.setState({
                  text4: this.state.text4,
                  showmathpopup4: false,
              });
         
      }
      insertmath5 = () => {
        // alert(this.state.text2)
              this.setState({
                  text5: this.state.text5,
                  showmathpopup5: false,
              });
         
      }
      setTexttwo = (e) => {
        this.setState({
            text2: this.state.text2 + e
        });
    }
    setTextthree = (e) => {
        this.setState({
            text3: this.state.text3 + e
        });
    } 
    setTextfour = (e) => {
        this.setState({
            text4: this.state.text4 + e
        });
    } 
    setTextfive = (e) => {
        this.setState({
            text5: this.state.text5 + e
        });
    } 
    setText = (e) => {
        this.setState({
            text: this.state.text + e
        });
       // alert(e)
        if(this.state.textarea5 == 'yes')
        {
            this.setState({
                text5: this.state.text + e
            });
        }
        if(this.state.textarea4 == 'yes')
        {
            this.setState({
                text4: this.state.text + e
            });
        }
        if(this.state.textarea3 == 'yes')
        {
            this.setState({
                text3: this.state.text + e
            });
        }
        if(this.state.textarea2 == 'yes')
        {
            this.setState({
                text2: this.state.text + e
            });
        }
        if(this.state.textarea1 == 'yes')
        {
            this.setState({
                text1: this.state.text + e
            });
        }
      
    };
 
    titletype4(event) {
        if (event.target.value == 'Text') {
            this.setState({
                titlefourtype: false
            })
        }
        else {
            this.setState({
                titlefourtype: true
            })
        }
        this.setState({
            titletypetext4: event.target.value
        })
    }
    titletype5(event) {
        if (event.target.value == 'Text') {
            this.setState({
                titlefivetype: false
            })
        }
        else {
            this.setState({
                titlefivetype: true
            })
        }
        this.setState({
            titletypetext5: event.target.value
        })
    }
    clickmathpopup = () => {
        // alert('PPPP HHHH')
        this.setState({
            showmathpopup: true,
            textarea1: 'yes'
        })
    }
    clickmathpopup2 = () => {
        // alert('PPPP HHHH')
        this.setState({
            showmathpopup2: true,
            textarea2: 'yes'
        })
    }
    clickmathpopup3 = () => {
        // alert('PPPP HHHH')
        this.setState({
            showmathpopup3: true,
            textarea3: 'yes'
        })
    }
    clickmathpopup4 = () => {
        // alert('PPPP HHHH')
        this.setState({
            showmathpopup4: true,
            textarea4: 'yes'
        })
    }
    clickmathpopup5 = () => {
        // alert('PPPP HHHH')
        this.setState({
            showmathpopup5: true,
            textarea5: 'yes'
        })
    }
 

    register() {

        if (this.state.automemberid == "" || this.state.text == "") {
            alert('Insert the Required Fields')
        }
        else {
            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup


            axios.post(base.BASE_URL + '/questionsaveall', {
                automemberid: this.state.automemberid,
                questiontype: 'Text',
                Atype: '',
                Atitle: '',
                Btype: '',
                Btitle: '',
                Ctype: '',
                Ctitle: '',
                Dtype: '',
                Dtitle: '',
                Answer: this.state.writtinganswer,
                writtinganswer: this.state.writtinganswer,
                quiztype: 'Fill in the Gap',
                titletypetext1: this.state.titletypetext1,
                titletypetext2: this.state.titletypetext2,
                titletypetext3: this.state.titletypetext3,
                titletypetext4: this.state.titletypetext4,
                titletypetext5: this.state.titletypetext5,
                text: this.state.text,
                text2: this.state.text2,
                text3: this.state.text3,
                text4: this.state.text4,
                text5: this.state.text5
                
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
handleChange (html) {
    this.setState({ editorHtml: html });
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
                                                <h3 class="m-0 font-weight-bold text-primary">Fill in the Gaps {/* - Quiz ID: {this.state.automemberid} */}</h3>
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
                                                                    <div className="form-holder col-md-12">


{/* <ReactQuill  modules={modules} theme="snow" 
placeholder="Question Title"
style={{ width: '100%', fontSize: 18, color: '#000', height: 200 }}

onChange={this.handleChange}
value={this.state.editorHtml}
/> */}


                                                                    </div>

                                                                </div>
                                                                <div className="form-row">

<div className="form-holder col-md-1" style={{ padding: 10 }}>
    <p style={{ color: '#000', fontSize: 14, marginTop: 3 }}>
        Question Title</p>
</div>
<div className="form-holder col-md-11" style={{ padding: 10 }}>

    <table style={{ width: '100%' }}>
        <tr>
            <td style={{ width: '20%' }}>
                <select
                    style={{ padding: 6 }}
                    className="form-control"
                    onChange={this.titletype1}
                >
                    <option value="Text"> Text</option>
                    <option value="Math">Math</option>
                </select>
            </td>
            <td style={{ width: '70%' }}>
                <textarea onChange={(e) => this.setState({ text: e.target.value })}
                    value={this.state.text}
                    style={{ width: '100%' }} />

            </td>
            <td style={{ width: '10%' }}>
                {
                    this.state.titleonetype == true ?
                        <div>
                            <Link to="#" onClick={this.clickmathpopup}
                                style={{ display: 'block' }}>
                                Insert Equation
                            </Link>
                        </div>
                        :
                        ''

                }


            </td>
        </tr>
        <tr>
            <td>
                <select
                    style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                    className="form-control"
                    onChange={this.titletype2}
                >
                    <option value="Text"> Text</option>
                    <option value="Math">Math</option>
                </select>
            </td>
            <td>
                <textarea onChange={(e) => this.setState({ text2: e.target.value })}
                    value={this.state.text2}
                    style={{ width: '100%' }} />

            </td>
            <td style={{ width: '10%' }}>
                {
                    this.state.titletwotype == true ?
                        <div>
                            <Link to="#" onClick={this.clickmathpopup2}
                                style={{ display: 'block' }}>
                                Insert Equation
                            </Link>
                        </div>
                        :
                        ''

                }


            </td>
        </tr>
        <tr>
            <td>

                <select
                    style={{ backgroundColor: '#f2f2f2' }}
                    className="form-control"
                    onChange={this.titletype3}
                >
                    <option value="Text"> Text</option>
                    <option value="Math">Math</option>
                </select>
            </td>
            <td>
                <textarea onChange={(e) => this.setState({ text3: e.target.value })}
                    value={this.state.text3}
                    style={{ width: '100%' }} />
            </td>
            <td style={{ width: '10%' }}>
                {
                    this.state.titlethreetype == true ?
                        <div>
                            <Link to="#" onClick={this.clickmathpopup3}
                                style={{ display: 'block' }}>
                                Insert Equation
                            </Link>
                        </div>
                        :
                        ''

                }


            </td>
        </tr>
        <tr>
            <td> <select
                style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                className="form-control"
                onChange={this.titletype4}
            >
                <option value="Text"> Text</option>
                <option value="Math">Math</option>
            </select></td>
            <td><textarea onChange={(e) => this.setState({ text4: e.target.value })}
                value={this.state.text4}
                style={{ width: '100%' }} />  </td>


            <td style={{ width: '10%' }}>
                {
                    this.state.titlefourtype == true ?
                        <div>
                            <Link to="#" onClick={this.clickmathpopup4}
                                style={{ display: 'block' }}>
                                Insert Equation
                            </Link>
                        </div>
                        :
                        ''

                }


            </td>


        </tr>
        <tr>
            <td>
                <select
                    style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                    className="form-control"
                    onChange={this.titletype5}>
                    <option value="Text"> Text</option>
                    <option value="Math">Math</option>
                </select></td>
            <td>
                <textarea onChange={(e) => this.setState({ text5: e.target.value })}
                    value={this.state.text5}
                    style={{ width: '100%' }} /> </td>
            <td style={{ width: '10%' }}>
                {
                    this.state.titlefivetype == true ?
                        <div>
                            <Link to="#" onClick={this.clickmathpopup5}
                                style={{ display: 'block' }}>
                                Insert Equation
                            </Link>
                        </div>
                        :
                        ''

                }


            </td>
        </tr>
    </table>




    <Modal
        isOpen={this.state.showmathpopup}
        /*  onAfterOpen={} */
        onRequestClose={this.handlemathpopupClose}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <div style={{ width: '100%', height: 400 }}>
            <div style={{ height: 40, width: '100%', textAlign: 'right' }}>
                <button onClick={this.insertmath}
                    style={{ border: 'none', marginRight: 5 }}>Insert</button>

                <button onClick={this.insertnewline}
                    style={{ border: 'none', marginRight: 5 }}>New Line</button>

                <button onClick={this.handlemathpopupClose}
                    style={{ textAlign: 'right', border: 'none' }}>X</button>
            </div>
            <div style={{ height: 200, width: '100%' }}>
                <div>


                    <EditableMathField
                        latex={this.state.text}
                        onChange={(mathField) => {
                            this.setState({ text: mathField.latex() });
                        }}
                        style={{ width: '100%', height: 100, marginBottom: 10, padding: 10 }}

                    />
                    <textarea onChange={(e) => this.setState({ text: e.target.value })} value={this.state.text}
                        style={{ width: '100%', display: 'none' }} /> {/*  display: 'none'  x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}    */}                                                                </div>
                <div style={{ marginTop: 0 }}>
                    <Basic setText={this.setText} />

                </div>
            </div>


        </div>

    </Modal>


    
    <Modal
        isOpen={this.state.showmathpopup2}
        /*  onAfterOpen={} */
        onRequestClose={this.handlemathpopupClose2}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <div style={{ width: '100%', height: 400 }}>
            <div style={{ height: 40, width: '100%', textAlign: 'right' }}>
                <button onClick={this.insertmath2}
                    style={{ border: 'none', marginRight: 5 }}>Insert</button>

                <button onClick={this.insertnewline2}
                    style={{ border: 'none', marginRight: 5 }}>New Line</button>

                <button onClick={this.handlemathpopupClose2}
                    style={{ textAlign: 'right', border: 'none' }}>X</button>
            </div>
            <div style={{ height: 200, width: '100%' }}>
                <div>


                    <EditableMathField
                        latex={this.state.text2}
                        onChange={(mathField) => {
                            this.setState({ text2: mathField.latex() });
                        }}
                        style={{ width: '100%', height: 100, marginBottom: 10, padding: 10 }}

                    />
                    <textarea onChange={(e) => this.setState({ text2: e.target.value })} value={this.state.text}
                        style={{ width: '100%', display: 'none' }} /> {/*  display: 'none'  x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}    */}                                                                </div>
                <div style={{ marginTop: 0 }}>
                    <Basictwo setTexttwo={this.setTexttwo} />

                </div>
            </div>


        </div>

    </Modal>
    <Modal
        isOpen={this.state.showmathpopup3}
        /*  onAfterOpen={} */
        onRequestClose={this.handlemathpopupClose3}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <div style={{ width: '100%', height: 400 }}>
            <div style={{ height: 40, width: '100%', textAlign: 'right' }}>
                <button onClick={this.insertmath3}
                    style={{ border: 'none', marginRight: 5 }}>Insert</button>

                <button onClick={this.insertnewline3}
                    style={{ border: 'none', marginRight: 5 }}>New Line</button>

                <button onClick={this.handlemathpopupClose3}
                    style={{ textAlign: 'right', border: 'none' }}>X</button>
            </div>
            <div style={{ height: 200, width: '100%' }}>
                <div>


                    <EditableMathField
                        latex={this.state.text3}
                        onChange={(mathField) => {
                            this.setState({ text3: mathField.latex() });
                        }}
                        style={{ width: '100%', height: 100, marginBottom: 10, padding: 10 }}

                    />
                    <textarea onChange={(e) => this.setState({ text3: e.target.value })} value={this.state.text3}
                        style={{ width: '100%', display: 'none' }} /> {/*  display: 'none'  x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}    */}                                                                </div>
                <div style={{ marginTop: 0 }}>
                    <Basicthree setTextthree={this.setTextthree} />

                </div>
            </div>


        </div>

    </Modal>
    <Modal
        isOpen={this.state.showmathpopup4}
        /*  onAfterOpen={} */
        onRequestClose={this.handlemathpopupClose4}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <div style={{ width: '100%', height: 400 }}>
            <div style={{ height: 40, width: '100%', textAlign: 'right' }}>
                <button onClick={this.insertmath4}
                    style={{ border: 'none', marginRight: 5 }}>Insert</button>

                <button onClick={this.insertnewline4}
                    style={{ border: 'none', marginRight: 5 }}>New Line</button>

                <button onClick={this.handlemathpopupClose4}
                    style={{ textAlign: 'right', border: 'none' }}>X</button>
            </div>
            <div style={{ height: 200, width: '100%' }}>
                <div>


                    <EditableMathField
                        latex={this.state.text4}
                        onChange={(mathField) => {
                            this.setState({ text4: mathField.latex() });
                        }}
                        style={{ width: '100%', height: 100, marginBottom: 10, padding: 10 }}

                    />
                    <textarea onChange={(e) => this.setState({ text4: e.target.value })} value={this.state.text4}
                        style={{ width: '100%', display: 'none' }} /> {/*  display: 'none'  x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}    */}                                                                </div>
                <div style={{ marginTop: 0 }}>
                    <Basicfour setTextfour={this.setTextfour} />

                </div>
            </div>


        </div>

    </Modal>

    <Modal
        isOpen={this.state.showmathpopup5}
        /*  onAfterOpen={} */
        onRequestClose={this.handlemathpopupClose5}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <div style={{ width: '100%', height: 400 }}>
            <div style={{ height: 40, width: '100%', textAlign: 'right' }}>
                <button onClick={this.insertmath5}
                    style={{ border: 'none', marginRight: 5 }}>Insert</button>

                <button onClick={this.insertnewline5}
                    style={{ border: 'none', marginRight: 5 }}>New Line</button>

                <button onClick={this.handlemathpopupClose5}
                    style={{ textAlign: 'right', border: 'none' }}>X</button>
            </div>
            <div style={{ height: 200, width: '100%' }}>
                <div>


                    <EditableMathField
                        latex={this.state.text5}
                        onChange={(mathField) => {
                            this.setState({ text5: mathField.latex() });
                        }}
                        style={{ width: '100%', height: 100, marginBottom: 10, padding: 10 }}

                    />
                    <textarea onChange={(e) => this.setState({ text5: e.target.value })} value={this.state.text5}
                        style={{ width: '100%', display: 'none' }} /> {/*  display: 'none'  x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}    */}                                                                </div>
                <div style={{ marginTop: 0 }}>
                    <Basicfive setTextfive={this.setTextfive} />

                </div>
            </div>


        </div>

    </Modal>


</div>
</div>





                                                                <div className="form-row">

                                                                <div className="form-holder col-md-12" style={{ padding: 10, marginTop: 40 }}>   
                                                                <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" 
                                                                            placeholder="Answer"
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
                     </Container>         

            </div>
        );

    }
}
export default Fillinthegap
