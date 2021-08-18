"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var fs = require("fs");
var frame = require("./frameImage");
var path = require("path");
var PORT = 8081;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json({ limit: "25mb" }));
// Post Request for uploading image
app.post("/upload", function (req, res) {
    console.log(req.body);
    //if (req.body.uri) {
    fs.writeFile(__dirname + ("/../images/uploads/" + req.body.title + ".png"), req.body.uri, "base64", function (err) {
        if (err)
            throw err;
        else {
            console.log("Image saved to local storage");
            frame.frameImage({ image: req.body.title, frame: "gold-frame" });
        }
    });
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
app.get("/hello", function (req, res) {
    console.log("ayo");
    res.send("nice!");
});
// Will be used to display framed images
/*
app.get("/framed_images", (_req: Request, _res: Response): void => {
});
*/
app.delete("/images/remove", function (req, res) {
    var name = req.body.name;
    var paths = path.join(__dirname, "../images/uploads/" + name + ".png");
    fs.unlink(paths, function (err) {
        if (err) {
            console.log(err);
            return;
        }
    });
    res.send("Delete requested");
});
var server = app.listen(PORT, function () {
    console.log("Server listening on port:  " + PORT);
});
module.exports = server;
