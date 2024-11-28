1.  Folder Structure 📁
    Create the server folder:

    In the project directory, create a server folder.
    Add the server-related files like server.js and package.json.
    Create the client folder:

   In the same project directory, create a client folder.
   Add client-related files like index.html, client.js, and any styles.



2. Server-Side (server/server.js)
   The server listens on ws://localhost:3000, receives messages from clients, and broadcasts them to all connected users in real-time.

   Run: cd server && npm run start-server

3. Client-Side (client/index.html)
   The client connects to the server, sends messages, and displays messages received from other users.
   Run: Open client/index.html in a browser.

   Working:-
   Start the server: It listens on ws://localhost:3000.
   Open the client: It connects to the server.
   Real-time messaging: Messages sent from one client are broadcast to all others instantly.
