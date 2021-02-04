import React, { useState } from 'react';


const Update = ({posts, setPosts, postId, setPostId }) => {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

 const handleSubmit = async (eve) => {
   eve.preventDefault();
   console.log('title, body: ', title, body);
   console.log('postId: ', postId);
   const resp = await fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts/${postId}`,{
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
   title, 
   body,
   })
 })
 const data = await resp.json();
 console('data: ', data)
 if( data && data.title){
   const newPostArr = posts.map( post => {
     if (post.id === postId){
       return data;
     } else {
       return post;
     }
   })
   setPosts(newPostArr)
   setTitle('');
   setBody('');
   setPostId(null); // need to show update form with correct id
 }
 }



return (<>
<h3>
  Update a Post
</h3>



<form onSubmit={handleSubmit}>
  <input type='text'
  placeholder="title" value={title}
  onChange={(eve) => setTitle(eve.target.value)}
  ></input>
  <input type='text'
  placeholder="body" value={body}
  onChange={(eve) => setTitle(eve.target.value)}
  ></input>
  <button type="submit" className="sub">Submit</button>
</form>
</>

)



}
