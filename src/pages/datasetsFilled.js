import React from 'react';
import Button from '../components/Button';
import StorageInfo from '../components/StorageInfo';
import { IoMdSync, IoMdFolder } from 'react-icons/io';

const Project = () => {
  return (
    <div className='container'>
      <div className='page container-1'>
        <div className='page__header flex-container'>
          <h2 className='page__title'>data library</h2>
          <div className='options'>
            <StorageInfo />
            <div className='m-l-8'>
              <Button label='upload data' className='button--s' />
            </div>
          </div>
        </div>
        <div className='page__content'>
          <table className='table'>
            <thead>
              <tr>
                <th className='table__header'>dataset</th>
                <th className='table__header'>size</th>
                <th className='table__header'>uploaded</th>
                <th className='table__header'>actions</th>
              </tr>
            </thead>
            <tbody className='table__body'>
              <tr>
                <td className='table__flex'>
                  <IoMdSync size={24} className='table__icon' />
                  <span className='table__item-name'>brexit_data_file.csv</span>
                </td>
                <td>1.34 MB</td>
                <td>02 jan 2019</td>
                <td className='table__icon-container'>
                  <a href='edit'>
                    <span className='icon'>
                      <i className='fa fa-info-circle'></i>
                    </span>
                  </a>
                  <a href='archive'>
                    <span className='icon'>
                      <i className='fa fa-download'></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td className='table__flex'>
                  <IoMdSync size={24} className='table__icon' />
                  <span className='table__item-name'>
                    new_brexit_data_file.xls
                  </span>
                </td>
                <td>2.3 MB</td>
                <td>02 jan 2019</td>
                <td className='table__icon-container'>
                  <a href='edit'>
                    <span className='icon'>
                      <i className='fa fa-info-circle'></i>
                    </span>
                  </a>
                  <a href='archive'>
                    <span className='icon'>
                      <i className='fa fa-download'></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td className='table__flex'>
                  <IoMdFolder size={24} className='table__icon' />
                  <span className='table__item-name'>Theresa May's Data</span>
                </td>
                <td>123.3 KB</td>
                <td>02 jan 2019</td>
                <td className='table__icon-container'>
                  <a href='edit'>
                    <span className='icon'>
                      <i className='fa fa-info-circle'></i>
                    </span>
                  </a>
                  <a href='archive'>
                    <span className='icon'>
                      <i className='fa fa-download'></i>
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Project;
