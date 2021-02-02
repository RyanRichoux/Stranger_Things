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
    console.log(allPosts)
    console.log (allPosts.data.posts[0].author.username)
    console.log (allPosts.data.posts[0].description)
    console.log (allPosts.data.posts[0].location)
    console.log (allPosts.data.posts[0].author)
    console.log (allPosts.data.posts[0].price)
    console.log (allPosts.data.posts[0].isAuthor)
    console.log (allPosts.data.posts[0].willDeliver)
    
    return allPosts.data.posts.map ( post => 
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
    
    
  }else{fetchPosts()}
  

 
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