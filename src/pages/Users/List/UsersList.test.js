import React from 'react'
import { mount } from 'enzyme';

import UsersList from './index';

describe('<UsersList />', () => {
  it('contains filters', () => {
    const wrapper = mount(UsersList);

    expect(wrapper.find('.e2e-name-filter'));
    expect(wrapper.find('.e2e-email-filter'));
    expect(wrapper.find('.e2e-city-filter'));

    expect(wrapper.find('.e2e-table'));
    expect(wrapper.find('.e2e-pagination'));
  });

  it('contains filters', () => {
    const wrapper = mount(UsersList);

    expect(wrapper.find('.e2e-pagination-current').text()).toBe(1);
    expect(wrapper.find('.ant-table-column-name')).not.toBeFalsy();
    expect(wrapper.find('.ant-table-column-username')).not.toBeFalsy();
    expect(wrapper.find('.ant-table-column-email')).not.toBeFalsy();
  });
});
