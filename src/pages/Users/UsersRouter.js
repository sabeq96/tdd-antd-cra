import React from 'react';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';

import UsersList from './List';
import UserAdd from './Add';
import { Button } from 'antd';

export default ({ match }) => {
  return (
    <div>
      <AddFabButton />
      <UsersList />
      <Switch>
        <Route path={match.url + '/add'} component={UserAdd} />
      </Switch>
    </div>
  );
}

const AddFabButton = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const handleButtonClick = () => { history.push(match.url + '/add'); }

  return (
    <div style={{ position: 'absolute', top: '44px', right: '48px' }}>
      <Button
        size="large"
        type="primary"
        onClick={handleButtonClick}
      >
        Add new
      </Button>
    </div>
  )
}