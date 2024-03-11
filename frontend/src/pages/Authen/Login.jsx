// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 
import './SignUp.jsx';


const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5173/login', { email :username, password });
      const token = response.data.token;
      setToken(token); 
      
    } catch (error) {
      setErrorMessage('Invalid username or password');
    }
  };

  return (

    
    <div className='LoginForm'>
    <div className="form-container">
        <h1 className='titre' >ARTVM</h1>
    <form onSubmit={handleLogin}>
        <label></label>
      <input
        type="text"
        placeholder="Username"
        value={username}
  onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Se connecter</button>
    </form>
 
    <div className="text-center mt-3">
        <a href="#!" className="small text-muted">Mot de passe oublié?</a>
      </div>
      <hr className="my-4" />
      <div className="text-center">
          <p className="mb-1">Vous n’avez pas de compte ?</p>
          <a href="/register" className="Registre">Inscrivez-vous ici</a>
      </div>
  </div>
  </div> 
  
 
  );
};

export default LoginForm;
