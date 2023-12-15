//import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
//import { Redirect } from 'react-router';
import Headerchat from '../Layout/Headerchat'
import { Redirect } from 'react-router';
import * as base from "./global";
//import { Link } from 'react-router-dom';
import axios from 'axios';
import "./messenger.css";
import Conversation from "./Conversation";
import Message from "./Message";
//export default class chat extends Component {
export default function Chat(props) {

  const [conversations, setConversations] = useState([]);
  //const [profileState, setProfileState] = useState(props);
  //const { userid } = this.props.match.params.id;
  const [userid, setuserid] = useState(props.match.params.id);
  const [senderid, setSenderid] = useState(localStorage.getItem("emailaddress"));
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  //const scrollRef = useRef(); // use for scrolling up

//const userid = this.props.match.params.id;
  //this.props.match.params.id localStorage.getItem("emailaddress"),
  useEffect(() => {
   // alert(userid);
    const getConversations = async () => {
      try {
        const res = await axios.get(base.BASE_URL + "/chatconversitonid/" + userid);
        setConversations(res.data);
        //console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [userid]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(base.BASE_URL + "/message/" + userid);
        setMessages(res.data);
        console.log('yyyy' + res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: userid,
      text: newMessage,
      conversationId: senderid,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== userid
    );

/*     socket.current.emit("sendMessage", {
      senderId: userid,
      receiverId,
      text: newMessage,
    }); */

    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div>
      <Headerchat />
      {/* Main Contents */}
      <div className="messages-container" style={{ marginTop: 66 }}>
        <div className="messages-container-inner">
          <div className="messages-inbox">
            <div className="messages-headline">
              <div className="input-with-icon" hidden>
                <input id="autocomplete-input" type="text" placeholder="Search" />
                <i className="icon-material-outline-search" />
              </div>
              <h2 className="text-2xl font-semibold">Chats</h2>
              <span className="absolute icon-feather-edit mr-4 text-xl uk-position-center-right cursor-pointer" />
            </div>
            <div className="messages-inbox-inner" data-simplebar>
              <ul>
                {conversations.map((conversation) => (

                   <div onClick={() => setCurrentChat(conversation)}>
                      <Conversation conversation={conversation} currentUser={userid} />  
                  </div> 
                  /*    <li>
                      <a href="#">
                        <div className="message-avatar"><i className="status-icon status-online" /><img src="assets/images/avatars/avatar-1.jpg" alt /></div>
                        <div className="message-by">
                          <div className="message-by-headline">
                            <h5>{c.friendid}</h5>
                            <span>4 hours ago</span>
                          </div>
                          <p>laoreet dolore magna aliquam erat volutpat sed diam nonummy</p>
                        </div>
                      </a>
                    </li>  */
                ))}

              </ul>
            </div>
          </div>
          <div className="message-content">
            <div className="messages-headline">
              <h4> Stella Johnson </h4>
              <a href="#" className="message-action text-red-500"><i className="icon-feather-trash-2" /> <span className="md:inline hidden"> Delete Conversation</span> </a>
            </div>
            <div className="message-content-scrolbar" data-simplebar>
              {/* Message Content Inner */}
              <div className="message-content-inner">

              {messages.map((m) => (
                   /*  <div ref={scrollRef}> */
                        <div>
                      <Message message={m} own={m.senderid === userid} />
                    </div>
                  ))}
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div>
                      <Message message={m} own={m.senderid === userid} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                   <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button> 
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>

                {/* Time Sign */}
{/*                 <div className="message-time-sign">
                  <span>28 June, 2018</span>
                </div> */}
         {/*        <div className="message-bubble me">
                  <div className="message-bubble-inner">
                    <div className="message-avatar"><img src="assets/images/avatars/avatar-2.jpg" alt /></div>
                    <div className="message-text"><p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet.</p></div>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="message-bubble">
                  <div className="message-bubble-inner">
                    <div className="message-avatar"><img src="assets/images/avatars/avatar-2.jpg" alt /></div>
                    <div className="message-text"><p>Laoreet.  dolore magna imperdiet quod mazim placerat facer possim. 👍</p></div>
                  </div>
                  <div className="clearfix" />
                </div> */}
            {/*     <div className="message-bubble me">
                  <div className="message-bubble-inner">
                    <div className="message-avatar"><img src="assets/images/avatars/avatar-2.jpg" alt /></div>
                    <div className="message-text"><p>Albuom commodo consequat. 😉</p></div>
                  </div>
                  <div className="clearfix" />
                </div> */}
                {/* Time Sign */}
                {/*           <div className="message-time-sign">
            <span>Yesterday</span>
          </div> */}

                {/* Typing Indicator */}
                {/*           <div className="message-bubble">
            <div className="message-bubble-inner">
              <div className="message-avatar"><img src="assets/images/avatars/avatar-2.jpg" alt /></div>
              <div className="message-text">
               
                <div className="typing-indicator">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </div> */}



              </div>
              {/* Message Content Inner / End */}
              {/* Reply Area */}
              <div className="message-reply">
                <textarea cols={1} rows={1} placeholder="Your Message" defaultValue={""} />
                <button className="button ripple-effect">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* End Main Div  */}
    </div>
  );

}
