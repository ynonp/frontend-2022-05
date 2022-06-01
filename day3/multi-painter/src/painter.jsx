
export default function Painter(props) {
    const { image } = props;

    return (
        <div>
            <pre>{JSON.stringify(image)}</pre>
        </div>
    )
}