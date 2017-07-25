const moment = require('moment');

exports.dateHelper = (input) => {
  let string = input
  if (string.length === 10 && string.match(/^[0-9]+$/) !== null) {
    let date = moment(parseInt(string) * 1000).format('MMMM D, YYYY');
    return {"unix": parseInt(string), "natural": date}
  }
  else {
    string = string.toLowerCase();
    let unix = parseInt(Date.parse(string).toString().substr(0, 10));

    if (unix < 0 || string.length < 10) { // this won't null-out a bad natural language date
      return {"unix": null, "natural": null}
    }
    else  {   // if everything is fine
      return {"unix": unix, "natural": input}
    }
  }
}
