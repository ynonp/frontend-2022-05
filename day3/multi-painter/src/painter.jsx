
function palette(value) {
    return [
        'white',
        'black',
        'red',
        'green',
        '#2202AA',
    ][value];
}

export default function Painter(props) {
    const { image } = props;

    return (
        <div>
            <pre>{JSON.stringify(image)}</pre>
            <div className="image">
            {
                image.map((line, lineIndex) => (
                    line.map((square, columnIndex) => (
                        // <div className={`square ${palette(square)}`} ></div>
                        <div
                            className="square"
                            key={`${lineIndex}-${columnIndex}`}
                            style={{
                                backgroundColor: palette(square),
                            }}
                        />
                    ))
                ))
            }
            </div>
        </div>
    )
}