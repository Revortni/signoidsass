import React from 'react';
import Button from '../components/Button';
import StorageInfo from '../components/StorageInfo';

const Project = () => {
  return (
    <div className='container'>
      <div className='page container-1'>
        <div className='page__header flex-container'>
          <h2 className='page__title'>Data Library</h2>
          <div className='page__header-option'>
            <StorageInfo disabled={true} />
          </div>
        </div>
        <div className='instruction p-t-17'>
          <img src='./icons/create_new_folder.svg' alt='create new folder' />
          <div className='instruction__text'>
            <p>
              Currently, there are no files in your library. Upload your first
              data to get started.
            </p>
          </div>
          <Button
            label='upload data'
            className={'instruction__button button--green button--l'}
          />
          <div className='text-bubble'>
            <div className='text-bubble__content'>
              <div className='text-bubble__img'>
                <img src='./icons/waving_hand.png' alt='' />
              </div>
              <h3 className='text-bubble__title'>Upload a File</h3>
              <p className='text-bubble__text'>
                Datasets can be used in variety of ways and are re-usable set of
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
