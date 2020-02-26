import React from 'react';
import Button from '../components/Button';
import { FormInput } from '../components/Input';
import { InputList } from '../components/InputList';
import Checkbox from '../components/Checkbox';

const Project = () => {
  return (
    <div className='container'>
      <div className='page container-1'>
        <div className='page__header page__header--bottom-border'>
          <div className='flex-container flex-container--left'>
            <a href='back'>
              <span className='page__back-button icon'>
                <i className='fa fa-arrow-left'></i>
              </span>
            </a>
            <h2 className='page__title'>Untitled Project 1</h2>
          </div>
        </div>
        <div className='page__content p-l-11'>
          <h3 className='text--title p-b-10'>project configuration</h3>
          <div className='form'>
            <div>
              <Checkbox
                label='Enable Exclude Text when pre-processing'
                content={
                  <FormInput
                    label='Please select the Exclusion List File'
                    type='select'
                  />
                }
                isChecked={true}
              />
            </div>
            <Checkbox label='Enable String Elimination when pre-processing' />
            <Checkbox label='Allow White Space' />
            <Checkbox label='Allow Blank Import' />
            <Checkbox label='Delete Duplicates' />
            <Checkbox label='Perform Automated Spell-check' />
            <Checkbox label='Extract User Names' />
            <Checkbox label='Extract Hashtags' />
            <Checkbox
              label='Use Stop Words'
              content={
                <InputList label='List out the stop words here, separated by commas' />
              }
              isChecked={true}
            />
            <Checkbox
              label='Remove Specific Text Strings'
              content={
                <InputList label='List out strings to be removed, separatred by commas' />
              }
              isChecked={true}
            />

            <div className='flex-container p-t-4'>
              <div>
                <Button label='apply' />
                <Button
                  label='cancel'
                  className='button--white button--bordered m-l-6'
                />
              </div>
              <Button
                label='reset defaults'
                className='button--white button--bordered'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
