import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { handleImageChange } from "../logic/handleImageChange";
import { ImageChangeProp, ImageObj } from "../types/data";

export const EditButton = ({ image, setImage, type }: ImageChangeProp) => {
  return (
    <TouchableOpacity
      onPress={() => handleImageChange({ image, setImage, type })}
      style={styles.editButton}
    >
      <Text style={styles.text}>{type}</Text>
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
