import { render, screen } from '@testing-library/react';
import Home from './home/home';

test('renders home in App', () => {
  const container = render(
    <Home 
      head="bird"
      body="fancy"
      bottom="pantleg"
      phrase="meow"
    />
  );
  expect(container).toMatchSnapshot();
});