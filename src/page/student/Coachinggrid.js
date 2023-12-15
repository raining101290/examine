import React, { useState, useEffect} from 'react';
import * as base from "../global";
import axios from 'axios';

const Coachinggrid =() => 
{
 let subtitle;
 const [modalIsOpen, setIsOpen] = React.useState(false);
 const [users, setUsers] = useState([]);
 const [studentid, setStudentid] = useState(localStorage.getItem('studentid'))


 const getData = () =>{
  console.log(base.BASE_URL + '/coachingcourse/' + localStorage.getItem('className') + '/' + localStorage.getItem('groupname') + '/' + localStorage.getItem('versionname'))
    axios.get(base.BASE_URL + '/coachingcourse/' + localStorage.getItem('className') + '/' + localStorage.getItem('groupname') + '/' + localStorage.getItem('versionname'), {
        headers: {
            authorization: `bearer ${localStorage.getItem('token')}`
        }
    }).then(res => {
      //  console.log(res.data)
        setUsers(res.data);
      
    window.scrollTo(0, 0);

    });
}


useEffect(() => {
 getData();
}, [])

  return (
    <div>
      <h3>UUUU</h3>  
    </div>
  )
}
export default Coachinggrid;
