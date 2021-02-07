import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import {
  Footer,
  Header,
  Login,
  Messages,
  Post,
  Profile,
  Register,
  Search,
  ShowPosts
  

} from './components';

 //States
 //Authed or not.
 //Search?
 //User Information


export default function App() {
  const [allPosts, setAllPosts] = useState (false)
  const [authorized, setAuthorized] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [searchValue, setSearchValue] = useState('') 

  function fetchPosts () { 
    return fetch('https://strangers-things.herokuapp.com/api/2010-LSU-WEB-PT/posts')
      .then(response => response.json())
      .then(data => {
        setAllPosts(data.data.posts)
      })
    .catch(console.error)}
    
  fetchPosts()

  return (
    <Router>
      <Header/>
      <form>
        <input type="text" className="search" placeholder="Search..." onChange = {e => setSearchValue(e.target.value )}/>
    <Link to = "/Search">Search</Link> 
      </form>
      <div>
        <nav>
          <ul>
          {authorized ? <li>
              <Link to="/Post">Post</Link>
            </li>: null}
            {authorized ?<li>
              <Link to="/Profile">Profile</Link>
            </li>: null}
            <li>
              <Link to="/ShowPosts">See Posts</Link>
            </li>
            {!authorized?<li>
              <Link to="/Register">Register</Link>
            </li> : null}
            {!authorized?<li>
              <Link to="/Login">Login</Link>
            </li> : null}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Post">           
            <Post authorized= {authorized}/>
          </Route>
          <Route path="/Profile" >
            <Profile
            authorized= {authorized}
            />
          </Route>
          <Route path="/ShowPosts" >
          <div className= "mainContainer">
          <ShowPosts
            authorized = {authorized}
            currentUser = {currentUser}
            setAllPosts = {setAllPosts}
            allPosts = {allPosts}
            searchValue = {searchValue}/>
            
            </div>
          </Route>
          <Route path="/Register">
            {!authorized? <Register 
            setAuthorized = {setAuthorized}/>: null}
          </Route> 
          <Route path="/Login">
            {!authorized? <Login
            currentUser = {currentUser}
            setCurrentUser = {setCurrentUser}
            setAuthorized = {setAuthorized}
            authorized = {authorized}
            /> : null}
          </Route>
          <Route path="/Search">
            <Search
             allPosts = {allPosts}
             authorized = {authorized}
             searchValue = {searchValue}
             setSearchValue = {setSearchValue}
             setAllPosts = {setAllPosts}
            />
          </Route>
          
          <Route path="/Messages"><Messages/></Route>
          
        </Switch>
      </div>

    </Router>
    
  );
}



ReactDOM.render (<App/>, document.getElementById('app'))

