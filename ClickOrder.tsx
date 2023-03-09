import * as React from 'react';
const GRID_SIZE = 7;
const Square = ({ handleClick, isSelected }) => {
  return (
    <div
      onClick={handleClick}
      className="square"
      style={{ backgroundColor: isSelected ? 'green' : '' }}
    ></div>
  );
};

/* const renderSquares = () => {
  const squares = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    squares.push(<Square />);
  }
  return squares;
}; */
export const ClickOrder = () => {
  const [clickOrder, setClicOrder] = React.useState<number[]>([]);
  const isFinished = clickOrder.length === GRID_SIZE;
  const handleClick = (index) => {
    if (!clickOrder.includes(index)) {
      setClicOrder([...clickOrder, index]);
    }
  };
  return (
    <div>
      Click Order
      <div className="grid">
        {/* Alternate approach */}
        {/* {renderSquares()}  */}
        {isFinished ? (
          <div>Finsihed..</div>
        ) : (
          [...Array(GRID_SIZE)].map((_, index) => {
            return (
              <Square
                handleClick={() => handleClick(index)}
                isSelected={clickOrder.includes(index)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
