import axios from "axios";
import React, { Component } from 'react';
import "./conversation.css";
import * as base from "./global";
import { format } from "timeago.js"; // npm install timeago-react

//export default function Conversation({ conversation, currentUser }) {
class Conversation extends Component 
{   
    constructor(props) {
        super(props);
        this.state = {
            isQuickView: false,
        };
    }
  //const [users, setUser] = useState(null);
  //const PF = process.env.REACT_APP_PUBLIC_FOLDER;

/*   useEffect(() => {
   console.log('Current User ID : ' + currentUser);
   console.log('conversation User ID : ' + conversation);

    const getUser = async () => {
      try {
        const res = await axios(base.BASE_URL + "/viewanotherprofile/" + currentUser);
        setUser(res.data);
        console.log('Converstion id ' + res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]); */
  render() {
    const { conversation } = this.props;
  return (

    <li>
    <a href="#">
      <div className="message-avatar"><i className="status-icon status-online" />
     {/*  <img src="assets/images/avatars/avatar-1.jpg" alt /> */}
      <img src={`${base.IMAGE_URL}/${conversation.com_logo}`} />
      </div>
      <div className="message-by">
        <div className="message-by-headline">
          <h5>{conversation.firstname}{conversation.lastname}</h5>
          <span>{format(conversation.enteredby)}</span>
        </div>
       {/*  <p>laoreet dolore magna aliquam erat volutpat sed diam nonummy</p> */}
      </div>
    </a>
  </li>

/*     <div className="conversation">
      <img
        className="conversationImg"
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div> */
  );
}
}
export default Conversation;
