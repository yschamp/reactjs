import { useContext, useState } from "react"
import UserContext from "../context/UserContext"

export default function Login(){
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const { setUser } = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        setUser({username, password})
    }

    return(
        <>
            <h1> LOGIN </h1>
            <input type="text" placeholder="Username"  value = {username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" placeholder="Password"  value = {password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}