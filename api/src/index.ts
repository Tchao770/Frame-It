import express, { Request, Response, Application } from "express";
import { ImageModel } from "./types/data";
const app: Application = express();
const fs = require("fs");
const frame = require("./frameImage");
const path = require("path");

const PORT = 8081;

app.use(express.urlencoded({ extended: true }));
app.use(
  express.json({
    limit: "25mb",
    type: ["application/json", "text/plain"],
  })
);

// Post Request for uploading image
app.post("/upload", (req: Request, res: Response): void => {
  const imageReq = req.body as ImageModel;
  if (imageReq.uri) {
    fs.writeFile(
      __dirname + `/../images/uploads/${imageReq.title}.png`,
      imageReq.uri,
      `base64`,
      (err: string) => {
        if (err) throw err;
        else {
          console.log("Image saved to local storage");
          frame.frameImage({ image: imageReq.title, frame: "gold-frame" });
        }
      }
    );
  } else {
    let attr = Object.keys(imageReq).map((key, value) => {
      return key + `: ${value}\n`;
    });
    throw new Error(`uri field expected, received: \n${attr}`);
  }
  res.status(200).json({
    message: "success",
  });
});

// Will be used to display framed images
/*
app.get("/framed_images", (_req: Request, _res: Response): void => {
});
*/
app.delete("/images/remove", (req: Request, res: Response): void => {
  const name = req.body.name;
  const paths = path.join(__dirname, `../images/uploads/${name}.png`);
  fs.unlink(paths, (err: Error) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  res.send("Delete requested");
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port:  ${PORT}`);
});

module.exports = server;
