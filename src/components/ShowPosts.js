import React, {useState} from 'react';
import { fetchPosts } from '../api';


const ShowPosts = (props) =>{
  // post id, title, price, description, author, location, createdAt, updatedAt, isAuthor
  // edit button
  // delete button
  const {allPosts, setAllPosts} = props
    
  function fetchPosts () { 
    return fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts')
      .then(response => response.json())
      .then(data => {
        setAllPosts(data)  
          
      })
    .catch(console.error)
    }
    
    
    if (allPosts){
      //checks to see if allPosts is true.

      //const {author, description, location, price, isAuthor, willDeliver} = allPosts.data.posts[0]
  
    
    return allPosts.data.posts.map ( ({_id, title, description, location, author, createdAt, updatedAt}) => 
      <div className= "mainContainer">
      <div className = "postBox" id={_id}>
      <span className = "postTitle">Title: {title}</span>
      <span className = "postDescription"></span><h4>Description: {description}</h4>
      <span className = "postLocation">Location: {location} </span>
      <span className = "postAuthor">Created By: {author.username}</span>
      <span className = "postCreatedUpdated">{createdAt}, {updatedAt}, [isAuthor]</span>
      <button className = "postEdit">Edit</button><button className = "postDelete">Delete</button>
      </div>
      </div>
    )
    
    
  }else{fetchPosts()}
  
  return  ( 
    <></>
    )
}






export default ShowPosts 