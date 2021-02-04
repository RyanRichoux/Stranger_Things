import React, {useState} from 'react';

const Login = (props) =>{
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const {setAuthorized, authorized} = props
   
  

  const handleSubmit = (evt) =>{
    evt.preventDefault()
    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    }).then(response => response.json())
      .then(result => {
        console.log(result)
        
        if (result.success){
          alert("Logged in.") //for testing. 
          setAuthorized (result.data.token) 
        } else {alert("Failed to login.") 
        //for testing
      }
      })
      .catch(console.error)
      
  }

    return   (
      <form onSubmit={handleSubmit}>
      <h1> Login:</h1>
      <label>Username:</label>
      <input name = "Username" required
      onChange = {e => setUser({ ...user, username: e.target.value} )}
      />
      <label>Password:</label>
      <input type = "password" required
      onChange = {e => setUser({ ...user, password: e.target.value} )}
      />
      <button type="submit">submit</button>
    
    </form>
    )
}


export default Login 