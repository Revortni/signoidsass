import React from 'react';
import { FormInput } from './Input';
import Button from './Button';

const Project = () => {
  return (
    <div className='container-popup'>
      <div className='popup'>
        <div className='popup__header flex-container popup__content'>
          <h3 className='popup__title'>upload new data</h3>
          <span className='icon icon--24 icon--center'>
            <i className='fa fa-times'></i>
          </span>
        </div>
        <div className='popup__content p-6'>
          <FormInput
            label='Data Set Name'
            placeholder='Labor Party Data'
            className='p-b-6'
          />
          <div className='flex-container'>
            <div className='input-tab'>
              <label className='input-tab__tab' htmlFor='data-files'>
                <span className='input-tab__icon'>
                  <img src='./assets/cloud_upload.png' alt='cloud_upload' />
                </span>
                <div className='input-tab__details'>
                  <h3 className='input-tab__title'>Upload data files</h3>
                  <div className='input-tab__info'>
                    Use .csv files only. Maximum file size is 20M.
                  </div>
                </div>
              </label>
              <input
                type='file'
                name='data-files'
                id='data-files'
                className='input-tab__input-tag'
                multiple
              />
            </div>
            <div className='input-tab'>
              <label className='input-tab__tab' htmlFor='data-images'>
                <span className='input-tab__icon'>
                  <img src='./assets/cloud_upload.png' alt='cloud_upload' />
                </span>
                <div className='input-tab__details'>
                  <h3 className='input-tab__title'>Upload images</h3>
                  <div className='input-tab__info'>
                    Upload .jpg or .png files. Select multiple files up to 2M
                    each.
                  </div>
                </div>
              </label>
              <input
                type='file'
                alt='uploaded image'
                name='data-images'
                id='data-images'
                className='input-tab__input-tag'
                multiple
              />
            </div>
          </div>
        </div>
        <div className='p-5 flex-container flex-container--right'>
          <Button
            label='cancel'
            className='popup__button button--l button--white'
          ></Button>
          <Button label='upload' className='popup__button button--l'></Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
