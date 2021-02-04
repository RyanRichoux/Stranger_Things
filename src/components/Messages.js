import React, {usestate} from 'react'


const Messages = (props) =>{
  const {_id} = props
  const {message, setMessage} = useState("")

  console.log ("You made it here!")

  fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts/${_id}/messages`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authorized}`
    },
    body: JSON.stringify({message})
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
  
    
    return  ( 
      <form onSubmit={handleSubmit}>
      <h1> Message:</h1>
      <label>Message:</label>
      <input name = "Username" required
      onChange = {e => setMessage({ ...message, content: e.target.value} )}
      />
      <button type="submit">submit</button>
    
    </form>
      )
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