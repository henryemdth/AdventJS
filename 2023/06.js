function maxDistance(movements) {
    let r = 0;
    let c = 0;
    const moves = {'<':1,'>':-1};
  
    for(let index =0; index < movements.length; index++){
      if(movements[index] === '*'){
        c++;
        continue;
      }
      r+= moves[movements[index]];
    }
    return Math.abs(r)+ c;
  }