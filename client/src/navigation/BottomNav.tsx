import React from "react";
import { StyleSheet, View } from "react-native";

export default function BottomNav() {
  return <View style={styles.navContainer}></View>;
}
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
