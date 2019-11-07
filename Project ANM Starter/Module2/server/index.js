const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send('Helo World from server 2');
});

let port = 4000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

