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
import { handleImageChange } from "../logic/handleImageChange";
import { EditButton } from "../components/EditButton";

const MAX_WIDTH = Dimensions.get("window").width;
const MAX_HEIGHT = Dimensions.get("window").height;

const EditScreen = ({ navigation, route }: any) => {
  const { image } = route.params;
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
        <EditButton image={image} title={"Rotate"} />
        <EditButton image={image} title={"Resize"} />
        <EditButton image={image} title={"Crop"} />
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
  publishNav: { flex: 1, backgroundColor: "pink" },
  imageContainer: {
    flex: 5,
  },
  editOptions: {
    height: 100,
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
