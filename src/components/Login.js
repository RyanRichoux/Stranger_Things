import React, {useState } from 'react';

const Login = (props) =>{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setAuthorized} = props
  const handleSubmit = (evt) =>{
    evt.preventDefault()
    alert(`Submitting Name ${username} and ${password}`)
    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/users/login', {
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
        console.log(result);
        if (result.success){
          alert("Logged in.")
          setAuthorized(result.data.token)
        } else {alert("Failed to login.")}
      })
      .catch(console.error)
  }

    return   (
    <form onSubmit={handleSubmit}>
      <h1> LogIn:</h1>
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



/*fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/users/login', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: 'superman27',
      password: 'krypt0n0rbust'
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
*/


export default Login 