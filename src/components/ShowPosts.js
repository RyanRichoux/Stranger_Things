import React from 'react'
import { fetchPosts } from '../api';


const ShowPosts = () =>{
  // post id, title, price, description, author, location, createdAt, updatedAt, isAuthor
  // edit button
  // delete button 
    return   <div className= "mainContainer">
      <div className = "postBox">
        <span className = "postTitle"> [Title] & [Price] </span>
        <span className = "postDescription"></span><h4>Description: [Description]</h4>
        <span className = "postLocation">Location: [Location] </span>
        <span className = "postAuthor">Created By: [Author]</span>
        <span className = "postCreatedUpdated">[CreatedAt], [UpdatedAt], [isAuthor]</span>
        <button className = "postEdit">Edit</button><button className = "postDelete">Delete</button>
      </div>
    </div>
  
}


/*fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts')
  .then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);*/



export default ShowPosts 