import React, { useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ImageObj } from "../types/data";
import { EditButton } from "../components/EditButton";

const MAX_WIDTH = Dimensions.get("window").width;
const MAX_HEIGHT = Dimensions.get("window").height;

const EditScreen = ({ route, navigation }: any) => {
  const [image, setImage] = useState<ImageObj>(route.params.image);
  const handleSave = () => {
    navigation.navigate("Home", {
      adjustedImage: {
        uri: image.uri,
        height: image.height,
        width: image.width,
        base64: image.base64,
      },
    });
  };

  return (
    <SafeAreaView style={styles.editContainer}>
      <View style={styles.saveContainer}>
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.title}>Save</Text>
        </TouchableOpacity>
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
        <EditButton image={image} setImage={setImage} type={"Rotate"} />
        <EditButton image={image} setImage={setImage} type={"Flip"} />
        <EditButton image={image} setImage={setImage} type={"Crop"} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  editContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "gray",
    flexDirection: "column",
  },
  saveContainer: {
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 35,
    color: "white",
  },
  saveButton: {
    backgroundColor: "dodgerblue",
    padding: 10,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 5,
  },
  editOptions: {
    height: 100,
    backgroundColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonEdit: {
    justifyContent: "center",
  },
});

export default EditScreen;
