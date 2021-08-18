import express, { Request, Response, Application } from "express";
const app: Application = express();
const fs = require("fs");
const frame = require("./frameImage");
const path = require("path");

const PORT = 8081;

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "25mb" }));

// Post Request for uploading image
app.post("/upload", (req: Request, res: Response): void => {
  console.log(req.body.uri);
  //if (req.body.uri) {
  fs.writeFile(
    __dirname + `/../images/uploads/${req.body.title}.png`,
    req.body.uri,
    `base64`,
    (err: string) => {
      if (err) throw err;
      else {
        console.log("Image saved to local storage");
        frame.frameImage({ image: req.body.title, frame: "gold-frame" });
      }
    }
  );
  /*
  } else {
    let attr = Object.keys(req.body).map((key, value) => {
      return key + `: ${value}\n`;
    });
    throw new Error(`uri field expected, received: \n${attr}`);
  }
  */
  res.status(200).json({
    message: "success",
  });
});

app.get("/hello", (req: Request, res: Response): void => {
  console.log("ayo");
  res.send("nice!");
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
