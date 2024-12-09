import { Box, BoxProps } from "@mui/material";
import { FunctionComponent } from "react";

interface ImageProps extends BoxProps<"img"> {
  // Add more props as needed...
  // width: number;
  // height: number;
  // //...
}

const Image: FunctionComponent<ImageProps> = (props) => {
  return <Box component="img" {...props} />;
};
export { Image };
