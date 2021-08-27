import React, { useRef, useState } from "react";
import { Dimensions, Image } from "react-native";
import { Animated, PanResponder, StyleSheet } from "react-native";
import { View } from "react-native";
import { ImageObj, ImageProp } from "../types/data";

const MAX_WIDTH = Dimensions.get("window").width;
const MAX_HEIGHT = Dimensions.get("window").height;

export const Cropper = ({ image }: ImageProp) => {
  const panLeft = useRef(new Animated.ValueXY()).current;
  const panRight = useRef(new Animated.ValueXY()).current;
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [tlPos, setTlPos] = useState({ x: 0, y: 0 });
  const [brPos, setBrPos] = useState({ x: 0, y: 0 });
  const getImagePositions = () => {
    if (imageRef.current && imageContainerRef.current) {
      imageRef.current?.measureLayout(
        imageContainerRef.current,
        (fx, fy, width, height) => {
          setTlPos({ x: 0, y: 0 });
          //setBrPos({ x: width, y: height - py });
          console.log("Component width is: " + width);
          console.log("Component height is: " + height);
          console.log("X offset to frame: " + fx);
          console.log("Y offset to frame: " + fy);
          // console.log("X offset to page: " + px);
          // console.log("Y offset to page: " + py);
        }
      );
    }
  };

  const panLeftResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        panLeft.setOffset({
          x: panLeft.x._value,
          y: panLeft.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: panLeft.x,
            dy: panLeft.y,
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        panLeft.flattenOffset();
      },
    })
  ).current;
  const panRightResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        panRight.setOffset({
          x: panRight.x._value,
          y: panRight.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: panRight.x,
            dy: panRight.y,
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        panRight.flattenOffset();
      },
    })
  ).current;

  return (
    <View style={styles.cropContainer}>
      <View style={styles.imageContainer} ref={imageContainerRef}>
        <Animated.View
          style={{
            ...styles.animatedLeft,
            transform: [{ translateX: panLeft.x }, { translateY: panLeft.y }],
            top: tlPos.y,
            left: tlPos.x,
          }}
          {...panLeftResponder.panHandlers}
        >
          <View style={styles.leftCrop}></View>
        </Animated.View>
        <Animated.View
          style={{
            ...styles.animatedRight,
            transform: [{ translateX: panRight.x }, { translateY: panRight.y }],
            top: brPos.y,
            left: brPos.x,
          }}
          {...panRightResponder.panHandlers}
        >
          <View style={styles.rightCrop}></View>
        </Animated.View>
        {image && (
          <Image
            ref={imageRef}
            onLayout={getImagePositions}
            source={{ uri: image.uri }}
            style={{
              resizeMode: "contain",
              width: MAX_WIDTH - 20,
              height: 400,
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cropContainer: {
    //backgroundColor: "rgba(0, 0, 255, 0.5)",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 400,
    height: 400,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 2,
  },
  animatedLeft: { zIndex: 100, position: "absolute" },
  animatedRight: { zIndex: 100, position: "absolute" },
  leftCrop: {
    backgroundColor: "yellow",
    height: 10,
    width: 20,
    zIndex: 100,
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 2,
    //position: "absolute",
  },
  rightCrop: {
    backgroundColor: "black",
    height: 20,
    width: 10,
    zIndex: 100,
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    //position: "absolute",
  },
});
