import React from 'react';
import { FormInput } from '../components/Input';
import { FaPen, FaTable } from 'react-icons/fa';
import {
  MdHourglassEmpty,
  MdEmail,
  MdReply,
  MdFeaturedPlayList
} from 'react-icons/md';
import { IoMdCloudDownload } from 'react-icons/io';

const Project = () => {
  const val = [
    'All projects',
    'ABBR',
    'Shortcut URL',
    'Date Created',
    'ISSN',
    'Author'
  ];

  return (
    <div className='container'>
      <div className='page container-2'>
        <div className='page__header flex-container border__bottom p-b-4'>
          <div className='flex-container'>
            <div className='flex-container'>
              <h2>Untitled Project 1</h2>
              <FaPen className='icon m-l-4' />
            </div>
            <div class='flex-container m-l-13'>
              <div className='icon--rounded'>
                <MdHourglassEmpty className='icon icon--yellow' />
              </div>
              <div className='p-l-3'>
                <span>Data processing in progress</span>
                <p>
                  Some reports may not be available until processing is
                  completed.
                </p>
              </div>
            </div>
          </div>
          <div className='options'>
            <span className='options__item'>
              <IoMdCloudDownload className='icon' />
              <span className='icon__text'>Download Report</span>
            </span>
            <span className='options__item'>
              <MdReply className='icon mirror' />
            </span>
            <span className='options__item'>
              <MdEmail className='icon' />
            </span>
          </div>
        </div>
        <div className='flex-container flex-container--left flex-container--top'>
          <div className='container-3 border--right'>
            <div className='page__content'>
              <div className='options'>
                <FormInput
                  type='select'
                  options={val}
                  className='input--small options__item options__item--left'
                />
                <FormInput
                  type='select'
                  options={val}
                  className='input--small options__item options__item--left'
                />
                <FormInput
                  type='select'
                  options={val}
                  className='input--small options__item options__item--left'
                />
                <FormInput
                  type='select'
                  options={val}
                  className='input--small options__item options__item--left'
                />
              </div>
            </div>
            <div className='page__content'>
              <h4>Reports</h4>
            </div>
          </div>
          <div className='page__content p-l-7'>
            <div>
              <h4>project dataset</h4>
              <div className='card'>
                <div className='card__icon'>
                  <FaTable />
                </div>
                <div className='card__content'>
                  <div className='card__title'>Boris Johnson's Data</div>
                  <div className='card__info'>112.39 KB</div>
                </div>
                <div className='m-l-8'>
                  <MdFeaturedPlayList />
                </div>
              </div>
            </div>
            <div className='side-bar__content'>
              <h4>toolbox</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
