const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//This will cause the server to hang and not respond to requests after the first one
//The issue is that the server does not close connections that are kept open for 5 seconds. 
//To solve this problem you need to implement a timeout on the response, or use a connection pool.