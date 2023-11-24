// external moudules 
const express = require('express');
const app = express();
const http = require('http');

// expressJS server creation
const expressServer = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(expressServer);
const path = require('path');


app.use(express.static('client/build'));

// path resolve
app.get('*', function(req,res){
    req.sendFile(path.resolve(__dirname,'client','build','index.html'));
});


// app route's
app.get('/express-server', function(req,res){
    res.end("This is my BACKEND");
});


// user connect or disconnect
io.on('connection', function(socket){
    console.log("new user connected!");

    setTimeout(() => {
        socket.emit('msg', 'This is message from server');
    }, 5000);


    socket.on('disconnect', function(){
        console.log("user disconnected");
    });
});



// server listen
expressServer.listen(5000, function(){
    console.log("server run at 5000 port");
});