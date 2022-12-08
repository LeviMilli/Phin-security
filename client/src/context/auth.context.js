import { createContext, useState, useEffect } from "react";
import axios from "axios";

let AppContext = createContext()

function AppContextWrapper(props){
    const [user, setUser] = useState(true);
    const [todo, setTodo]= useState([])
    
    async function handleLogOut(){
        await axios.get('https://foodsnitch.herokuapp.com/api/logout', {withCredentials: true})
        setUser(null)
      }


    return (
        <AppContext.Provider value={{
        user, setUser,
        todo, setTodo,
        handleLogOut
         }}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextWrapper}