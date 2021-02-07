import React, {useState, useEffect} from 'react';
import { fetchPosts } from '../api';
import Messages from "./Messages"


const ShowPosts = (props) =>{
  // post id, title, price, description, author, location, createdAt, updatedAt, isAuthor
  // edit button
  // delete button
  const {allPosts, setAllPosts, authorized, searchValue} = props
  const [message, setMessage] = useState("")
  
  let postMatches = []
  
  

  //const [postId, setPostId] = useState(null);

  function callMessages(id,authorized){
    
    
    console.log (id +" "+ authorized)
    const handleSubmit = (evt) =>{
        evt.preventDefault()
        fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts/${id}/messages`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authorized}`
          },
          body: JSON.stringify({message})
        }).then(response => response.json())
          .then(result => {
            console.log(result);
          })
          .catch(console.error);
      return  ( 
        <form onSubmit={handleSubmit}>
        <h1> Message:</h1>
        <label>Message:</label>
        <input name = "Username" required
        onChange = {e => setMessage({ ...message, content: e.target.value} )}
        />
        <button type="submit">submit</button>
        </form>
      )
    }
    
  }


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
        
 }
 function fetchPosts () { 
  return fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts')
    .then(response => response.json())
    .then(data => {
      console.log(searchValue)
      setAllPosts(data.data.posts)
           

    })
  .catch(console.error)}
  
  if (allPosts){ 
    
     
    return allPosts.map ( ({_id, title, description, location, author, price, createdAt, updatedAt}) => 
      
      <div className = "postBox" key={_id}>
        <span className = "postTitle">Title: {title} Price: {price}</span>
        <span className = "postDescription"></span><h4>Description: {description}</h4>
        <span className = "postLocation">Location: {location} </span>
        <span className = "postAuthor">Created By: {author.username}</span>
        <span className = "postCreatedUpdated">{createdAt}, {updatedAt}, [isAuthor]</span>

        <button type="button" className="postDelete" onClick={() => handleDelete(_id)}>Delete</button>
        <Messages
        _id = {_id}
        authorized = {authorized}/>
      </div>
      
    )
    
    
  }else{fetchPosts()}
  
  return  ( 
    <></>
    )
}






export default ShowPosts 