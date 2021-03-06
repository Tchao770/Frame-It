import { Dispatch, SetStateAction } from "react";

interface ImageObj {
  uri: string;
  height: number;
  width: number;
  base64?: string;
}

interface ImageProp {
  image: ImageObj;
  setImage?: Dispatch<SetStateAction<ImageObj>>;
}

interface ImageChangeProp extends ImageProp {
  type: string;
}

interface CropProp {
  image: ImageProp;
}

interface DeviceSizeProp {
  height: number;
  width: number;
  setDimensions?: Dispatch<SetStateAction<DeviceSizeProp>>;
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

export {
  ImageObj,
  ImageProp,
  Dispatcher,
  EditOptions,
  OptionParams,
  ImageChangeProp,
  CropProp,
  DeviceSizeProp,
};
