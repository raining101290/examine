import React, { useState, useEffect} from 'react';
import * as base from "./global";
import axios from 'axios';
 
const Loadingcolor = () => {
    
    const [studentid, setStudentid] = useState(localStorage.getItem('studentid'));

    return (
        <div>
            <h3>Hello </h3>

        </div>
    );
}
 

 
export default Loadingcolor;