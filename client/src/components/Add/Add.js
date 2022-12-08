import React from 'react'
import { useContext } from "react";
import { AppContext } from "../../context/auth.context";


function Add() {

  const { user, handleAddRecipe } = useContext(AppContext)

  async function handleAddRecipe(event){
    console.log(event.target.title.value)
    event.preventDefault()
    const {title, description} = event.target
    console.log(image)

    //res needs to be set and 

    let response  = await axios.post('***', {
    title: title.value,
    description: description.value,
    
    })

        


    setMyRecipe([myresponse.data, ...myRecipe])
    
  }

  if(!user){
    return
  }

  return (
    <form onSubmit={handleAddRecipe} enctype="multipart/form-data">
    <div id="loginform">
    <h2 id="headerTitle">Enter Personal Recipe Details</h2>
    
     
     <div class="row">     
    <label>Enter Title</label>
    <input  name="title"  type="text"  placeholder="Enter title"/>
    </div>  
    
    
   
    
      <div class="row">
      <input  name="description"  type="text"  placeholder="Description"/>
      <button  type="submit" id="fix" >Add Todo</button>
      </div>
    
       </div>
    
    
    </form>
  )
}

export default Add