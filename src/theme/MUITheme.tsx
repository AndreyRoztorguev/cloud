import { createTheme, PaletteColorOptions } from "@mui/material";

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
}

const muiTheme = createTheme({
  palette: {
    primary: { main: "hsl(235, 78%, 25%)" },
    text: { primary: "hsl(235, 14%, 53%)" },
    brand: { main: "hsl(217, 100%, 50%)" },
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(0, 0%, 100%)",
      primary: { main: "lightgreen" },
    },
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

export default muiTheme;
