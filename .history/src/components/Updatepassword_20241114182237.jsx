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
  const {
    sendPasswordResetEmail,
    user,
    reauthenticateWithCredential,
    EmailAuthProvider,
    updatePassword,
    auth,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user.email);
  const [message, setMessage] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [password, setPasword] = useState(''); 
  const [email, setEmail] = useState('')
  const [newPassword, setNewPasword] = useState('');
  const [confirmNewPassword, setConfirmNewPasword] = useState('');
  const [display, setDisplay] = useState(false);
  const passUpdateRef = useRef();

  useEffect(() => {
    if (message) {
      toast(message);
    }
  }, [message]);

  console.log(user);

  const passwordUpdateEmail = async () => {
    console.log('clicked');
    try {
      if (!user) {
        setMessage('Please login first');
      } else {
        await sendPasswordResetEmail(auth, user.email);
        alert('email sent')
      }
    } catch (e) {
      console.log(e);
    } finally {
      alert('done')
    }
  }; // <-- Added missing closing brace here

  const handleUpdatePassword = async () => {
    try {
      if (!user) {
        toast('Not signed in');
        return;
      } else if (user?.providerData[0].providerId === 'google.com') {
        toast("Google account's password cannot be updated");
        return;
      } else if (newPassword !== confirmNewPassword) {
        toast('Passwords do not match');
        return;
      } else {
        console.log('entered');
        const credential = EmailAuthProvider.credential(user.email, password);
        console.log(credential);
        await reauthenticateWithCredential(user, credential);
        console.log('reauthenticated');
      }
      await updatePassword(user, newPassword)
        .then(() => setMessage('Password Updated'), console.log('password updated success'))
        .catch((e) => setMessage(e));

      setTimeout(() => {
        navigate('/profile');
      }, 500);
    } catch (e) {
      setMessage('the error is ', e);
    }
  };

  return (
    <>
      <Navbar />
 { 


 }

      <Footer />
    </>
  );
};

export default Updatepassword;
