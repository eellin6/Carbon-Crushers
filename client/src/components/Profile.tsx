
import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import  S3FileUpload  from 'react-s3';
import * as Buffer from 'Buffer';
export default function Profile (){

  const config :Object = {
    bucketName: 'thesis-picture-bucket-2',
    region: 'US East (Ohio) us-east-2',
    accessKeyId: 'AKIAJVKMITSRCZLSTZTQ',
    secretAccessKey: '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',
}
  const upload = (e: any ) => {
   console.log(e.target.files[0])
   S3FileUpload.uploadFile(e.target.files[0], config )
   .then((data) => console.log(data))
   .catch((err) => console.log(err))


  }
  const editInfo = () => {
    console.log('clicked')

  }




    return (
      <div>
        <h1>Welcome User</h1>
        <input type='file' onChange={upload}/>

        <button onClick={editInfo}>Edit Profile</button>
      </div>
    );


}