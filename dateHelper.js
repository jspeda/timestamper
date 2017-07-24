exports.dateHelper = (input) => {
  let string = input
  if (string.length === 10 && string.match(/^[0-9]+$/) !== null) {
    console.log(new Date(string * 1000));
    return {"unix": "ok"}
  }
  else {
    string = string.toLowerCase();
    console.log(string)
    let unix = parseInt(Date.parse(string).toString().substr(0, 10));
    if (unix < 0) { // if the natural language date is bad
      return {"unix": null, "natural": null}
    }
    else  {   // if everything is fine
      return {"unix": unix, "natural": input}
    }
  }
}
