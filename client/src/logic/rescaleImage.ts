import { Dimensions } from "react-native";
import { ImageObj } from "../types/data";

export default function rescaleImage(nimage: any) {
  const image = nimage.image;
  const phoneWidth = Dimensions.get("window").width;
  const phoneHeight = Dimensions.get("window").height;

  // Only for smaller screens
  const ratio =
    phoneWidth < phoneHeight
      ? phoneWidth / image.width
      : phoneHeight / image.height;

  const rescaledImage = {
    uri: image.uri,
    width: image.width * ratio,
    height: image.height * ratio,
  };

  return rescaledImage;
}
