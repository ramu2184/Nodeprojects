//  Reference to Express.
var express = require('express');

// Create instance of Express
var app = express();

// provide a port to listen by express
var port = 5000;

// // // Express will handle any request coming in with the get method.

// if we setup a static directory, every request for a resource will first check in the static directory. 
// if it doesn't find in the static directory, it will go to the other request handlers.
// here we put out bootstarap resources in the public directory.
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/',function(req, res){
res.send('HOME');
});

app.get('/Routing', function(req, res){
    res.send('HOME\\Routing');
});
// // // Express will handle any request coming in with the get method.



// Tell express to listen on this port
app.listen(port, 
    function(err)
    {
        console.log('The server is running on port:'+port);
    }
);

