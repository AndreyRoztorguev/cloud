import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    brand: Palette["primary"];
  }
  interface PaletteOptions {
    brand?: PaletteColorOptions;
  }

  interface TypeBackground {
    primary: PaletteColorOptions;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    brand: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}
