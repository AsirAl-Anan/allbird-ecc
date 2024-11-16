// LoginForm.jsx
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import {  NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/UserContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
export default function LoginForm() {
  const navigate = useNavigate()
 const {createUserWithGoogle , ifNotLoggedIn, auth, user} = useContext(AuthContext)
  const [message, setMesage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 useEffect(()=>{
  if(!ifNotLoggedIn()){
    setMesage('You are not logged In')
    toast(message)
   return navigate('/')
   
  } 
 
 },[ifNotLoggedIn, navigate, message])
 const handleGoogleLogin = async () => {
  try {
    await createUserWithGoogle()
    toast('Logged In')
    navigate('/')
  }catch {
    console.log('error')
  }
 
   
 }
 const handleSingnIn =async () =>{
   try{
        await signInWithEmailAndPassword(auth, email, password)
        toast('Logged In')
   } catch (e) {
    console.log(e)
   }
 }
  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center h-screen bg-[#F1EBE7] ">
      <form className="w-full max-w-md p-8 bg-white shadow-md rounded" onSubmit={handleSingnIn}>
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input type="email" className="mb-4 w-full px-3 py-2 border border-gray-300 rounded" placeholder="Email" onChange={(e)=> {setEmail(e.target.value)}} />

        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input type="password" className="mb-4 w-full px-3 py-2 border border-gray-300 rounded" placeholder="Password" onChange={(e)=> {setPassword(e.target.value)}} />

        <NavLink type='submit' className="w-full block my-2 text-center py-2 bg-black text-white rounded hover:bg-gray-800">Sign In</NavLink>
        <NavLink onClick={handleGoogleLogin} className="btn block text-center w-full py-2  bg-black text-white rounded hover:bg-gray-800">Sign In with Google <FontAwesomeIcon icon={faGoogle} className='mx-2'/></NavLink>
        <div className="text-center mt-4">
          <NavLink href="#" className="text-sm text-gray-700 underline" to={'/updatepassword'}>Forgot Password?</NavLink>
        </div>
        <div className="text-center mt-4">
          <NavLink to={'/register'} className="block mt-4 text-blue-600 text-sm sm:text-base text-center">Dont Have an account? Sign up</NavLink>
        </div>
      </form>
    </div>
    <Footer />
    </>
  
  );
}