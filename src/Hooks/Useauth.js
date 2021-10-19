import { useContext } from "react"
import { authContext } from "../Context/Authprovider"

const Useauth=()=>{
    return useContext(authContext)
}

export default Useauth;