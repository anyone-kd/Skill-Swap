import React, { useState } from "react";
import { Eye, EyeOff, Upload, User, Camera, X } from "lucide-react";
import { Link } from 'react-router-dom';


export default function SignUp() {
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError({...error, [name]: null }); // Clear error for the field being edited
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfileImage(null);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      // Handle form submission logic here
    }
  };

  const validateForm = () => {
  const newErrors = {};

  if (!formData.email || !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
    newErrors.email = 'Please enter a valid email address';
  }

  if (!formData.password || formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
  }

  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = 'Passwords do not match';
  }

  setError(newErrors);
  return Object.keys(newErrors).length === 0;
};

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center p-3">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex">
        {/* Left side - Dark geometric background */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-90"></div>

          {/* Geometric patterns */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-700 opacity-30 transform rotate-45"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gray-600 opacity-20 transform rotate-12"></div>
            <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gray-750 opacity-25 transform -rotate-12"></div>
            <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gray-650 opacity-15 transform rotate-45"></div>
          </div>

          {/* Diagonal lines effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-700 to-transparent opacity-10 transform skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-600 to-transparent opacity-5 transform -skew-y-12"></div>

          {/* Brand logo area */}
          <div className="absolute bottom-8 left-8 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-900 rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold">SKILLSWAP</span>
            </div>
          </div>
        </div>

        {/* Right side - Signup form */}
        <div className="w-full lg:w-1/2 p-6 lg:p-8 overflow-y-auto max-h-screen">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  English
                </button>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Create your account
              </h1>
              <p className="text-gray-600 text-sm">
                Join us and get started today
              </p>
            </div>

            {/* Signup Form */}
            <div className="space-y-5">
              {/* Profile Photo Upload */}
              <div className="flex justify-center mb-1">
                <div className="relative">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-200">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={32} className="text-gray-400" />
                    )}
                  </div>

                  {/* Upload button */}
                  <label className="absolute bottom-0 right-0 bg-gray-900 text-white p-1.5 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
                    <Camera size={14} />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>

                  {/* Remove button */}
                  {profileImage && (
                    <button
                      onClick={removeImage}
                      className="absolute -top-1 -right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>

              {/* Username Input */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                    placeholder="Enter a username"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative h-[55px]">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
                  {error.email && ( <p className="text-red-500 text-xs mt-1">{error.email}</p>)}
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative h-[55px]">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 pr-12"
                    placeholder="Create a password"
                    required
                  />
                 {error.password && ( <p className="text-red-500 text-xs mt-1">{error.password}</p>)}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative h-[55px]">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 pr-12"
                    placeholder="Confirm your password"
                    required
                  />
                  {error.confirmPassword && ( <p className="text-red-500 text-xs mt-1">{error.confirmPassword}</p>)}
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Create Account Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200 transform"
              >
                Create Account
              </button>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <button className="text-gray-900 hover:underline font-medium">
                    <Link to="/">Login here</Link>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
