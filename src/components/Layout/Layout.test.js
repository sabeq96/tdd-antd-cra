import '@testing-library/jest-dom/extend-expect'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react'
import { MemoryRouter } from 'react-router-dom';
import {render, fireEvent} from '@testing-library/react'

import Layout from './index';

const childrenText = 'Layout component';
const component = (path) => (
  <MemoryRouter initialEntries={[path]}>
    <Layout>
      {childrenText}
    </Layout>
  </MemoryRouter>
);

test('shows children', () => {
  const { queryByText } = render(component('/authors'));

  expect(queryByText(childrenText)).not.toBeNull();
});

test('change current selected menu item based on location', () => {
  const { container } = render(component('/books'));

  expect(container.querySelector('.ant-menu-item-selected').textContent).toBe('Books');
});

test('change current selected menu by click', () => {
  const { queryByText, container } = render(component('/authors'));

  fireEvent.click(queryByText('Books'));

  expect(container.querySelector('.ant-menu-item-selected').textContent).toBe('Books');
});
