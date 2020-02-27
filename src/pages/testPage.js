import React from 'react';
import DatasetInfo from '../components/datasetInfo';
import Popup from '../components/popup';

const Test = () => {
  return (
    <>
      <div className='container-1 '>
        <div className='flex-container modal'>
          <div className='modal__content'>
            <Popup />
          </div>

          <div className='modal__content m-t-6 '>
            <DatasetInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
