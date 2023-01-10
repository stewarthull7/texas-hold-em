const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
const { evaluateHands } = require('./src/app');

var jsonParser = bodyParser.json()

app.use(cors());
app.post("/", jsonParser, async (req, res) => {
  try {
    console.log(req.body)
    // TODO: Validate request.

    // TODO: Evaluate hands.
    const result = evaluateHands(req.body.hands);

    const response = { result }
    res.send(response);

  } catch (error) {
    console.error(error)
    res.status(422).send(error);
  }
});
app.listen(5000, () => console.log("The node.js app is listening on port 5000."));