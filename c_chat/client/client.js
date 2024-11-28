const readline = require('readline');
const net = require('net');
const { promptServerDetails } = require('../server/utils'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


promptServerDetails(rl, (serverIp, serverPort) => {
    const client = net.createConnection({ host: serverIp, port: serverPort }, () => {
        console.log(`Connected to chat server at ${serverIp}:${serverPort}`);
        rl.setPrompt('You: ');
        rl.prompt();

       
        rl.on('line', (line) => {
            client.write(line.trim());
            rl.prompt();
        });
    });

    client.on('data', (data) => {
        console.log(data.toString().trim());
    });


    client.on('end', () => {
        console.log('Disconnected from server');
        rl.close();
    });

    // handle errors
    client.on('error', (err) => {
        console.error(`Client error: ${err.message}`);
        rl.close();
    });
});
