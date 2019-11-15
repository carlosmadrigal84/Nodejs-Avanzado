'use strcit';

const express = require('express');
const app = express();
const server = require('http').Server(app);

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html');// Para servir el fichero index.html
});

server.listen(3000, () => {
    console.log('listening on port 3000');
});

// añadimos websockets
const io = require('socket.io')(server);

io.on('connection', socket => {
    // socket es una conexión con cada browser
    console.log('nueva conexión de un cliente');
    socket.on('nuevo mensaje', data => { // mensaje recibido de un browser
        console.log('recibido', data);
        // emito a todos los browsers que estén conectados
        io.emit('nuevo-mensaje', data);
    });

    setInterval(() => {
        socket.emit('pasa un segundo');
    }, 1000);
    
});