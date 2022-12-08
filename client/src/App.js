import { useContext, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Title from "./components/Title/Title";
import Login from "./components/Login/Login";
import SignUp from "./components/SingUp/SignUp";
import axios from "axios";
import { AppContext } from "./context/auth.context";
import Todos from "./components/Todos/Todos"
import Add from "./components/Add/Add";

export default function App() {
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  const {user, setUser,
        todo, setTodo,
        handleLogOut
          } = useContext(AppContext)

  let navigate = useNavigate()


  async function handleSignUp(event){
    console.log(event)
    event.preventDefault()
    
    let user = {
      username: event.target.username.value, 
      password: event.target.password.value, 
    }
    try {
      await axios.post('***/api/signup', user, {withCredentials: true})
      navigate('/signin')
    }
    catch(err){
      setError(err.response.data.errorMessage)
    }
  }


  async function handleSignIn(event){
    event.preventDefault()
    let user = {
      email: event.target.email.value, 
      password: event.target.password.value, 
    }
    try {
      let response = await axios.post('***/api/signin', user,{withCredentials: true})
      setUser(response.data)
    }
    catch(err){
      setError(err.response.data.errorMessage)
    }
   
  }


  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={[<Title/>, <Todos/>, <Add/>]} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/add/:id" element={<Add/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
