import React, {useState} from 'react'
import Messages from "./Messages"

const Profile = (props) =>{
const {authorized} = props
  


    const {allMessages, setAllMessages} = useState(false)
    
    function fetchMessages () { 
      return fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/users/me'), {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authorized}`
        }
        .then(response => response.json())
        .then(data => {
          setAllMessages(data)  
            console.log(allMessages)
        })
      .catch(console.error)
      }
      
      
      if (authorized && allMessages){
        //checks to see if allPosts is true.
  
        //const {author, description, location, price, isAuthor, willDeliver} = allPosts.data.posts[0]
        return allPosts.data.posts.map ( ({}) => 
         <div className= "mainContainer">
        <h2> Messages</h2>
        <div className = "postBox">
          <span className = "postTitle">Subject of message</span>
          <span className = "postAuthor">from: username</span>
          <span className = "postDescription">Content</span>
        </div>
      </div>
        )
        
        
      }else{fetchMessages()}
      
      return  ( 
        <></>
        )




      }
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