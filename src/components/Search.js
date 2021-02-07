import React, {useState, useEffect} from 'react';
//import handleDelete from './ShowPosts';
import callMessages from "./ShowPosts"

const Search = (props) =>{
    const {searchValue, authorized, setAllPosts, allPosts} = props
    const [filteredPosts, setFilteredPosts] = useState([])

    function fetchPosts () { 
        return fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts')
          .then(response => response.json())
          .then(data => {
            setAllPosts(data.data.posts)
          })
        .catch(console.error)}
    
    const handleDelete = async (deletePost) => {
        console.log('deletePost: ', deletePost)
        alert('Post is deleted!')
        const res = await fetch (`https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts/${deletePost}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authorized}`
          }
        }) 
        const data = await res.json();
        console.log('data ', data) 
        if(data){fetchPosts()}
     }

    useEffect (() => {
        setFilteredPosts(allPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase())))
        console.log (filteredPosts)
        console.log (searchValue)}, [searchValue])
      
    return filteredPosts.map ( ({_id, title, description, location, author, price, createdAt, updatedAt}) => 
      
    <div className = "postBox" key={_id}>
      <span className = "postTitle">Title: {title} Price: {price}</span>
      <span className = "postDescription"></span><h4>Description: {description}</h4>
      <span className = "postLocation">Location: {location} </span>
      <span className = "postAuthor">Created By: {author.username}</span>
      <span className = "postCreatedUpdated">{createdAt}, {updatedAt}, [isAuthor]</span>
      <button type="button" className="postDelete" onClick={() => handleDelete(_id)}>Delete</button>
    
    </div>
    
  )
  
}


export default Search 