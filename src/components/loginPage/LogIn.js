import React, { useState } from 'react'
import style from './Login.css'
import loginImage from '../../../src/assets/scifi_1 1.svg'
import logoSVG from '../../../src/assets/optimas.svg'
import { ReactComponent as UserIcon } from '../../../src/assets/user-128.svg'; // SVG for username
import { ReactComponent as PasswordIcon } from '../../../src/assets/password.svg'; 
import { useAuth } from '../../context/authcontext';
function LogIn() {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if the entered username and password match the static credentials
    if (username === 'user' && password === 'Pass@123') {
      alert('Login successful!'); 
      login();
      setUsernameError('');
      setPasswordError('');
    } else {
      // Set error messages if the credentials don't match
      setUsernameError(username !== 'user' ? 'Invalid username. Please try again.' : '');
      setPasswordError(password !== 'Pass@123' ? 'Invalid password. Please try again.' : '');
    }
  };
  return (
    <div className='main-container'>
        <div className='image-container'>
            <img src={loginImage}/>
        </div>
        <div className='login-container'>
            <div className='logo'>
            <img src={logoSVG} alt='Logo' />
            </div>
            <div className='login-form'>
                <div>
                    <h3 className='login-title color-#fff'>Login</h3>
                </div>
                <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <div className="input-wrapper">
                            <UserIcon className="icon" />
                            <input type="text" 
                                    placeholder="Username" 
                                    value={username} 
                                    style={usernameError ? { border: '1px solid red' } : {}}
                                    onChange={(e) => setUsername(e.target.value)}  />
                        </div>
                        {usernameError && <span className="error-message">{usernameError}</span>}
                    </div>
                    <div className="input-container">
                        <div className="input-wrapper">
                            <PasswordIcon className="icon" />
                            <input type="password" 
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}  
                                    style={passwordError ? { border: '1px solid red' } : {}}
                                    />
                        </div>
                        {passwordError && <span className="error-message">{passwordError}</span>}
                    </div>
                    <div className='btn-container'>
                        <div>
                            <a href='#'>Forgot Password ?</a>
                        </div>
                        <div>
                            <button className='signin-btn' type="submit" disabled={!username || !password}>SignIn</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn