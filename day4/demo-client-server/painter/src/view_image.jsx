export default function ViewImage(props) {
  const { onClick } = props;
  const imageData = props.image;

  return (
    <div className="image">
      {
        imageData.map((line, lineIndex) => (
          line.map((square, columnIndex) => (
            // <div className={`square ${palette(square)}`} ></div>
            <div
              className="square"
              key={`${lineIndex}-${columnIndex}`}
              style={{
                backgroundColor: square === 0 ? 'white' : 'black',
              }}
              onClick={() => onClick(lineIndex, columnIndex)}
            />
          ))
        ))
      }
    </div>
  );
}
