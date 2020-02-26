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
import Datasets from './pages/datasets';
import Popups from './pages/testPage';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Router>
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
              <Link to='/projectFilled'>Projects Filled</Link>
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
          <Route path='/projects'>
            <Projects />
          </Route>

          <Route path='/projects1'>
            <ProjectsNew />
          </Route>

          <Route path='/projects2'>
            <ProjectsDatasetSelected />
          </Route>

          <Route path='/projects3'>
            <ProjectsImageSelected />
          </Route>

          <Route path='/projectFilled'>
            <ProjectsFilled />
          </Route>

          <Route path='/projectCreated'>
            <ProjectsCreated />
          </Route>

          <Route path='/projectSettings'>
            <ProjectsSettings />
          </Route>

          <Route path='/datasets'>
            <Datasets />
          </Route>

          <Route path='/datasetsFilled'>
            <DatasetsFilled />
          </Route>

          <Route path='/popups'>
            <Popups />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;