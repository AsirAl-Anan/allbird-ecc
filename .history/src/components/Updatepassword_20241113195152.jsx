import React from 'react'



const Updatepassword = () => {
    return (
        <div>
          <Navbar />
          <div className="flex justify-center items-center min-h-screen bg-[#F1EBE7] p-4 sm:p-0">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-6 sm:p-8 bg-white bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">My Account</h2>
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                Update account information
              </p>
    
              {verificationSent && (
                <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
                  <p className="mb-2">Please verify your new email address. Check your inbox and spam folder.</p>
                  <button
                    type="button"
                    onClick={handleResendVerification}
                    disabled={loading}
                    className="text-sm text-yellow-800 underline hover:no-underline"
                  >
                    Resend verification email
                  </button>
                </div>
              )}
    
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
                    Current Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                    value={formData.email}
                    disabled
                  />
                </div>
          
                {isEditing && !verificationSent && (
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
    
                {isEditing && !verificationSent && auth?.currentUser?.providerData[0].providerId === 'password' && (
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
                {!verificationSent && (
                  <button
                    type="button"
                    onClick={handleEditProfile}
                    className="w-full text-right text-sm text-gray-500 hover:text-gray-700 flex justify-end items-center"
                  >
                    {isEditing ? 'Cancel Edit' : 'Edit'}
                  </button>
                )}
    
                <button
                  type="submit"
                  disabled={!isEditing || loading || verificationSent}
                  className={`w-full py-2 rounded transition-colors ${
                    !isEditing || loading || verificationSent
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-black hover:bg-gray-800'
                  } text-white`}
                >
                  {loading ? 'Processing...' : 'Update Email'}
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
}

export default Updatepassword
