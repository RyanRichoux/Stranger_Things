import React, {useState} from 'react'
import Messages from "./Messages"

const Profile = (props) =>{
  const {authorized} = props
  const [allMessages, setAllMessages] = useState(false)
  const [allPosts, setAllPosts] = useState(false)

  function allMessagesFunction (allMessages) {
    console.log ("we are here")
    return (allMessages.map ( ({_id, post ,fromUser, content }) => 
    <div className= "mainContainer">
      <h2> Messages</h2>
      <div className = "postBox">
        <span className = "postTitle">{post.title}</span>
        <span className = "postAuthor">from {fromUser.username}</span>
        <span className = "postDescription">{content}</span>
        <Messages
      _id = {_id}
      authorized = {authorized}/>
      </div>
    </div>
    
  ))}

  function allPostsFunction (allPosts) {
    return (allPosts.map ( ({_id, title, description, location, author, price, createdAt, updatedAt, willDeliver, isAuthor}) => 
      
    <div className = "postBox" key={_id}>
      <span className = "postTitle">Title: {title} Price: {price}</span>
      <span className = "postDescription"></span><h4>Description: {description}</h4>
      <span className = "postLocation">Location: {location} </span>
      <span className = "postLocation">Delivery: {willDeliver? "Yes" : "No"} </span>
      <span className = "postAuthor">Created By: {author.username}</span>
      <span className = "postCreatedUpdated">{createdAt}, {updatedAt}</span>
      <hr></hr>
      <hr></hr>
      {!authorized ? "You are currently not logged in and cannot send messages or create posts." 
      : currentUser === author.username ? <button type="button" className="postDelete" onClick={() => handleDelete(_id)}>Delete</button>
      : <Messages
      _id = {_id}
      authorized = {authorized}/>}
    </div>
    
  ))}
 
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
            setAllPosts(result.data.posts)
          })
          .catch(console.error);}

      if (authorized && allMessages){

        return (<div>
        <button type="button" className="postDelete" onClick={() => allMessagesFunction(allMessages)}>Show Messages</button>
        <button type="button" className="postDelete" onClick={() => allPostsFunction (allPosts)}>Show Posts</button>
        </div>)
        
        
      }else{fetchMessages()}
      
      return  ( 
        <></>
        )
      }








export default Profile 