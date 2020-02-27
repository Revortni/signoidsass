import React from 'react';
import Popup from '../components/popup';

const DatasetUpload = () => {
  return (
    <>
      <div className='container-1'>
        <div className='flex-container modal'>
          <div className='modal__content'>
            <Popup />
          </div>
        </div>
      </div>
    </>
  );
};

export default DatasetUpload;
