import React, { useRef, useEffect } from "react";
import {
  Alert,
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { ImageProp } from "../types/data";
import { changeImage } from "../logic/changeImage";

const MAX_WIDTH = Dimensions.get("window").width;
const MAX_HEIGHT = Dimensions.get("window").height;

const EditScreen = ({ image, setImage }: ImageProp) => {
  const handleImageChange = async (type: string) => {
    changeImage(image, type)
      ?.then((resolve) => {
        setImage(resolve);
      })
      .catch((error) => console.log(error));
  };

  const handleUpload = () => {
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

  return (
    <SafeAreaView style={styles.editContainer}>
      <View style={styles.publishNav}>
        <Button title="Save" onPress={handleUpload} />
      </View>
      <View style={styles.imageContainer}>
        {image && (
          <Image
            source={image.uri ? { uri: image.uri } : { uri: "placeholder.png" }}
            style={{
              resizeMode: "contain",
              maxWidth: MAX_WIDTH,
              maxHeight: MAX_HEIGHT,
              flex: 1,
            }}
          />
        )}
      </View>
      <View style={styles.editOptions}>
        <Button title="Rotate" onPress={() => handleImageChange("rotate")} />
        <Button title="Resize" onPress={() => handleImageChange("resize")} />
        <Button title="Crop" onPress={() => handleImageChange("crop")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  editContainer: {
    width: "100%",
    height: "90%",
    backgroundColor: "gray",
    flexDirection: "column",
  },
  publishNav: { flex: 1, backgroundColor: "pink" },
  imageContainer: {
    flex: 5,
  },
  editOptions: {
    flex: 1,
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonEdit: {
    justifyContent: "center",
  },
});

export default EditScreen;
