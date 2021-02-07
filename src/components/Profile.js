import React, {useState} from 'react'
import Messages from "./Messages"

const Profile = (props) =>{
  const {authorized, currentUser} = props
  const [allMessages, setAllMessages] = useState(false)
  

   
  function fetchMessages () { 
      return fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/users/me', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authorized}`
          },
        }).then(response => response.json())
          .then(result => {
            console.log(result);
            setAllMessages(result.data.messages)
            
          })
          .catch(console.error);}

      if (authorized && allMessages){

        return (allMessages.map ( ({_id, post, fromUser, content }) => 
        <div className= "mainContainer">
            <div className = "postBox">
            <span className = "postTitle">{post.title}</span>
            <span className = "postAuthor">from {fromUser.username}</span>
            <span className = "postDescription">{content}</span>
            <Messages
          _id = {_id}
          authorized = {authorized}/>
          </div>
        </div>
        
      ))
        
        
      }else{fetchMessages()}
      
      return  ( 
        <></>
        )
      }








export default Profile 