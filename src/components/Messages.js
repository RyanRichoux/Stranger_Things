import React from 'react'

const Messages = () =>{
    return <> <h2> Messages</h2>
     <h3>Subject of message</h3>
      <h4>from: username</h4>
      <h4>content</h4>
</>
}



/*fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts/5e8929ddd439160017553e06/messages', {
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