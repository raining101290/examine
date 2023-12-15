import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form, } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
import IconButton from '@material-ui/core/IconButton';
import ImageIcon from '@mui/icons-material/Image';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Modal from 'react-modal';
import Basic from './Basic'
import Parser from 'html-react-parser'; // render HTML 
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill'
import Editor from './Editor'


const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
       /*  [{ script: "sub" }, { script: "super" }], */
        //  ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        //  [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        //  ["link", "image", "video"],
        //  ["clean"],
    ],
};
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





export class Mathtest extends Component {

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
        this.handleanswertype = this.handleanswertype.bind(this);
        //handlequestiontime handlepoints questiontime points

        this.handlequestiontime = this.handlequestiontime.bind(this);

        this.handlepoints = this.handlepoints.bind(this);
        this.handleChangemath = this.handleChangemath.bind(this);

        this.state = {
            name: '', address: '', email: '', phone: '', id: '', website: '', isLoading: false, loaderfile: 'notloading',
            fields: {},
            errors: {},
            loggdin: 'stop',
            counter: 0,
            states: '',
            country: '',
            statelist: [],
            schoolcollegetype: '',
            schoolcollegename: '',
            subjectlist: '',
            schoolcollegesubjectlist: [],
            seriallist: [],
            automemberid: this.props.match.params.id,
            examid: this.props.match.params.ids,
            examname: this.props.match.params.idss,
            questiontype: '',
            questionimageupload_loader: false,
            uploadPercentage: 0,
            questiontitle: '',
            Answer: '',
            writtinganswer: '',
            questiontime: '20', points: '5', editorHtml: '', preview: '',
            handlemathpopupClose: false,
            showmathpopup: false, mathchange: '', textvalue:'\\frac{1}{\\sqrt{2}}\\cdot 2',
            text: ''

        }
        this.handleChange = this.handleChange.bind(this)
       // const editorRef = useRef();
        this.editorRef = React.createRef();
    }

    componentDidMount() {


        /*   axios.get(base.BASE_URL + '/quizautoid').then(res => {
              this.setState({ seriallist: res.data, automemberid: res.data.status });
              console.log(res.data)
          }); */
    }
    //handlequestiontime handlepoints questiontime points


    handlequestiontime(event) {
        this.setState({
            questiontime: event.target.value
        })
    }
    handleChangemath(html)
    {
       // let value = this.state.textvalue + ' '+ html;
       // alert(this.state.textvalue)
        this.setState({
            textvalue: html 
        })
    }
    handleChange(html) {
        this.setState({ editorHtml: html });
    }
    handlepoints(event) {
        this.setState({
            points: event.target.value
        })
    }
    handlequestiontitle(event) {
        this.setState({
            questiontitle: event.target.value
        })
    }
    handlewrittinganswer(event) {
        this.setState({
            writtinganswer: event.target.value
        })
    }
    handleAtitle(event) {
        this.setState({
            Atitle: event.target.value
        })
    }
    handleBtitle(event) {
        this.setState({
            Btitle: event.target.value
        })
    }
    handleCtitle(event) {
        this.setState({
            Ctitle: event.target.value
        })
    }
    handleDtitle(event) {
        this.setState({
            Dtitle: event.target.value
        })
    }
    handleAnswer(event) {
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
    handleQuestiontype(event) {
        this.setState({
            questiontype: event.target.value
        })
    }
    handleAtype(event) {
        this.setState({
            Atype: event.target.value
        })
    }
    handleBtype(event) {
        this.setState({
            Btype: event.target.value
        })
    }
    handleCtype(event) {
        this.setState({
            Ctype: event.target.value
        })
    }
    handleDtype(event) {
        this.setState({
            Dtype: event.target.value
        })
    }
    handleanswertype(event) {
        this.setState({
            answertype: event.target.value
        })
    }

    register() {

        if (this.state.automemberid == ""
            || this.state.questiontype == '' ||
            this.state.points == "" || this.state.questiontime == "") {
            alert('Insert the Required Fields')
        }
        else {
            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup

            axios.post(base.BASE_URL + '/writtingtestupdate', {
                automemberid: this.state.automemberid,
                questiontitle: this.state.text,
                questiontype: this.state.questiontype,
                writtinganswer: this.state.writtinganswer,
                quiztype: 'Writting Test',
                answertype: this.state.answertype,
                questiontime: this.state.questiontime,
                points: this.state.points,

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
        if (this.state.questiontype == "" || this.state.automemberid == "") {
            alert('Insert the Question Type')
        }
        else {
            ////////////////////////////////////////
            this.setState({ questionimage: event.target.files[0], questionimageupload_loader: true })
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
                    const { loaded, total } = progressEvent
                    let percent = Math.floor(loaded * 100 / total)
                    if (percent < 100) {
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

                    this.setState({ questionimageupload_loader: false, uploadPercentage: 100 }, () => {
                        setTimeout(() => {
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
        if (this.state.Atype == "" || this.state.automemberid == "") {
            alert('Insert the Question A Type')
        }
        else {
            ////////////////////////////////////////
            this.setState({ questionAimage: event.target.files[0], questionimageupload_loader: true })
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
        if (this.state.Btype == "" || this.state.automemberid == "") {
            alert('Insert the Question B Type')
        }
        else {
            ////////////////////////////////////////
            this.setState({ questionBimage: event.target.files[0], questionimageupload_loader: true })
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
        if (this.state.Ctype == "" || this.state.automemberid == "") {
            alert('Insert the Question C Type')
        }
        else {
            ////////////////////////////////////////
            this.setState({ questionCimage: event.target.files[0], questionimageupload_loader: true })
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
        if (this.state.Dtype == "" || this.state.automemberid == "") {
            alert('Insert the Question C Type')
        }
        else {
            ////////////////////////////////////////
            this.setState({ questionDimage: event.target.files[0], questionimageupload_loader: true })
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
    clickmathpopup = () => {
       // alert('PPPP HHHH')
        this.setState({
            showmathpopup: true
        })
    }
    handlemathpopupClose = () => {
        //alert('PPPP HHHH')
        this.setState({
            showmathpopup: false,
            text: ''
        })
    }

    setText = (e) => {
        this.setState({
            text: this.state.text + e
         });
      };
      insertmath = () => {
        this.setState({
            text: this.state.text,
            showmathpopup: false,

         });
      }
      onchangemathedit =(e) => {
      /*   alert(e)
        this.setState({
            text: this.state.text,
            showmathpopup: false,

         }); */
      }
    render() {
        // alert(this.state.loggdin);
        const { uploadPercentage } = this.state;
        if (this.state.loggdin == 'start') {
            return <Redirect to={"/Quizsetuplist/" + this.state.examid + '/' + this.state.examname} />
        }

        return (
            <div>
                <Header /> {/* Slider Menu */}
                <Container style={{ marginTop: 95 }}>
                    <div className="container-fluid">
                        {/* Page Heading */}
                        <div class="cardcustom" style={{ marginBottom: 20 }}>
                            <div class="">
                                <div className="form-header">
                                    <h3 class="m-0 font-weight-bold text-primary" style={{ fontSize: 16 }}>
                                        Writting Test Upload {/* - Quiz ID: {this.state.automemberid} */}</h3>
                                </div>
                                <p style={{ color: '#000', fontSize: 14 }}>Exam Name : {this.state.examname}</p>

                            </div>
                            <div class="">

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
                                                        <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                            <p style={{ color: '#000', fontSize: 14, marginTop: 12 }}>Question Time in Second</p>
                                                        </div>
                                                        <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                            <input type="number" className="form-control form-control-user"
                                                                id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Q Time"
                                                                value={this.state.questiontime} onChange={this.handlequestiontime}
                                                            />
                                                        </div>
                                                        <div className="form-holder col-md-1" style={{ padding: 10 }}>
                                                            <p style={{ color: '#000', fontSize: 14, marginTop: 12 }}>Points</p>
                                                        </div>
                                                        <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                            <input type="number" className="form-control form-control-user"
                                                                id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Point"
                                                                value={this.state.points} onChange={this.handlepoints}
                                                            />
                                                        </div>
                                                        <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                            <p style={{ color: '#000', fontSize: 14, marginTop: 3 }}>  Question Type</p>
                                                        </div>
                                                        <div className="form-holder col-md-3" style={{ padding: 10 }}>

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

                                                    </div>
                                                    <div className="form-row">

                                                        <div className="form-holder col-md-1" style={{ padding: 10 }}>
                                                            <p style={{ color: '#000', fontSize: 14, marginTop: 3 }}>
                                                                Question Title</p>
                                                        </div>
                                                        <div className="form-holder col-md-8" style={{ padding: 10 }}>

                                                            <div style={{ padding: 10, height: 130 }}>

{/* <textarea onChange={this.handleChange}
value={this.state.editorHtml} className="form-control">
</textarea> */}
<EditableMathField
        latex={this.state.text}
        onChange={(mathField) => {
            this.setState({ text: mathField.latex()});
          }}        
        style={{ width: '100%', height: 100, padding: 10 }}

      />
<textarea onChange={(e) => this.setState({text: e.target.value})} value={this.state.text} 
style={{ width: '100%', display: 'none' }} />
{/* <Editor /> */}

<Link to="#" onClick={this.clickmathpopup}>Insert Equation</Link>
</div>

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
                                                                        <button onClick={this.handlemathpopupClose} 
                                                                        style={{ textAlign: 'right', border: 'none' }}>X</button>
                                                                    </div>
                                                                    <div style={{ height: 200, width: '100%' }}>
                                                                        <div>


<EditableMathField
latex={this.state.text}
onChange={(mathField) => {
    this.setState({ text: mathField.latex()});
  }}
style={{ width: '100%', height: 100, marginBottom: 10, padding: 10 }}

/>                                                                           
<textarea onChange={(e) => this.setState({text: e.target.value})} value={this.state.text} 
style={{ width: '100%',  display: 'none'  }} /> {/*  x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}    */}                                                                </div>
<div style={{ marginTop: 0 }}> 
<Basic setText={this.setText} />   

</div>
                                                                    </div>


                                                                </div>

                                                            </Modal>

                                                            {/*     <input type="text" className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Questional Title"
                                                                            value={this.state.questiontitle} onChange={this.handlequestiontitle}
                                                                        />
 */}




                                                        </div>
                                                        <div className="form-holder col-md-3" style={{ padding: 10 }}>

                                                            <input type="file" onChange={this.fileSelectquestionimage} className='form-control' />
                                                            {
                                                                this.state.preview == '' ?
                                                                    <ImageIcon style={{ width: 50, height: 50 }} />
                                                                    :
                                                                    <img src={this.state.preview} style={{ width: 50, height: 50 }} />
                                                            }
                                                            {
                                                                uploadPercentage > 0 &&
                                                                <Progress bar color="warning" value={uploadPercentage}>{uploadPercentage}</Progress>
                                                            }

                                                        </div>
                                                                   

                                                    </div>


                                                    <div className="form-row" style={{ marginTop: 60 }}>
                                                        <div className="form-holder col-md-1" style={{ padding: 10 }}>
                                                            <p style={{ fontSize: 14, marginTop: 3 }}> Answer Type</p>
                                                        </div>
                                                        <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                            <select onChange={this.handleanswertype}
                                                                style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                className="form-control"
                                                            >
                                                                <option value="" selected disabled> </option>
                                                                <option value="Text">Text</option>
                                                                <option value="Image">Image</option>
                                                                <option value="Audio">Audio</option>
                                                            </select>

                                                        </div>

                                                        <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                            <input type="text" className="form-control form-control-user"
                                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                                placeholder="Witting Answer"
                                                                value={this.state.writtinganswer} onChange={this.handlewrittinganswer}
                                                            />
                                                        </div>
                                                        <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                            <Button type="button" className="btn btn-primary btn-user btn-block" onClick={this.register}>
                                                                Submit
                                                            </Button>

                                                        </div>
                                                    </div>

                                                    <div className="form-row">
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





                </Container >

            </div>
        );

    }
}
export default Mathtest
