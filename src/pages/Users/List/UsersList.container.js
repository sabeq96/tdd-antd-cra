import React from 'react';

import UsersListPage from './UsersList.component';
import Layout from '../../../components/Layout';

import { useFetch } from '../../../useFetch';

const mappings = { username: '_like=', email: '_like='}

export default () => {
  const [filters, setFilters] = React.useState({});
  const [pagination, setPagination] = React.useState({ current: 1, pageSize: 5 });
  const [sorter, setSorter] = React.useState({});
  
  const handleTableChange = (p, f, s) => {
    setPagination(p);
    setSorter(s);
    setFilters(f);
  }

  const handleSubmitFilters = (data, e) => {
    setFilters(data);
  };

  const { data = [], loading } = useFetch('users?', { filters, pagination, sorter}, mappings);
  
  return (
    <Layout>
      <UsersListPage
        list={data}
        loading={loading}
        handleTableChange={handleTableChange}
        handleSubmitFilters={handleSubmitFilters}
      />
    </Layout>
  )
}