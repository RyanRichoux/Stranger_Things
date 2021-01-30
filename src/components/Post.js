import React from 'react'
import { default as ShowPosts } from './ShowPosts';

const Post = () =>{
    return   (
    

  <>
  <ShowPosts/>
  <ShowPosts/>
  </>
    )
}

/*fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer TOKEN_STRING_HERE'
  },
  body: JSON.stringify({
    post: {
      title: From Text Box., 
      description: From Text Box.
      price: From Text Box., 
      willDeliver: From Text Box.
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error); */





export default Post 