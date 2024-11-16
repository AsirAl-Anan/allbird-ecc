import React, { useState, useContext, useRef } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { AuthContext } from '../Context/AuthContext/UserContext';
import { NavLink } from 'react-router-dom';
import { SquarePen, PenOff } from 'lucide-react';
import { getAuth, verifyBeforeUpdateEmail } from 'firebase/auth';
import { Eye, EyeOff } from 'lucide-react';

const Profile = () => {
  const [showPass, setShowPass] = useState(false);
  const emailRef = useRef();
  const { user, reauthWithGoogle,userCredential,authCredential ,updateEmail, currentPassword, setCurrentPassword} = useContext(AuthContext);
  console.log(userCredential,authCredential,updateEmail,currentPassword, setCurrentPassword)
  const auth = getAuth();

  const [name, setName] = useState(user?.displayName || 'No user name found');
  const [email, setEmail] = useState(user?.email || 'No email found');
  const [isEditing, setIsEditing] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const hideshowPassword = () => {
    setShowPass(!showPass);
  };
  const passwordRef = useRef()  
  const confirmPasswordRef  =useRef()
  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) return;
    else if (user.providerData[0].providerId === 'google.com'){
      try {
        // First re-authenticate
        if (user?.providerData[0]?.providerId === 'google.com') {
          await reauthWithGoogle();
        }
  
        // Send verification email to the new address
        await verifyBeforeUpdateEmail(auth.currentUser, email);
        
        setVerificationSent(true);
        setIsEditing(false);
        alert('A verification email has been sent to ' + email + '. Please check your inbox and click the verification link to complete the email update.');
  
      } catch (error) {
        console.error('Error updating profile:', error);
        if (error.code === 'auth/requires-recent-login') {
          alert('For security reasons, please log out and log back in before changing your email.');
        } else if (error.code === 'auth/invalid-email') {
          alert('Please enter a valid email address.');
        } else if (error.code === 'auth/email-already-in-use') {
          alert('This email is already in use by another account.');
        } else {
          alert('Error updating profile: ' + error.message);
        }
      }
    } else {
      try {
        // Update the user's email
        authCredential()
        await userCredential()
        await updateEmail(user, email);
       
      } catch (e){
        console.error('Error updating profile:', e);
      }
    }
  function GoogleOrEmail(){

  }

  
    
  };

  return (
    <div>
      <Navbar />
      
      <Footer />
    </div>
  );
};

export default Profile;