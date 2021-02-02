import React, {useState} from 'react';
import { fetchPosts } from '../api';


const ShowPosts = (props) =>{
  // post id, title, price, description, author, location, createdAt, updatedAt, isAuthor
  // edit button
  // delete button
  const {allPosts, setAllPosts} = props
  const [thePosts, setThePosts] = useState ()
   
  function fetchPosts () { 
    return fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts')
      .then(response => response.json())
      .then(data => {
        setAllPosts(data)
        
        
          
      })
    .catch(console.error)
    }
    
    
    if (allPosts){
    console.log(allPosts)
    console.log (allPosts.data.posts[0].author.username)}
    {fetchPosts()}
    
 
    return  (
      
     <div className= "mainContainer">
            <div className = "postBox">
        <span className = "postTitle">Title</span>
        <span className = "postDescription"></span><h4>Description: [Description]</h4>
        <span className = "postLocation">Location: [Location] </span>
        <span className = "postAuthor">Created By: [Author]</span>
        <span className = "postCreatedUpdated">[CreatedAt], [UpdatedAt], [isAuthor]</span>
        <button className = "postEdit">Edit</button><button className = "postDelete">Delete</button>
      </div>
    </div>
    )
  
}





export default ShowPosts 