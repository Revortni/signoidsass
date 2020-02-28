import React from 'react';
import Button from '../components/Button';
import StorageInfo from '../components/StorageInfo';
import { MdCreateNewFolder } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

const Project = () => {
  let history = useHistory();

  return (
    <div className='container'>
      <div className='page container-1'>
        <div className='page__header flex-container'>
          <h2 className='page__title'>Data Library</h2>
          <div className='options'>
            <StorageInfo disabled={true} />
          </div>
        </div>
        <div className='instruction p-t-17'>
          <MdCreateNewFolder size={64} className='icon icon--inactive' />
          <div className='instruction__text'>
            <p>
              Currently, there are no files in your library. Upload your first
              data to get started.
            </p>
          </div>
          <Button
            label='upload data'
            className={'instruction__button button--green button--l'}
            onClick={() => {
              history.push('/datasets/datasetUpload');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
