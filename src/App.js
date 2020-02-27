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
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
              <Link to='/projects1'>Projects New</Link>
            </li>
            <li>
              <Link to='/projects2'>Projects New dataset Selected</Link>
            </li>
            <li>
              <Link to='/projects3'>Projects New Image Selected</Link>
            </li>
            <li>
              <Link to='/'>Projects Filled</Link>
            </li>
            <li>
              <Link to='/projectCreated'>Projects Created</Link>
            </li>
            <li>
              <Link to='/projectSettings'>Project Settings</Link>
            </li>
            <li>
              <Link to='/datasets'>Datasets</Link>
            </li>
            <li>
              <Link to='/datasetsFilled'>Datasets Filled</Link>
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
          <Route exact path='/projects1'>
            <ProjectsNew />
          </Route>
          <Route exact path='/projects2'>
            <ProjectsDatasetSelected />
          </Route>
          <Route exact path='/projects3'>
            <ProjectsImageSelected />
          </Route>
          <Route exact path='/'>
            <ProjectsFilled />
          </Route>
          <Route exact path='/projectCreated'>
            <ProjectsCreated />
          </Route>
          <Route exact path='/projectSettings'>
            <ProjectsSettings />
          </Route>
          <Route exact path='/datasets'>
            <Datasets />
          </Route>
          <Route exact path='/datasetsFilled'>
            <DatasetsFilled />
          </Route>
          <Route exact path='/popups'>
            <Popups />
          </Route>
          <Route exact path='/datasetUpload'>
            <DatasetUpload />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
