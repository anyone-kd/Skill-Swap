import React, { useState } from "react";
import { Eye, EyeOff,  Lock, User } from "lucide-react";
import { Link } from 'react-router-dom';


export default function Login() {
  const [Error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen  bg-gray-600 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex">
        {/* Left side - Dark geometric background */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-90"></div>

          {/* Geometric patterns */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-700 opacity-30 transform rotate-45"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gray-600 opacity-20 transform rotate-12"></div>
            <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gray-750 opacity-25 transform -rotate-12"></div>
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

        {/* Right side - Login form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  English
                </button>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome, login to your account.
              </h1>
            </div>

            {/* Login Form */}
            <div className="space-y-6">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
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
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 pr-12"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
              >
                LogIn
              </button>

              {/* Lost Password Link */}
              <div className="text-center">
                <button
                  type="button"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Don't have an account? <span className="font-medium cursor-pointer"><Link to="/signup">SignUp</Link></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
