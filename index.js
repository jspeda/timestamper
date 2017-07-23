const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(8000, () => {
  console.log('listening on port 8000');
})
