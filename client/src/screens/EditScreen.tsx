import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ImageProp } from "../types/data";

const MAX_WIDTH = Dimensions.get("window").width;
const MAX_HEIGHT = Dimensions.get("window").height;

const EditScreen = ({ image }: ImageProp) => {
  return (
    <SafeAreaView style={styles.editContainer}>
      <View style={styles.publishNav}>
        <Text>Confirm</Text>
      </View>
      <View style={styles.imageContainer}>
        {image && (
          <Image
            source={image.uri ? { uri: image.uri } : null}
            style={{
              resizeMode: "contain",
              maxWidth: MAX_WIDTH,
              maxHeight: MAX_HEIGHT,
              flex: 1,
            }}
          />
        )}
      </View>
      <View style={styles.editOptions}></View>
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
  },
});

export default EditScreen;
