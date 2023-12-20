function findNaughtyStep(original, modified) {
    let [min, max] = [...((original.length < modified.length)? [original, modified]: [modified, original])];
  
    return  [...max].filter((char, i)=> char !== min[i])[0] ?? '';
    // for(let index = 0; index < min.length; index++){
    //   max= max.replace(min[index], '');
    // }
    // return `${max}`
   
  }