import React from 'react'

const Messages = () =>{
    return <div className= "mainContainer">
      <h2> Messages</h2>
      <div className = "postBox">
        <span className = "postTitle">Subject of message</span>
        <span className = "postAuthor">from: username</span>
        <span className = "postDescription">Content</span>
      </div>
    </div>
}



/*fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts/5e8929ddd439160017553e06/messages', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer TOKEN_STRING_HERE'
  },
  body: JSON.stringify({
    message: {
      content: "Do you still have this?  Would you take $10 less?"
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error); */



export default Messages 