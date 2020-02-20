import React from 'react';
import { FormInput } from '../components/Input';
import Button from '../components/Button';

const Project = () => {
  return (
    <div className='container'>
      <div className='page container-1'>
        <h2 class='page__title'>Create a New Project</h2>
        <form class='form' action='' method='post'>
          <FormInput label='Name of the Project' placeholder='My New Project' />
          <FormInput
            label='Description'
            placeholder='This is a short description about the project.'
            type='textarea'
          />
          <div className='flex-container'>
            <div className='input-tab'>
              <span className='input-tab__label'>add data files</span>
              <div className='input-tab__tab'>
                <span className='input-tab__icon'>
                  <img src='./icons/cloud_upload.png' alt='cloud_upload' />
                </span>
                <div className='input-tab__details'>
                  <h3 className='input-tab__title'>Upload data files</h3>
                  <div className='input-tab__info'>
                    Use .csv files only. Maximum file size is 20M.
                  </div>
                </div>
              </div>
            </div>
            <div className='input-tab'>
              <span className='input-tab__label'>add images</span>
              <div className='input-tab__tab'>
                <span className='input-tab__icon'>
                  <img src='./icons/cloud_upload.png' alt='cloud_upload' />
                </span>
                <div className='input-tab__details'>
                  <h3 className='input-tab__title'>Upload images</h3>
                  <div className='input-tab__info'>
                    <p>Upload .jpg or .png files.</p>
                    <p>Select multiple files up to 2M each</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='input-tab'>
              <span className='input-tab__label'>Select dataset</span>
              <div className='input-tab__tab input-tab__tab--2x'>
                <span className='input-tab__icon'>
                  <img src='./icons/list.png' alt='cloud_upload' />
                </span>
                <div className='input-tab__details'>
                  <h3 className='input-tab__title'>Select dataset</h3>
                  <div className='input-tab__info'>
                    Select one of the datasets that has been previously
                    uploaded.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            label='create'
            className='button--xxl'
            type='submit'
            disabled={true}
          />
        </form>
      </div>
    </div>
  );
};

export default Project;
