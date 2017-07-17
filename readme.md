
> npm install

> npm start server

> npm start client

Open http://localhost:4000/xhr.html and take a look at js console. Every time you reload that site is will make a CORS XMLHttpRequest to the server.

To change the headers sent by the server, edit `server/index.js`.

To change the request, edit `client/xhr.html` (not `client/index.js`, that only servers the `xhr.html` file).
