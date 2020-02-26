import React from 'react';
import { FormInput } from '../components/Input';
import Button from '../components/Button';

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
      <div className='page container-1'>
        <div className='page__header flex-container'>
          <h2>Projects</h2>
          <div className='page__header-option'>
            <FormInput type='select' className='input--small' options={val} />
            <FormInput type='select' className='input--small' options={val} />
            <Button
              label='create project'
              className='button--s button--green'
              type='submit'
            />
          </div>
        </div>
        <div className='page__content'>
          <div className='content'>
            <h4 className='content__header'>project folders</h4>
            <div className='flex-container content__container'>
              <div className='folder'>
                <div className='folder__container'>
                  <span className='folder__icon'>
                    <i className='fa fa-folder'></i>
                  </span>
                  <div className='folder__info'>
                    <div className='folder__name'>Brexit Campaign</div>
                    <div className='folder__details'>3 projects</div>
                  </div>
                </div>
              </div>
              <div className='folder'>
                <div className='folder__container'>
                  <span className='folder__icon'>
                    <i className='fa fa-folder'></i>
                  </span>
                  <div className='folder__info'>
                    <div className='folder__name'>Brexit Campaign</div>
                    <div className='folder__details'>3 projects</div>
                  </div>
                </div>
              </div>
              <div className='folder'>
                <div className='folder__container'>
                  <span className='folder__icon'>
                    <i className='fa fa-folder'></i>
                  </span>
                  <div className='folder__info'>
                    <div className='folder__name'>Brexit Campaign</div>
                    <div className='folder__details'>3 projects</div>
                  </div>
                </div>
              </div>

              <div className='folder folder--add-folder'>
                <div className='folder__container'>
                  <span className='folder__icon'>
                    <i className='fa fa-folder'></i>
                  </span>
                  <div className='folder__info'>
                    <div className='folder__name'>Create Folder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='page__content'>
          <div className='content'>
            <table className='table'>
              <thead>
                <tr>
                  <th className='table__header'>projects</th>
                  <th className='table__header'>created</th>
                  <th className='table__header'>status</th>
                  <th className='table__header'>actions</th>
                </tr>
              </thead>
              <tbody className='table__body'>
                <tr>
                  <td>
                    <span className='table__icon'>
                      <i className='fa fa-folder'></i>
                    </span>
                    <span className='table__folder-name'>
                      untitled project 1
                    </span>
                  </td>
                  <td>02 jan 2019</td>
                  <td className='status status--warn'>
                    <span className='status__icon'>
                      <i className='fa fa-hourglass'></i>
                    </span>
                    <span className='status__text'>processing</span>
                  </td>
                  <td className='table__icon-container'>
                    <a href='edit'>
                      <span>
                        <i className='fa fa-pen'></i>
                      </span>
                    </a>
                    <a href='archive'>
                      <span>
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
                    <span className='table__folder-name'>
                      Boris_Johnson_Popularity
                    </span>
                  </td>
                  <td>02 jan 2019</td>
                  <td className='status status--danger'>
                    <span className='status__icon'>
                      <i className='fa fa-exclamation-triangle'></i>
                    </span>
                    <span className='status__text'>data error</span>
                  </td>
                  <td className='table__icon-container'>
                    <a href='edit'>
                      <span>
                        <i className='fa fa-pen'></i>
                      </span>
                    </a>
                    <a href='archive'>
                      <span>
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
                    <span className='table__folder-name'>
                      Salisbury_Customer_Feedback
                    </span>
                  </td>
                  <td>02 jan 2019</td>
                  <td className='status'>
                    <span className='status__icon'>
                      <i className='fa fa-file'></i>
                    </span>
                    <span className='status__text'>reports ready</span>
                  </td>
                  <td className='table__icon-container'>
                    <a href='edit'>
                      <span>
                        <i className='fa fa-pen'></i>
                      </span>
                    </a>
                    <a href='archive'>
                      <span>
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
    </div>
  );
};

export default Project;
