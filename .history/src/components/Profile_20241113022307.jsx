import React, { useContext, useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { Eye, EyeOff } from 'lucide-react';
import { AuthContext } from '../Context/AuthContext/UserContext';
import { 
  EmailAuthProvider, 
  GoogleAuthProvider, 
  verifyBeforeUpdateEmail,  // Changed this import
  reauthenticateWithCredential, 
  reauthenticateWithPopup, 
  getAuth,
  onAuthStateChanged
} from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ... (keep all the existing state declarations and other functions)

// Update the handleSubmit function:
const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!auth?.currentUser) {
      setMessage('No user signed in');
      return;
    }

    if (!newEmail) {
      setMessage('Please enter a new email address');
      return;
    }

    if (newEmail === auth.currentUser.email) {
      setMessage('New email must be different from current email');
      return;
    }

    setLoading(true);

    try {
      const firebaseAuth = getAuth();
      const providerId = auth.currentUser.providerData[0].providerId;

      // Reauthenticate user
      if (providerId === 'password') {
        if (!currentPassword) {
          setMessage('Please enter your current password');
          setLoading(false);
          return;
        }
        const credential = EmailAuthProvider.credential(
          auth.currentUser.email,
          currentPassword
        );
        await reauthenticateWithCredential(auth.currentUser, credential);
      } else if (providerId === 'google.com') {
        const provider = new GoogleAuthProvider();
        await reauthenticateWithPopup(firebaseAuth.currentUser, provider);
      }

      // Use verifyBeforeUpdateEmail instead of updateEmail
      await verifyBeforeUpdateEmail(auth.currentUser, newEmail);
      
      setVerificationSent(true);
      setMessage(
        'Verification email sent to your new address. Please check your inbox and spam folder to verify your new email.'
      );
      
    } catch (error) {
      console.error("Update email error:", error);
      let errorMessage = 'Failed to update email. ';
      
      switch (error.code) {
        case 'auth/requires-recent-login':
          errorMessage += 'Please sign in again before updating your email.';
          break;
        case 'auth/invalid-password':
          errorMessage += 'The password you entered is incorrect.';
          break;
        case 'auth/invalid-email':
          errorMessage += 'The email address is invalid.';
          break;
        case 'auth/email-already-in-use':
          errorMessage += 'This email is already associated with another account.';
          break;
        default:
          errorMessage += error.message;
      }
      
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

// ... (keep the rest of the component the same)