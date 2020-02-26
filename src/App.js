import React from 'react';
import Header from './components/Header';
// import Body from './pages/projects';
// import Body from './pages/projects1';
// import Body from './pages/projects2';
// import Body from './pages/projects3';
// import Body from './pages/projectFilled';
import Body from './pages/projectCreated';
// import Body from './pages/projectSettings';
// import Body from './pages/datasetsFilled';
// import Body from './pages/datasets';
// import Test from './pages/testPage';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Body />
      {/* <Test /> */}
    </div>
  );
};

export default App;
