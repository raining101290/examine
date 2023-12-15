import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as base from "./global";
import { DateRange } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faDeleteLeft, fadel } from '@fortawesome/free-solid-svg-icons'

const  Dashboardteacher = () => {
  
    const [state, setData] = useState({ users: [] });
    const [userrole, setUserrole] = useState(localStorage.getItem("usersrole"))
    const [schoolid, setSchoolid] = useState(localStorage.getItem('schoolid'))

    const getData = () =>{
        axios.get(base.BASE_URL + '/examslist/' + schoolid, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
          if(res.data.length > 0)
          {
            console.log(res.data)
            setData(res.data );
          }
          else
          {
            setData('');
          }
           
        });
    
    
    }

    useEffect(() => {
        if(userrole == 'Teacher')
        {
          getData()
        }
        else
        {
          
        }
        
      })
      

    return (
        <div>
                  {
                    state?.users ?
                        state?.users?.map((result) => (
                            //console.log('' + result);
<div className='col-md-6'>    
<div class="card position-relative" style={{ marginBottom: 10, marginTop: 10 }}>
<div class="card-header py-3">
<div style={{ display: 'flex' }}>
<div style={{ width: '90%', fontSize: 12 }}>
Exam Date & Time : {result.examdate} { result.examtime }
</div>
<div style={{ width: '10%', display: 'flex' }}>

<Link variant="info" to={"/Editaddnewexam/" + result._id}
style={{ marginRight: 10 }} title="Edit Exams"
>
<FontAwesomeIcon icon={faEdit} style={{ color: '#000', fontSize: 22, }}>

</FontAwesomeIcon>
</Link>
<Link variant="info" to="#" onClick={() => this.deleteUser(result._id)} title="Delete Exams">
<FontAwesomeIcon icon={faDeleteLeft} style={{ color: '#000', fontSize: 22, }}>
</FontAwesomeIcon>
</Link>
</div>
</div>



</div>
<div class="card-body">
<table style={{ width: '100%', fontSize: 12 }}>
<tr>
<td>
Exam Name : {result.examname}
</td>
<td>

</td>
<td>
<Link to={"/Quizsetup/" + result._id + '/' + result.examname} 
className='btn btn-primary' 
style={{backgroundColor: '#6c757d', width: 100, fontSize: 12}}
>Add Question</Link>

</td>

</tr>
<tr>
<td>
Exam fees : {result.examfees}

</td>
<td>
Group : {result.xgroup}

</td>
<td>
<Link to={"/Quizsetuplist/" + result._id + '/' + result.examname} 
className='btn btn-primary' 
style={{backgroundColor: 'blue', width: 100, fontSize: 12}} >
View Question</Link>
</td>
</tr>
<tr>
<td>
Class Name:  {result.classname} 
</td>
<td>
Section:  {result.xsection} 
</td>
<td>
<Link className='btn btn-primary' 
style={{backgroundColor: '#0dcaf0', width: 100, fontSize: 12}} 
to={"/Addnewstudent/" + result._id}>
Add Std</Link>   
</td>
</tr>
<tr>
<td>
No of Student : {result.noofstudent} 
</td>
<td>

</td>
<td>
<Link to={"/Viewresultteacher/" + result._id + '/' + result.examname} 
className='btn btn-primary' 
style={{backgroundColor: 'green', width: 100, fontSize: 12}} >
View Result</Link>
</td>
</tr>
<tr>
<td colSpan={3}>
{
result.examstatus == '0' ?
'Complete'
:
''
} 
{
result.examstatus == '2' ?
'Draft'
:
''
}
{
result.examstatus == '1' ?
'Disable'
:
''
} 
</td>
</tr>
</table>
</div>
</div>

</div>                          
                        )) : ""
                }          
        </div>
    );
}

export default Dashboardteacher;