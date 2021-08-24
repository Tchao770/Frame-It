import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView, Dimensions, Image, Text, View } from "react-native";
import { ImageCropper } from "../components/ImageCrop";

const MAX_WIDTH = Dimensions.get("window").width;
const MAX_HEIGHT = Dimensions.get("window").height;

const CropperScreen = ({ route, navigation }: any) => {
  const image = route.params.image;
  return (
    <SafeAreaView style={styles.cropContainer}>
      <Text>Crop the Image</Text>
      <View style={styles.imageContainer}>
        {/* <Image
          source={image.uri ? { uri: image.uri } : { uri: "placeholder.png" }}
          style={styles.image}
        /> */}
        <ImageCropper image={image} />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", {
            adjustedImage: {
              uri: image.uri,
              height: image.height,
              width: image.width,
              base64: image.base64,
            },
          })
        }
        style={styles.saveButton}
      >
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cropContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    height: MAX_HEIGHT,
    width: MAX_WIDTH - 20,
    resizeMode: "contain",
    flex: 1,
  },
  saveButton: {
    backgroundColor: "dodgerblue",
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  saveText: {
    color: "white",
  },
});

export default CropperScreen;
