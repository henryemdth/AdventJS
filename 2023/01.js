function findFirstRepeated(gifts) {
    const seen = new Set();
    return gifts.find(item => seen.size === seen.add(item).size) ?? -1;
  
    // gifts.forEach((gift, index)=>{
    // if((gifts.slice(0, index).includes(gifts[index]) ))
    // return gifts[index] ;
    // });
    //   return -1
  }
  