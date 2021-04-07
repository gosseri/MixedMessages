
const firstMessage = ['It is going to rain. ', 'It is going to snow. ', 'It is going to be sunny. '];
const secondMessage = [' Wear your raincoat.', ' Wear your snowboots.', ' Wear your swim trunks.'];
const thirdMessage = [' Stay inside!', ' Go sledding!', ' Go swimming!'];
const fullMessage = [randomFM(firstMessage) + randomSM(secondMessage) + randomTM(thirdMessage)];

function randomFM (firstMessage){
    return firstMessage[Math.floor(Math.random() * firstMessage.length)];
}

function randomSM(secondMessage){
    return secondMessage[Math.floor(Math.random() * secondMessage.length)];
}

function randomTM(thirdMessage){
    return thirdMessage[Math.floor(Math.random() * thirdMessage.length)];
}

console.log(fullMessage);