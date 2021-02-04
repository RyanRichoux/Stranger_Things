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

  return (
    <Router>
      <Header/>
      <form>
        <label>Search:</label>
        <input/>
      </form>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Post">Post</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/ShowPosts">See Posts</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
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
            setAllPosts = {setAllPosts}
            allPosts = {allPosts}/>
            </div>
          </Route>
          <Route path="/Register">
            <Register 
            setAuthorized = {setAuthorized}/>
          </Route>
          <Route path="/Login">
            <Login
             setAuthorized = {setAuthorized}
             authorized = {authorized}
            />
          </Route>
          
          <Route path="/Messages"><Messages/></Route>
          
        </Switch>
      </div>

    </Router>
    
  );
}

ReactDOM.render (<App/>, document.getElementById('app'))

