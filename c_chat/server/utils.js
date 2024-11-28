
function broadcastMessage(message, clients, senderSocket) {
    clients.forEach((client) => {
        if (client !== senderSocket) {
            client.write(`Client says: ${message}\n`);
        }
    });
}


function removeClient(clients, clientSocket) {
    return clients.filter((client) => client !== clientSocket);
}


function promptServerDetails(rl, callback) {
    rl.question('Enter server IP (default: 127.0.0.1): ', (ip) => {
        const serverIp = ip.trim() || '127.0.0.1';
        rl.question('Enter server port (default: 3000): ', (port) => {
            const serverPort = parseInt(port.trim(), 10) || 3000;
            callback(serverIp, serverPort);
        });
    });
}

module.exports = { broadcastMessage, removeClient, promptServerDetails };
