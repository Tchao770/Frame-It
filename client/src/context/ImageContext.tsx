import React, { useState, createContext, useContext } from "react";
import { ImageObj, ImageProp } from "../types/data";

const imageCtxDefaultVal: ImageProp = {
  image: {
    uri: "",
    width: 0,
    height: 0,
    base64: "",
  },
  setImage: () => {},
};

export const ImageContext = createContext<ImageProp>(imageCtxDefaultVal);

export const useGlobalImageContext = () => useContext(ImageContext);

export const ImageProvider = (props: any) => {
  const [image, setImage] = useState(imageCtxDefaultVal.image);
  return (
    <ImageContext.Provider
      value={{
        image,
        setImage,
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};
