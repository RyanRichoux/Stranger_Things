import React, {usestate} from 'react'


const Messages = () =>{
  const {allMessages, setAllMessages} = useState(false)
    
  function fetchPosts () { 
    return fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/users/me')
      .then(response => response.json())
      .then(data => {
        setAllMessages(data)  
          console.log(allMessages)
      })
    .catch(console.error)
    }
    
    
    if (allPosts){
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
      
      
    }else{fetchPosts()}
    
    return  ( 
      <></>
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