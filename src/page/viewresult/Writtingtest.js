import React, { useState, useEffect } from 'react'
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill'
import { Link } from 'react-router-dom';
import * as base from "../global";
import Parser from 'html-react-parser'; // render HTML 
import Lightbox from "react-image-lightbox";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from "@material-ui/core/Input";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

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


const Writtingtest = (data) => {
 const [isOpenquestionimage, setIsOpenquestionimage] = useState(false);
 const [isOpenteacherimage, setIsOpenteacherimage] = useState(false);
 console.log('data..writting..' + JSON.stringify(data))
 const userdata = data.data;
 const [show, setShow] = useState(false);
 const [canvasImage, setCanvassImage] = useState("");
 const [loading, setLoading] = useState(false);
 const [markascorrect, setMarkascorrect] = useState('');
 const [mark, setMark] = useState('');
 const [point, setPoint] = useState('');
 const [questionid, setQuestionid] = useState(userdata._id);
 const [useranswer, setUseranswer] = useState('');
 const [studentpoint, setStudentpoint] = useState('');
 const handleClose = () => setShow(false);
/*  const handleShow = () => setShow(true); */
 const handleShow =() =>{

  axios.get(base.BASE_URL + '/viewquestionid/' + questionid, {
   headers: {
       authorization: `bearer ${localStorage.getItem('token')}`
   }
}).then(res => {
   console.log('kkk....' + res.data)

 
   if(res.data.length > 0)
   {
    console.log('long....' + JSON.stringify(res.data))
         setPoint(res.data[0].point)
       //  setStudentpoint(res.data[0].studentpoint)
         setUseranswer(res.data[0].useranswer)
         //studentpoint
         setMark(res.data[0].studentpoint)
         setMarkascorrect(res.data[0].answertype)

         setShow(true);

   }
   else
   {

   }
  
});
 }

 const submitmarking =(a) => {
  //alert(a)
  /////////////////////////////////////////////////////
          axios.post(base.BASE_URL + '/teachmarketingwritting', {
              answertype: markascorrect,
              studentmarks: mark,
              autoincrement:questionid
          })
          .then((response) => {
              console.log(response.data.status);
              if(response.data.status == "found")
              {
               setShow(false);
               window.location.reload(false);
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

 return (
  <div>
   <table>
    {
     userdata.questiontype1 == 'Text' ?
      <tr>
       <td>
        {userdata.questiontitle}
       </td>
      </tr>
      :
      <tr>
       <td>
        <StaticMathField>
         {userdata.questiontitle}
        </StaticMathField>
       </td>
      </tr>

    }

    {
     userdata.questiontype1 == 'Text' ?
      <tr>
       <td>
        {userdata.questiontitle1}
       </td>
      </tr>
      :
      <tr>
       <td>
        <StaticMathField>
         {userdata.questiontitle1}
        </StaticMathField>
       </td>
      </tr>

    }


    {
     userdata.questiontype2 == 'Text' ?
      <tr><td>{userdata.questiontitle2}
      </td></tr>
      :
      <tr>
       <td>
        <StaticMathField>
         {userdata.questiontitle2}
        </StaticMathField>
       </td>
      </tr>

    }
    {
     userdata.questiontype3 == 'Text' ?
      <tr><td>{userdata.questiontitle3}  </td></tr>
      :
      <tr><td><StaticMathField>
       {userdata.questiontitle3}
      </StaticMathField>
      </td></tr>
    }

    {
     userdata.questiontype4 == 'Text' ?
      <tr><td> {userdata.questiontitle4}  </td></tr>
      :
      <tr><td>
       <StaticMathField>
        {userdata.questiontitle4}
       </StaticMathField> </td></tr>
    }
    {
     userdata.questiontype5 == 'Text' ?
      <tr><td>
       {userdata.questiontitle5}
      </td></tr>
      :
      <tr><td>
       <StaticMathField>
        {userdata.questiontitle5}
       </StaticMathField> </td></tr>
    }


    <tr>
     <td colSpan={4}>
      {
       userdata.questionimage == 'x`' ?
        ''
        :
        <img src={base.BASE_URL + userdata.questionimage}
         style={{ resize: 'cover', width: 100, height: 100 }}
         onClick={() => setIsOpenquestionimage(true)}
        />
      }

     </td>
    </tr>

    <tr>

     <td style={{ width: '100%' }}>
      <div style={{ width: '100%', height: 50 }}>
       <p style={{ color: 'green' }}>Student Answer</p>
      
      </div>

      {
       userdata.questiontype == 'Text' ?
        <div style={{ width: '100%', height: 50, marginTop: 50 }}>
       {/*   <Link to={"/Markingwrittingexam/" + userdata._id + '/' + userdata.studentid + '/' + userdata.examrandomid + '/' + userdata.examrandomid}>
          Marking
         </Link>  */}
       <Button variant="primary" onClick={handleShow}>
       Marking
      </Button>
        </div>
        :
        ''
      }
      <div style={{ width: '100%', height: 200, padding: 10 }}>
       {
        userdata.Bimage == 'x' ?
         ''
         :

         <Link to={"/Viewteachermarkingimage/" + userdata._id + '/' + userdata.Bimage} target="_blank">

          <img src={base.BASE_URL + '/public/' + userdata.Bimage}
           style={{ resize: 'cover', width: '100%', height: 100 }} />

         </Link>
       }
      </div>
     </td>
    </tr>
    <tr>
     <td style={{ width: '100%' }}>
      <div style={{ width: '100%', height: 50 }}>
       <p style={{ color: 'green' }}> Teacher Comments</p>
      </div>
      <div style={{ width: '100%', height: 200, padding: 10 }}>
       {
        userdata.Cimage == 'x' ?
         ''
         :
         <a href={base.BASE_URL + '/public/' + userdata.Cimage} target='_blank'>
          <img src={base.BASE_URL + '/public/' + userdata.Cimage}
           style={{ resize: 'cover', width: '100%', height: 100 }}

          />
         </a>
       }
      </div>
      {isOpenteacherimage && <Lightbox
       imageTitle='Teacher marks'
       imageCaption=''
       mainSrc={base.BASE_URL + "/public/" + userdata.Cimage}
       nextSrc=''
       prevSrc=''
       onCloseRequest={() => setIsOpenteacherimage(false)}

      />}
      <div style={{ width: '100%' }}>
       <p>Answer: {Parser(userdata.answertype)} </p>

       <p>Student marks : {userdata.studentpoint} </p>
      </div>
     </td>
    </tr>

   </table>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Writting Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: 300 }}>

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
              value={mark}
            />
            <select
              style={{ padding: 6, backgroundColor: 'green', fontSize: 14, width: 150, color: '#ffffff' }}
              className="form-control"
              onChange={(e) => {

                setMarkascorrect(e.target.value)
              }} >
              <option value={{markascorrect}}>{markascorrect}</option>

              <option value="Correct">Correct</option>
              <option value="Incorrect">Incorrect</option>
            </select>




          </div>

        <ReactQuill modules={modules} theme="snow"
            placeholder=""
            style={{ width: '100%', fontSize: 12, color: '#000', marginTop: 20, height: 100 }}
            value={useranswer}

          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitmarking}>  {/* onClick={handleClose}  */}
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </div >
 )
}

export default Writtingtest
