import React from 'react';
import Header from './components/Header';
import Projects from './pages/projects';
import ProjectsNew from './pages/projects1';
import ProjectsDatasetSelected from './pages/projects2';
import ProjectsImageSelected from './pages/projects3';
import ProjectsFilled from './pages/projectFilled';
import ProjectsCreated from './pages/projectCreated';
import ProjectsSettings from './pages/projectSettings';
import DatasetsFilled from './pages/datasetsFilled';
import DatasetUpload from './pages/DatasetUpload';
import Datasets from './pages/datasets';
import Popups from './pages/testPage';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <nav className='test-link'>
          <ul>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/projects/new'>Projects New</Link>
            </li>
            <li>
              <Link to='/projects/datasetSelected'>
                Projects New dataset Selected
              </Link>
            </li>
            <li>
              <Link to='/projects/imageSelected'>
                Projects New Image Selected
              </Link>
            </li>
            <li>
              <Link to='/'>
                <Redirect to='/projects/projectFilleds' />
              </Link>
            </li>
            <li>
              <Link to='/projects/projectCreated'>Projects Created</Link>
            </li>
            <li>
              <Link to='/projects/projectSettings'>Project Settings</Link>
            </li>
            <li>
              <Link to='/datasets'>Datasets</Link>
            </li>
            <li>
              <Link to='/datasets/filled'>Datasets Filled</Link>
            </li>
            <li>
              <Link to='/popups'>Popups</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/projects/new'>
            <ProjectsNew />
          </Route>
          <Route exact path='/projects/datasetSelected'>
            <ProjectsDatasetSelected />
          </Route>
          <Route exact path='/projects/imageSelected'>
            <ProjectsImageSelected />
          </Route>
          <Route exact path='/projects/projectCreated'>
            <ProjectsCreated />
          </Route>
          <Route exact path='/projects/projectSettings'>
            <ProjectsSettings />
          </Route>
          <Route exact path='/datasets'>
            <Datasets />
          </Route>
          <Route exact path='/datasets/filled'>
            <DatasetsFilled />
          </Route>
          <Route exact path='/popups'>
            <Popups />
          </Route>
          <Route exact path='/datasets/datasetUpload'>
            <DatasetUpload />
          </Route>
          <Route path='/'>
            <ProjectsFilled />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
