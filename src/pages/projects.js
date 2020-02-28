import React from 'react';
import Button from '../components/Button';
import { MdCreateNewFolder } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

const Project = () => {
  let history = useHistory();

  return (
    <div className='container'>
      <div className='page container-1'>
        <div className='page__header flex-container'>
          <h2 className='page__title'>Projects</h2>
        </div>
        <div className='instruction p-t-17'>
          <MdCreateNewFolder size={64} className='icon icon--inactive' />
          <div className='instruction__text'>
            <p>Currently, there are no projects.</p>
            <p>Upload data files to get started with your first project.</p>
          </div>
          <Button
            label='upload & create'
            className={'instruction__button button--green button--l'}
            onClick={() => {
              history.push('/projects/new');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
