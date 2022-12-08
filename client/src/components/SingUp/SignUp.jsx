import React from 'react'
import { Button } from 'react-bootstrap'

function SignUp() {
  return (
    <div id="loginform">
    <h2 id="headerTitle">Signup to Phin todos</h2>
    <form >
    <div class="row">
    
          <label>Username</label>
          <input name="username" type="text" placeholder="Enter username"/>
          
        </div>  
  
        <div class="row">
        
          <label>Password</label>
          <input name="password" type="password" placeholder="Enter password"/>
          
        
         <Button  type="submit" id="fix" >Sign up</Button>
       </div>
    </form>
    
      </div>
      )
    }
    
    export default SignUp 
    