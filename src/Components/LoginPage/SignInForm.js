import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInForm.css';

function SignInForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here.
    navigate('/home');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' id="username" name="username" />
        <br />
        <input type="password" placeholder='Password' id="password" name="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default SignInForm;
