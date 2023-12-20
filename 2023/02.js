function manufacture(gifts, materials) {
    return gifts.filter(gift => [...gift].every(char => materials.includes(char)))
  }