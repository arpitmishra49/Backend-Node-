//Event driven architecture is a system design where the flow of the program is determined by events such as user actions, sensor outputs, or messages from other programs. In Node.js, this is implemented using the EventEmitter class from the 'events' module.

//Something happens=the system reacts

//Backend of requests 

//Handle thousands of requests 

//Don't know when things will happen

// So instead of "do this , then test"
//Node waits for events

//An event is 
//A notification that sonething happened 

//Examples:


const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const emitter=new EventEmitter();

eventEmitter.once('userRegistered', (username) => {//Execute only one time 
    console.log("User registered:", username);
});
emitter.on('userRegistered', (username) => {
    console.log("User registered:", username);
});
eventEmitter.on('orderPlaced', (orderId) => {
    console.log("Order placed:", orderId);
});
eventEmitter.emit('userRegistered', 'Arpit Mishra');
eventEmitter.emit('userRegistered', "Aryan");
eventEmitter.emit('orderPlaced', [122]);
eventEmitter.emit('orderPlaced', [122]);
emitter.emit('userRegistered', 'Someone');
emitter.off('userRegistered', (username) => {
    console.log("User registered:", username);
});//to prevent memory leak we use off method
//also cause our work is done 


//Same events can be triggered 
//Used for asynchronous programming
//Single event can be called multiple times

