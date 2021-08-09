const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

app.post("/upload", (req, res) => {
  fs.writeFile(`./image.png`, req.body.uri, `base64`, (err) => {
    if (err) throw err;
  });
  res.status(200).json({
    message: "success",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port:  ${PORT}`);
});
