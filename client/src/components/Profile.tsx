
import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
export default function Profile (){

  const uploadImage = () => {
    console.log('clicked')
  }
  const editInfo = () => {
    console.log('clicked')
  }

    return (
      <div>
        <h1>Welcome User</h1>
        <button onClick={uploadImage}>Upload Profile Picture</button>
        <button onClick={editInfo}>Edit Profile</button>
      </div>
    );


}