
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget';
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

const Profile = (): React.ReactElement => {
  const [ name, setName ] = useState('');
  const [ picture, setPicture ] = useState('');
  const [ colorVision, setColorVision ] = useState('none');
  const [ showOrHideSettings, setShowOrHideSettings ] = useState(false);

  useEffect((): void => {
    axios.get<AxiosResponse>('/user')
      .then(({ data }: AxiosResponse) => {
        const { name, picture, vision }: { name: string, picture: string, vision: string } = data;
        setName(name);
        setPicture(picture);
        setColorVision(vision);
      })
      .catch((err) => console.warn(err));
  }, []);

  const updatePic = (image: string): void => {
    const data = { picture: image };
    axios.post<AxiosResponse>('/profilePic', data)
      .then((info) => console.info(info))
      .catch((err) => console.warn(err));
  };

  const handleChange = (e): void => {
    const vision: string = e.target.value;
    setColorVision(vision);
  };

  const handleSubmit = (): void => {
    setShowOrHideSettings(false);
    axios.put<AxiosResponse>('/vision', { visionType: colorVision })
      .then((data) => console.info(data))
      .catch((err) => console.warn(err));
  };

  const openColorSettings = (): void => {
    setShowOrHideSettings(true);
  };

  return (
    <div className='page-wrap'>
      <h1>My Profile</h1>
      <div className='profileDiv'>
        <img className='profilePic' src={picture} />
      </div>
      <h3>Name: {name}</h3>

      {
        colorVision === 'none'
          ? <h3>Color Setting: Actual</h3>
          : <h3>Color Setting: {colorVision}</h3>
      }

      {
        !showOrHideSettings
          ? <button className='btn btn-margin' onClick={openColorSettings}>Change Color Settings</button>
          : (
            <div className='visionCheck'>
              <form action='/vision' method='PUT'>
                <div className='vision-status-container' onChange={handleChange}>
                  <label><h4>Color vision deficiency:</h4></label>
                  <div className='radio-btn'>
                    <input type='radio' name='vision' value='none' /> None
                  </div>
                  <div className='radio-btn'>
                    <input type='radio' name='vision' value='CVD' /> Color Vision Deficient
                  </div>
                </div>
                <button className='btn btn-margin' type='button'
                  onClick={handleSubmit}>Save New Color Settings</button>
              </form>
            </div>
          )
      }

      <div id='widget'>
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
          style={{
            color: '#525252',
            border: 'none',
            width: '120px',
            backgroundColor: '#FDCB60',
            borderRadius: '4px',
            height: '25px',
            alignItems: 'center',
          }} // inline styling only or style id='cloudinary_upload_button'
          folder={'samples'} // set cloudinary folder name to send file
          cropping={false} // set ability to crop images -> default = true
          onSuccess={(result: UploadApiResponse): void => {
            updatePic(result.info.url);
          }} // add success callback -> returns result
          onFailure={(err: UploadApiErrorResponse): void => console.warn('failure!!!', err)} // add failure callback -> returns 'response.error' + 'response.result'
          logging={false} // logs will be provided for success and failure messages,
          // set to false for production -> default = true
          customPublicId={'sample'} // set a specific custom public_id.
          // To use the file name as the public_id use 'use_filename={true}' parameter
          eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
          use_filename={false} // tell Cloudinary to use the original name of the uploaded
          // file as its public ID -> default = true,
        />
      </div>
    </div>
  );
};

export default Profile;
