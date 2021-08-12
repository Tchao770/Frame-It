const { createCanvas, loadImage, createImageData, Image } = require("canvas");
const fs = require("fs");

const frameImage = () => {};

const canvas = createCanvas(0, 0, "png");
const context = canvas.getContext("2d");

const image = loadImage(`../image.png`)
  .then((response) => {
    canvas.width = response.width;
    canvas.height = response.height;
    context.drawImage(response, 0, 0);
  })
  .catch((err) => {
    console.log(err);
  });

const frame = loadImage(`../gold-frame.png`)
  .then((response) => {
    console.log(response);
    context.drawImage(response, 0, 0, canvas.width, canvas.height);

    // Outputs the canvas object
    fs.writeFileSync("out.png", canvas.toBuffer());
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = { frameImage };
