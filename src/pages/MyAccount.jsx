import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BackgroundPattern from '../components/BackgroundPattern';

const MyAccount = () => {
  // Login form state
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginMessage, setLoginMessage] = useState({ type: '', text: '' });

  // Register form state
  const [registerData, setRegisterData] = useState({
    email: '',
    password: ''
  });
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [registerMessage, setRegisterMessage] = useState({ type: '', text: '' });

  // Load saved credentials if "Remember Me" was checked
  useEffect(() => {
    const savedUsername = localStorage.getItem('rememberedUsername');
    const savedPassword = localStorage.getItem('rememberedPassword');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (savedRememberMe && savedUsername && savedPassword) {
      setLoginData({
        username: savedUsername,
        password: savedPassword
      });
      setRememberMe(true);
    }
  }, []);

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
    // Clear message when user starts typing
    if (loginMessage.text) {
      setLoginMessage({ type: '', text: '' });
    }
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
    // Clear message when user starts typing
    if (registerMessage.text) {
      setRegisterMessage({ type: '', text: '' });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // Get all registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Find user by email or username
    const user = registeredUsers.find(
      (u) => (u.email === loginData.username || u.username === loginData.username) && 
             u.password === loginData.password
    );

    if (user) {
      // Login successful
      setLoginMessage({ type: 'success', text: 'Login successful! Redirecting...' });
      
      // Store login status
      const loginInfo = {
        isLoggedIn: true,
        email: user.email,
        username: user.username || user.email,
        loginTime: new Date().toISOString()
      };

      if (rememberMe) {
        // Use localStorage for persistent storage
        localStorage.setItem('userSession', JSON.stringify(loginInfo));
        localStorage.setItem('rememberedUsername', loginData.username);
        localStorage.setItem('rememberedPassword', loginData.password);
        localStorage.setItem('rememberMe', 'true');
      } else {
        // Use sessionStorage for session-only storage
        sessionStorage.setItem('userSession', JSON.stringify(loginInfo));
        // Clear remembered credentials
        localStorage.removeItem('rememberedUsername');
        localStorage.removeItem('rememberedPassword');
        localStorage.removeItem('rememberMe');
      }

      // Clear form
      setLoginData({ username: '', password: '' });
      setRememberMe(false);

      // Simulate redirect (you can replace this with actual navigation)
      setTimeout(() => {
        setLoginMessage({ type: '', text: '' });
        // You can add navigation here: navigate('/dashboard');
      }, 2000);
    } else {
      // Login failed
      setLoginMessage({ type: 'error', text: 'Invalid username/email or password. Please try again.' });
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    // Get existing users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Check if email already exists
    const emailExists = registeredUsers.some((u) => u.email === registerData.email);
    
    if (emailExists) {
      setRegisterMessage({ type: 'error', text: 'This email is already registered. Please login instead.' });
      return;
    }

    // Validate password length
    if (registerData.password.length < 6) {
      setRegisterMessage({ type: 'error', text: 'Password must be at least 6 characters long.' });
      return;
    }

    // Create new user object
    const newUser = {
      email: registerData.email,
      password: registerData.password,
      username: registerData.email.split('@')[0], // Use email prefix as username
      registeredAt: new Date().toISOString()
    };

    // Add to registered users array
    registeredUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    // Registration successful
    setRegisterMessage({ type: 'success', text: 'Registration successful! You can now login.' });
    
    // Clear form
    setRegisterData({ email: '', password: '' });

    // Clear message after 3 seconds
    setTimeout(() => {
      setRegisterMessage({ type: '', text: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Dark Blue Background Section (Header + My Account Heading) */}
      <div className="bg-[#0a1929] relative overflow-hidden">
        {/* Background Wavy Pattern */}
        <BackgroundPattern />
        
        {/* Header/Navbar */}
        <Header />
        
        {/* My Account Heading Section */}
        <div className="relative z-10 px-6 md:px-12 py-20 md:py-32 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
            My Account
          </h1>
        </div>
      </div>
      
      {/* Login and Register Forms Section */}
      <section className="bg-white py-12 md:py-16 lg:py-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Section - Login Form */}
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" style={{ color: '#0C1A3E' }}>
                Login
              </h2>
              
              <div className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8">
                {/* Login Message */}
                {loginMessage.text && (
                  <div
                    className={`mb-4 p-3 rounded-lg text-sm ${
                      loginMessage.type === 'success'
                        ? 'bg-green-100 text-green-700 border border-green-300'
                        : 'bg-red-100 text-red-700 border border-red-300'
                    }`}
                  >
                    {loginMessage.text}
                  </div>
                )}
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  {/* Username or Email Field */}
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                      Username or email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={loginData.username}
                      onChange={handleLoginChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                  
                  {/* Password Field */}
                  <div>
                    <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showLoginPassword ? 'text' : 'password'}
                        id="login-password"
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                        className="w-full px-4 py-3 pr-12 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                        aria-label={showLoginPassword ? 'Hide password' : 'Show password'}
                      >
                        {showLoginPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* Remember Me and Lost Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                      Lost your password?
                    </a>
                  </div>
                  
                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-300 cursor-pointer"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
            
            {/* Right Section - Register Form */}
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" style={{ color: '#0C1A3E' }}>
                Register
              </h2>
              
              <div className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8">
                {/* Register Message */}
                {registerMessage.text && (
                  <div
                    className={`mb-4 p-3 rounded-lg text-sm ${
                      registerMessage.type === 'success'
                        ? 'bg-green-100 text-green-700 border border-green-300'
                        : 'bg-red-100 text-red-700 border border-red-300'
                    }`}
                  >
                    {registerMessage.text}
                  </div>
                )}
                <form onSubmit={handleRegisterSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                  
                  {/* Password Field */}
                  <div>
                    <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showRegisterPassword ? 'text' : 'password'}
                        id="register-password"
                        name="password"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        required
                        className="w-full px-4 py-3 pr-12 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                        aria-label={showRegisterPassword ? 'Hide password' : 'Show password'}
                      >
                        {showRegisterPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* Privacy Policy Text */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes.
                  </p>
                  
                  {/* Register Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-300 cursor-pointer"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default MyAccount;

