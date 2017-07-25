const express = require('express');
const app = express();
const path = require('path');
const dh = require('./dateHelper');

app.set('port', (process.env.PORT || 8000))

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/:date', (req, res) => {
  res.send(dh.dateHelper(req.params.date))
});

app.listen(app.get('port'), () => {
  console.log('listening on port', app.get('port'));
});
