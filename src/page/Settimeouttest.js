import React, { useState, useEffect} from 'react';
import * as base from "./global";
import axios from 'axios';
 
const Settimeouttest = () => {
    
    const [studentid, setStudentid] = useState(localStorage.getItem('studentid'));
    const [examid, setExamid] = useState('632ddd58cd0583394ca2aef1');
    const [counter, setCounter] = useState(10);
    const [serialid, setSerialid] = useState(1);
    const [questiontitle,setQuestiontitle] = useState(0)

      const reset = () => {
        getData();
      };

      useEffect(() => {
        
        getData();
        return () => getData();
        
    }, [serialid])
      const getData = () => {
        console.log(' counter... ' + counter )
     console.log('getdata...' + base.BASE_URL + '/findfirstquestion/' + examid + '/' + studentid + '/' + serialid + '/1')
       axios.get(base.BASE_URL + '/findfirstquestion/' + examid + '/' + studentid + '/' + serialid + '/1', {
           headers: {
               authorization: `bearer ${localStorage.getItem('token')}`
           }
       }).then(res => {
           console.log('kkk....' + res.data)
         
           if (res.data.length > 0) {
               setQuestiontitle(res.data[0].questiontitle) 
               setCounter(res.data[0].questiontime);
                  
           }
           else {

           }

       });
   }

    useEffect(() => {

          let timerid = counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        //   console.log('timeer is running' + counter )
            if(counter == 0)
            {
                setSerialid(serialid+1)
            }
             
              return () => clearTimeout(timerid);
         }, [counter]);  
    return (
        <div>
            <h3>Hello {counter} </h3>
            <p>{questiontitle}</p>
 <button onClick={() => reset()}>Restart</button>
        </div>
    );
}
 

 
export default Settimeouttest;