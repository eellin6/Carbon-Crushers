
import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { WidgetLoader, Widget }  from 'react-cloudinary-upload-widget';
export default function Profile (){
  const [ name, setName ] = useState('');
  const [ picture, setPicture ] = useState('');

  useEffect(() => {
    axios.get('/user')
    .then(({ data }) => {
      let { name, picture } = data;
      setName(name);
      setPicture(picture)
    })
    .catch((err) => console.warn(err));
  },[]);


  const updatePic = (image: string) => {

   const data = {
      picture: image
    }
    axios.post('/profilePic', data)
    .then((info) => console.info(info))
    .catch((err) => console.warn(err))

  }




    return (
      <div>
        <h1>My Profile</h1>
        <div className='profileDiv'><img className='profilePic' src={picture}></img></div>

        <h3>Name: {name}</h3>
        <WidgetLoader />

                    <Widget
            sources={ [ 'local', 'camera', 'dropbox' ] } // set the sources available for uploading -> by default
            // all sources are available. More information on their use can be found at
            // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
            resourceType={ 'image' } // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
            cloudName={ 'carbon-crushers' } // your cloudinary account cloud name.
            // Located on https://cloudinary.com/console/
            uploadPreset={ 'w5e5bjen' } // check that an upload preset exists and check mode is signed or unisgned
            buttonText={ 'Upload Profile Pic' } // default 'Upload Files'
            style={ {
              color: 'white',
              border: 'none',
              width: '120px',
              backgroundColor: 'green',
              borderRadius: '4px',
              height: '25px'
            } } // inline styling only or style id='cloudinary_upload_button'
            folder={ 'samples' } // set cloudinary folder name to send file
            cropping={ false } // set ability to crop images -> default = true
            onSuccess={ (result: any) => {
            updatePic(result.info.url)}
            } // add success callback -> returns result
            //onFailure={ console.warn('failure!!!') } // add failure callback -> returns 'response.error' + 'response.result'
            logging={ false } // logs will be provided for success and failure messages,
            // set to false for production -> default = true
            customPublicId={ 'sample' } // set a specific custom public_id.
            // To use the file name as the public_id use 'use_filename={true}' parameter
            eager={ 'w_400,h_300,c_pad|w_260,h_200,c_crop' } // add eager transformations -> deafult = null
            use_filename={ false } // tell Cloudinary to use the original name of the uploaded
            // file as its public ID -> default = true,
          />

      </div>
    );


}