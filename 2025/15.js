function drawTable(data, sortBy) {
  const sortedData = [...data].sort((a,b) => {
    if (typeof a[sortBy] === 'number') {
      const numA = Number(a[sortBy]);
      const numB = Number(b[sortBy]);
      return numA - numB;

    }
    const nameA = String(a[sortBy])?.toLowerCase();
    const nameB = String(b[sortBy])?.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  let rowsNumber = {};
  for(const [key, value] of Object.entries(data[0])){
    rowsNumber[key] = Math.max( ...sortedData.map((data) =>String(data[key]).length));
    }
  let lines = '+';
  let header = '\n|';
  let content = '\n';
  let charCode = 'A'.charCodeAt(0);


  for(let item = 0; item < sortedData.length; item++){
    content += '|';
    for(const [key, value] of Object.entries(data[0])){
        content += ` ${String(sortedData[item][key]).padEnd(rowsNumber[key])} |`;

        if(item === 0){
            lines += `${'-'.repeat(rowsNumber[key]+2)}+`;
            header += ` ${String.fromCharCode(charCode)}${' '.repeat(rowsNumber[key])}|`;
            charCode++;
        }
    }
    content +='\n'
  }
    header+='\n';
  return lines+header+lines+content+lines;
}

console.log(drawTable(
  [
    { name: 'Charlie', city: 'New York', qu: 3 },
    { name: 'Alice', city: 'London', qu: 1 },
    { name: 'Bob', city: 'Paris', qu: 100 }
  ],
  'qu'
));