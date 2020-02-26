import React from 'react';
import { MdStorage } from 'react-icons/md';

const StorageInfo = props => {
  let { disabled } = { disabled: false, ...props };
  return (
    <div className='storage-info'>
      <div
        className={
          'storage-info__ring' + (disabled ? ' storage-info__ring--empty' : '')
        }
      >
        <div className='icon icon--center'>
          <MdStorage />
        </div>
      </div>
      <span className='storage-info__info'>
        <span className='text--bold'>0M</span> of 50M used
      </span>
    </div>
  );
};

export default StorageInfo;
