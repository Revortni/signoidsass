import React from 'react';
import { FormInput } from '../components/Input';
import Button from '../components/Button';
import { IoMdFolderOpen } from 'react-icons/io';

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
          <div className='options'>
            <FormInput
              type='select'
              className='input--small options__item options__item--space-12'
              options={val}
            />
            <FormInput
              type='select'
              className='input--small options__item options__item--space-12'
              options={val}
            />
            <Button
              label='create project'
              className='button--s button--green options__item options__item--space-12'
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
                    <div className='folder__name'>
                      Brexit Campaign Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Repudiandae quis necessitatibus adipisci
                      delectus dolores, eveniet, fugiat veritatis id illum
                      pariatur expedita commodi perspiciatis modi assumenda quae
                      at explicabo iure. Non?
                    </div>
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
                    <p className='folder__name'>Brexit Campaign</p>
                    <p className='folder__details'>3 projects</p>
                  </div>
                </div>
              </div>
              <div className='folder'>
                <div className='folder__container'>
                  <span className='folder__icon'>
                    <i className='fa fa-folder'></i>
                  </span>
                  <div className='folder__info'>
                    <p className='folder__name'>Brexit Campaign</p>
                    <p className='folder__details'>3 projects</p>
                  </div>
                </div>
              </div>
              <div className='folder'>
                <div className='folder__container'>
                  <span className='folder__icon'>
                    <i className='fa fa-folder'></i>
                  </span>
                  <div className='folder__info'>
                    <p className='folder__name'>Brexit Campaign</p>
                    <p className='folder__details'>3 projects</p>
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
                  <td className='table__flex'>
                    <IoMdFolderOpen size={24} className='table__icon' />
                    <span className='table__item-name'>
                      untitled project 1 Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Reprehenderit rerum est voluptatem
                      animi, aliquid reiciendis sapiente veritatis quas ipsam.
                      Facilis, odio laudantium ipsam libero suscipit quas ex
                      iure alias laborum.
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
                        <i className='fa fa-pen icon'></i>
                      </span>
                    </a>
                    <a href='archive'>
                      <span>
                        <i className='fa fa-download icon'></i>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='table__flex'>
                    <IoMdFolderOpen size={24} className='table__icon' />
                    <span className='table__item-name'>
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
                        <i className='fa fa-pen icon'></i>
                      </span>
                    </a>
                    <a href='archive'>
                      <span>
                        <i className='fa fa-download icon'></i>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='table__flex'>
                    <IoMdFolderOpen size={24} className='table__icon' />
                    <span className='table__item-name'>
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
                        <i className='fa fa-pen icon'></i>
                      </span>
                    </a>
                    <a href='archive'>
                      <span>
                        <i className='fa fa-download icon'></i>
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
