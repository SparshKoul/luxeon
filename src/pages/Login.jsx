import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../login.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert(
      `${
        isSignUp ? "Sign up" : "Login"
      } functionality would be implemented here`
    );
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Fashion background"
        />
        <div className="background-overlay"></div>
      </div>

      {/* Login Container */}
      <div className="login-container">
        {/* Header */}
        <div className="login-header">
          <div className="login-header-top">
            <Link to="/" className="login-logo">
              <span>LUXEON</span>
              <svg
                className="star-icon"
                width="17"
                height="18"
                viewBox="0 0 17 18"
              >
                <path
                  d="M 0 9 C 7.173 9.733 7.767 10.327 8.5 17.5 C 9.233 10.326 9.827 9.733 17 9 C 9.827 8.267 9.233 7.673 8.5 0.5 C 7.767 7.673 7.173 8.267 0 9 Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <button
              onClick={() => navigate("/")}
              className="back-button"
              title="Go back to home"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </button>
          </div>
          <h1 className="login-title">
            {isSignUp ? "Join the Luxeon Community" : "Welcome Back"}
          </h1>
          <p className="login-subtitle">
            {isSignUp
              ? "Create your account and start your fashion journey"
              : "Sign in to access exclusive collections and offers"}
          </p>
        </div>

        {/* Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-row">
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <label>First Name</label>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                <label>Last Name</label>
              </div>
            </div>
          )}

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <label>Password</label>
          </div>

          {isSignUp && (
            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <label>Confirm Password</label>
            </div>
          )}

          <button type="submit" className="login-btn">
            {isSignUp ? "Create Account" : "Sign In"}
          </button>

          <div className="form-divider">
            <span>or</span>
          </div>

          <div className="social-login">
            <button type="button" className="social-btn google-btn">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
            <button type="button" className="social-btn facebook-btn">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continue with Facebook
            </button>
          </div>

          <div className="form-links">
            <button
              type="button"
              className="link-btn"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </button>
            {!isSignUp && (
              <Link to="#" className="link-btn">
                Forgot Password?
              </Link>
            )}
          </div>
        </form>

        {/* Footer */}
        <div className="login-footer">
          <p>
            By {isSignUp ? "creating an account" : "signing in"}, you agree to
            our <Link to="#">Terms of Service</Link> and{" "}
            <Link to="#">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
