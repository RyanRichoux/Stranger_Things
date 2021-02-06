import React, {useState, useEffect} from 'react'

import { 
    fetchPosts
  } from '../api';

const Search = ({allPosts}) =>{
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
  }

 useEffect(() => {
   const postMatches = allPosts.filter(post => post.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setPosts(postMatches)
 }, [searchTerm])

  // function postMatches(post, text) {
  //   // return true if any of the fields you want to check against include the text
  //   // strings have an .includes() method 
  //   return post.toLowerCase().includes(text) 
  // }

  //const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
  //const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  // then, in our jsx below... map over postsToDisplay instead of posts

 



    return   (
      <div className="search">
        <input
       type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
      />
      
    <ul>
      {posts.map(item => (
        <li key={item}>{item}</li>
        ))}
    </ul>
        </div>
    )


}





export default Search 