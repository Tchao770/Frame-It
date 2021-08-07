const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

var imgsrc;

app.post("/upload", (req, res) => {
  fs.writeFile(`./image.png`, req.body.uri, `base64`, (err) => {
    if (err) throw err;
  });
  imgsrc = req.body.uri;
  res.status(200).json({
    message: "success",
  });
});

app.get("/getImage", (req, res) => {
  res.json({ imgsource: imgsrc });
});

app.listen(PORT, () => {
  console.log(`Server listening on port:  ${PORT}`);
});
