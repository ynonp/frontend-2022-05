import { useState } from "react";
export default function Time() {
    const [seconds, setSeconds] = useState(3600);

    return (
        <div>
            <label>Seconds:
                <input
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                />
            </label>
            <label>Minutes:
                <input
                    value={seconds / 60}
                    onChange={(e) => setSeconds(e.target.value * 60)}
                />
            </label>
            <label>Hours:
                <input
                    value={seconds / 3600}
                    onChange={(e) => setSeconds(e.target.value * 3600)}
                />
            </label>
        </div>
    )
}