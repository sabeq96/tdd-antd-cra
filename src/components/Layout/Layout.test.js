import React from 'react'
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Layout from './index';

const childrenText = 'Layout component';
const component = (path) => (
  <MemoryRouter initialEntries={[path]}>
    <Layout>
      {childrenText}
    </Layout>
  </MemoryRouter>
);

describe('<Layout />', () => {
  it('renders children', () => {
    const wrapper = mount(component('/authors'));

    expect(wrapper.find('.e2e-container').text()).toBe(childrenText);
  });

  it('change current selected menu item based on location', () => {
    const wrapper = mount(component('/books'));
  
    expect(wrapper.find('.ant-menu-item-selected').text()).toBe('Books');
  });

  it('change current selected menu by click', async () => {
    const wrapper = mount(component('/authors'));
    const bookItem = () => wrapper.find('.e2e-menu-item').last();
  
    bookItem().simulate('click');

    expect(bookItem().hasClass('ant-menu-item-selected')).toBe(true);
  });
});
