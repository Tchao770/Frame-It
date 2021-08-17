"use strict";
var _a = require("canvas"), createCanvas = _a.createCanvas, loadImage = _a.loadImage;
var fs = require("fs");
var canvas = createCanvas(0, 0, "png");
var context = canvas.getContext("2d");
var frameImage = function (_a) {
    var imageName = _a.image, frameName = _a.frame;
    try {
        var picture = loadImage(__dirname + ("/../images/uploads/" + imageName + ".png"));
        var frame = loadImage(__dirname + ("/../images/" + frameName + ".png"));
        Promise.all([picture, frame]).then(function (response) {
            response.map(function (image, index) {
                if (index === 0) {
                    canvas.width = image.width;
                    canvas.height = image.height;
                    context.drawImage(image, 0, 0);
                }
                else {
                    context.drawImage(image, 0, 0, canvas.width, canvas.height);
                    console.log("Framing Image...");
                    // Outputs the canvas object
                    fs.writeFileSync(__dirname + ("/../images/framed/" + imageName + "-" + frameName + ".png"), canvas.toBuffer());
                    console.log("Complete!");
                }
            });
        });
    }
    catch (error) {
        console.log(error);
    }
};
module.exports = { frameImage: frameImage };
