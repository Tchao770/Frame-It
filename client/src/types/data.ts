import { Dispatch, SetStateAction } from "react";

interface ImageObj {
  uri: string;
  height: number;
  width: number;
  base64?: string;
}

interface ImageProp {
  image: ImageObj;
  setImage: Dispatch<SetStateAction<ImageObj>>;
}

type EditOptions = "rotate" | "crop" | "resize";

interface OptionParams {
  [index: number]: {
    rotate?: number;
    resize?: {
      width: number;
      height: number;
    };
    crop?: {
      originX: number;
      originY: number;
      width: number;
      height: number;
    };
  };
}

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export { ImageObj, ImageProp, Dispatcher, EditOptions, OptionParams };
