import React from 'react';
import { MdClose } from 'react-icons/md';

export const InputList = props => {
  let { className, textarea, label, name, ...rest } = props;
  let style = className || '';

  return (
    <div className={['input ' + style]}>
      <label htmlFor={name}>{label}</label>
      {/* <input name={name} {...rest} /> */}
      <div className='input-list'>
        <InputItem text="don't know" />
        <InputItem text='guess' />
        <InputItem text='not sure' />
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

export default InputItem;
