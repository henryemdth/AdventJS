function drawGift(size, symbol) {
    if (size === 0)
        return '';
    if (size === 1)
        return '#\n';
    const wall = '#'.repeat(size);
    const space = symbol.repeat(size - 2);
    let init = '';
    let last = '';
    init = `${' '.repeat(size - 1)}${wall}\n`;
    last = `${wall}\n`;
    for (let index = 1; index < size - 1; index++) {
        let dt = `#${space}#${symbol.repeat(index - 1)}#\n`;
        init+= ' '.repeat(size - (1 + index))+dt;
        last= dt+last;
    }
    return init+`${wall}${space}#\n`+last;
}