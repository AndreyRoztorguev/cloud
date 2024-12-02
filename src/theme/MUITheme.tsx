import { createTheme, PaletteColorOptions } from "@mui/material";
import {} from "@mui/material/colors";

declare module "@mui/material/styles" {
  // interface Theme {
  //   shadow: {
  //     drop: ThemeOptions["shadow"];
  //   };
  // }
  //   interface ThemeOptions {
  //     shadows?: string[];
  //   }
  interface Palette {
    brand: Palette["primary"];
  }
  interface PaletteOptions {
    brand?: PaletteColorOptions;
  }

  interface TypeBackground {
    primary: PaletteColorOptions;
  }
  // interface SvgIconPropsColorOverrides extends Palette {}
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    brand: true;
  }
}

const muiTheme = createTheme({
  palette: {
    primary: { main: "hsl(235, 78%, 25%)" },
    text: { primary: "hsl(235, 14%, 53%)" },
    brand: { main: "hsl(217, 100%, 50%)" },
    // brand: { main: yellow[100], light: green["400"], dark: cyan[200] },
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(0, 0%, 100%)",
      primary: { main: "lightgreen" },
    },
  },
  typography: {
    fontFamily: "Lato",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "contained" },
              style({ theme }) {
                return {
                  ...theme.palette.Button,
                  backgroundColor: theme.palette.brand.main,
                };
              },
            },
          ],
        },
      },
    },
    MuiSvgIcon: {
      variants: [
        {
          props: { name: "logo" },
          style: ({ theme }) => ({
            color: theme.palette.common.black,
          }),
        },
        {
          props: { name: "nav-item" },
          style: ({ theme }) => ({
            color: theme.palette.primary.main,
          }),
        },
      ],
    },
    MuiPaper: {
      //   variants: [
      //     {
      //       props: { variant: "outlined" },
      //       style: ({ theme }) => ({ color: theme.palette.primary.main }),
      //     },
      //   ],
      defaultProps: {
        // variant: "outlined",
      },
      styleOverrides: {
        // root: ({ theme }) => ({
        //   boxShadow: theme.shadows[1],
        // }),
      },
    },
  },
});

muiTheme.shadows[1] = "0px 2px 30px 0px hsl(0 0% 0% / 60%)";
muiTheme.shadows[2] = "0px 4px 4px 0px hsl(0 0% 0% / 25%)";

export default muiTheme;
