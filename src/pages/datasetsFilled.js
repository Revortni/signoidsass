import React from 'react';
import Button from '../components/Button';
import StorageInfo from '../components/StorageInfo';

const Project = () => {
  return (
    <div className='container'>
      <div className='page container-1'>
        <div className='page__header flex-container'>
          <h2 className='page__title'>data library</h2>
          <div className='page__header-option'>
            <StorageInfo />
            <Button label='upload data' className='button--xs' />
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
                <td>
                  <span className='table__icon'>
                    <i className='fa fa-sync-alt rotate-90 '></i>
                  </span>
                  <a href='#file'>
                    <span className='table__item-name'>
                      brexit_data_file.csv
                    </span>
                  </a>
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
                <td>
                  <span className='table__icon'>
                    <i className='fa fa-sync-alt rotate-90'></i>
                  </span>
                  <a href='#file'>
                    <span className='table__item-name'>
                      new_brexit_data_file.xls
                    </span>
                  </a>
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
                <td>
                  <span className='table__icon'>
                    <i className='fa fa-folder'></i>
                  </span>
                  <a href='link'>
                    <span className='table__item-name'>
                      Salisbury_Customer_Feedback
                    </span>
                  </a>
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
