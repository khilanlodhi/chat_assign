const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: 3000 });

let clients = [];

wsServer.on('connection', (socket) => {
    console.log('Client connected');
    clients.push(socket);

    
    socket.on('message', (message) => {
        console.log(`Message from client: ${message}`);
        clients.forEach((client) => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(`user: ${message}`);
            }
        });
    });

    
    socket.on('close', () => {
        console.log('Client disconnected');
        clients = clients.filter((client) => client !== socket);
    });
});

console.log('server listening on ws://localhost:3000');
