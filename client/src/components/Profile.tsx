
import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import S3FileUpload from 'react-s3';
export default function Profile (){

  const upload = (e) => {
   console.log(e.target.files)
  }
  const editInfo = () => {
    console.log('clicked')
  }
  const config = {
    bucketName: 'myBucket',
    dirName: 'photos', /* optional */
    region: 'eu-west-1',
    accessKeyId: 'ANEIFNENI4324N2NIEXAMPLE',
    secretAccessKey: 'cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE',
}

/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */



    return (
      <div>
        <h1>Welcome User</h1>
        <input type='file' onChange={upload}/>
        <button onClick={editInfo}>Edit Profile</button>
      </div>
    );


}