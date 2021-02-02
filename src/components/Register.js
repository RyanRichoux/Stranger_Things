import React, {useState } from 'react';

const Register = (props) =>{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setAuthorized} = props
  const handleSubmit = (evt) =>{
    evt.preventDefault()
    alert(`Submitting Name ${username} and ${password}`)
    fetch('http://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/users/register', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: JSON.stringify({username}) , 
        password: JSON.stringify({password}), 
      }
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result)
      if (result.success){
        alert("Registered.")
        setAuthorized(result.data.token)
      } else {alert("Username Already Taken.")}
    })
    .catch(console.error);
    
    console.log (JSON.stringify({username}))
  }

    return   (
    <form onSubmit={handleSubmit}>
      <h1> Registration:</h1>
    <label>Username:</label>
    <input type = "text" required
    onChange = {event => setUsername(event.target.value)}
    />
    <label>Password:</label>
    <input type = "password" required
    onChange = {event => setPassword(event.target.value)}
    />
    <button type="submit">submit</button>
    <h1> {username}</h1>
    </form>
    )
}





export default Register 