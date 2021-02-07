import React, {useState} from 'react'
import Messages from "./Messages"

const YourPosts = (props) =>{
  const {authorized, currentUser} = props
  
  const [allPosts, setAllPosts] = useState(false)


 
  function fetchMessages () { 
      return fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/users/me', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authorized}`
          },
        }).then(response => response.json())
          .then(result => {
            console.log(result);
            setAllPosts(result.data.posts)
          })
          .catch(console.error);}

      if (authorized && allPosts){

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
        
      
        
      ))
        
        
      }else{fetchMessages()}
      
      return  ( 
        <></>
        )
      }


export default YourPosts