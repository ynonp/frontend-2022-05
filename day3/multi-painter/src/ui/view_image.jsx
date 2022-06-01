import { observer } from 'mobx-react-lite';
import palette from '../dl/palette';

export default observer(function ViewImage(props) {
  const { image } = props;
  const imageData = image.data;
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
                backgroundColor: palette.getColor(square),
              }}
              onClick={() => image.paint(lineIndex, columnIndex)}
            />
          ))
        ))
      }
    </div>
  );
});