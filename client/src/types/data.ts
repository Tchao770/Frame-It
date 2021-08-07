import { Dispatch, SetStateAction } from "react";

interface ImageObj {
  uri: string;
  height: number;
  width: number;
  base64?: string | undefined;
}

interface ImageProp {
  image: ImageObj;
  setImage: Dispatch<SetStateAction<ImageObj>>;
}

type EditOptions = "rotate" | "crop" | "resize";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export { ImageObj, ImageProp, Dispatcher, EditOptions };
