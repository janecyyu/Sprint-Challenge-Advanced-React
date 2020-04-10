import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Title is appearing',()=>{
  //Arrange
  // Act
  // Assert
  const { getByText } = render(<App />);
  // const headerText = getByText(/Player List/i);
  // expect(headerText).toBeInTheDocument();
  expect(getByText(/Player List/i)).toBeInTheDocument;
});