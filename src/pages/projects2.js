import React from 'react';
import { FormInput } from '../components/Input';
import InputList from '../components/InputList';
import { Table } from '../components/Table';
import Button from '../components/Button';
import { MdCloudUpload, MdClose } from 'react-icons/md';

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
            <div className='uploaded'>
              <span className='uploaded__label'>add data files</span>
              <div
                className='uploaded__tab uploaded__tab--2x'
                htmlFor='data-files'
              >
                <span className='uploaded__icon'>
                  <MdCloudUpload size={24} class='icon' />
                </span>
                <div className='uploaded__details'>
                  <h3 className='uploaded__title'>corbyn_file_492.csv</h3>
                  <div className='uploaded__info'>.csv file 10.34 MB</div>
                </div>
                <MdClose size={24} class='icon' />
              </div>
            </div>
          </div>
          <div className='p-t-5'>
            <Table val={val} center={true} />
          </div>
          <div className='p-t-6'>
            <FormInput
              label='Please provide a name for the dataset'
              placeholder='My New Project'
              type='select'
              options={val}
            />
          </div>
          <div className='p-t-6'>
            <FormInput
              label='Select analysis field for this dataset'
              placeholder='My New Project'
              type='select'
              options={val}
            />
          </div>
          <InputList label='Select categories you would like to use for project' />
          <div className='input-tab'>
            <span className='input-tab__label'>add data files</span>
            <label
              className='input-tab__tab input-tab__tab--2x'
              htmlFor='data-files'
            >
              <span className='input-tab__icon'>
                <MdCloudUpload size={24} />
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
          <div className='p-t-8'>
            <Button
              label='create'
              className='button--xl'
              type='submit'
              disabled={true}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Project;
