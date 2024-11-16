import React, { useContext, useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { Eye, EyeOff } from 'lucide-react';
import { AuthContext } from '../Context/AuthContext/UserContext';
import { 
  EmailAuthProvider, 
  GoogleAuthProvider, 
  updateEmail,
  reauthenticateWithCredential, 
  reauthenticateWithPopup, 
  sendEmailVerification,
  getAuth 
} from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const { user, auth } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    currentPassword: '',
  });
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      toast(message);
    }
  }, [message]);

  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    
    if (isEditing) {
      setFormData({
        name: user?.displayName || '',
        email: user?.email || '',
        currentPassword: '',
      });
      setNewEmail('');
      setCurrentPassword('');
    }
  };

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

    try {
      const firebaseAuth = getAuth();
      const providerId = auth.currentUser.providerData[0].providerId;

      if (providerId === 'password') {
        if (!currentPassword) {
          setMessage('Please enter your current password');
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

      await updateEmail(auth.currentUser, newEmail);
      await sendEmailVerification(auth.currentUser);
      
      setMessage('Verification email sent to the new email address. Please verify to complete the update.');
      setIsEditing(false);
      setNewEmail('');
      setCurrentPassword('');
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
        default:
          errorMessage += error.message;
      }
      
      setMessage(errorMessage);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-[#F1EBE7] p-4 sm:p-0">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-6 sm:p-8 bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">My Account</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Update account information
          </p>

          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                value={formData.name}
                disabled
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                value={formData.email}
                disabled
              />
            </div>
      
            {isEditing && (
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  New Email
                </label>
                <input
                  type="email"
                  name="newEmail"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder='Enter new email'
                />
              </div>
            )}

            {isEditing && auth?.currentUser?.providerData[0].providerId === 'password' && (
              <div className="relative">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <div className="relative flex items-center">
                  <input
                    type={showPass ? 'text' : 'password'}
                    name="currentPassword"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter your current password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {showPass ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 space-y-4">
            <button
              type="button"
              onClick={handleEditProfile}
              className="w-full text-right text-sm text-gray-500 hover:text-gray-700 flex justify-end items-center"
            >
              {isEditing ? 'Cancel Edit' : 'Edit'}
            </button>

            <button
              type="submit"
              disabled={!isEditing}
              className={`w-full py-2 rounded transition-colors ${
                !isEditing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black hover:bg-gray-800'
              } text-white`}
            >
              Update Email
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            By updating your account, you agree to our Terms of Use and Privacy Policy.
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;