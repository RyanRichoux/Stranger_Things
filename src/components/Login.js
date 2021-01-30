import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState ()
  const [password, setPassword] = useState()
  function authenticate (){
    //checks that the user has entered stuff.
    //Ajax request.
    //Backend responds if user is good to go.

  }

    return  ( 
    <>
    <h2> Login Page</h2>

       <form>
        <label className = "userName">Username:</label>
        <input/>
        <label className = "password">Password:</label>
        <input/>
        <button type="submit" >submit</button>
        </form>
        </>
    )


}




/*fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/login', {
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