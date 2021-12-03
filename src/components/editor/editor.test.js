import { render, screen } from '@testing-library/react';
import Editor from './editor';

test ('renders the editor panel', () => {
  const container = render(
    <Editor 
      head="bird"
      body="fancy"
      bottom="pant leg"
      phrase="meow"
    />
  );
  expect(container).toMatchSnapshot();
});