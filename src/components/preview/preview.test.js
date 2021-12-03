import { render } from '@testing-library/react';
import Preview from './preview';

test ('renders preview panel', () => {
  const container = render(
    <Preview 
      head = "bird"
      body = "fancy"
      bottom = "pant leg"
    />
  );
  expect(container).toMatchSnapshot();
});