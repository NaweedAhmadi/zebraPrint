const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);