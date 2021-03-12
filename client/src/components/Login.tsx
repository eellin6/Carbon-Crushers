import * as React from 'react';
import GoogleButton from 'react-google-button';

const Login = (): React.ReactElement => {
  return (
    <div className='page-wrap'>
      <img id='logo-welcome' alt='Carbon Crushers Logo' src='https://i.ibb.co/5RDm28b/carbon-crushers-logo.png'/>
      <a href='/auth/google' className='google-button'>
        <GoogleButton type='light' />
      </a>
    </div>
  );
};

export default Login;
