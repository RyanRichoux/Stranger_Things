import React from 'react'

const Register = () =>{
    return   (
    <form>
    <label>Username:</label>
    <input/>
    <label>Password:</label>
    <input/>
    <label>Email:</label>
    <input/>
    <button type="submit">submit</button>
    </form>
    )
}


/*fetch('http://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: 'superman27', <--- Needs to come from a textbox.
      password: 'krypt0n0rbust' <--- Needs to come from a textbox.
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error); */





export default Register 