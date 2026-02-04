const http=require('http');
//core module 
//Used for creating web servers and handling HTTP requests and responses
//Provides functionalities to build web applications and APIs
//Hyper Text tyransfer protocol
//Protocol used for communication between web browsers and servers
//Set of rules for requesting and transmitting web resources
// Client---> Server Request Behaviour\\\
//Http used to enfores browser and server communication to follow certain protocols
//Http works on ACTION and URL
//Default actin is GET
//url ----> routing
//http is stateless protocol
//req1---> server   req2---> server   server does not remember the requests hence is stateless
//Does not manage state 
//Server does not know logged in or not 
//JWT is used for telling the server
//   Routing of two types
//   /    \
//URL based routing
//Action based routing


const server=http.createServer((req,res)=>{
    //req---> Incoming request from client
    //res---> Response sent back to client
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});//header status code and content type
        res.end(`<h1>This is to check the html</h1>
            <p>This is </p>`);
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(`<h1>THis is to check</h1>`);
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('Page not found.');
    }
});
server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});