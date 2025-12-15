function findGiftPath(workshop, gift) {
    const dfsSearch = (object, gift) => {
        for(const [key, value] of Object.entries(object)) {
            if (typeof value === 'object') {
                const arraySearched = dfsSearch(value, gift);
                if (arraySearched.length > 0) {
                    return [key, ...arraySearched];
                }

            } else {
                if (value === gift) return [key]
            }
        }
        return [];
    };
    return dfsSearch(workshop, gift);
}

const workshop = {
    storage: {
        shelf: {
            box1: 'train',
            box2: 'switch'
        },
        box: 'car'
    },
    gift: 'doll'
}
// 8
console.log(findGiftPath(workshop, 'switch'), ' GET'); // ['storage', 'shelf', 'box1']
// console.log(findGiftPath(workshop, 'car'));