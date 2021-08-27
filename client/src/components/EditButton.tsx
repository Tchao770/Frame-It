import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import CropSvg from "../assets/svgr/cropSvg";
import FlipSvg from "../assets/svgr/flipSvg";
import RotateSvg from "../assets/svgr/rotateSvg";
import { handleImageChange } from "../logic/handleImageChange";
import { ImageChangeProp, ImageObj } from "../types/data";

export const EditButton = ({ image, setImage, type }: ImageChangeProp) => {
  const navigation = useNavigation();
  const handleNavigation = (image?: ImageObj) => {
    navigation.navigate("Crop" as never, {
      image: image,
    });
  };

  const handleSVG = (type: string) => {
    switch (type) {
      case "Crop":
        return <CropSvg />;
      case "Rotate":
        return <RotateSvg />;
      case "Flip":
        return <FlipSvg />;
    }
  };
  return (
    <TouchableOpacity
      onPress={() =>
        type === "Crop"
          ? handleNavigation(image)
          : handleImageChange({ image, setImage, type })
      }
      style={styles.editButton}
    >
      {handleSVG(type)}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  editButton: {
    backgroundColor: "dodgerblue",
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
