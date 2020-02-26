import React from 'react';
import { FormInput } from '../components/Input';
import Button from '../components/Button';

const Project = () => {
  return (
    <div className='container'>
      <div className='page container-1'>
        <div className='page__header flex-container'>
          <h2 class='page__title'>Create a New Project</h2>
        </div>

        <form class='form' action='' method='post'>
          <FormInput label='Name of the Project' placeholder='My New Project' />
          <FormInput
            label='Description'
            placeholder='This is a short description about the project.'
            type='textarea'
          />
          <div className='p-b-8'>
            <div className='flex-container'>
              <div className='input-tab'>
                <span className='input-tab__label'>add data files</span>
                <label
                  className='input-tab__tab input-tab__tab'
                  htmlFor='data-files'
                >
                  <span className='input-tab__icon'>
                    <img
                      src='./assets/icons/cloud_upload.png'
                      alt='cloud_upload'
                    />
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
                <span className='input-tab__label'>add images</span>
                <label
                  className='input-tab__tab input-tab__tab'
                  htmlFor='image-files'
                >
                  <span className='input-tab__icon'>
                    <img
                      src='./assets/icons/cloud_upload.png'
                      alt='cloud_upload'
                    />
                  </span>
                  <div className='input-tab__details'>
                    <h3 className='input-tab__title'>Upload data files</h3>
                    <div className='input-tab__info'>
                      Upload .jpg or .png files. Select multiple files up to 2M
                      each.
                    </div>
                  </div>
                </label>
                <input
                  type='file'
                  name='image-files'
                  id='image-files'
                  className='input-tab__input-tag'
                  multiple
                />
              </div>
            </div>
          </div>
          <div className='p-b-7'>
            <div className='input-tab'>
              <span className='input-tab__label'>Select dataset</span>
              <div className='input-tab__tab input-tab__tab--2x'>
                <span className='input-tab__icon'>
                  <img src='./assets/icons/list.png' alt='cloud_upload' />
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
