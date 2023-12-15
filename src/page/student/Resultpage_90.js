import React, { useState, useEffect } from 'react';
import { Offline, Online } from "react-detect-offline";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Studentheader from './Studentheader';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faFlag, faShare, faUser } from '@fortawesome/free-solid-svg-icons'
import * as base from "../global";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom';
import Parser from 'html-react-parser'; // render HTML 
import Acurray from './Acurray';
import Matchanswerinfo from './Matchanswerinfo';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill'


const Resultpage = (props) => {
    const history = useHistory();
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [examdb, setExamdb] = useState([]);
    const [studentid, setStudentid] = useState(localStorage.getItem('studentid'));
    const [examrandomid, setExamrandomid] = useState(localStorage.getItem('examrandomid'));
    const [examid, setExamid] = useState(props.match.params.id);
    const [serialid, setSerialid] = useState(1);
    const [totalquestion, setTotalquestion] = useState(0);
    const [answer, setAnswer] = useState('');
    const [studentchoose, setStudentchoose] = useState('stop');
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [isresultvisible, setIsresultvisible] = useState(false);
    const [totalquiz, setTotalquiz] = useState([]);
    const [state, setData] = useState({ users: [] });

    const getData = () => {
        console.log(base.BASE_URL + '/getquizserial/' + examid + '/' + serialid) //examrandomid
        axios.get(base.BASE_URL + '/getquizserial/' + examid + '/' + serialid + '/' + examrandomid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
            setExamdb(res.data);
            if (res.data.length > 0) {
                setAnswer(res.data[0].Answer);
                setTotalquestion(res.data.length)
            }
            else {
                setIsresultvisible(true);
            }

        });
    }

    const gettotalquiz = () => {
       //  console.log(base.BASE_URL + '/gettotalquiz/' + examid)
        axios.get(base.BASE_URL + '/gettotalquiz/' + examid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
           // console.log(res.data)

            if (res.data.length > 0) {
                setTotalquiz(res.data.length);
            }
            else {

            }

        });
    }
    const getallquestionshow = async (pageNumber = 1) => {
        console.log(base.BASE_URL + '/getresultpage/' + examid + '/' + studentid + '/' + examrandomid);
        const api = await fetch(base.BASE_URL + '/getresultpage/' + examid + '/' + studentid + '/' + examrandomid );
        //  console.log(await api.json());
        setData({
            users: await api.json()

        });

    };
    useEffect(() => {
         gettotalquiz();
       // getallquestionshow();
     }, [])
    useEffect(() => {
       // gettotalquiz();
       getallquestionshow();
    }, [])

    useEffect(() => {
        //getData();
    }, [serialid])

    const saveexit = () => {

        history.push('/Studentdashboard');

    }

    return (
        <div className='resultpage'>

            <div style={{ height: '10%', backgroundColor: '#000000' }}>
            </div>
          {/*   {examdb.map((result) => {
                return ( 461A42 */}


                    <div className='me'>
                        <div className='resultpagebackground'>
                            <Row>
                                <p style={{ fontSize: 16, color: '#ffffff', textAlign: 'center' }}> Summary </p>
                               {/*  <p>{localStorage.getItem('examrandomid')}</p> */}
                            </Row>
                            <Row>
                                <Row>
                                    <Col sm={12}>
                                        <div className='resultprofilepage' style={{ display: 'flex' }}>
                                              {/*   <img src='/images/profileicon.png'
                                                style={{ width: 50 }}
                                                /> */}
                                                <FontAwesomeIcon icon={faUser} style={{ color: '#ffffff',
                                            padding: 14 }}></FontAwesomeIcon>
                                                <div style={{ width: '90%' }}>
                                                    <p style={{ marginLeft: 10, color: '#ffffff',
                                                padding: 10 }} >Me</p>
                                                
                                                
                                                </div>
                                               <FontAwesomeIcon icon={faShare} style={{ color: '#ffffff',
                                            padding: 14 }}></FontAwesomeIcon>
                                        </div>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <div className='resultaccuracy'>
                                            <Acurray data={examrandomid} />

                                        </div>
                                    </Col>

                                </Row>
                            
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <div className='playagain'>
                                        <Link to={"/Studentdashboard"} style={{ textDecoration: 'none' }}>
                                       {/*  <Link to={"/Startquiz/" + examid} style={{ textDecoration: 'none' }}> */}
                                            <button class="playagain_btn" data-v-dd58280e="">
                                            <i class="play-icon icon-fas-play" data-v-dd58280e=""></i> Back </button>
                                        </Link>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                   {/*  <div className='findnextquestion'>
                                        <Link to="/Studentdashboard" style={{ textDecoration: 'none' }} onClick={saveexit}>
                                            <button class="findnextresult_btn" data-v-dd58280e="">
                                                <i class="play-icon icon-fas-play" data-v-dd58280e=""></i> Find Next Exams </button>
                                        </Link>
                                    </div> */}
                                </Col>



                            </Row>

                        </div>
                        <Row>
                                    <Col sm={12}>
                                        <div className=''>
                                            <p>Result Details</p>

{/*  */}

{

                                                   
                                                   state?.users ?
                                                       state?.users?.map((result, index) => (
                                                         
                                                           <div class="card position-relative" style={{ marginBottom: 10 }}>
                                                               <div class="card-header py-3">
                                                                   <div style={{ display: 'flex' }}>
                                                                       <div style={{ width: '90%' }}>
                                                                        Question : {result.quiztype}
                                                                       </div>
                                                                       <div style={{ width: '10%', display: 'flex' }}>
                                                                       Point:  {result.studentpoint} / {result.point}
                                                                       </div>
                                                                   </div>



                                                               </div>
                                                               <div class="card-body">
                                                                   <table style={{ fontSize: 13 }}>
                                                                       <tr>
                                                                           <td colSpan={4}>
                                                                           <table>
                                                                        {
                                                                            result.questiontype1 == 'Text' ?
                                                                                <tr>
                                                                                    <td>
                                                                                        {result.questiontitle}
                                                                                    </td>
                                                                                </tr>
                                                                                :
                                                                                <tr>
                                                                                    <td>
                                                                                        <StaticMathField>
                                                                                            {result.questiontitle}
                                                                                        </StaticMathField>
                                                                                    </td>
                                                                                </tr>

                                                                        }


                                                                        {
                                                                            result.questiontype2 == 'Text' ?
                                                                                <tr><td>{result.questiontitle2}
                                                                                </td></tr>
                                                                                :
                                                                                <tr>
                                                                                    <td>
                                                                                        <StaticMathField>
                                                                                            {result.questiontitle2}
                                                                                        </StaticMathField>
                                                                                    </td>
                                                                                </tr>

                                                                        }
                                                                        {
                                                                            result.questiontype3 == 'Text' ?
                                                                            <tr><td>{result.questiontitle3}  </td></tr>
                                                                                :
                                                                                <tr><td><StaticMathField>
                                                                                    {result.questiontitle3}
                                                                                </StaticMathField>
                                                                                 </td></tr>
                                                                        }

                                                                        {
                                                                            result.questiontype4 == 'Text' ?
                                                                            <tr><td> {result.questiontitle4}  </td></tr>
                                                                                :
                                                                                <tr><td>
                                                                                <StaticMathField>
                                                                                    {result.questiontitle4}
                                                                                </StaticMathField> </td></tr>
                                                                        }
                                                                        {
                                                                            result.questiontype5 == 'Text' ?
                                                                                <tr><td>
                                                                                {result.questiontitle5}
                                                                                </td></tr>
                                                                                :
                                                                                <tr><td>
                                                                                <StaticMathField>
                                                                                    {result.questiontitle5}
                                                                                </StaticMathField> </td></tr>
                                                                        }
                                                                    </table>
                                                                             {/*   {Parser(result.questiontitle)}
  */}                                                                             {/*  {Parser(result.useranswer)} */}
                                                                         
                                                                           </td>
                                                                       </tr>
                                                                       <tr>
                                                                           <td colSpan={4}>
                                                                               {
                                                                                   result.questionimage == 'x`' ?
                                                                                   ''
                                                                                   :
                                                                                   <img src={ base.BASE_URL + result.questionimage }
                                                                                   style={{ resize: 'cover', width: '100%', height: 200 }}
                                                                                   />
                                                                               }

                                                                           </td>
                                                                       </tr>
                                                                       {
                                                                           result.quiztype == 'Fill in the Gap' ?
                                                                           <tr>
                                                                           <td colSpan={2}>
                                                                               <div style={{ display: 'flex', alignContent: 'space-between' }}>
                                                                               <div style={{ color: 'green', marginRight: 5 }}>
                                                                                   Answer.
                                                                               </div>
                                                                              {/*  {result.useranswer}  */}
                                                                               {Parser(result.useranswer)}
                                                                             {/*   <div style={{ color: 'blue', marginLeft: 5, marginRight: 5 }}>
                                                                               Quiz Type:
                                                                               </div>
                                                                                {result.quiztype} {result.answertype} */}
                                                                               </div>
                                                                            
                                                                           </td>
                                                                         
                                                                       </tr>
                                                                           :
                                                                           <div>
                                                                          
                                                                       </div>
                                                                       }

{
result.quiztype == 'Writting Test' ?
<div style={{ color: 'green', marginRight: 5 }}>
    Answer. 
    <div>
   {/*   {Parser('<p>Hello, World!</p>')} */}
     {Parser(result.useranswer)}
    </div>
    <div>
    {result.writtinganswer} 
    </div>
        {
        result.Bimage == 'x' ?
        ''
        :
        <img src={ base.BASE_URL + '/public/' + result.Bimage } style={{ resize: 'cover', width: '100%', height: 200 }} />
        }
         <div style={{ width: '100%', height: 200, padding: 10, borderWidth: 2, borderColor: 'green' }}>
           {
            result.Cimage == 'x' ?
            ''
            :
            <a href={base.BASE_URL + '/public/' + result.Cimage} target='_blank'>
            <img src={base.BASE_URL + '/public/' + result.Cimage} 
            style={{ resize: 'cover', width: '100%', height: 100 }} 

            />
            </a> 
           }                                                       
                                                                   
                                                              
                                                             
        </div>    

</div>
:
''
}

{
result.quiztype == 'MCQ' ?
<div>
<tr>
<td>
<div style={{ display: 'flex' }}> 
{ 
   result.Answer == 'A' ?
   <div className='bg-green'></div>
   :
   <div className='bg-red'></div>
}
{
result.Atype == "Text" ?
<p>{result.Atitle}</p>
:
<StaticMathField>
{result.Atitle}
</StaticMathField>
}

</div>
</td>
<td>
<div style={{ display: 'flex' }}> 
{ 
   result.Answer == 'B' ?
   <div className='bg-green'></div>
   :
   <div className='bg-red'></div>
}
{
result.Btype == "Text" ?
<p>{result.Btitle}</p>
:
<StaticMathField>
{result.Btitle}
</StaticMathField>
}</div>
</td>
</tr>
<tr>
<td>
<div style={{ display: 'flex' }}> 
{ 
   result.Answer == 'C' ?
   <div className='bg-green'></div>
   :
   <div className='bg-red'></div>
}

{
result.Ctype == "Text" ?
<p>{result.Ctitle}</p>
:
<StaticMathField>
{result.Ctitle}
</StaticMathField>
}

</div>
</td>
<td>
<div style={{ display: 'flex' }}> 
{ 
   result.Answer == 'D' ?
   <div className='bg-green'></div>
   :
   <div className='bg-red'></div>
}

{
result.Dtype == "Text" ?
<p>{result.Dtitle}</p>
:
<StaticMathField>
{result.Dtitle}
</StaticMathField>
}

 
 </div>

</td>
</tr>
<tr>
<td colSpan={2}>
Answer.  {result.Answer}  {result.ans} 


</td>

</tr>
<tr>
    <td colSpan={2}>
        {
            result.answertype == 'Correct' ?
            <span className='correcttbtn'>{result.answertype}</span>
            :
            <span className='incorrectbtn'>{result.answertype}</span>
        }
    
    </td>
</tr>
</div>
:
''
}


{
        result.quiztype == 'Match' ?
//examid + '/' + studentid + '/' + examrandomid
        <Matchanswerinfo data={result._id} />
        :
        ''        
}
                                                                      
                                                                   </table>
                                                               </div>
                                                           </div>

                                                       )) : "Loading..."
                                               }
{/*  */}




                                        </div>
                                    </Col>

                                </Row>



                    </div>
           {/*      )
            })} */}




        </div>
    );
}


export default Resultpage;