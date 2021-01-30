import React, { useState } from 'react';
import { default as ShowPosts } from './ShowPosts';

const Post = (props) =>{
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [delivery, setDelivery] = useState('')
  const [price, setPrice] = useState('')
  const {authorized, setAuthorized} = props
  
  const handleSubmit = (evt) =>{
    evt.preventDefault()
    
    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authorized}`
      },
      body: JSON.stringify({
        post: {
          title: JSON.stringify({title}), 
          description: JSON.stringify({description}),
          price: JSON.stringify({price}),
          willDeliver: false //need to update this to an actual variable.
        }
      })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(console.error);
  }

    return   (
      <form onSubmit={handleSubmit}>
        <h1> Create New Post:</h1>
        <label>Title:</label>
        <input type = "text" required
        onChange = {event => setTitle(event.target.value)}
        />
        <label>Description:</label>
        <input type = "text" required
        onChange = {event => setDescription(event.target.value)}
        />
        <label>Price:</label>
        <input type = "text" required
        onChange = {event => setPrice(event.target.value)}
        />
        <label>Delivery:</label>
        <input type = "text" required
        onChange = {event => setDelivery(event.target.value)} //This needs to be a boolean.
        />
        <button type="submit">submit</button>
        
      </form>
      )}



export default Post