import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import { Progress } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'
import Footer from './Footer'
import Topbar from '../Layout/Topbar'
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation
import ActivityIndicator from 'react-activity-indicator'
//npm install react-activity-indicator
import 'react-activity-indicator/src/activityindicator.css'
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Editor } from "react-draft-wysiwyg"; // this is for text area editor
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";// this is for text area editor
import { convertToHTML } from 'draft-convert';

/* npm install @material-ui/core
npm install @material-ui/icons */
//import ImageIcon from '@material-ui/icons/ImageIcon';
import IconButton from '@material-ui/core/IconButton';
import ImageIcon from '@mui/icons-material/Image';



import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ font: [] }],
        //   [{ header: [1, 2, 3, 4, 5, 6, false] }],
        //   ["bold", "italic", "underline", "strike"],
        //   [{ color: [] }, { background: [] }],
        //  [{ script:  "sub" }, { script:  "super" }],
        //  ["blockquote", "code-block"],
        //  [{ list:  "ordered" }, { list:  "bullet" }],
        //  [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        //  ["link", "image", "video"],
        //  ["clean"],
    ],
};


export class Matchsetupedit extends Component {

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
        this.testmath = this.testmath.bind(this)

        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
        this.handleChange4 = this.handleChange4.bind(this)
        this.handleChange5 = this.handleChange5.bind(this)

        this.handleChange6 = this.handleChange6.bind(this)
        this.handleChange7 = this.handleChange7.bind(this)
        this.handleChange8 = this.handleChange8.bind(this)
        this.handleChange9 = this.handleChange9.bind(this)
        this.handleChange10 = this.handleChange10.bind(this)

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
            questiontype: '',
            questionimageupload_loader: false,
            uploadPercentage: 0,
            questiontitle: '',
            Answer: '',
            writtinganswer: '',
            editorState: EditorState.createEmpty(),
            editorHtml: 'Math the parts of sentence given in column A, and column B',
            editorHtml1: '', theme: 'snow',
            editorHtml2: '',
            editorHtml3: '', editorHtml4: '', editorHtml5: '',
            editorHtml6: '', editorHtml7: '', editorHtml8: '',
            editorHtml9: '', editorHtmlten: '', Righta: '', Rightfive: '',
            Rightfour: '', Rightthree: '', Righttwo: '', Rightone: ''

        }
        this.inputReference = React.createRef();
        this.inputReferenceA = React.createRef();
        this.inputReferenceB = React.createRef();
        this.inputReferenceC = React.createRef();
        this.inputReferenceD = React.createRef();

    }

    componentDidMount() {
        //  alert('LLL')
        /*   axios.get(base.BASE_URL + '/quizautoid').then(res => {
              this.setState({ seriallist: res.data, automemberid: res.data.status });
              console.log(res.data)
          }); */

        axios.get(base.BASE_URL + '/quizedit/' + this.state.automemberid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log('kkk....' + res.data)


            if (res.data.length > 0) {
                // alert(res.data[0].Btype)
                this.setState({
                    quizdatalist: res.data,
                    quizid: res.data[0].id,
                    editorHtml1: res.data[0].questiontype,
                    editorHtml: res.data[0].questiontitle,
                    questionimage: res.data[0].questionimage,
                    editorHtml2: res.data[0].Atype,
                    editorHtml3: res.data[0].Atitle,
                    editorHtml4: res.data[0].Aimage,
                    editorHtml5: res.data[0].Btype,
                    editorHtml6: res.data[0].Btitle,
                    editorHtml7: res.data[0].Bimage,
                    editorHtml8: res.data[0].Ctype,
                    editorHtml9: res.data[0].Ctitle,
                    editorHtmlten: res.data[0].Cimage,
                    Rightone: res.data[0].Dtype,
                    Righttwo: res.data[0].Dtitle,
                    Rightthree: res.data[0].Dimage,
                    Rightfour: res.data[0].Answer,
                    Rightfive: res.data[0].writtinganswer,
                    Answer: res.data[0].Answer,
                    writtinganswer: res.data[0].writtinganswer,


                    Cimage: res.data[0].Cimage,
                    Dimage: res.data[0].Dimage

                });
            }
            else {

            }

        });

    }
    handleChange1(html) {
        this.setState({ editorHtml1: html });
    }
    handleChange2(html) {
        this.setState({ editorHtml2: html });
    }
    handleChange3(html) {
        this.setState({ editorHtml3: html });
    }
    handleChange4(html) {
        this.setState({ editorHtml4: html });
    }
    handleChange5(html) {
        this.setState({ editorHtml5: html });
    }
    handleChange6(html) {
        this.setState({ editorHtml6: html });
    }
    handleChange7(html) {
        this.setState({ editorHtml7: html });
    }
    handleChange8(html) {
        this.setState({ editorHtml8: html });
    }
    handleChange9(html) {
        this.setState({ editorHtml9: html });
    }
    handleChange10(html) {
        this.setState({ editorHtmlten: html });
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
    testmath() {

        alert(this.state.editorHtml)
        //alert(this.state.editorState)
        // alert(this.state.editorState.getCurrentContent().getPlainText());
        //const currentContentAsHTML = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));

        // alert(currentContentAsHTML);
    }
    register() {

        // alert(this.state.Rightone)

        // return;

        if (this.state.automemberid == "" || this.state.Rightone == "" ||
            this.state.Righttwo == "" || this.state.Rightthree == "" ||
            this.state.Rightfour == "" || this.state.Rightfive == "") {
            alert('Insert the Required Fields')
        }
        else {
            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup


            axios.post(base.BASE_URL + '/matchsaveall', {
                automemberid: this.state.automemberid, //EditorState.createWithContent
                //questiontitle: this.state.editorState.getCurrentContent().getPlainText(), //this.state.questiontitle, convertToRaw(this.state.editorState.getCurrentContent())
                questiontitle: this.state.editorHtml, //JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())), //convertToHTML(this.state.editorState.getCurrentContent()),
                questiontype: this.state.editorHtml1,

                Atype: this.state.editorHtml2,
                Atitle: this.state.editorHtml3,
                Aimage: this.state.editorHtml4,


                Btype: this.state.editorHtml5,
                Btitle: this.state.editorHtml6,
                Bimage: this.state.editorHtml7,


                Ctype: this.state.editorHtml8,
                Ctitle: this.state.editorHtml9,
                Cimage: this.state.editorHtmlten,


                Dtype: this.state.Rightone,
                Dtitle: this.state.Righttwo,
                Dimage: this.state.Rightthree,

                Answer: this.state.Rightfour,
                writtinganswer: this.state.Rightfive,
                quiztype: 'Match'

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
        else if (event.target.files[0] == "") {
            alert('Image Required')
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
    //onChangeQuestionTitletextarea = (editorState) => this.setState({editorState});


    /* onChangeQuestionTitletextarea = (editorState) => {
        const contentState = editorState.getCurrentContent();
        console.log('content state', convertToRaw(contentState));
        this.setState({
          editorState,
        });
        
    } */

    /* onChangeQuestionTitletextarea() {
            alert(quill.root.innerHTML)
    }
     */
    onChangeQuestionTitletextarea(event) {
        alert(event.target.value)
        /*   this.setState({
              Btitle: event.target.value
          }) */
    }

    handleClickQuestionimage = () => {
        //this.fileSelectquestionimage();
        //document.getElementById('questionfile').click();
        this.inputReference.current.click()
    };
    handleClickAimage = () => {
        //this.fileSelectquestionimage();
        //document.getElementById('questionfile').click();
        this.inputReferenceA.current.click()
    };
    handleClickBimage = () => {
        //this.fileSelectquestionimage();
        //document.getElementById('questionfile').click();
        this.inputReferenceB.current.click()
    };
    handleClickCimage = () => {
        //this.fileSelectquestionimage();
        //document.getElementById('questionfile').click();
        this.inputReferenceC.current.click()
    };
    handleClickDimage = () => {
        //this.fileSelectquestionimage();
        //document.getElementById('questionfile').click();
        this.inputReferenceD.current.click()
    };

    render() {
        // alert(this.state.loggdin);
        const { uploadPercentage } = this.state;
        if (this.state.loggdin == 'start') {
            return <Redirect to={"/Quizsetuplist/" + this.state.examid + '/' + this.state.examname} />
        }

        return (
            <div>
                <Header /> {/* Slider Menu */}
                <Container style={{ marginTop: 85 }}>

                    <div className="container-fluid">
                        {/* Page Heading */}
                        <div class="card position-relative"
                            style={{ backgroundColor: '#012060', marginBottom: 20, marginTop: 20 }}>
                            <div class="card-header py-3">
                                <div className="form-header">
                                    <h3 class="m-0 font-weight-bold text-primary">Match Setup </h3>
                                </div>


                            </div>
                            <div class="card-body" style={{ backgroundColor: '#ffffff' }}>
                                <Row>
                                    <Col>
                                        <div style={{ marginBottom: 10, display: 'flex', height: 100 }}>
                                            <ReactQuill modules={modules} theme="snow"
                                                placeholder="Question title"
                                                style={{ width: '100%', fontSize: 18, color: '#000' }}

                                                onChange={this.handleChange}
                                                value={this.state.editorHtml}
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{ marginTop: 50 }}>
                                    <Col>
                                        <p style={{ color: '#000' }}>Column A</p>
                                        <div style={{ marginBottom: 10, display: 'flex', height: 150 }}>
                                            <h3>1.</h3>
                                            <ReactQuill modules={modules} theme="snow"
                                                placeholder="1."
                                                style={{ width: '100%', fontSize: 18, color: '#000' }}

                                                onChange={this.handleChange1}
                                                value={this.state.editorHtml1}
                                            />
                                        </div>
                                        <div style={{ marginBottom: 10, height: 150, marginTop: 50, display: 'flex' }}>
                                            <h3>2.</h3>
                                            <ReactQuill modules={modules} theme="snow"
                                                placeholder="2."
                                                style={{ width: '100%', fontSize: 18, color: '#000', height: 150 }}

                                                onChange={this.handleChange2}
                                                value={this.state.editorHtml2}
                                            />
                                        </div>
                                        <div style={{ marginBottom: 10, height: 150, marginTop: 50, display: 'flex' }}>
                                            <h3>3.</h3>
                                            <ReactQuill modules={modules} theme="snow"
                                                placeholder="3."
                                                style={{ width: '100%', fontSize: 18, color: '#000', height: 150 }}

                                                onChange={this.handleChange3}
                                                value={this.state.editorHtml3}
                                            />
                                        </div>
                                        <div style={{ marginBottom: 10, height: 150, marginTop: 50, display: 'flex' }}>
                                            <h3>4.</h3>
                                            <ReactQuill modules={modules} theme="snow"
                                                placeholder="4."
                                                style={{ width: '100%', fontSize: 18, color: '#000', height: 150 }}

                                                onChange={this.handleChange4}
                                                value={this.state.editorHtml4}
                                            />
                                        </div>
                                        <div style={{ marginBottom: 10, height: 150, marginTop: 50, display: 'flex' }}>
                                            <h3>5.</h3>
                                            <ReactQuill modules={modules} theme="snow"
                                                placeholder="5."
                                                style={{ width: '100%', fontSize: 18, color: '#000', height: 150 }}

                                                onChange={this.handleChange5}
                                                value={this.state.editorHtml5}
                                            />
                                        </div>
                                    </Col>
                                    <Col>
                                        <p style={{ color: '#000' }}>Column B</p>

                                        <div style={{ marginBottom: 10, display: 'flex', height: 150 }}>
                                            <ReactQuill modules={modules} theme="snow"
                                                placeholder="1.B"
                                                style={{ width: '100%', fontSize: 18, color: '#000' }}

                                                onChange={this.handleChange6}
                                                value={this.state.editorHtml6}
                                            />
                                            <select
                                                style={{ padding: 6, backgroundColor: '#f2f2f2', width: 100, fontSize: 10 }}
                                                className="form-control"
                                                onChange={(e) => {
                                                    this.setState({ Rightone: e.target.value })
                                                    // alert(e.target.value)
                                                }}

                                            >

                                                <option value={this.state.Rightone}>{this.state.Rightone}</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <div style={{ marginBottom: 10, marginTop: 50, display: 'flex' }}>
                                            <ReactQuill modules={modules} theme="snow"
                                                placeholder="2.B"
                                                style={{ width: '100%', fontSize: 18, color: '#000', height: 150 }}

                                                onChange={this.handleChange7}
                                                value={this.state.editorHtml7}
                                            />
                                            <select
                                                style={{ padding: 6, backgroundColor: '#f2f2f2', width: 100, fontSize: 10 }}
                                                onChange={(e) => {
                                                    this.setState({ Righttwo: e.target.value })
                                                }}
                                                className="form-control">
                                                <option value={this.state.Righttwo}>{this.state.Righttwo}</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <div style={{ marginBottom: 10, height: 150, marginTop: 50, display: 'flex' }}>
                                            <ReactQuill modules={modules} theme="snow"
                                                placeholder="3."
                                                style={{ width: '100%', fontSize: 18, color: '#000', height: 150 }}

                                                onChange={this.handleChange8}
                                                value={this.state.editorHtml8}
                                            />
                                            <select
                                                style={{ padding: 6, backgroundColor: '#f2f2f2', width: 100, fontSize: 10 }}
                                                onChange={(e) => {
                                                    this.setState({ Rightthree: e.target.value })
                                                }}
                                                className="form-control">
                                                <option value={this.state.Rightthree}>{this.state.Rightthree}</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <div style={{ marginBottom: 10, marginTop: 50, height: 150, display: 'flex' }}>
                                            <ReactQuill modules={modules} theme="snow"
                                                placeholder="4.B. "
                                                style={{ width: '100%', fontSize: 18, color: '#000', height: 150 }}

                                                onChange={this.handleChange9}
                                                value={this.state.editorHtml9}
                                            />
                                            <select
                                                style={{ padding: 6, backgroundColor: '#f2f2f2', width: 100, fontSize: 10 }}
                                                onChange={(e) => {
                                                    this.setState({ Rightfour: e.target.value })
                                                }}
                                                className="form-control">
                                                <option value={this.state.Rightfour}>{this.state.Rightfour}</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <div style={{ marginBottom: 10, height: 150, marginTop: 50, display: 'flex' }}>
                                            <ReactQuill modules={modules} theme="snow"
                                                placeholder="5.B"
                                                style={{ width: '100%', fontSize: 18, color: '#000', height: 150 }}

                                                onChange={this.handleChange10}
                                                value={this.state.editorHtmlten}
                                            />
                                            <select
                                                style={{ padding: 6, backgroundColor: '#f2f2f2', width: 100, fontSize: 10 }}
                                                onChange={(e) => {
                                                    this.setState({ Rightfive: e.target.value })
                                                }}
                                                className="form-control">
                                                <option value={this.state.Rightfive}>{this.state.Rightfive}</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                    </Col>
                                </Row>
                                <Row style={{ marginTop: 60, textAlign: 'right', padding: 30 }}>
                                    <Button style={{ width: 150 }} onClick={this.register}>Submit</Button>
                                </Row>





                            </div>
                        </div>

                    </div>
                    {/* /.container-fluid */}
                </Container>
                <Footer />
            </div>
        );

    }
}
export default Matchsetupedit
