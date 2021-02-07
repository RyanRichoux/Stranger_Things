import React, {useState} from 'react'



const AllPostsFunction = (props) =>{
    const {allPosts} = props
    console.log ("we are here")
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

  export default AllPostsFunction 