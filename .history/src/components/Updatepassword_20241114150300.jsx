import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Eye, EyeOff } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/UserContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
const Updatepassword = () => {

 const {sendPasswordResetEmail , user, reauthenticateWithCredential, EmailAuthProvider, updatePassword,auth} = useContext(AuthContext)
 const navigate = useNavigate()
 console.log(user.email)
 const [message, setMessage] = useState('');
    const [showPass, setShowPass] = useState(false);
const [showNewPass, setShowNewPass] = useState(false);
  const [password, setPasword] = useState('')
  const [newPassword, setNewPasword] = useState('')
  const [confirmNewPassword, setConfirmNewPasword] = useState('')
  const [display, setDisplay ] = useState(false)
  const passUpdateRef = useRef()
  
  useEffect(()=>{
    if(message){
        toast(message)
    }
   
  },[message] , )
  
 console.log(user)
  const passwordUpdateEmail = () => {
    console.log('clicked')
   try {
    if(!user){
      setMessage('Please login first')
    } else if (user?.email)
   }
  }

  const handleUpdatePassword = async () =>{
    try {
        if(!user){
            toast('Not signed in')
            return
        } else if (user?.providerData[0].providerId === 'google.com'){
            toast("Google account's password cannot be updated")
            return

         } else if (newPassword !== confirmNewPassword){
            toast('Passwords do not match')
            return
         }
        
        else {
            console.log('entered')
            const credential = EmailAuthProvider.credential(user.email , password)
            console.log(credential)
            await reauthenticateWithCredential(user, credential)
            
            console.log('reauthenticated')
        }
        await updatePassword(user, newPassword).then(()=>setMessage('Password Updated'), console.log('password updated success')).catch((e)=> setMessage(e))
        
        setTimeout(() => {
          navigate('/profile')
        }, 500);
       
    } catch (e) {
        setMessage("the error is ",e)
    }
       
  }
return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Account</h2>
        <p className="text-gray-600 mb-6">Update account password</p>

        <form>
        <div className="relative mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Current Pasword</label>
            <div className="flex items-center">
              <input
                type={showPass ? 'text' : 'password'}
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="Confirm Password"
                onChange={(e)=> setPasword(e.target.value) }
              />
              <div className="absolute top-2/3 right-3 transform -translate-y-1/2 flex items-center cursor-pointer">
                <NavLink onClick={()=> setShowPass(!showPass)}>
                  {showPass ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </NavLink>
              </div>
            </div>
          </div>

          <div className="relative mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">New Password</label>
            <div className="flex items-center">
              <input
                type={showNewPass ? 'text' : 'password'}
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="Confirm Password"
                onChange={(e)=> setNewPasword(e.target.value) }

              />
              <div className="absolute top-2/3 right-3 transform -translate-y-1/2 flex items-center cursor-pointer">
                <NavLink onClick={()=>{setShowNewPass(!showNewPass)}}>
                  {showNewPass ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </NavLink>
              </div>
            </div>
          </div>
          <div className="relative mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Confirm New Password</label>
            <div className="flex items-center">
              <input
                type={showNewPass ? 'text' : 'password'}
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="Confirm Password"
                onChange={(e)=> setConfirmNewPasword(e.target.value) }
              />
              <div className="absolute top-2/3 right-3 transform -translate-y-1/2 flex items-center cursor-pointer">
                <NavLink onClick={()=>{setShowNewPass(!showNewPass)}}>
                  {showNewPass ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </NavLink>
              </div>
            </div>
          </div>

        </form>

        <p className="text-xs text-gray-500 mt-4" >
          By updating your password, you agree to our <a href="#" className="text-indigo-500">Terms of Use</a> and <a href="#" className="text-indigo-500">Privacy Policy</a>.
        </p>
        <p className="text-center text-sm text-indigo-500 mt-6 cursor-pointer" onClick={()=>{setDisplay(!display)}}>Forgot old Password?</p>
        {
          display &&    <NavLink ref={passUpdateRef} className={"btn  text-center w-full py-2 my-2 mt-4 bg-teal-500 text-white rounded hover:bg-gray-800 block"} onClick={passwordUpdateEmail}>
          Send Password update email
    </NavLink>
        }
     
        <NavLink className="btn block text-center w-full py-2 my-2 mt-4 bg-teal-500 text-white rounded hover:bg-gray-800" onClick={handleUpdatePassword}>
            Update password
        </NavLink>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Updatepassword;
