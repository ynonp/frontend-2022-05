export function line(columnCount, myIndex=1) {
    return (new Array(columnCount)).fill(0).map((x, idx) => (idx + 1) * myIndex)
}

