import React from 'react';
import Button from '../components/Button';
import { MdCreateNewFolder } from 'react-icons/md';

const Project = () => {
  return (
    <div className='container'>
      <div className='page container-1'>
        <div className='page__header flex-container'>
          <h2 class='page__title'>Projects</h2>
        </div>
        <div className='instruction'>
          <MdCreateNewFolder size={66} className='icon' />
          <div className='instruction__text'>
            <p>Currently, there are no projects.</p>
            <p>Upload data files to get started with your first project.</p>
          </div>
          <Button
            label='upload & create'
            className={'instruction__button button--green button--l'}
          />
          {/* <div className='text-bubble'>
            <div className='text-bubble__content'>
              <div className='text-bubble__img'>
                <img src='./icons/waving_hand.png' alt='' />
              </div>
              <h3 className='text-bubble__title'>First time here?</h3>
              <p className='text-bubble__text'>
                Select some data files to upload. We will create a project for
                you to continue.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
