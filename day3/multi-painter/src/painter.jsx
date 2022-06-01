import image from './dl/image';
import { observer } from 'mobx-react-lite';

function palette(value) {
    return [
        'white',
        'black',
        'red',
        'green',
        '#2202AA',
    ][value];
}

export default observer(function Painter(props) {
    const imageData = image.data;
    return (
        <div className='painter'>
            <pre>{JSON.stringify(image)}</pre>
            <div className="image">
            {
                imageData.map((line, lineIndex) => (
                    line.map((square, columnIndex) => (
                        // <div className={`square ${palette(square)}`} ></div>
                        <div
                            className="square"
                            key={`${lineIndex}-${columnIndex}`}
                            style={{
                                backgroundColor: palette(square),
                            }}
                            onClick={() => image.paint(lineIndex, columnIndex, 1)}
                        />
                    ))
                ))
            }
            </div>
        </div>
    )
});