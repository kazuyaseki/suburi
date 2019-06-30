import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FavoriteNumber } from '../FavoriteNumber';

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteNumber min={0} max={10} />, div);
  expect(div.querySelector('input')!.type).toBe('number');
  expect(div.querySelector('label')!.textContent).toBe('Favorite Number');
});
