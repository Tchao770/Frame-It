import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FlipSvg(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 7a1 1 0 011 1v8a1 1 0 01-1 1h-3v2h3a3 3 0 003-3V8a3 3 0 00-3-3h-3v2h3z"
        fill="white"
        fillOpacity={0.5}
      />
      <Path
        d="M13 3h-2v18h2V3zM5 8a1 1 0 011-1h3V5H6a3 3 0 00-3 3v8a3 3 0 003 3h3v-2H6a1 1 0 01-1-1V8z"
        fill="white"
      />
    </Svg>
  );
}

export default FlipSvg;
