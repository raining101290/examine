import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as base from "./global";
import axios from 'axios';


const Countquestion = ({examid,stdexam, studentid}) => {

    const [data, setData] = useState([]);

    const getallquestionshow = async () => {
         console.log(base.BASE_URL + '/getresultpage/' + examid + '/' + studentid + '/' + stdexam)
        axios.get(base.BASE_URL + '/getresultpage/' + examid + '/' + studentid + '/' + stdexam, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log('count' + res.data)
            setData(res.data);
        });

    };
    useEffect(() => {
       // console.log('logo....' + data)
        // gettotalquiz();
        getallquestionshow();
    }, [])
    return (
        <div>
        {/*  <p>{studentid} --- {examid} Count:  {data.length} --- {stdexam}</p> */}
        {
            data.length > 0 ?
            <p style={{ display: 'flex' }}>Count:  {data.length}</p>
            :
            <p>No Question</p>
        }
        
        </div>
    );
}


export default Countquestion;