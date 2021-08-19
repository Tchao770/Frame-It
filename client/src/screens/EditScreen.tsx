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

const EditScreen = ({ navigation, route }: any) => {
  const { image } = route.params;
  const handleImageChange = async (type: string) => {
    changeImage(image, type)
      ?.then((resolve) => {
        // Find way to pass set function to edit screen.
        setImage(resolve);
      })
      .catch((error) => console.log(error));
  };
  const handleSave = () => {
    navigation.navigate("Home", {});
  };

  return (
    <SafeAreaView style={styles.editContainer}>
      <View style={styles.publishNav}>
        <Button title="Save" onPress={handleSave} />
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
    height: 70,
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonEdit: {
    justifyContent: "center",
  },
});

export default EditScreen;
