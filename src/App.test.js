import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import StatePage from './StatePage';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/state/:stateName" component={StatePage} />
      </div>
    </Router>
  );
};

export default App;
