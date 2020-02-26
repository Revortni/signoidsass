import React, { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

const Checkbox = ({ label, content, isChecked }) => {
  const [checked, setChecked] = useState(isChecked || false);

  const toggle = () => {
    setChecked(!checked);
  };

  return (
    <>
      <label className={'checkbox' + (checked ? ' checkbox--checked' : '')}>
        <input
          type='checkbox'
          className='checkbox__input-box'
          onChange={toggle}
        />
        {checked ? (
          <MdCheckBox className='checkbox__input--checked' />
        ) : (
          <MdCheckBoxOutlineBlank className='checkbox__input' />
        )}
        <span className='checkbox__label'>{label}</span>
      </label>
      <div className='checkbox__options'>{checked ? content : null}</div>
    </>
  );
};

export default Checkbox;
