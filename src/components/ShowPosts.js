import React from 'react'
import { fetchPosts } from '../api';


const ShowPosts = () =>{
  // post id, title, price, description, author, location, createdAt, updatedAt, isAuthor
  // edit button
  // delete button 
    return   <div className = "post">This is a post
    <span> <h3>title and price</h3> </span>
    <h4>description</h4>
    <span>


    <h4>location
    author
    createdAt
    updatedAt
    isAuthor</h4>

    </span>
    <button>Edit your post</button>
    <button>delete your post</button>
    </div>
  
}


/*fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts')
  .then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);*/



export default ShowPosts 