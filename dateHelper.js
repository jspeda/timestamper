exports.dateHelper = (input) => {
  if (input.length === 10) {
    return {"unix": "ok"}
  }
  else {
    return {"bad": "very bad"}
  }

}
