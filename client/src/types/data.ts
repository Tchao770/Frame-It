interface ImageObj {
  uri: string;
  height: string;
  width: string;
}

interface ImageProp {
  image?: ImageObj;
  setImage?(image: ImageProp): ImageProp;
}

export { ImageObj, ImageProp };
