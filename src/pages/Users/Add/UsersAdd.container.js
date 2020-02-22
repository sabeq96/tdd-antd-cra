import React from 'react';
import { useHistory } from 'react-router-dom';

import UsersAddPage from './UsersAdd.component';
import Layout from '../../../components/Layout';

import { useFetch } from '../../../lib/useFetch';

export default () => {
  const history = useHistory();
  const [form, setForm] = React.useState({});

  const handleSubmitForm = (data, e) => {
    setForm(data);
  };

  const handleClosePage = () => {
    history.goBack();
  };

  const { data = {}, loading } = useFetch('users?', { form });
  
  return (
    <Layout>
      <UsersAddPage
        handleSubmitForm={handleSubmitForm}
        handleClosePage={handleClosePage}
      />
    </Layout>
  )
}