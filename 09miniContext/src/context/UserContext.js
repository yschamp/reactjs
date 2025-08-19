import { createContext } from "react"

const UserContext = createContext()

export default UserContext


// The Children compoents can access this variable through a context. The children compoents need to be 
// enclosed within the provider to access the context

{/* <ContextProvider>
    <Card />
</ContextProvider> */}