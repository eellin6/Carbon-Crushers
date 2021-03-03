import * as React from 'react';
// import * as GoogleButton from 'react-google-button';
// import * as GoogleLogin from 'react-google-login';
import { Login } from './GoogleLogin';
// import * as css from './style.css';


const App = () => {

return (
  <div id='login-container'>
    <img id='logo-welcome' alt='Carbon Crushers Logo' src='https://i.ibb.co/5RDm28b/carbon-crushers-logo.png'/>
    <Login />
  </div>
)
};

export default App;
