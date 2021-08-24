import { Alert } from "react-native";
import { ImageObj } from "../types/data";

export const handleUpload = (image: ImageObj) => {
  /*
      Fetch URL will depend on how you are testing the device.
      If you are using an emulator/web browser, http://localhost:8080/upload will do
      Otherwise, if you are using a physical device, you need to use your computer's IPv4 address
  */
  //const ip = "0.0.0.0";
  const ip = "localhost";

  // Handle cases of changed images.
  let resultURI = image.uri.includes("data:image/jpeg;base64,")
    ? image.uri.replace("data:image/jpeg;base64,", "")
    : image.uri.replace("data:image/png;base64,", "");

  // Fetch method not properly returning uri or title to the body of req

  const imagePost = {
    title: "example",
    uri: resultURI,
  };

  fetch(`http://${ip}:8081/upload`, {
    mode: "no-cors",
    method: "POST",
    body: JSON.stringify(imagePost),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success: ", data);
    })
    .catch((error) => {
      Alert.alert("upload failed");
      console.error("Error:", error);
    });
};
