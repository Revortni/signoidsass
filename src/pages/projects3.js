import React from 'react';
import { FormInput } from '../components/Input';
import Button from '../components/Button';

const Project = () => {
  const val = [
    'Title',
    'ABBR',
    'Shortcut URL',
    'Date Created',
    'ISSN',
    'Author'
  ];

  return (
    <div className='container'>
      <div className='page container-1'>
        <div className='page__header flex-container'>
          <h2 className='page__title'>Create a New Project</h2>
        </div>
        <form className='form' action='' method='post'>
          <FormInput label='Name of the Project' placeholder='My New Project' />
          <FormInput
            label='Description'
            placeholder='This is a short description about the project.'
            type='textarea'
          />
          <div className='flex-container'>
            <div className='input-tab input-tab--disabled'>
              <span className='input-tab__label'>add data files</span>
              <label
                className='input-tab__tab input-tab__tab'
                htmlFor='data-files'
              >
                <span className='input-tab__icon'>
                  <img src='./icons/cloud_upload.png' alt='cloud_upload' />
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
                htmlFor='data-images'
              >
                <span className='input-tab__icon'>
                  <img src='./icons/cloud_upload.png' alt='cloud_upload' />
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
            <div className='preview'>
              <div className='preview__header'>
                <div className='preview__label'>uploaded images</div>
                <div className='preview__button'>Remove all</div>
              </div>
              <div className='preview__content'>
                <div className='preview__item'>
                  <img src='https://picsum.photos/id/200/200/300' alt='ones' />
                  <div className='preview__remove-icon icon'>
                    <img src='./icons/delete-image.png' alt='delete' />
                  </div>
                </div>
                <div className='preview__item'>
                  <img src='https://picsum.photos/id/200/200/300' alt='ones' />
                  <div className='preview__remove-icon icon'>
                    <img src='./icons/delete-image.png' alt='delete' />
                  </div>
                </div>
                <div className='preview__item'>
                  <img src='https://picsum.photos/id/200/200/300' alt='ones' />
                  <div className='preview__remove-icon icon'>
                    <img src='./icons/delete-image.png' alt='delete' />
                  </div>
                </div>
                <div className='preview__item'>
                  <img src='https://picsum.photos/id/200/200/300' alt='ones' />
                  <div className='preview__remove-icon icon'>
                    <img src='./icons/delete-image.png' alt='delete' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FormInput
            label='Project settings'
            placeholder='Customize default settings'
            type='select'
            options={val}
          />
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
