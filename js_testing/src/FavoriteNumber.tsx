import * as React from 'react';

type Props = {
  min: number;
  max: number;
};

export default function FavoriteNumber(props: Props) {
  const [number, setNumber] = React.useState(0);
  const [numberEntered, setNumberEntered] = React.useState(false);

  const handleChange = (event: any) => {
    setNumber(Number(event.target.value));
    setNumberEntered(true);
  };

  const { min, max } = props;
  const isValid = !numberEntered || (number >= min && number <= max);
  return (
    <div>
      <label htmlFor="favorite-number">Favorite Number</label>
      <input
        id="favorite-number"
        type="number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? null : (
        <div data-testid="error-message">The number is invalid</div>
      )}

      <p data-testid="test">test</p>
    </div>
  );
}

export { FavoriteNumber };
