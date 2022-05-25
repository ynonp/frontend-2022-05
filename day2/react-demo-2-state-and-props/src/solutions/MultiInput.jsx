import { useState } from "react";
import { line } from './utils';

export default function MultiInput(props) {
    const { inputCount=50 } = props;
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div>
            {line(inputCount).map(() => (
                <input
                    value={text}
                    placeholder="Please type something ..."
                    onChange={handleChange}
                />
            ))}
        </div>
    )
}