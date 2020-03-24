const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8081;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, ".client/build/index.html"));
});

app.listen(PORT, function() {
  console.log("We are packed and webbing for a webpacked backend", PORT);
});
