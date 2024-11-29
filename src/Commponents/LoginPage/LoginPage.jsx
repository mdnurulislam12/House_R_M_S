import React, { useState } from 'react'
import "../../styles/LoginPage.scss"
import { setLogin } from '../../redux/state';
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const data = await response.json();
        alert(data.message || 'Login failed!');
        return; // Stop further processing if the response is not OK
      }
      
      /**get data after fetching */
      const data = await response.json();
      // Proceed to handle successful login (e.g., store token, navigate)
      if(data){
        dispatch(
          setLogin({
            user: data.user,
            token: data.token
          })
        )
        navigate("/")
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login">
      <div className="login_content">
        <form className='login_content_from' onSubmit={handleSubmitLogin}>
          <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} required />
          <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} required />
          <button type='submit'>LOG IN</button>
        </form>
        <a href="/register">Don't have an account? Sign In Here</a>
      </div>
    </div>
  )
}

export default LoginPage