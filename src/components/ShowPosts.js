import React from 'react'
import { fetchPosts } from '../api';


const ShowPosts = () =>{
    return   <div className = "post">This is a post</div>
}


/*fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts')
  .then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);*/



export default ShowPosts 