import React from 'react'
import { fetchPosts } from '../api';


const ShowPosts = () =>{
  // post id, title, price, description, author, location, createdAt, updatedAt, isAuthor
  // edit button
  // delete button 
    return   <div className = "postBox">
    <span className = "postTitle"> title and price </span>
    <span className = "postDescription">description</span>
    <span className = "postLocation">location </span>
    <span className = "postAuthor">author</span>
    <span className = "postCreatedUpdated">createdAt ,updatedAt, isAuthor</span>
    <button className = "postEdit">Edit your post</button><button className = "postDelete">delete your post</button>
    </div>
  
}


/*fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts')
  .then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);*/



export default ShowPosts 