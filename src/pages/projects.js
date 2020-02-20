import React from 'react';
import Button from '../components/Button';

const Project = () => {
  return (
    <div className='container'>
      <div className='page container-1'>
        <h2 class='page__title'>Projects</h2>
      </div>
      <div className='instruction'>
        <img src='./icons/create_new_folder.svg' alt='create new folder' />
        <div className='instruction__text'>
          <p>Currently, there are no projects.</p>
          <p>Upload data files to get started with your first project.</p>
        </div>
        <Button
          label='upload & create'
          className={'instruction__button button--alt button--l'}
        />
        <div className='text-bubble'>
          <div className='text-bubble__content'>
            <div className='text-bubble__img'>
              <img src='./icons/waving_hand.png' alt='' />
            </div>
            <h3 className='text-bubble__title'>First time here?</h3>
            <p className='text-bubble__text'>
              Select some data files to upload. We will create a project for you
              to continue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
