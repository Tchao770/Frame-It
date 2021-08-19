import { Alert } from "react-native";
import { ImageObj } from "../types/data";

export const handleUpload = (image: ImageObj) => {
  /*
      Fetch URL will depend on how you are testing the device.
      If you are using an emulator/web browser, http://localhost:8080/upload will do
      Otherwise, if you are using a physical device, you need to use your computer's IPv4 address
  */
  //const ip = "172.28.56.235";
  const ip = "localhost";

  // Handle cases of changed images.
  let resultURI = image.uri.includes("data:image/jpeg;base64,")
    ? image.uri.replace("data:image/jpeg;base64,", "")
    : image.uri.replace("data:image/png;base64,", "");

  // Fetch method not properly returning uri or title to the body of req
  fetch(`http://${ip}:8081/upload`, {
    mode: "no-cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "example",
      uri: resultURI,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
      }
      throw new Error("Something went wrong.");
    })
    .catch((error) => {
      Alert.alert("upload failed");
      console.error(error);
    });
};
