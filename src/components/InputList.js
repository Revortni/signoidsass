import React from 'react';
import { MdClose } from 'react-icons/md';

export const InputList = props => {
  let { label, name } = props;

  return (
    <div className='input-list__container p-b-10'>
      <label htmlFor={name}>{label}</label>
      {/* <input name={name} {...rest} /> */}
      <div className='input-list'>
        <div className='flex-container flex-container--left'>
          <InputItem text="don't know" />
          <InputItem text='guess' />
          <InputItem text='not sure' />
          <input type='text' className='input-list__input' />
        </div>
      </div>
    </div>
  );
};

const InputItem = ({ text }) => {
  return (
    <div className='input-list__item'>
      <span className='input-list__text'>{text}</span>
      <MdClose className='input-list__icon icon' />
    </div>
  );
};

export default InputList;
