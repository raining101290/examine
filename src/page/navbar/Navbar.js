import { useState } from "react"
import { Link } from "react-router-dom"
import './index.css'

export default function Navbar() {
 const [isactive, setIsactive] = useState()
 return (
  <nav className="nav">
   <Link to="/" className="site-title">
    <img src='/images/logo.png' style={{ width: 78, height: 58, marginLeft: 10 }} />
   </Link>
   <ul>
    <li className={isactive ? "active" : ""}>

     <Link to="">
      For Teacher
     </Link>
    </li>
    <li className={isactive ? "active" : ""}>

     <Link to="">
      For Student
     </Link>
    </li>
    <li className={isactive ? "active" : ""}>

     <Link to="">
      For Student
     </Link>
    </li>

    <li className={isactive ? "active" : ""}>

     <Link to="">
      For Student
     </Link>
    </li>

   </ul>
  </nav>
 )
}

