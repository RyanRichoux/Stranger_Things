import React, {useState} from 'react';
import { fetchPosts } from '../api';
import Update from "./Update"


const ShowPosts = (props) =>{
  // post id, title, price, description, author, location, createdAt, updatedAt, isAuthor
  // edit button
  // delete button
  const {allPosts, setAllPosts} = props
  const {authorized} = props
  //const [postId, setPostId] = useState(null);


  const handleDelete = async (deletePost) => {
    console.log('deletePost: ', deletePost)
    const res = await fetch (`https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts/${deletePost}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authorized}`
      }
    }) 
    const data = await res.json();
    console.log('data ', data);
    if(data){
      fetchPosts ()
    }
    
 }


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
     
    return allPosts.data.posts.map ( ({_id, title, description, location, author, price, createdAt, updatedAt}) => 
      
      <div className = "postBox" key={_id}>
      <span className = "postTitle">Title: {title} Price: {price}</span>
      <span className = "postDescription"></span><h4>Description: {description}</h4>
      <span className = "postLocation">Location: {location} </span>
      <span className = "postAuthor">Created By: {author.username}</span>
      <span className = "postCreatedUpdated">{createdAt}, {updatedAt}, [isAuthor]</span>
      <button type="button" className="postEdit" onClick={() => {
        setPostId(_id)
      }}>Edit</button>
      <button type="button" className="postDelete" onClick={() => handleDelete(_id)}>Delete</button>
      <button className = "postEdit">Message</button>
      </div>
      
    )
    
    
  }else{fetchPosts()}
  
  return  ( 
    <></>
    )
}






export default ShowPosts 