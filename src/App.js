import './App.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from './page/Home'
import Registration from './page/Registration'
import Dashboard from './page/Dashboard'
import Continuewithemail from './page/Continuewithemail'
import Login from './page/Login'
import Schoolcollegesetup from './page/Schoolcollegesetup'
import Schoolcollegelist from './page/Schoolcollegelist'
import EditSchool from './page/EditSchool'
import Subjectsetup from './page/Subjectsetup'
import Subjectsetuplist from './page/Subjectsetuplist'
import Quizsetup from './page/Quizsetup'
import Quizsetuptwo from './page/Quizsetuptwo'
import Writtingtest from './page/Writtingtest'
import Mcqedit from './page/Mcqedit'
import Matchsetupedit from './page/Matchsetupedit'
import Writtingtestedit from './page/Writtingtestedit'
import Fillgapedit from './page/Fillgapedit'
import Quizsetuplist from './page/Quizsetuplist'
import Editsubjectsetup from './page/Editsubjectsetup'
import Userlist from './page/Userlist'
import Userssetup from './page/Userssetup'
import Examsetuplist from './page/Examsetuplist'
import Addnewexam from './page/Addnewexam'
import Viewresultteacher from './page/Viewresultteacher'
import Classsetup from './page/Classsetup'
import Classsetuplist from './page/Classsetuplist'
import Groupsetuplist from './page/Groupsetuplist'
import Groupsetup from './page/Groupsetup'
import Sectionsetuplist from './page/Sectionsetuplist'
import Sectionsetup from './page/Sectionsetup'
import Edituserssetup from './page/Edituserssetup'
import Editaddnewexam from './page/Editaddnewexam'
import Addnewstudent from './page/Addnewstudent'
import Addexamimage from './page/Addexamimage'
import Music from './page/Music'

import Termsandconditions from './page/Terms/Termsandconditions';

//student module
import Studentlogin from './page/Studentlogin'
import Studentdashboard from './page/student/Studentdashboard'
import Starttype from './page/student/Starttype'
import Subjectpage from './page/student/Subjectpage'
import Exampage from './page/student/Exampage'
import Continuewithstudent from './page/Continuewithstudent'
import Continuewithteacher from './page/Continuewithteacher'
import TeacherSchool from './page/TeacherSchool'
import Signupwithaccount from './page/Signupwithaccount'
import Signinwithaccount from './page/Signinwithaccount'
import Startquiz from './page/student/Startquiz'
import Startquiztwo from './page/student/Startquiztwo'
import Readmore from './page/student/Readmore'
import Paymenthistory from './page/student/Paymenthistory'

import Fillinthegap from './page/Fillinthegap'
import Startquizsaveexits from './page/student/Startquizsaveexits'
import Resultpage from './page/student/Resultpage'
import Resultpageviewhistory from './page/student/Resultpageviewhistory'

import Viewsingleresult from './page/Viewsingleresult'
import Viewsingleresultmath from './page/Viewsingleresultmath'
import Fonta from './page/Fonta'
import Testcanva from './page/Testcanva'
import Easytoacton from './page/Easytoacton'
import Teacher from './page/Teacher'
import Changeimage from './page/Changeimage'
import Students from './page/Students'
import Editprofilepage from './page/Editprofilepage'
import Editstudentprofile from './page/Editstudentprofile'
import Activityteacher from './page/Activityteacher'
import Addnewstudentedit from './page/Addnewstudentedit'
import Settimeouttest from './page/Settimeouttest'
import Loadingcolor from './page/Loadingcolor'
import Approveexam from './page/Approveexam'
import Approve from './page/Approve'
import Studentuserlist from './page/Studentuserlist'
import Subjectfilterlist from './page/Subjectfilterlist'
import Studentfindsubject from './page/Studentfindsubject'
import Forgetpassword from './page/Forgetpassword'
import Testpages from './page/Testpages'
import Matchsetup from './page/Matchsetup'
import Questiondetails from './page/Questiondetails'
import Modalmath from './page/Modalmath'
import Editor from './page/Editor'
import Examquestionlist from './page/Examquestionlist'
import Viewquestiondetails from './page/Viewquestiondetails'
import Admissiontestpayment from './page/student/Admissiontestpayment'
import Bkconfirmlists from './page/Bkconfirmlists'
import Bkapprove from './page/Bkapprove'
import Paymentpaid from './page/student/Paymentpaid'
import Starttoprocesscourse from './page/student/Starttoprocesscourse'
import Markingwrittingexam from './page/Markingwrittingexam'
import Resulttransaction from './page/student/Resulttransaction'
import Viewteachermarkingimage from './page/Viewteachermarkingimage'
import Coursedetails from './page/course/Coursedetails'
import Coursedetailspage from './page/course/Coursedetailspage'
import Courseversion from './page/course/Courseversion'
import Viewcart from './page/course/Viewcart'
import Changepassword from './page/admin/Changepassword'
import  Studentviewpayment from './page/admin/Studentviewpayment'
import Copyexams from './page/admin/Copyexams'
import Adminexamsetuplist from './page/admin/Adminexamsetuplist'
import Copyquestion from './page/admin/Copyquestion'

import Listofexams from './page/Listofexams'
//import Audiosetup from './page/Audiosetup'


import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (

        <Router>
            <ToastContainer />

            <Switch>
                <Route exact path="/">
                    <Home />

                </Route>

                <Route exact path="/Continuewithstudent">
                    <Continuewithstudent />
                </Route>
                <Route exact path="/Teacher">
                    <Teacher />
                </Route>

                <Route exact path="/Paymenthistory">
                    <Paymenthistory />
                </Route>
                <Route exact path="/Copyexams">
                    <Copyexams />
                </Route>
                <Route exact path="/Adminexamsetuplist">
                    <Adminexamsetuplist />
                </Route>
                
                
                <Route exact path="/Students">
                    <Students />
                </Route>
                <Route exact path="/Settimeouttest">
                    <Settimeouttest />
                </Route>
                <Route exact path="/Loadingcolor">
                    <Loadingcolor />
                </Route>

                <Route exact path="/Studentlogin">
                    <Studentlogin />
                </Route>
                <Route exact path="/Editprofilepage">
                    <Editprofilepage />
                </Route>
                <Route exact path="/Approveexam">
                    <Approveexam />
                </Route>
                <Route exact path="/Modalmath">
                    <Modalmath />
                </Route>

                <Route exact path="/Admissiontestpayment/:id" component={Admissiontestpayment}>
                </Route>
                <Route exact path="/Studentviewpayment/:id" component={ Studentviewpayment}>
                </Route>
                <Route exact path="/Copyquestion/:id/:examname" component={ Copyquestion }>

                </Route>

                <Route exact path="/Bkconfirmlists">
                    <Bkconfirmlists />
                </Route>



                <Route exact path="/Editor">
                    <Editor />
                </Route>





                <Route exact path="/Continuewithteacher">
                    <Continuewithteacher />
                </Route>
                <Route exact path="/Editstudentprofile">
                    <Editstudentprofile />
                </Route>
                <Route exact path="/Studentdashboard">
                    <Studentdashboard />
                </Route>
                <Route exact path="/TeacherSchool">
                    <TeacherSchool />
                </Route>
                <Route exact path="/Signupwithaccount">
                    <Signupwithaccount />
                </Route>
                <Route exact path="/Signinwithaccount">
                    <Signinwithaccount />
                </Route>
                <Route exact path="/Activityteacher">
                    <Activityteacher />
                </Route>

                <Route exact path="/Changeimage">
                    <Changeimage />
                </Route>
                <Route exact path="/Studentuserlist">
                    <Studentuserlist />
                </Route>
                <Route exact path="/Paymentpaid">
                    <Paymentpaid />
                </Route>
                <Route exact path="/Resulttransaction">
                    <Resulttransaction />
                </Route>
                <Route exact path="/Termsandconditions">
                    <Termsandconditions />
                </Route>

                <Route exact path="/Courseversion/:id" component={Courseversion}>
                </Route>


                <Route exact path="/Starttoprocesscourse/:id" component={Starttoprocesscourse}>
                </Route>

                <Route exact path="/Coursedetailspage/:version/:classnames/:singleclass/:groupname" component={Coursedetailspage}>
                </Route>
                <Route exact path="/Viewcart/:version/:classnames/:singleclass/:packageid" component={Viewcart}>
                </Route>
                <Route exact path="/Addnewstudentedit/:id" component={Addnewstudentedit}>
                </Route>

                <Route exact path="/Bkapprove/:id" component={Bkapprove}>
                </Route>
                <Route exact path="/Readmore/:id" component={Readmore}>
                </Route>


                <Route exact path="/Viewquestiondetails/:id/:ids" component={Viewquestiondetails}>
                </Route>


                <Route exact path="/Subjectfilterlist/:id/:ids/:idss"
                    component={Subjectfilterlist}>
                </Route>

                <Route exact path="/Studentfindsubject/:id/:ids/:idss"
                    component={Studentfindsubject}>
                </Route>

                <Route exact path="/Coursedetails/:id/:ids" component={Coursedetails}>
                </Route>



                <Route exact path="/Starttype/:id" component={Starttype}>
                </Route>
                <Route exact path="/Subjectpage/:id" component={Subjectpage}>
                </Route>
                <Route exact path="/Exampage/:id/:ids" component={Exampage}>
                </Route>
                <Route exact path="/Startquiz/:id" component={Startquiz}>
                </Route>
                <Route exact path="/Questiondetails/:id/:ids" component={Questiondetails}>
                </Route>
                <Route exact path="/Approve/:id" component={Approve}>
                </Route>
                <Route exact path="/Startquiztwo/:id/:ids/:idss" component={Startquiztwo}>
                </Route>
                <Route exact path="/Startquizsaveexits/:id/:serial/:totalquiz" component={Startquizsaveexits}>
                </Route>
                <Route exact path="/Resultpage/:id" component={Resultpage}>
                </Route>
                <Route exact path="/Resultpageviewhistory/:id" component={Resultpageviewhistory}>
                </Route>
                <Route exact path="/Viewsingleresultmath" component={Viewsingleresultmath}>
                    <Viewsingleresultmath />
                </Route>
                <Route exact path="/Viewteachermarkingimage/:id/:ids" component={Viewteachermarkingimage}>
                </Route>
                <Route exact path="/Markingwrittingexam/:id/:ids/:idss/:idsss" component={Markingwrittingexam}>
                </Route>
                <Route exact path="/Addexamimage/:id" component={Addexamimage}>
                </Route>

                <Route exact path="/Easytoacton">
                    <Easytoacton />
                </Route>

                <Route exact path="/Schoolcollegesetup">
                    <Schoolcollegesetup />
                </Route>
                <Route exact path="/Examsetuplist">
                    <Examsetuplist />
                </Route>
                <Route exact path="/Groupsetuplist">
                    <Groupsetuplist />
                </Route>
                <Route exact path="/Groupsetup">
                    <Groupsetup />
                </Route>
                <Route exact path="/Sectionsetup">
                    <Sectionsetup />
                </Route>
                <Route exact path="/Sectionsetuplist">
                    <Sectionsetuplist />
                </Route>
                <Route exact path="/Forgetpassword">
                    <Forgetpassword />
                </Route>

                <Route exact path="/Testpages">
                    <Testpages />
                </Route>

                <Route exact path="/Addnewstudent/:id" component={Addnewstudent}>
                </Route>
                <Route exact path="/Viewresultteacher/:id/:ids" component={Viewresultteacher}>
                </Route>
                <Route exact path="/Viewsingleresult/:id/:ids/:idss" component={Viewsingleresult}>
                </Route>
            

                <Route exact path="/Listofexams">
                    <Listofexams />
                </Route>

                <Route exact path="/Addnewexam">
                    <Addnewexam />
                </Route>
                <Route exact path="/Classsetup">
                    <Classsetup />
                </Route>
                <Route exact path="/Classsetuplist">
                    <Classsetuplist />
                </Route>

                <Route exact path="/Userlist">
                    <Userlist />
                </Route>
                <Route exact path="/Userssetup">
                    <Userssetup />
                </Route>
                <Route exact path="/Schoolcollegelist">
                    <Schoolcollegelist />
                </Route>
                <Route exact path="/Subjectsetup">
                    <Subjectsetup />
                </Route>
                <Route exact path="/Subjectsetuplist">
                    <Subjectsetuplist />
                </Route>

                <Route exact path="/Quizsetup/:id/:ids" component={Quizsetup}>
                </Route>
                <Route exact path="/Quizsetuplist/:id/:ids" component={Quizsetuplist}>
                </Route>
                <Route exact path="/Examquestionlist/:id" component={Examquestionlist}>
                </Route>
                <Route exact path="/Editaddnewexam/:id" component={Editaddnewexam}>
                </Route>
                <Route exact path="/Edituserssetup/:id" component={Edituserssetup}>
                </Route>
                <Route exact path="/Changepassword/:id" component={Changepassword}>
                </Route>
                <Route exact path="/EditSchool/:id" component={EditSchool}>
                </Route>
                <Route exact path="/Fillgapedit/:id/:ids/:idss" component={Fillgapedit}>
                </Route>
                <Route exact path="/Writtingtestedit/:id/:ids/:idss" component={Writtingtestedit}>
                </Route>

                <Route exact path="/Mcqedit/:id/:ids/:idss" component={Mcqedit}>
                </Route>

                <Route exact path="/Matchsetupedit/:id/:ids/:idss" component={Matchsetupedit}>
                </Route>

                <Route exact path="/Quizsetuptwo/:id/:ids/:idss" component={Quizsetuptwo}>
                </Route>

                <Route exact path="/Matchsetup/:id/:ids/:idss" component={Matchsetup}>
                </Route>
                <Route exact path="/Writtingtest/:id/:ids/:idss" component={Writtingtest}>
                </Route>
                <Route exact path="/Fillinthegap/:id/:ids/:idss" component={Fillinthegap}>
                </Route>
                <Route exact path="/Editsubjectsetup/:id" component={Editsubjectsetup}>
                </Route>
                <Route exact path="/registration">
                    <Registration />
                </Route>
                <Route exact path="/Dashboard">
                    <Dashboard />
                </Route>
                <Route exact path="/Continuewithemail">
                    <Continuewithemail />
                </Route>
                <Route exact path="/Login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
