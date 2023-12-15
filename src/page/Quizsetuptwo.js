import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
//import useForm from 'react-hook-form'
import { Button, Form } from 'reactstrap';
import { Progress } from 'reactstrap';
import * as base from "./global";
import axios from 'axios';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Topbar from '../Layout/Topbar'
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
import Modal from 'react-modal';
/* npm install @material-ui/core
npm install @material-ui/icons */
//import ImageIcon from '@material-ui/icons/ImageIcon';
import IconButton from '@material-ui/core/IconButton';
import ImageIcon from '@mui/icons-material/Image';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill'
import Basic from './Basic';
import Basictwo from './Basictwo';
import Basicthree from './Basicthree'
import Basicfour from './Basicfour'
import Basicfive from './Basicfive'
import Basicsix from './Basicsix'
import Basicseven from './Basicseven'
import Basiceight from './Basiceight'
import Basicnine from './Basicnine'

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




export class Quizsetuptwo extends Component {

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

        this.handleChange = this.handleChange.bind(this)
        this.handleChangeA = this.handleChangeA.bind(this)
        this.handleChangeB = this.handleChangeB.bind(this)
        this.handleChangeC = this.handleChangeC.bind(this)
        this.handleChangeD = this.handleChangeD.bind(this)

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
            questiontype: '',
            questionimageupload_loader: false,
            uploadPercentage: 0,
            questiontitle: '',
            Answer: '',
            writtinganswer: '',
            editorState: EditorState.createEmpty(),
            editorHtml: '', theme: 'snow',
            editorHtmlA: '',
            editorHtmlB: '', editorHtmlC: '', editorHtmlD: '',
            titletypetext1: 'Text',
            titletypetext2: 'Text',
            titletypetext3: 'Text',
            titletypetext4: 'Text',
            titletypetext5: 'Text', text1: '', showmathpopup2: false, text2: '', text3: '', text4: '', text5: '',
            text6: '', text7: '', text8: '', text9: '', text10: '',
            showmathpopup3: false, showmathpopup4: false, showmathpopup5: false, text: '', showmathpopup: '',
            showmathpopup6: false, showmathpopup7: false, showmathpopup8: false


        }
        this.inputReference = React.createRef();
        this.inputReferenceA = React.createRef();
        this.inputReferenceB = React.createRef();
        this.inputReferenceC = React.createRef();
        this.inputReferenceD = React.createRef();

    }

    componentDidMount() {
        /*   axios.get(base.BASE_URL + '/quizautoid').then(res => {
              this.setState({ seriallist: res.data, automemberid: res.data.status });
              console.log(res.data)
          }); */
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

    insertmath = () => {
        if (this.state.textarea1 == 'yes') {
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
    insertmath6 = () => {
        // alert(this.state.text2)
        this.setState({
            text6: this.state.text6,
            showmathpopup6: false,
        });

    }
    insertmath7 = () => {
        // alert(this.state.text2)
        this.setState({
            text7: this.state.text7,
            showmathpopup7: false,
        });

    }
    insertmath8 = () => {
        // alert(this.state.text2)
        this.setState({
            text8: this.state.text8,
            showmathpopup8: false,
        });

    }
    insertmath9 = () => {
        // alert(this.state.text2)
        this.setState({
            text9: this.state.text9,
            showmathpopup9: false,
        });

    }
    insertnewline = () => {
        this.setState({
            text: this.state.text,
            showmathpopup: false,

        });
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
    clickmathpopup6 = () => {
       //  alert('6')
        this.setState({
            showmathpopup6: true,
            textarea5: 'yes'
        })
    }
    clickmathpopup7 = () => {
       //  alert('7')
        this.setState({
            showmathpopup7: true,
            textarea7: 'yes'
        })
    }
    clickmathpopup8 = () => {
        // alert('PPPP HHHH')
        this.setState({
            showmathpopup8: true,
            textarea8: 'yes'
        })
    }
    clickmathpopup9 = () => {
        //alert('Alert D')
        this.setState({
            showmathpopup9: true,
            textarea9: 'yes'
        })
    }
    handlemathpopupClose9 = () => {
        //alert('PPPP HHHH')
        this.setState({
            showmathpopup9: false,
            text9: ''
        })
    }
    handlemathpopupClose8 = () => {
        //alert('PPPP HHHH')
        this.setState({
            showmathpopup8: false,
            text9: ''
        })
    }
    handlemathpopupClose7 = () => {
        //alert('PPPP HHHH')
        this.setState({
            showmathpopup7: false,
            text9: ''
        })
    }
    handlemathpopupClose6 = () => {
        //alert('PPPP HHHH')
        this.setState({
            showmathpopup6: false,
            text9: ''
        })
    }


    handlemathpopupClose = () => {
        //alert('PPPP HHHH')
        this.setState({
            showmathpopup: false,
            text: ''
        })
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
    setTextsix = (e) => {
        this.setState({
            text6: this.state.text6 + e
        });
    }
    setTextseven = (e) => {
        this.setState({
            text7: this.state.text7 + e
        });
    }
    setTexteight = (e) => {
        this.setState({
            text8: this.state.text8 + e
        });
    }

    setTextnine = (e) => {
        this.setState({
            text9: this.state.text9 + e
        });
    }

    setText = (e) => {
        this.setState({
            text: this.state.text + e
        });
        // alert(e)
        if (this.state.textarea5 == 'yes') {
            this.setState({
                text5: this.state.text + e
            });
        }
        if (this.state.textarea4 == 'yes') {
            this.setState({
                text4: this.state.text + e
            });
        }
        if (this.state.textarea3 == 'yes') {
            this.setState({
                text3: this.state.text + e
            });
        }
        if (this.state.textarea2 == 'yes') {
            this.setState({
                text2: this.state.text + e
            });
        }
        if (this.state.textarea1 == 'yes') {
            this.setState({
                text1: this.state.text + e
            });
        }

    };


    handleChange(html) {
        this.setState({ editorHtml: html });
    }
    handleChangeA(html) {
        this.setState({ editorHtmlA: html });
    }
    handleChangeB(html) {
        this.setState({ editorHtmlB: html });
    }
    handleChangeC(html) {
        this.setState({ editorHtmlC: html });
    }
    handleChangeD(html) {
        this.setState({ editorHtmlD: html });
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

        if (this.state.automemberid == "" || this.state.Answer == "") {
            alert('Insert the Required Fields')
        }
        else {
            this.setState({ loaderfile: 'loading' }) ///Adminloginareacheck  adminlogin Adminloginsetup


            axios.post(base.BASE_URL + '/questionsaveall', {
                automemberid: this.state.automemberid, //EditorState.createWithContent
                //questiontitle: this.state.editorState.getCurrentContent().getPlainText(), //this.state.questiontitle, convertToRaw(this.state.editorState.getCurrentContent())
                questiontitle: this.state.text, //JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())), //convertToHTML(this.state.editorState.getCurrentContent()),
                questiontype: this.state.questiontype,
                Atype: this.state.Atype,
                Atitle: this.state.text6,
                Btype: this.state.Btype,
                Btitle: this.state.text7,
                Ctype: this.state.Ctype,
                Ctitle: this.state.text8,
                Dtype: this.state.Dtype,
                Dtitle: this.state.text9,
                Answer: this.state.Answer,
                writtinganswer: this.state.writtinganswer,
                quiztype: 'MCQ',
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
        //    alert(event.target.value)
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
                        <div class="card position-relative" style={{ backgroundColor: '#012060' }}>
                            <div class="card-header py-3">
                                <div className="form-header">
                                    <h3 class="m-0 font-weight-bold text-primary">Quiz Details {/* - Quiz ID: {this.state.automemberid} */}</h3>
                                </div>
                                {/*  <p style={{ color: '#000' }}>Exam Name : {this.state.examname}</p> */}

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
                                                        <div style={{
                                                            backgroundColor: '#69696A', padding: 20,
                                                            width: '100%', borderRadius: 20, display: 'flex'
                                                        }}>
                                                            <div className="form-holder col-md-2" style={{ padding: 10 }}>
                                                                <select onChange={this.handleQuestiontype}
                                                                    style={{ padding: 6, backgroundColor: '#f2f2f2', fontSize: 12 }}
                                                                    className="form-control"
                                                                >
                                                                    <option value="" selected disabled>Select Question Type </option>
                                                                    <option value="Text">Text</option>
                                                                    <option value="Image">Image</option>
                                                                    <option value="Image and Text">Image and Text</option>
                                                                </select>
                                                                <Button style={{ marginTop: 7, backgroundColor: '#ffffff', color: '#000', width: '100%' }}
                                                                    onClick={this.handleClickQuestionimage.bind(this)}>
                                                                    <IconButton color="primary" aria-label="upload picture"
                                                                        component="span">
                                                                        <ImageIcon />
                                                                    </IconButton>
                                                                    Image
                                                                </Button>

                                                                <input id="questionfile" type="file"
                                                                    onChange={this.fileSelectquestionimage.bind(this)}
                                                                    accept="image/*"
                                                                    className='form-control'
                                                                    ref={this.inputReference} hidden
                                                                />


                                                                {
                                                                    this.state.preview == '' ?
                                                                        ''
                                                                        :
                                                                        <img src={this.state.preview} style={{
                                                                            width: 50,
                                                                            height: 50,
                                                                            marginTop: 7
                                                                        }} />
                                                                }
                                                                {
                                                                    uploadPercentage > 0 &&
                                                                    <Progress bar color="warning" value={uploadPercentage}>{uploadPercentage}</Progress>
                                                                }




                                                            </div>

                                                            <div className="form-holder col-md-9" style={{
                                                                padding: 10, borderWeight: 1,
                                                                borderColor: 'silver'
                                                            }}>
                                                                {/*   <input type="textarea" 
                                                                        className="form-control form-control-user"
                                                                            id="exampleInputEmail" aria-describedby="emailHelp" 
                                                                            placeholder="Questional Title"
                                                                            value={this.state.questiontitle} 
                                                                            onChange={this.handlequestiontitle}
                                                                        /> */}
                                                                <div style={{ display: 'flex', marginBottom: 70 }}>


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
                                                                                                className='funpage'>
                                                                                                f(x)
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
                                                                                                className='funpage'>
                                                                                                f(x)
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
                                                                                                className='funpage'>
                                                                                                f(x)
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
                                                                                                className='funpage'>
                                                                                                f(x)
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
                                                                                                className='funpage'>
                                                                                                f(x)
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
                                                                    {/* MCQ A MOdal */}
                                                                    <Modal
                                                                        isOpen={this.state.showmathpopup6}
                                                                        /*  onAfterOpen={} */
                                                                        onRequestClose={this.handlemathpopupClose6}
                                                                        style={customStyles}
                                                                        contentLabel="Example Modal"
                                                                    >
                                                                        <div style={{ width: '100%', height: 400 }}>
                                                                            <div style={{ height: 40, width: '100%', textAlign: 'right' }}>
                                                                                <button onClick={this.insertmath6}
                                                                                    style={{ border: 'none', marginRight: 5 }}>Insert</button>

                                                                                <button onClick={this.handlemathpopupClose6}
                                                                                    style={{ textAlign: 'right', border: 'none' }}>X</button>
                                                                            </div>
                                                                            <div style={{ height: 200, width: '100%' }}>
                                                                                <div>


                                                                                    <EditableMathField
                                                                                        latex={this.state.text6}
                                                                                        onChange={(mathField) => {
                                                                                            this.setState({ text6: mathField.latex() });
                                                                                        }}
                                                                                        style={{ width: '100%', height: 100, marginBottom: 10, padding: 10 }}

                                                                                    />
                                                                                    <textarea onChange={(e) => this.setState({ text6: e.target.value })} value={this.state.text6}
                                                                                        style={{ width: '100%', display: 'none' }} /> {/*  display: 'none'  x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}    */}                                                                </div>
                                                                                <div style={{ marginTop: 0 }}>
                                                                                    <Basicsix setTextsix={this.setTextsix} />

                                                                                </div>
                                                                            </div>


                                                                        </div>

                                                                    </Modal>

                                                                    <Modal
                                                                        isOpen={this.state.showmathpopup7}
                                                                        /*  onAfterOpen={} */
                                                                        onRequestClose={this.handlemathpopupClose7}
                                                                        style={customStyles}
                                                                        contentLabel="Example Modal"
                                                                    >
                                                                        <div style={{ width: '100%', height: 400 }}>
                                                                            <div style={{ height: 40, width: '100%', textAlign: 'right' }}>
                                                                                <button onClick={this.insertmath7}
                                                                                    style={{ border: 'none', marginRight: 5 }}>Insert</button>

                                                                                <button onClick={this.handlemathpopupClose7}
                                                                                    style={{ textAlign: 'right', border: 'none' }}>X</button>
                                                                            </div>
                                                                            <div style={{ height: 200, width: '100%' }}>
                                                                                <div>


                                                                                    <EditableMathField
                                                                                        latex={this.state.text7}
                                                                                        onChange={(mathField) => {
                                                                                            this.setState({ text7: mathField.latex() });
                                                                                        }}
                                                                                        style={{ width: '100%', height: 100, marginBottom: 10, padding: 10 }}

                                                                                    />
                                                                                    <textarea onChange={(e) => this.setState({ text7: e.target.value })} value={this.state.text7}
                                                                                        style={{ width: '100%', display: 'none' }} /> {/*  display: 'none'  x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}    */}                                                                </div>
                                                                                <div style={{ marginTop: 0 }}>
                                                                                    <Basicseven setTextseven={this.setTextseven} />

                                                                                </div>
                                                                            </div>


                                                                        </div>

                                                                    </Modal>


                                                                    <Modal
                                                                        isOpen={this.state.showmathpopup8}
                                                                        /*  onAfterOpen={} */
                                                                        onRequestClose={this.handlemathpopupClose8}
                                                                        style={customStyles}
                                                                        contentLabel="Example Modal"
                                                                    >
                                                                        <div style={{ width: '100%', height: 400 }}>
                                                                            <div style={{ height: 40, width: '100%', textAlign: 'right' }}>
                                                                                <button onClick={this.insertmath8}
                                                                                    style={{ border: 'none', marginRight: 5 }}>Insert</button>

                                                                                <button onClick={this.handlemathpopupClose8}
                                                                                    style={{ textAlign: 'right', border: 'none' }}>X</button>
                                                                            </div>
                                                                            <div style={{ height: 200, width: '100%' }}>
                                                                                <div>


                                                                                    <EditableMathField
                                                                                        latex={this.state.text8}
                                                                                        onChange={(mathField) => {
                                                                                            this.setState({ text8: mathField.latex() });
                                                                                        }}
                                                                                        style={{ width: '100%', height: 100, marginBottom: 10, padding: 10 }}

                                                                                    />
                                                                                    <textarea onChange={(e) => this.setState({ text8: e.target.value })} value={this.state.text8}
                                                                                        style={{ width: '100%', display: 'none' }} /> {/*  display: 'none'  x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}    */}                                                                </div>
                                                                                <div style={{ marginTop: 0 }}>
                                                                                    <Basiceight setTexteight={this.setTexteight} />

                                                                                </div>
                                                                            </div>


                                                                        </div>

                                                                    </Modal>


                                                                    <Modal
                                                                        isOpen={this.state.showmathpopup9}
                                                                        /*  onAfterOpen={} */
                                                                        onRequestClose={this.handlemathpopupClose9}
                                                                        style={customStyles}
                                                                        contentLabel="Example Modal"
                                                                    >
                                                                        <div style={{ width: '100%', height: 400 }}>
                                                                            <div style={{ height: 40, width: '100%', textAlign: 'right' }}>
                                                                                <button onClick={this.insertmath9}
                                                                                    style={{ border: 'none', marginRight: 5 }}>Insert</button>

                                                                                <button onClick={this.handlemathpopupClose9}
                                                                                    style={{ textAlign: 'right', border: 'none' }}>X</button>
                                                                            </div>
                                                                            <div style={{ height: 200, width: '100%' }}>
                                                                                <div>


                                                                                    <EditableMathField
                                                                                        latex={this.state.text9}
                                                                                        onChange={(mathField) => {
                                                                                            this.setState({ text9: mathField.latex() });
                                                                                        }}
                                                                                        style={{ width: '100%', height: 100, marginBottom: 10, padding: 10 }}

                                                                                    />
                                                                                    <textarea onChange={(e) => this.setState({ text9: e.target.value })} value={this.state.text9}
                                                                                        style={{ width: '100%', display: 'none' }} /> {/*  display: 'none'  x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}    */}                                                                </div>
                                                                                <div style={{ marginTop: 0 }}>
                                                                                    <Basicnine setTextnine={this.setTextnine} />

                                                                                </div>
                                                                            </div>


                                                                        </div>

                                                                    </Modal>


                                                                </div>

                                                            </div>


                                                        </div>
                                                        <div className="form-holder col-md-1" style={{ padding: 10 }}>

                                                        </div>

                                                    </div>

                                                    <div className="form-row">
                                                        <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                            <div style={{
                                                                backgroundColor: '#00ADEF', padding: 10,
                                                                width: '100%', borderRadius: 20
                                                            }}>

                                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <div>
                                                                        <select onChange={this.handleAtype}
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2', fontSize: 12, width: 60 }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled> Option </option>
                                                                            <option value="Text">Text</option>
                                                                            <option value="Math">Math</option>
                                                                            <option value="Image">Image</option>
                                                                            <option value="Image and Text">Image and Text</option>
                                                                        </select>
                                                                    </div>
                                                                    <div>
                                                                        {
                                                                            this.state.Atype == 'Math' ?
                                                                                <Link to="#" onClick={this.clickmathpopup6}
                                                                                    className='funpage'>
                                                                                    f(x)
                                                                                </Link>
                                                                                :

                                                                                ''
                                                                        }
                                                                        {
                                                                            this.state.Atype == 'Image' ?
                                                                                <Button style={{ backgroundColor: 'silver', color: '#000', width: 60, height: 33, padding: 0 }}
                                                                                    onClick={this.handleClickAimage.bind(this)}>
                                                                                    <ImageIcon />
                                                                                    {/* Image */}
                                                                                </Button>
                                                                                :

                                                                                ''
                                                                        }
                                                                        {
                                                                            this.state.Atype == 'Image and Text' ?
                                                                                <Button style={{ backgroundColor: 'silver', color: '#000', width: 60, height: 33, padding: 0 }}
                                                                                    onClick={this.handleClickAimage.bind(this)}>
                                                                                    <ImageIcon />
                                                                                    {/* Image */}
                                                                                </Button>
                                                                                :

                                                                                ''
                                                                        }

                                                                        <input type="file" id="Afiletype" onChange={this.fileSelectA} className='form-control'
                                                                            ref={this.inputReferenceA} hidden

                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        {
                                                                            this.state.previewA == '' ?
                                                                                ''
                                                                                :
                                                                                <img src={this.state.previewA} style={{ width: 50, height: 50 }} />
                                                                        }
                                                                    </div>

                                                                </div>
                                                                {/*  <p style={{ color: '#000' }}>A</p> */}




                                                                <div style={{ display: 'flex', marginBottom: 50, marginTop: 10 }}>
                                                                    {
                                                                        this.state.Atype == 'Math' ?
                                                                            <div>
                                                                                <EditableMathField
                                                                                    latex={this.state.text6}
                                                                                    onChange={(mathField) => {
                                                                                        this.setState({ text6: mathField.latex() });
                                                                                    }}
                                                                                    style={{ width: 190, height: 130, padding: 10 }}

                                                                                />

                                                                            </div>
                                                                            :
                                                                            <textarea onChange={(e) => this.setState({ text6: e.target.value })} value={this.state.text6}
                                                                                style={{ width: '100%', height: 130 }} />
                                                                    }

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                            <div style={{
                                                                backgroundColor: '#EE5581', padding: 10,
                                                                width: '100%', borderRadius: 20
                                                            }}>
                                                                {/* <p style={{ color: '#000' }}>B</p> */}
                                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <div>
                                                                        <select onChange={this.handleBtype}
                                                                            style={{ padding: 6, width: 60, fontSize: 10 }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled> Option </option>
                                                                            <option value="Text">Text</option>
                                                                            <option value="Math">Math</option>
                                                                            <option value="Image">Image</option>
                                                                            <option value="Image and Text">Image and Text</option>
                                                                        </select>
                                                                    </div>
                                                                    <div>

                                                                        {
                                                                            this.state.Btype == 'Math' ?
                                                                                <Link to="#" onClick={this.clickmathpopup7}
                                                                                    className='funpage'>
                                                                                    f(x)
                                                                                </Link>
                                                                                :

                                                                                ''
                                                                        }
                                                                        {
                                                                            this.state.Btype == 'Image' ?
                                                                                <Button style={{ backgroundColor: 'silver', color: '#000', width: 60, height: 33, padding: 0 }}
                                                                                    onClick={this.handleClickBimage.bind(this)}>
                                                                                    <ImageIcon />
                                                                                    {/* Image */}
                                                                                </Button>
                                                                                :

                                                                                ''
                                                                        }
                                                                        {
                                                                            this.state.Btype == 'Image and Text' ?
                                                                                <Button style={{ backgroundColor: 'silver', color: '#000', width: 60, height: 33, padding: 0 }}
                                                                                    onClick={this.handleClickBimage.bind(this)}>
                                                                                    <ImageIcon />
                                                                                    {/* Image */}
                                                                                </Button>
                                                                                :

                                                                                ''
                                                                        }



                                                                        <input type="file" onChange={this.fileSelectB} className='form-control'
                                                                            ref={this.inputReferenceB} hidden
                                                                        /> </div>
                                                                    <div>
                                                                        {
                                                                            this.state.previewB == '' ?
                                                                                <img class="img-profile rounded-circle" src="/bootstrapcss/img/undraw_profile.svg" style={{ width: 50, height: 50 }}></img>
                                                                                :
                                                                                <img src={this.state.previewB} style={{ width: 50, height: 50 }} />
                                                                        }
                                                                    </div>
                                                                </div>






                                                                <div style={{ display: 'flex', marginBottom: 50, marginTop: 10 }}>
                                                                    {
                                                                        this.state.Btype == 'Math' ?
                                                                            <div>
                                                                                <EditableMathField
                                                                                    latex={this.state.text7}
                                                                                    onChange={(mathField) => {
                                                                                        this.setState({ text7: mathField.latex() });
                                                                                    }}
                                                                                    style={{ width: 190, height: 100, padding: 10 }}

                                                                                />

                                                                            </div>
                                                                            :
                                                                            <textarea onChange={(e) => this.setState({ text7: e.target.value })} value={this.state.text7}
                                                                                style={{ width: '100%', height: 130 }} />
                                                                    }

                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                            {/*  <p style={{ color: '#000' }}>C</p> */}
                                                            <div style={{
                                                                backgroundColor: '#204f7b', padding: 10,
                                                                width: '100%', borderRadius: 20
                                                            }}>

                                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <div>
                                                                        <select onChange={this.handleCtype}
                                                                            style={{ padding: 6, width: 60, fontSize: 10 }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled> Option </option>
                                                                            <option value="Text">Text</option>
                                                                            <option value="Math">Math</option>
                                                                            <option value="Image">Image</option>
                                                                            <option value="Image and Text">Image and Text</option>
                                                                        </select>
                                                                    </div>
                                                                    <div>
                                                                        {
                                                                            this.state.Ctype == 'Image' ?
                                                                                <div>
                                                                                    <Button style={{ backgroundColor: 'silver', color: '#000', width: 60, height: 33, padding: 0 }}
                                                                                        onClick={this.handleClickCimage.bind(this)}>
                                                                                        <ImageIcon />
                                                                                        {/* Image */}
                                                                                    </Button>
                                                                                </div>
                                                                                :
                                                                                ''
                                                                        }
                                                                        {
                                                                            this.state.Ctype == "Math" ?
                                                                                <Link to="#" onClick={this.clickmathpopup8}
                                                                                    className='funpage'>
                                                                                    f(x)
                                                                                </Link>
                                                                                :
                                                                                ''
                                                                        }
                                                                        {
                                                                            this.state.Ctype == 'Image and Text' ?
                                                                                <div>
                                                                                    <Button style={{ backgroundColor: 'silver', color: '#000', width: 60, height: 33, padding: 0 }}
                                                                                        onClick={this.handleClickCimage.bind(this)}>
                                                                                        <ImageIcon />
                                                                                        {/* Image */}
                                                                                    </Button>

                                                                                </div>
                                                                                :
                                                                                ''
                                                                        }





                                                                        <input type="file" onChange={this.fileSelectC} className='form-control'
                                                                            ref={this.inputReferenceC} hidden />



                                                                    </div>
                                                                    <div>
                                                                        {
                                                                            this.state.previewC == '' ?
                                                                                ''
                                                                                :
                                                                                <img src={this.state.previewC} style={{ width: 50, height: 50 }} />
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div style={{ display: 'flex', marginBottom: 50, marginTop: 10 }}>
                                                                    {
                                                                        this.state.Ctype == 'Math' ?
                                                                            <div>
                                                                                <EditableMathField
                                                                                    latex={this.state.text8}
                                                                                    onChange={(mathField) => {
                                                                                        this.setState({ text8: mathField.latex() });
                                                                                    }}
                                                                                    style={{ width: 190, height: 100, padding: 10 }}

                                                                                />

                                                                            </div>
                                                                            :
                                                                            <textarea onChange={(e) => this.setState({ text8: e.target.value })} value={this.state.text8}
                                                                                style={{ width: '100%', height: 130 }} />

                                                                    }


                                                                </div>


                                                            </div>


                                                        </div>
                                                        <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                            <div style={{ backgroundColor: '#FF933A', padding: 10, width: '100%', borderRadius: 20 }}>

                                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <div>
                                                                        <select onChange={this.handleDtype}
                                                                            style={{ padding: 6, backgroundColor: '#f2f2f2', width: 60, fontSize: 10 }}
                                                                            className="form-control"
                                                                        >
                                                                            <option value="" selected disabled> Option </option>
                                                                            <option value="Text">Text</option>
                                                                            <option value="Math">Math</option>
                                                                            <option value="Image">Image</option>
                                                                            <option value="Image and Text">Image and Text</option>
                                                                        </select>
                                                                    </div>


                                                                    <div>
                                                                        {/*  D{this.state.Dtype} */}

                                                                        <input type="file" onChange={this.fileSelectD} className='form-control'
                                                                            ref={this.inputReferenceD} hidden />
                                                                    </div>

                                                                    <div>

                                                                        {
                                                                            this.state.Dtype == 'Image' ?
                                                                                <Button style={{ backgroundColor: 'silver', color: '#000', width: 60, height: 33, padding: 0 }}
                                                                                    onClick={this.handleClickDimage.bind(this)}>
                                                                                    <ImageIcon />
                                                                                </Button>
                                                                                :
                                                                                ''

                                                                        }
                                                                        {
                                                                            this.state.Dtype == 'Math' ?
                                                                                <Link to="#" onClick={this.clickmathpopup9}
                                                                                    className='funpage'>
                                                                                    f(x)
                                                                                </Link>
                                                                                :
                                                                                ''
                                                                        }

                                                                        {
                                                                            this.state.Dtype == 'Image and Text' ?

                                                                                <Button style={{ backgroundColor: 'silver', color: '#000', width: 60, height: 33, padding: 0 }}
                                                                                    onClick={this.handleClickDimage.bind(this)}>
                                                                                    <ImageIcon />
                                                                                </Button>

                                                                                :
                                                                                ''

                                                                        }
                                                                        {/* <img src={this.state.previewD} style={{ width: 50, height: 50 }} /> */}
                                                                    </div>
                                                                    <div>
                                                                        {
                                                                            this.state.previewD == '' ?
                                                                                ''
                                                                                :
                                                                                <img src={this.state.previewD} style={{ width: 50, height: 50 }} />
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div style={{ display: 'flex', marginBottom: 50, marginTop: 10 }}>
                                                                    {
                                                                        this.state.Dtype == 'Math' ?

                                                                            <div>
                                                                                <EditableMathField
                                                                                    latex={this.state.text9}
                                                                                    onChange={(mathField) => {
                                                                                        this.setState({ text9: mathField.latex() });
                                                                                    }}
                                                                                    style={{ width: 190, height: 100, padding: 10 }}

                                                                                />

                                                                            </div>
                                                                            :
                                                                            <textarea onChange={(e) => this.setState({ text9: e.target.value })} value={this.state.text9}
                                                                                style={{ width: '100%', height: 130 }} />

                                                                    }


                                                                </div>

                                                            </div>
                                                        </div>






                                                    </div>


                                                    <div className="form-row">
                                                        <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                            {/*    <p> Answer</p> */}
                                                            <select onChange={this.handleAnswer}
                                                                style={{ padding: 6, backgroundColor: '#f2f2f2' }}
                                                                className="form-control">
                                                                <option value="">Select Answer</option>
                                                                <option value="A">A</option>
                                                                <option value="B">B</option>
                                                                <option value="C">C</option>
                                                                <option value="D">D</option>
                                                                <option value="No Answer">No Answer</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-holder col-md-3" style={{ padding: 10 }}>
                                                            <Button type="button" className="btn btn-primary btn-user btn-block" onClick={this.register}>
                                                                Submit
                                                            </Button>
                                                            <input type="hidden" className="form-control form-control-user"
                                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                                placeholder="Witting Answer"
                                                                value={this.state.writtinganswer} onChange={this.handlewrittinganswer}
                                                            />
                                                        </div>
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
                </Container>

            </div>
        );

    }
}
export default Quizsetuptwo
