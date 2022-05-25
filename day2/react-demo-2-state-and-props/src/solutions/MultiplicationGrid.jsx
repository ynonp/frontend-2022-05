import { line } from './utils';

export default function MultiplicationGrid(props) { 
    const { n=10 } = props;
    return (
        <table>
            <tbody>
                {line(n, 1).map(lineIndex => (
                    <tr>
                        {line(n, lineIndex).map(value => (
                            <td>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}