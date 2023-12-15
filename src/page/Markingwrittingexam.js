import React, { useEffect, useState } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import "./styles.css";
import * as base from "./global";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useHistory } from 'react-router-dom';
import {
  faSave, faCircle, faRectangleAd, faFileText, faFileExport,
  faDeleteLeft, faDownload, faMinus, faPlus, faChartLine
} from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import Header from '../Layout/Header'

import Input from "@material-ui/core/Input";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Footer from "./Footer";


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



const Markingwrittingexam =(props) => {
  const history = useHistory();
 // const { editor, onReady } = useFabricJSEditor();
  const [image64formate, setImage64formate] = useState('');
  const [profileimage, setProfileimage] = useState('');
  const [viewquestionid, setViewquestionid] = useState(props.match.params.id);
  const [imagefile, setImagefile] = useState(props.match.params.ids);
  //const [viewimageid, setViewimageid] = useState(props.match.params.ids);
  const [canvasImage, setCanvassImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [markascorrect, setMarkascorrect] = useState('');
  const [mark, setMark] = useState('');
  const [point, setPoint] = useState('');
  const [questionid, setQuestionid] = useState('');
  const [useranswer, setUseranswer] = useState('');
  const [studentpoint, setStudentpoint] = useState('');
  
  
  const handlemathpopupClose=() => {
    //setShowmathpopup(false)
 }
 const submitmarking =(a) => {
  //alert(a)
  /////////////////////////////////////////////////////
          axios.post(base.BASE_URL + '/teachmarketingwritting', {
              answertype: markascorrect,
              studentmarks: mark,
              autoincrement:viewquestionid
          })
          .then((response) => {
              console.log(response.data.status);
              if(response.data.status == "found")
              {
                history.push("/Viewsingleresult" + '/' + props.match.params.ids + '/' + props.match.params.idss + '/' + props.match.params.idsss )
              }
              else
              {

              }
          }, (error) => {
          console.log(error);
          alert(error)
          });
  
  /////////////////////////////////////////////////////        
      }
  
  const getallquestionshow = async () => {
    console.log('monir'+ base.BASE_URL + '/viewquestionid/' + viewquestionid)
      axios.get(base.BASE_URL + '/viewquestionid/' + viewquestionid, {
        headers: {
            authorization: `bearer ${localStorage.getItem('token')}`
        }
    }).then(res => {
        console.log('kkk....' + res.data)

      
        if(res.data.length > 0)
        {
              setPoint(res.data[0].point)
              setStudentpoint(res.data[0].studentpoint)
              setUseranswer(res.data[0].useranswer)

        }
        else
        {

        }
       
    });


};
  useEffect(() => {
    window.scrollTo(0, 0)
    getallquestionshow()
  }, []);


  return (
    <div>
      <Header />
      <Container style={{ padding: 20, height: 400, marginBottom: 100, marginTop: 74 }}>

        <div style={{ height: 300 }}>
        <div style={{
            width: '100%', justifyContent: 'space-between',
            display: 'flex'
          }}>
            <Link to={"/Viewsingleresult" + '/' + props.match.params.id + '/' + props.match.params.ids + '/' + props.match.params.idss}>Back</Link>
             <p>{props.match.params.id}--- {props.match.params.ids} --{props.match.params.idss} --{props.match.params.idsss}</p> 
            <h3 style={{ fontSize: 14 }}>Writting Marking</h3>
          </div>

          <div style={{
            width: '100%', justifyContent: 'space-between',
            display: 'flex', marginTop: 20
          }}>

          </div>
          <div style={{
            width: '100%', justifyContent: 'space-between',
            display: 'flex', marginTop: 20
          }}>
            <Input type="text" className="form-control"
              id="exampleInputEmail" aria-describedby="emailHelp"
              placeholder="Points" style={{
                width: 120, fontSize: 14, marginLeft: 10,
                backgroundColor: 'green', color: '#ffffff'
              }}
              onChange={(e) => {

                setPoint(e.target.value)
              }}
              value={point}
            />

            <Input type="text" className="form-control"
              id="exampleInputEmail" aria-describedby="emailHelp"
              placeholder="Enter marks" style={{
                width: 120, fontSize: 14, marginLeft: 10,
                backgroundColor: 'green', color: '#ffffff'
              }}
              onChange={(e) => {

                setMark(e.target.value)
              }}
            />
            <select
              style={{ padding: 6, backgroundColor: 'green', fontSize: 14, width: 150, color: '#ffffff' }}
              className="form-control"
              onChange={(e) => {

                setMarkascorrect(e.target.value)
              }} >
              <option value="">Marks as a Correct</option>

              <option value="Correct">Correct</option>
              <option value="Incorrect">Incorrect</option>
            </select>




          </div>


          <ReactQuill modules={modules} theme="snow"
            placeholder=""
            style={{ width: '100%', fontSize: 12, color: '#000', marginTop: 20, height: 200 }}
            value={useranswer}

          />

          <button style={{ width: 100, height: 40, marginTop: 50 }} onClick={submitmarking}>Submit</button>
        </div>
      </Container>
      <Footer/>
    </div>
  );
}
export default Markingwrittingexam;

