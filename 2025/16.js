function packGifts(gifts, maxWeight) {
let max = 0;
let container = 0;
  for(let gift of gifts){
    if(gift > maxWeight) return null;
    if(max + gift >= maxWeight) {
        container++;
        max = (max + gift === maxWeight ? 0 : gift);
    } else {
        max += gift;
    }
  }
  if(max>0){
    container++;
  }
  return container;
}

console.log(packGifts([2, 3, 4, 1], 5));
console.log(packGifts([], 10));