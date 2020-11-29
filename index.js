const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(PORT, () => {
  console.log(`Started to listen on ${PORT}`);
});
