import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

function AccessibleForm() {
  return (
    <form>
      <input
        placeholder="username"
        name="username"
        type="text"
        aria-label="username"
      />
    </form>
  );
}

test('accessible forms pass axe', async () => {
  const { container } = render(<AccessibleForm />);
  expect(await axe(container.innerHTML)).toHaveNoViolations();
});
