function hasFourLights(board) {
    if (!board?.length) return false;
    const patternGreen = /G{4,}/g;
    const patternRed = /R{4,}/g;
    return board.some(row => {
        const value = row.join('');
        return patternGreen.test(value) || patternRed.test(value);
    }) || (board[0] ?? []).map((char, index) =>
        board.map(array => array[index]).join('')
    ).some(col => patternGreen.test(col) || patternRed.test(col));
}
// 8
console.log(
    hasFourLights([
        ['G', 'G', 'G', 'd', 'G'],
        ['.', 'G', '.', '.'],
        ['.', 'G', '.', '.'],
        ['.', 'G', '.', '.']
    ])
);