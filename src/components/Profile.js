import React from 'react'
import Messages from "./Messages"

const Profile = () =>{

  
    return  ( <div>
     <h1> Profile Page</h1> 



      <Messages/>
    </div>
    
    )
}




/*fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/users/me', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer TOKEN_STRING_HERE'
  },
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);*/



export default Profile 