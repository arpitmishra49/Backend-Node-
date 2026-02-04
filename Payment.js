const fs=require('fs');
const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

function processPayment(amount,paymentId,paymentMethod){
    fs.appendFileSync('payment1.txt', `Processing payment of amount: ${amount} ${paymentId} ${paymentMethod}`);
    eventEmitter.emit('paymentProcessed', amount);

}
processPayment(400,123456,'Credit Card');