import React from 'react';
import { FormInput } from '../components/Input';
import { useHistory } from 'react-router-dom';

const Project = () => {
  let history = useHistory();

  return (
    <div className='container-dataset-info dataset-info'>
      <div className='flex-container flex-container--right p-t-4'>
        <div
          className='dataset-info__close icon icon--center'
          onClick={history.goBack}
        >
          <i className='fa fa-times'></i>
        </div>
      </div>
      <FormInput
        label='Data File Name'
        placeholder='brexit_data_file.xls'
        className='dataset-info__item'
      />

      <div className='dataset-info__item'>
        <div className='list__title'>File Size</div>
        <div className='list__content'>1.34 MB</div>
      </div>
      <div className='dataset-info__item'>
        <div className='list__title'>Uploaded On</div>
        <div className='list__content'>Wed, 02 Jan 2019 3:40 pm</div>
      </div>
      <div className='dataset-info__item'>
        <div className='list__title'>Uploaded By</div>
        <div className='list__content'>Russell Ward</div>
      </div>
      <div className='dataset-info__item'>
        <div className='list__title p-b-2'>used in</div>
        <div className='list__content'>
          <div className='p-b-4'>
            <span className='icon p-r-3'>
              <i className='fa fa-folder'></i>
            </span>
            <a href='#project'>
              <span className='text--bold'>Untitled Project 1</span>
            </a>
          </div>
          <div className='p-b-4'>
            <span className='icon p-r-3'>
              <i className='fa fa-folder'></i>
            </span>
            <a href='#project'>
              <span className='text--bold'>Boris_Johnson_Popularity</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
