import { render, screen } from '@testing-library/react';
import Home from './home';
import Preview from '../components/preview/preview';
import Editor from '../components/editor/editor';

test('renders editor and preview in home panel', () => {
  const container = render(
    <><Editor /><Preview /></>
  );
  expect(container).toMatchSnapshot();
})