import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext/UserContext"
const Logout = () => {
 const {userSignOut} = useContext(AuthContext)
 console.log(use)
 userSignOut.then(()=> console.log('sign out'))
  return (
    <div>
      
    </div>
  )
}

export default Logout