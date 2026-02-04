//express is not magic
//Express js is wrapper around Node's HTTP server

//PRoblems IN NODE HTTP
//Manual routing
//URL parsing 

//Method checking

//Repititive code for setting headers
//No middleware support
//Hard to scale 

//Request 
//   |
//   |---> Middleware 1 ---> Middleware 2 ---> Handler  ---> Response

import express from "express";
import figlet from "figlet";
import chalk from "chalk";
//Creating the Express app
const app = express();//express returns a collection of functions 
const app2=express();//new instance of express
console.log(typeof(app));// it is a function
app.use(express.json());

//express() returns a function which is used to create the app
//Middleware to parse JSON bodies
//this fucntion handles requests internally 
//Here routes and methods or basically req.url and req.method are handled internally by express
//is app the server ?
app.get("/", (req, res) => {
  const text = figlet.textSync("Hello, World!!");
  res.send(chalk.bgWhite.red(text));
});

app.listen(7000, () => {
  console.log(chalk.bgBlack.blue(("Express server running at http://localhost:3000")));
});
app2.listen(5000,()=>{
    console.log(chalk.bgBlack.green(("Express server running at http://localhost:4000")));
});