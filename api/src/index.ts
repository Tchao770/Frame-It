import { Request, Response } from "express";
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const frame = require("./frameImage");

const PORT = 8081;
const IP_ADDRESS = "10.0.0.1";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

// Post Request for uploading image
app.post("/upload", (req: Request, res: Response) => {
  fs.writeFile(
    __dirname + `/../images/uploads/image.png`,
    req.body.uri,
    `base64`,
    (err: string) => {
      if (err) throw err;
      else {
        console.log("Image saved to local storage");
        frame.frameImage({ image: "image", frame: "gold-frame" });
      }
    }
  );
  res.status(200).json({
    message: "success",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port:  ${PORT}`);
});
