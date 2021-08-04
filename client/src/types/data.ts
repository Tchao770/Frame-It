import { Dispatch, SetStateAction } from "react";

interface ImageObj {
  uri: string;
  height: number;
  width: number;
}

interface ImageProp {
  image?: ImageObj | undefined;
  setImage?: Dispatch<SetStateAction<ImageProp>>;
}

export { ImageObj, ImageProp };
