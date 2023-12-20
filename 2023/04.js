function decode(message) {
    const regex = /\([^()]+\)/g;
    let newMessage = message.match(regex);
    newMessage.forEach(mess =>{
      message = message.replace(mess ,[...mess.slice(1,mess.length -1)].reverse().join(''));
    });
        newMessage = message.match(regex);
    if(!newMessage)
    return message;
  
    newMessage.forEach(mess =>{
      message = message.replace(mess ,[...mess.slice(1,mess.length -1)].reverse().join(''));
    });
    return message;
  }