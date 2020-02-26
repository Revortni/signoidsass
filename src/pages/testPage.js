import React from 'react';
import DatasetInfo from '../components/datasetInfo';
import Popup from '../components/popup';

const Test = () => {
  return (
    <>
      <div className='container-1'>
        <div className='flex-container'>
          <Popup />

          <DatasetInfo />
        </div>
      </div>
    </>
  );
};

export default Test;
