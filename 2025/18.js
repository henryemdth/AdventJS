function hasFourInARow(board) {
    if (!board?.length) return false;
    const patternGreen = /G{4,}/g;
    const patternRed = /R{4,}/g;
    let lenghtY = board.length;
    let lenghtX = board[0].length;

    return true;
    // const getStringX = (index) => {

    // };
    // if( lenghtY >= 4 && lenghtX >= 4) {
    //     for(let y = 0; y < lenghtY; y++) {
    //         let stringCross = '';
    //         // if(lenghtX - y >= 4) {
    //             for(let xIndex = 0; xIndex < lenghtX - y; xIndex++) {
    //                 stringCross+= board[y + xIndex][xIndex];
    //             }
    //             console.log(stringCross, 'FRM - Cross y');
    //         // }
    //     }
    //     for(let x = 1; x < lenghtX; x++) {
    
    //     }
    // }
    
    // return board.some(row => {
    //     const value = row.join('');
    //     return patternGreen.test(value) || patternRed.test(value);
    // }) || (board[0] ?? []).map((char, index) =>
    //     board.map(array => array[index]).join('')
    // ).some(col => patternGreen.test(col) || patternRed.test(col));
}
// lenghY - y >= 4
console.log(
    hasFourInARow([
        ['G', 'G', 'G', 'G', 'G'],
        ['.', 'G', '.', '.', '.'],
        ['.', 'G', 'G', '.', '.'],
        ['.', 'G', '.', 'G', '.'],
        ['.', 'G', '.', '.', 'G'],
        ['.', 'G', '.', '.', '.'],
    ])
);
// G... .G.. ..G. ...G
// G... G... G... G...
// ...G G... .G.. ..G.