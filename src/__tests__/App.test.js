import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Register from '../Components/Auth/SignUp'
 

test('renders the App component', () => {
  render(<Register />);
  // Add your assertions here to validate the rendered output or behavior
});