import React from 'react';
import './SignInForm.css';

function SignInForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder='Username' id="username" name="username" />
        <br />
        <input type="password" placeholder='Password' id="password" name="password" />
        <br />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

export default SignInForm;
