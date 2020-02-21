import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import UsersList from './pages/Users/List';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={UsersList} />
      </Switch>
    </Router>
  );
}

export default App;
