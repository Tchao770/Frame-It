import React, { useRef } from "react";
import { Dimensions, Image } from "react-native";
import { Animated, PanResponder, StyleSheet } from "react-native";
import { View } from "react-native";
import { ImageObj } from "../types/data";

const MAX_WIDTH = Dimensions.get("window").width;
const MAX_HEIGHT = Dimensions.get("window").height;

export const ImageCropper = (image: ImageObj) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;
  return (
    <View style={styles.cropContainer}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
          zIndex: 100,
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.leftCrop}></View>
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
          zIndex: 100,
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.rightCrop}></View>
      </Animated.View>
      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{
            resizeMode: "contain",
            maxWidth: MAX_WIDTH,
            maxHeight: MAX_HEIGHT,
            flex: 1,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cropContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 255, 0.5)",
  },
  leftCrop: {
    backgroundColor: "black",
    height: 10,
    width: 20,
    zIndex: 100,
  },
  rightCrop: {
    backgroundColor: "white",
    height: 20,
    width: 10,
    zIndex: 100,
    right: 10,
  },
});
