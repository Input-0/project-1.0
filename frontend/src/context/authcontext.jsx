import { Children, createContext, useContext, useEffect, useState } from "react";
import localforage from "localforage"

let userContext = createContext()



export let UsercontextProvider = ({children}) => {
    let [user,setUser] = useState([])
    
    


const getStart =async (data) => {
    console.log("data from context",data);
  let udata =   await localforage.getItem("users") 
  if(udata){
    setUser([...udata,data])
  }else{
    setUser(data)
  }
//   console.log("datakdfkasdf:",udata);

  
  


}
useEffect(() =>{
    async function calltheOne (){
        if(user.length){
            console.log("first");
            
        await localforage.setItem("users",user)
    }
    }
    calltheOne()
},[user])


// console.log("newUser",user);




console.log(user);






return (
    <userContext.Provider value={{getStart}}>
        {children}
    </userContext.Provider>
)

}


export function useUserContext(){
    return useContext(userContext)
}