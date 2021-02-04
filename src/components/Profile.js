import React, {useState} from 'react'
import Messages from "./Messages"

const Profile = (props) =>{
  const {authorized} = props
  const {allMessages, setAllMessages} = useState(false)

  function fetchMessages () { 
      return fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/users/me', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authorized}`
          },
        }).then(response => response.json())
          .then(result 
            => {
            console.log(result);
          })
          .catch(console.error);}

      if (authorized && allMessages){

        return allMessages.data.messages.map ( ({_id, post ,fromUser, content }) => 
         <div className= "mainContainer">
        <h2> Messages</h2>
        <div className = "postBox"> id = {_id}
          <span className = "postTitle">{post.title}</span>
          <span className = "postAuthor">from {fromUser.username}</span>
          <span className = "postDescription">{content}</span>
        </div>
      </div>
        )
        
        
      }else{fetchMessages()}
      
      return  ( 
        <></>
        )
      }








export default Profile 