import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext/UserContext"
const Logout = () => {
 const {userSignOut} = useContext(AuthContext)
 userSignOut
  return (
    <div>
      
    </div>
  )
}

export default Logout