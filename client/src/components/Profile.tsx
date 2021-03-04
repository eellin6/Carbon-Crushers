
import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import { WidgetLoader, Widget }  from 'react-cloudinary-upload-widget';
export default function Profile (){

  const config :Object = {
    bucketName: 'thesis-picture-bucket-2',
    region: 'US East (Ohio) us-east-2',
    accessKeyId: 'AKIAJVKMITSRCZLSTZTQ',
    secretAccessKey: '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',
}
  const upload = (e: any ) => {
   console.log(e.target.files[0])


  }
  const updatePic = (image: string) => {
    console.log('clicked')
   const data = {
      picture: image
    }
    axios.post('/profilePic', data)
    .then((info) => console.log(info))
    .catch((err) => console.log(err))

  }




    return (
      <div>
        <h1>My Profile</h1>
        <img></img>
        <h3>Name:</h3>
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
            onSuccess={ (result: any) => {console.log(result.info.url)
            updatePic(result.info.url)}
            } // add success callback -> returns result
            onFailure={ console.log('failure!!!') } // add failure callback -> returns 'response.error' + 'response.result'
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