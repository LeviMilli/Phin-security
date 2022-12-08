import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import {AppContext} from '../../context/auth.context'
import { useNavigate } from 'react-router-dom'

function Login() {
	let navigate = useNavigate()
	const { 
		user
	 }  = useContext(AppContext)


	let test = "-> admin login <-";


	if(user){
        return navigate('/')
      }
    
	  

return (
	
<div id="loginform">
<h2 id="headerTitle">Welcome Back</h2>
<form >
<div class="row">

		  <label>Email</label>
		  <input name="email" type="email" placeholder="Enter email"/>
		  
		</div>  
		<div class="row">
		  <label>Password</label>
		  <input name="password" type="password" placeholder="Enter password"/>
		  
		
     <Button  type="submit" id="fix" >Log In</Button>
   </div>
</form>
<p>{test} </p>
<p>test@test.com</p>
<p>test </p>
  </div>

)
}

export default Login