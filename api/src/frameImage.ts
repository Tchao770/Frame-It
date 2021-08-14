const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");

const canvas = createCanvas(0, 0, "png");
const context = canvas.getContext("2d");

const frameImage = ({ image: imageName, frame: frameName }) => {
  try {
    const picture = loadImage(
      __dirname + `/../images/uploads/${imageName}.png`
    );
    const frame = loadImage(__dirname + `/../images/${frameName}.png`);

    Promise.all([picture, frame]).then((response) => {
      response.map((image, index) => {
        if (index === 0) {
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0);
        } else {
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          console.log("Framing Image...");
          // Outputs the canvas object
          fs.writeFileSync(
            __dirname + `/../images/framed/${imageName}-${frameName}.png`,
            canvas.toBuffer()
          );
          console.log("Complete!");
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { frameImage };
