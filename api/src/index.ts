const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

const PORT = 8081;
const IP_ADDRESS = "10.0.0.1";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

// Post Request for uploading image
app.post("/upload", (req, res) => {
  fs.writeFile(`./image.png`, req.body.uri, `base64`, (err) => {
    if (err) throw err;
  });
  res.status(200).json({
    message: "success",
  });
});

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server listening on port:  ${PORT}`);
});
