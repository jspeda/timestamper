const express = require('express');
const app = express();
const path = require('path');
const dh = require('./dateHelper');

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/:date', (req, res) => {
  console.log(req.params.date)
  res.send(dh.dateHelper(req.params.date))
  // res.send(JSON.stringify(
  //   {
  //     "unix": req.params.date,
  //     "natural": req.params.date
  //   }
  // ))
});

app.listen(8000, () => {
  console.log('listening on port 8000');
});
