import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import Users from './pages/Users';

function App() {
  return (
    <Router basename="/tdd-antd-cra">
      <Switch>
        <Route path="/" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
