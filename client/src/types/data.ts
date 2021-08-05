import { Dispatch, SetStateAction } from "react";

interface ImageObj {
  uri: string;
  height: number;
  width: number;
}

interface ImageProp {
  image: ImageObj;
  setImage: Dispatch<SetStateAction<ImageObj>>;
}

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export { ImageObj, ImageProp, Dispatcher };
