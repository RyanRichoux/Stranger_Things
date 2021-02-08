import React, {useState} from 'react'
import { Redirect,Route } from "react-router-dom"
import Login from "./Login"

const LogOut = (props) =>{
    const {setAuthorized, setCurrentUser, authorized} = props
    

    function handleLogout (e) {
        e.preventDefault();
        setAuthorized(false);
        setCurrentUser("");
             <Route exact path="/LogOut">
                <Redirect to="/Login" component={Login}/>
                </Route>
    }
    

    return (
        <div>
           { authorized ? 
<div>
           <h1>
            Click the button below to log out

            </h1>
           <button onClick={handleLogout}>Log out</button> </div> : null
           
}
        </div>
           

)
}

export default LogOut 