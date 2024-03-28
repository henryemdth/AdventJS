function organizeGifts(gifts) {
    let number = '';
    let finalResult = '';
    [...gifts].forEach(gift => {
        if((/[a-z]/).test(gift)){
            const restNumber = number%10;
            let restString = restNumber === 0 ? '' : `(${`${gift}`.repeat(restNumber)})`;
            let initialString = `[${gift}]`.repeat(number/50);
            let secondInitialString = `{${gift}}`.repeat((number/10)%5);
            finalResult +=`${initialString}${secondInitialString}${restString}`;
            number = '';
        }else{
            number+=gift;
        }
    });
    return finalResult;
}
console.log(organizeGifts('71a44b'));