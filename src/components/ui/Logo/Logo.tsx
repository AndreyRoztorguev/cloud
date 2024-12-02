import { SvgIcon } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
// import LogoIcon from "@/icons/logo.svg?react";
import LogoIcon from "../../../assets/icons/logo.svg?react";

interface LogoPropsType {
  children?: ReactNode;
}

const Logo: FunctionComponent<LogoPropsType> = () => {
  return (
    <SvgIcon
      name="logo"
      sx={{
        width: "inherit",
        height: "auto",
      }}
      inheritViewBox
      component={LogoIcon}
    />
  );
};

export { Logo };
