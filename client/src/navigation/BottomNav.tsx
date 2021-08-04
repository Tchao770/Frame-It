import React from "react";
import { StyleSheet, View } from "react-native";
import UploadButton from "../components/UploadButton";

interface Props {
  setImage: Function;
}

const BottomNav: React.FC<Props> = ({ setImage }) => {
  return (
    <View style={styles.navContainer}>
      <UploadButton setImage={setImage} />
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
