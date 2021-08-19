import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { handleImageChange } from "../logic/handleImageChange";
import { ImageObj } from "../types/data";

interface EditButtonProps {
  image: ImageObj;
  title: string;
}

export const EditButton = ({ image, title }: EditButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => handleImageChange(image, title)}
      style={styles.editButton}
    >
      <Text style={styles.text}>{title}</Text>
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
