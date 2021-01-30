import React from 'react'
import { fetchPosts } from '../api';


const ShowPosts = (Props) =>{
  // post id, title, price, description, author, location, createdAt, updatedAt, isAuthor
  // edit button
  // delete button
  async function fetchPosts () { 
    return fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts')
      .then(response => response.json())
      .then(data => {
          
            return data
      })
    .catch(console.error)
    }

    const postData = fetchPosts()
    console.log (postData)
  

  
    return   <div className= "mainContainer">
            <div className = "postBox">
        <span className = "postTitle"></span>
        <span className = "postDescription"></span><h4>Description: [Description]</h4>
        <span className = "postLocation">Location: [Location] </span>
        <span className = "postAuthor">Created By: [Author]</span>
        <span className = "postCreatedUpdated">[CreatedAt], [UpdatedAt], [isAuthor]</span>
        <button className = "postEdit">Edit</button><button className = "postDelete">Delete</button>
      </div>
    </div>
  
}

/*<div className= "mainContainer">
      <div className = "postBox">
        <span className = "postTitle"> [Title] & [Price] </span>
        <span className = "postDescription"></span><h4>Description: [Description]</h4>
        <span className = "postLocation">Location: [Location] </span>
        <span className = "postAuthor">Created By: [Author]</span>
        <span className = "postCreatedUpdated">[CreatedAt], [UpdatedAt], [isAuthor]</span>
        <button className = "postEdit">Edit</button><button className = "postDelete">Delete</button>
      </div>
    </div>*/




export default ShowPosts 