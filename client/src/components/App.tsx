import * as React from 'react';
import { Login } from './GoogleLogin';
// @ts-ignore
import * as style from './style.css';

// declare module '*.css' {
//   const content: Record<string, string>;
//   export default content;
// }

const App = () => {
  const loginWrapper: string = "login-wrapper";
  const logoWelcome: string = "logo-welcome";


return (
  <div id={loginWrapper}>
    <img id={logoWelcome} alt='Carbon Crushers Logo' src='https://i.ibb.co/5RDm28b/carbon-crushers-logo.png'/>
    <Login />
    <h1>Hello World</h1>
  </div>
)
};

export default App;
