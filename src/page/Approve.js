import React, {useState, useEffect } from 'react';
import * as base from "./global";
import axios from 'axios'
 
const Approve = (props) => {
 
    const [examid, setExamid] = useState(props.match.params.id);


     const getData = () =>{
        console.log(base.BASE_URL + '/approveexam/' + examid)
        axios.get(base.BASE_URL + '/approveexam/' + examid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data)
            alert(res.data)
    
        });
    }
     
    useEffect(() => {
         getData();
    }, [])

    return (
        <div>
            <h3> Approve Successfully </h3>
        </div>
    );
}
 

 
export default Approve;