import React, { useRef } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import rescaleImage from "../logic/rescaleImage";
import { ImageObj } from "../types/data";

const EditScreen = (image: ImageObj) => {
  console.log(image);

  return (
    <SafeAreaView style={styles.editContainer}>
      <View style={styles.publishNav}>
        <Text>Confirm</Text>
      </View>
      <View style={styles.imageContainer}>
        {image && (
          <Image
            source={image.uri}
            style={{ height: image.height | 0, width: image.height | 0 }}
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
