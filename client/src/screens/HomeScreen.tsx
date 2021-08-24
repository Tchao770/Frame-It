import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import UploadButton from "../components/UploadButton";
import { handleUpload } from "../logic/handleUpload";
import { ImageObj } from "../types/data";

export default function HomeScreen({ route, navigation }: any) {
  // Explore Context API for handling image state
  const [image, setImage] = useState<ImageObj>({
    uri: "",
    width: 0,
    height: 0,
    base64: "",
  });

  useEffect(() => {
    navigation.addListener("focus", () => {
      setImage(route.params?.adjustedImage);
    });
  }, [route.params?.adjustedImage]);

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity
        onPress={() => handleUpload(image)}
        style={styles.frameButton}
      >
        <Text style={styles.title}>Frame It</Text>
      </TouchableOpacity>
      <Image
        source={image?.uri ? { uri: image.uri } : { uri: "placeholder.png" }}
        style={styles.previewImg}
      />
      <View style={styles.buttonOptions}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Edit", {
              image: image,
            })
          }
          style={styles.editContainer}
        >
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
        <UploadButton
          image={image}
          setImage={setImage}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "lightgray",
    flex: 1,
  },
  title: {
    fontSize: 35,
    color: "white",
  },
  frameButton: {
    backgroundColor: "dodgerblue",
    padding: 10,
  },
  previewImg: {
    height: 400,
    width: 400,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  buttonOptions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  editContainer: {
    height: 60,
    width: 140,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  editText: {
    color: "white",
    paddingBottom: 4,
  },
});
