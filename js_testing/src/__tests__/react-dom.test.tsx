import * as React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { FavoriteNumber } from '../FavoriteNumber';

afterEach(() => {
  // メモリの使いすぎを防ぐため
  // render 関数は body の下に要素を作る。何もしないとそのDOMはメモリに保持されたままになる
  // これを解放するために unmount 関数を呼ぶことができるが、毎回毎回呼ぶのもアレなので、afterEach で宣言する
  cleanup();
});

test('renders a number input with a label "Favorite Number"', () => {
  const { getByLabelText, getByTestId } = render(
    <FavoriteNumber min={0} max={10} />
  );
  const input = getByLabelText(/favorite number/i);
  const label = getByTestId('test');
  expect(input).toHaveAttribute('type', 'number');
  expect(label).toHaveTextContent('test');
});
