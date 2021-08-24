import { useNavigation } from "@react-navigation/native";
import { manipulateAsync } from "expo-image-manipulator";
import { ImageChangeProp, ImageObj, OptionParams } from "../types/data";

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

const rotateImage = async (image: ImageObj) => {
  const adjustedImage = await manipulateAsync(image.uri, [{ rotate: 90 }], {
    base64: true,
  });
  return adjustedImage;
};

const resizeImage = async (image: ImageObj) => {
  const adjustedImage = await manipulateAsync(image.uri, [
    { resize: { width: image.width, height: image.height } },
  ]);
  return adjustedImage;
};

const cropImage = async (image: ImageObj) => {
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
  return adjustedImage;
};

const changeImage = (image: ImageObj, type: string) => {
  switch (type) {
    case "rotate":
      return rotateImage(image);
    case "resize":
      return resizeImage(image);
  }
};

export const handleImageChange = async ({
  image,
  setImage,
  type,
}: ImageChangeProp) => {
  const typeLower = type.toLowerCase();
  changeImage(image, typeLower)
    ?.then((resolve) => {
      // Find way to pass set function to edit screen.
      setImage(resolve);
    })
    .catch((error) => console.log(error));
};
