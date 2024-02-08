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
  const [isReplayInProgress, setReplayInProgress] = React.useState(false);
  //const isFinished = clickOrder.length === GRID_SIZE;

  React.useEffect(() => {
    if (!isReplayInProgress && clickOrder.length === GRID_SIZE) {
      setReplayInProgress(true);
    }
    if (isReplayInProgress) {
      setTimeout(() => {
        //while (clickOrder.length > 0) {
        const copy = [...clickOrder];
        copy.shift();
        setClicOrder(copy);
        if (clickOrder.length < 1) {
          setReplayInProgress(false);
        }
        // }
      }, 1000);
    }
  }, [isReplayInProgress, clickOrder]);
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
        {[...Array(GRID_SIZE)].map((_, index) => {
          return (
            <Square
              handleClick={() => handleClick(index)}
              isSelected={clickOrder.includes(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
