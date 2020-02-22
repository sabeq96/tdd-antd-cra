import React from 'react';
import { map } from 'lodash';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const sortMapper = { ascend: 'asc', descend: 'desc' } 

const handleSortValues = (s) => !s.order ? {} : { _order: sortMapper[s.order], _sort: s.field };
const handlePaginationValues = (p) => ({ _page: p.current, _limit: p.pageSize });
const toQueryString = (params, mappings) => map(params, (p, k) => `${k}${mappings[k] || '='}${p}`).join('&');

export const useFetch = (source, { filters = {}, pagination = {}, sorter = {} } = {}, mappings = {}) => {
  const [data, setData] = React.useState(null);
  const [loading, setIsLoading] = React.useState(false);

  const sortValues = handleSortValues(sorter); 
  const paginationValues = handlePaginationValues(pagination);

  const query = BASE_URL
    .concat(source)
    .concat(toQueryString({...filters, ...sortValues, ...paginationValues}, mappings));

  React.useEffect(() => {
    setIsLoading(true);

    const fetchResponse = async () => fetch(query)
      .then((r) => r.json())
      .then((r) => { setData(r); })
      .finally(() => { setIsLoading(false); });

      fetchResponse();
  }, [query]);

  return { data, loading };
};

export const LIMITS = { posts: 100, comments: 500, albums: 100, photos: 5000, todos: 200, users: 10 }