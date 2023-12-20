function cyberReindeer(road, time) {

  let path = `.${road.slice(1)}`.split('');

    const result =[road];
    let position = 1;
    for(let index = 1; index < time; index++){
        if(index ===5){
          path = path.join('').replaceAll('|', '*').split('');
        }
      if(path[position] !=='|'){
        road = [...path];
        road[position]='S';
        //road = road.join('');
        // result.push(road = road.join(''));
        road = road.join('');
        position++;
      }
      //  if(index !== 5){
      //   result.push(road);
      // }
      result.push(road);
      

    }
    return result;
  }