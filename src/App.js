import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import Authors from './pages/Authors';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Authors} />
      </Switch>
    </Router>
  );
}

export default App;
