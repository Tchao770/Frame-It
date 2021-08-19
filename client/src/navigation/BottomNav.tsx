import React from "react";
import { Button, StyleSheet, View } from "react-native";
import UploadButton from "../components/UploadButton";
import { ImageProp } from "../types/data";

const BottomNav = ({ image, setImage }: ImageProp) => {
  return (
    <View style={styles.navContainer}>
      <Button title="Home" onPress={() => console.log("Home")} />
    </View>
  );
};
const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    width: "100%",
    height: "10%",
    bottom: 0,
    backgroundColor: "#cfcfea",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomNav;
