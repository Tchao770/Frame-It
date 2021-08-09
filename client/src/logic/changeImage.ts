import { manipulateAsync } from "expo-image-manipulator";
import { ImageObj, OptionParams } from "../types/data";

const optionParams: OptionParams = [
  { rotate: 90 },
  {
    resize: {
      width: 0,
      height: 0,
    },
  },
  {
    crop: {
      originX: 0,
      originY: 0,
      width: 100,
      height: 100,
    },
  },
];

const rotateImage = async (image, setImage) => {
  const adjustedImage = await manipulateAsync(image.uri, [{ rotate: 90 }], {
    base64: true,
  });
  console.log("rotate");
  setImage(adjustedImage);
};

const resizeImage = async (image, setImage) => {
  const adjustedImage = await manipulateAsync(image.uri, [
    { resize: { width: image.width, height: image.height } },
  ]);
  console.log("resize");
  setImage(adjustedImage);
};

const cropImage = async (image, setImage) => {
  const adjustedImage = await manipulateAsync(image.uri, [
    {
      crop: {
        originX: 0,
        originY: 0,
        width: image.width - 100,
        height: image.height - 100,
      },
    },
  ]);
  console.log("crop");
  setImage(adjustedImage);
};

export const changeImage = (image: ImageObj, setImage: any, type: string) => {
  switch (type) {
    case "rotate":
      rotateImage(image, setImage);
      break;
    case "crop":
      cropImage(image, setImage);
      break;
    case "resize":
      resizeImage(image, setImage);
      break;
  }
};
