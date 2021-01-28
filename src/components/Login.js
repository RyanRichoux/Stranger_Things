import React from 'react'

const Login = () => {
    return  ( 
    <>
    <h2> Login Page</h2>

       <form>
        <label>Username:</label>
        <input/>
        <label>Password:</label>
        <input/>
        <button type="submit">submit</button>
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