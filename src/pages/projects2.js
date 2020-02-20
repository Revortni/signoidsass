import React from 'react';
import { FormInput } from '../components/Input';
import { Table } from '../components/Table';
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
        <h2 className='page__title'>Create a New Project</h2>
        <form className='form' action='' method='post'>
          <FormInput label='Name of the Project' placeholder='My New Project' />
          <FormInput
            label='Description'
            placeholder='This is a short description about the project.'
            type='textarea'
          />
          <div className='input-tab__container'>
            <div className='input-tab'>
              <span className='input-tab__label'>add data files</span>
              <div className='input-tab__tab input-tab__tab--2x'>
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
          </div>
          <Table val={val} />
          <FormInput
            label='Please provide a name for the dataset'
            placeholder='Labour Party Survey'
          />
          <FormInput
            label='Select analysis field for this dataset'
            placeholder='My New Project'
            type='select'
            options={val}
          />
          <Button
            label='create'
            className='button--xxl'
            type='submit'
            disabled={true}
          />
          <div className='input-tab input-tab--disabled'>
            <span className='input-tab__label'>add data files</span>
            <div className='input-tab__tab input-tab__tab--2x'>
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
        </form>
      </div>
    </div>
  );
};

export default Project;
