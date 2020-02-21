import React from 'react';

import AuthorsListPage from './Authors.component';
import Layout from '../../components/Layout';

const useFetch = (url) => {
  const [data, setData] = React.useState({});
  const [loading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    const fetchResponse = async () => fetch(url)
      .then((r) => r.json())
      .then((r) => { setData(r); })
      .finally(() => { setIsLoading(false); });

      fetchResponse();
  }, [url]);

  return { data, loading };
};

export default () => {
  const { data, loading } = useFetch('http://localhost:3001/authors?_page=1&_limit=2');
  console.log(data)
  return (
    <Layout>
      <AuthorsListPage list={data.data} loading={loading} />
    </Layout>
  )
}